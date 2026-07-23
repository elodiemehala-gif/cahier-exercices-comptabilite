package fr.elodie.comptabilite;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Locale;

public class MainActivity extends Activity {
    private static final int REQUEST_AUDIO_PERMISSION = 4101;
    private static final int REQUEST_SPEECH = 4102;

    private WebView webView;
    private String pendingSpeechId;
    private String pendingLanguage = "fr-FR";

    @SuppressLint({"SetJavaScriptEnabled", "JavascriptInterface"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().setStatusBarColor(Color.parseColor("#07111F"));
        getWindow().setNavigationBarColor(Color.parseColor("#07111F"));

        webView = new WebView(this);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setTextZoom(100);

        webView.addJavascriptInterface(new SpeechBridge(), "AndroidSpeech");
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                injectNativeSupport();
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                return !url.startsWith("file:///android_asset/www/");
            }
        });

        setContentView(webView);
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    private void injectNativeSupport() {
        String script = "(function(){"
                + "document.documentElement.classList.add('installed-app');"
                + "var install=document.getElementById('installBtn');if(install)install.hidden=true;"
                + "if(!window.SpeechRecognition&&!window.webkitSpeechRecognition&&window.AndroidSpeech){"
                + "var sequence=0;window.__androidSpeechInstances={};"
                + "function NativeRecognition(){this.lang='fr-FR';this.continuous=false;this.interimResults=false;this.onstart=null;this.onresult=null;this.onerror=null;this.onend=null;this.__id='speech-'+(++sequence);window.__androidSpeechInstances[this.__id]=this;}"
                + "NativeRecognition.prototype.start=function(){AndroidSpeech.start(this.__id,this.lang||'fr-FR');};"
                + "NativeRecognition.prototype.stop=function(){AndroidSpeech.stop(this.__id);};"
                + "NativeRecognition.prototype.abort=NativeRecognition.prototype.stop;"
                + "NativeRecognition.prototype.__start=function(){if(typeof this.onstart==='function')this.onstart({});};"
                + "NativeRecognition.prototype.__result=function(text,isFinal){var first=[{transcript:text,confidence:1}];first.isFinal=!!isFinal;var results=[first];if(typeof this.onresult==='function')this.onresult({results:results,resultIndex:0});};"
                + "NativeRecognition.prototype.__error=function(code){if(typeof this.onerror==='function')this.onerror({error:code});};"
                + "NativeRecognition.prototype.__end=function(){if(typeof this.onend==='function')this.onend({});};"
                + "window.webkitSpeechRecognition=NativeRecognition;window.SpeechRecognition=NativeRecognition;"
                + "}"
                + "})();";
        webView.evaluateJavascript(script, null);
    }

    private void launchSpeechRecognition() {
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, pendingLanguage);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, pendingLanguage);
        intent.putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, true);
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Dicte ta réponse");
        try {
            sendSpeechStart();
            startActivityForResult(intent, REQUEST_SPEECH);
        } catch (ActivityNotFoundException error) {
            sendSpeechError("no_speech");
            sendSpeechEnd();
        }
    }

    private void sendSpeechStart() {
        callSpeechMethod("__start", "");
    }

    private void sendSpeechResult(String text) {
        callSpeechMethod("__result", JSONObject.quote(text) + ",true");
    }

    private void sendSpeechError(String code) {
        callSpeechMethod("__error", JSONObject.quote(code));
    }

    private void sendSpeechEnd() {
        callSpeechMethod("__end", "");
    }

    private void callSpeechMethod(String method, String arguments) {
        if (pendingSpeechId == null || webView == null) return;
        String id = JSONObject.quote(pendingSpeechId);
        String call = "(function(){var item=window.__androidSpeechInstances&&window.__androidSpeechInstances[" + id + "];"
                + "if(item&&typeof item." + method + "==='function')item." + method + "(" + arguments + ");})();";
        webView.evaluateJavascript(call, null);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode != REQUEST_SPEECH) return;

        if (resultCode == RESULT_OK && data != null) {
            ArrayList<String> results = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            if (results != null && !results.isEmpty()) {
                sendSpeechResult(results.get(0));
            } else {
                sendSpeechError("no_speech");
            }
        } else {
            sendSpeechError("no_speech");
        }
        sendSpeechEnd();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode != REQUEST_AUDIO_PERMISSION) return;
        if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            launchSpeechRecognition();
        } else {
            sendSpeechError("not_allowed");
            sendSpeechEnd();
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.removeJavascriptInterface("AndroidSpeech");
            webView.destroy();
        }
        super.onDestroy();
    }

    private class SpeechBridge {
        @JavascriptInterface
        public void start(String id, String language) {
            runOnUiThread(() -> {
                pendingSpeechId = id;
                pendingLanguage = language == null || language.isEmpty() ? Locale.FRANCE.toLanguageTag() : language;
                if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED) {
                    launchSpeechRecognition();
                } else {
                    requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQUEST_AUDIO_PERMISSION);
                }
            });
        }

        @JavascriptInterface
        public void stop(String id) {
            runOnUiThread(() -> {
                if (id != null) pendingSpeechId = id;
            });
        }
    }
}
