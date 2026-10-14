import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { routeManifest } from '../src/routeManifest.ts';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const basePath = process.env.LANDING_BASE_PATH || '/';
const routes = new Set(routeManifest.map(({ route }) => route));
const problems = [];

routeManifest.forEach(({ route, title }) => {
    const file = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html');
    if (!existsSync(file)) {
        problems.push(`Missing HTML: ${route}`);
        return;
    }
    const html = readFileSync(file, 'utf8');
    if (!html.includes(`<title>${title.replaceAll('&', '&amp;')}</title>`)) problems.push(`Wrong title: ${route}`);
    if (!/<h[1-6][\s>]/.test(html)) problems.push(`Missing heading: ${route}`);
    Array.from(html.matchAll(/(?:href|src|poster|data-src)="(\/[^"]*)"/g)).forEach(([, raw]) => {
        if (raw.startsWith('//')) return;
        const target = raw.split(/[?#]/, 1)[0];
        if (!target.startsWith(basePath)) {
            problems.push(`Outside build base: ${raw} on ${route}`);
            return;
        }
        const localTarget = `/${target.slice(basePath.length)}`;
        if (routes.has(localTarget) || existsSync(join(dist, localTarget.slice(1)))) return;
        problems.push(`Unresolved ${raw} on ${route}`);
    });
});

if (problems.length) {
    console.error(problems.join('\n'));
    process.exitCode = 1;
} else {
    console.log(`Checked ${routeManifest.length} pages and their internal links`);
}
