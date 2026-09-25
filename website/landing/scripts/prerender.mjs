import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { routeManifest } from '../src/routeManifest.js';
import { render } from '../.ssr/server.js';

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
for (const entry of routeManifest) {
    const title = entry.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
    const description = entry.description.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
    const html = template
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title><meta name="description" content="${description}" />`)
        .replace('</head>', `${entry.name === 'doc-actions-button' ? '<link rel="stylesheet" href="/sandbox.css" data-sandbox-style />' : ''}</head>`)
        .replace('<div id="root"></div>', `<div id="root">${render(entry.route)}</div>`);
    const output = entry.route === '/' ? 'dist/index.html' : join('dist', entry.route.slice(1), 'index.html');
    await mkdir(join(output, '..'), { recursive: true });
    await writeFile(output, html);
}
console.log(`Pre-rendered ${routeManifest.length} routes`);
