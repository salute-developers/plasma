import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeManifest } from '../src/routeManifest.js';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const routes = new Set(routeManifest.map(({ route }) => route));
const problems = [];

for (const { route, title } of routeManifest) {
    const file = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html');
    if (!existsSync(file)) { problems.push(`Missing HTML: ${route}`); continue; }
    const html = readFileSync(file, 'utf8');
    if (!html.includes(`<title>${title.replaceAll('&', '&amp;')}</title>`)) problems.push(`Wrong title: ${route}`);
    if (!/<h[1-6][\s>]/.test(html)) problems.push(`Missing heading: ${route}`);
    for (const [, raw] of html.matchAll(/(?:href|src|poster|data-src)="(\/[^"]*)"/g)) {
        if (raw.startsWith('//')) continue;
        const target = raw.split(/[?#]/, 1)[0];
        if (routes.has(target) || existsSync(join(dist, target.slice(1)))) continue;
        problems.push(`Unresolved ${raw} on ${route}`);
    }
}

if (problems.length) {
    console.error(problems.join('\n'));
    process.exitCode = 1;
} else {
    console.log(`Checked ${routeManifest.length} pages and their internal links`);
}
