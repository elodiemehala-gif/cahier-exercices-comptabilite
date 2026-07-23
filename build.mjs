import { mkdir, copyFile, readdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
const required = ['index.html', 'styles.css', 'table-templates.css', 'journal-grid.css', 'table-pills.js', 'journal-grid.js', 'app.js', 'data.js', 'theme1.js', 'theme2.js', 'theme3.js', 'theme4.js', 'theme5.js', 'theme6.js', 'theme7.js', 'theme8.js', 'theme9.js', 'theme10.js', 'theme11.js', 'theme12.js', 'theme13.js', 'theme14.js', 'theme15.js', 'theme16.js', 'theme17.js', 'theme18.js', 'theme19.js', 'manifest.webmanifest', 'sw.js'];
for (const file of required) {
  try {
    await copyFile(file, `dist/${file}`);
  } catch (error) {
    if (file !== 'sw.js') throw error;
  }
}
try {
  const icons = await readdir('icons');
  await mkdir('dist/icons', { recursive: true });
  for (const icon of icons) await copyFile(`icons/${icon}`, `dist/icons/${icon}`);
} catch {}
console.log('Application copiée dans dist/');