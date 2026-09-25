import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeManifest } from '../src/routeManifest.js';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const routes = new Set(routeManifest.map(({ route }) => route));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm' };
const port = Number(process.env.PORT || 4200);

createServer(async (request, response) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname); }
    catch { response.writeHead(400).end(); return; }
    const relative = routes.has(pathname) ? (pathname === '/' ? 'index.html' : `${pathname.slice(1)}/index.html`) : pathname.slice(1);
    const safe = normalize(relative).replace(/^([/\\]|\.\.(?:[/\\]|$))+/, '');
    if (safe !== relative || !safe) { response.writeHead(404).end(); return; }
    const filename = join(root, safe);
    try {
        const info = await stat(filename);
        if (!info.isFile()) { response.writeHead(404).end(); return; }
        const extension = filename.slice(filename.lastIndexOf('.'));
        const headers = { 'Content-Type': types[extension] || 'application/octet-stream', 'Accept-Ranges': 'bytes' };
        const range = /^bytes=(\d+)-(\d*)$/.exec(request.headers.range || '');
        if (range) {
            const start = Number(range[1]);
            const end = range[2] ? Math.min(Number(range[2]), info.size - 1) : info.size - 1;
            if (start >= info.size || end < start) { response.writeHead(416, { 'Content-Range': `bytes */${info.size}` }).end(); return; }
            response.writeHead(206, { ...headers, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${info.size}` });
            if (request.method === 'HEAD') response.end();
            else createReadStream(filename, { start, end }).pipe(response);
            return;
        }
        response.writeHead(200, { ...headers, 'Content-Length': info.size });
        if (request.method === 'HEAD') response.end();
        else createReadStream(filename).pipe(response);
    } catch { response.writeHead(404).end(); }
}).listen(port, '127.0.0.1', () => console.log(`Landing preview: http://127.0.0.1:${port}/`));
