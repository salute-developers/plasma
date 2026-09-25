import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { routeManifest } from '../src/routeManifest.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const required = ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_ENDPOINT', 'AWS_REGION', 'AWS_S3_BUCKET_2'];
for (const name of required) if (!process.env[name]) throw new Error(`${name} is required`);
const base = `s3://${process.env.AWS_S3_BUCKET_2}/sdds.sberdevices.ru/`;
const common = [
    '--access_key',
    process.env.AWS_ACCESS_KEY_ID,
    '--secret_key',
    process.env.AWS_SECRET_ACCESS_KEY,
    '--host',
    process.env.AWS_ENDPOINT,
    '--host-bucket',
    process.env.AWS_ENDPOINT,
    '--bucket-location',
    process.env.AWS_REGION,
    '--signature-v2',
    '--no-mime-magic',
];

function s3cmd(...args) {
    const result = spawnSync('s3cmd', [...common, ...args], { stdio: 'inherit' });
    if (result.status !== 0) throw new Error(`s3cmd ${args[0]} failed`);
}

for (const { route } of routeManifest) {
    const path = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html');
    if (!existsSync(path)) throw new Error(`Missing pre-rendered page: ${route}`);
}

// Remove objects that are absent from the new build, including old .html URLs.
// Extensionless route objects are restored below with an explicit HTML MIME type.
s3cmd('--delete-removed', 'sync', `${dist}/`, base);

// Nginx forwards /news to the exact object key sdds.sberdevices.ru/news.
// Upload every pre-rendered HTML document under that key, with an explicit MIME type.
for (const { route } of routeManifest) {
    const path = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html');
    const key = route === '/' ? 'index.html' : route.slice(1);
    s3cmd('--mime-type=text/html; charset=utf-8', '--add-header=Cache-Control:no-cache', 'put', path, base + key);
    console.log(`Published ${route}`);
}
