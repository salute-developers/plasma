import { createHash } from 'node:crypto';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import JSZip from 'jszip';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import {
    PROVENANCE_END,
    PROVENANCE_START,
    enrichManifest,
    formatProvenance,
    validateWebManifest,
    zipDirectory,
} from '../scripts/package.mjs';

const COMMIT = '0123456789abcdef0123456789abcdef01234567';
const CORE_VERSION = '0.391.0-dev.0';
const sha256 = (bytes: Uint8Array) => createHash('sha256').update(bytes).digest('hex');

/** `dist` как после `vite build`: manifest и мета из `public`, точка входа и бандл. */
const createDist = (root: string) => {
    const dist = join(root, 'dist');
    mkdirSync(join(dist, 'assets'), { recursive: true });
    cpSync(resolve(process.cwd(), 'public/preview-plugin.json'), join(dist, 'preview-plugin.json'));
    cpSync(resolve(process.cwd(), 'public/api-meta.json'), join(dist, 'api-meta.json'));
    writeFileSync(join(dist, 'index.html'), '<!doctype html><script type="module" src="./assets/index.js"></script>');
    writeFileSync(join(dist, 'assets/index.js'), 'console.log("plugin");');
    return dist;
};

const readArchive = async (bytes: Uint8Array) => {
    const zip = await JSZip.loadAsync(bytes);
    const files = new Map<string, Uint8Array>();
    const entries = Object.values(zip.files).filter((entry) => !entry.dir);
    const contents = await Promise.all(entries.map((entry) => entry.async('uint8array')));
    entries.forEach((entry, index) => files.set(entry.name, contents[index]));
    return { zip, files };
};

describe('упаковка web-плагина', () => {
    let root: string;

    beforeEach(() => {
        root = mkdtempSync(join(tmpdir(), 'preview-web-plugin-package-'));
    });
    afterEach(() => {
        rmSync(root, { recursive: true, force: true });
    });

    it('manifest архива проходит правила ds-service для web', async () => {
        const dist = createDist(root);
        enrichManifest(dist, COMMIT, CORE_VERSION);

        const { zip, files } = await readArchive(await zipDirectory(dist));
        const manifest = JSON.parse(new TextDecoder().decode(files.get('preview-plugin.json')));

        // Правила `PluginManifestParser` ds-service для платформы web.
        expect(manifest.schemaVersion).toBe(1);
        expect(manifest.platform).toBe('web');
        expect(Number.isInteger(manifest.protocolVersion) && manifest.protocolVersion >= 1).toBe(true);
        expect(manifest.commit).toMatch(/^[0-9a-f]{12,40}$/);
        expect(manifest.commit).toBe(COMMIT);
        expect(manifest.version).toBe(COMMIT.slice(0, 12));
        expect(manifest.plasmaNewHopeVersion).toBe(CORE_VERSION);
        expect(manifest.apiMetaSha256).toMatch(/^[0-9a-f]{64}$/);
        expect(manifest.apiMetaSha256).toBe(sha256(files.get('api-meta.json')!));
        expect(files.has(manifest.entrypoint)).toBe(true);
        for (const required of ['index.html', 'preview-plugin.json', 'api-meta.json']) {
            expect(files.has(required)).toBe(true);
        }
        expect(validateWebManifest(manifest, files)).toEqual([]);

        // Пути относительно `dist`: без общего корня и без записей каталогов.
        expect(Object.keys(zip.files).sort()).toEqual([
            'api-meta.json',
            'assets/index.js',
            'index.html',
            'preview-plugin.json',
        ]);
    });

    it('сохраняет поля manifest из сборки, дописывает версию ядра и не трогает public', () => {
        const dist = createDist(root);
        const publicManifest = readFileSync(resolve(process.cwd(), 'public/preview-plugin.json'), 'utf8');
        const source = JSON.parse(publicManifest);

        const manifest = enrichManifest(dist, COMMIT, CORE_VERSION);

        expect(manifest).toMatchObject({
            id: source.id,
            plasmaNewHopeVersion: CORE_VERSION,
            components: source.components,
        });
        expect(JSON.parse(readFileSync(join(dist, 'preview-plugin.json'), 'utf8'))).toEqual(manifest);
        expect(readFileSync(resolve(process.cwd(), 'public/preview-plugin.json'), 'utf8')).toBe(publicManifest);
    });

    it('одинаковый dist даёт одинаковый архив', async () => {
        const dist = createDist(root);
        enrichManifest(dist, COMMIT, CORE_VERSION);

        expect(sha256(await zipDirectory(dist))).toBe(sha256(await zipDirectory(dist)));
    });

    it('не принимает commit, который не является sha', () => {
        const dist = createDist(root);

        expect(() => enrichManifest(dist, 'HEAD', CORE_VERSION)).toThrow(/commit/);
    });

    it('находит нарушения, которые отклонит ds-service', () => {
        const dist = createDist(root);
        const manifest = enrichManifest(dist, COMMIT, CORE_VERSION);
        const files = new Map<string, Uint8Array>([
            ['index.html', new Uint8Array()],
            ['preview-plugin.json', new Uint8Array()],
            ['api-meta.json', new TextEncoder().encode('[]')],
        ]);

        expect(
            validateWebManifest(
                {
                    ...manifest,
                    platform: 'compose',
                    version: 'abc',
                    plasmaNewHopeVersion: undefined,
                    entrypoint: 'missing.html',
                },
                files,
            ),
        ).toEqual([
            'platform должна быть web',
            'version должна равняться первым 12 символам commit',
            'plasmaNewHopeVersion должна быть семантической версией',
            'sha256 файла api-meta.json не совпадает с apiMetaSha256',
            'файл entrypoint missing.html отсутствует в архиве',
        ]);
    });
});

describe('блок происхождения web-архива', () => {
    const manifest = {
        version: COMMIT.slice(0, 12),
        commit: COMMIT,
        plasmaNewHopeVersion: '0.386.0',
        protocolVersion: 1,
        apiMetaSha256: 'a'.repeat(64),
    };

    it('печатается целиком, с метками для local-dev/README.md DS Builder', () => {
        const block = formatProvenance({ manifest, archiveSha256: 'b'.repeat(64), dirty: false });

        expect(block.startsWith(`${PROVENANCE_START}\n- Web plugin archive: build \`0123456789ab\``)).toBe(true);
        expect(block.endsWith(PROVENANCE_END)).toBe(true);
        expect(block).toContain('packages/sdds-preview-web-plugin');
        expect(block).not.toContain('uncommitted changes');
    });

    it('помечает архив с незакоммиченными правками', () => {
        const dirty = formatProvenance({ manifest, archiveSha256: 'w', dirty: true });

        expect(dirty).toContain('uncommitted changes');
    });
});
