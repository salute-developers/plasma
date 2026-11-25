import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { installedPackageVersion } from '../scripts/package.mjs';
import { PREVIEW_MESSAGE_TYPES } from '../src/protocol';
import { registry } from '../src/registry';

const manifest = JSON.parse(readFileSync(resolve(process.cwd(), 'public/preview-plugin.json'), 'utf8'));

describe('preview-plugin.json', () => {
    it('объявляет платформу web, протокол v1, точку входа и сообщения sdds.preview.*', () => {
        expect(manifest).toMatchObject({
            schemaVersion: 1,
            platform: 'web',
            protocolVersion: 1,
            entrypoint: 'index.html',
            payloadBridge: {
                readyMessageType: PREVIEW_MESSAGE_TYPES.ready,
                payloadMessageType: PREVIEW_MESSAGE_TYPES.payload,
                resultMessageType: PREVIEW_MESSAGE_TYPES.result,
                describeMessageType: PREVIEW_MESSAGE_TYPES.describe,
                descriptionMessageType: PREVIEW_MESSAGE_TYPES.description,
            },
        });
    });

    it('версию ядра и хеш меты дописывает упаковка; мета построена из установленного ядра', () => {
        // Мету строит `npm run generate` из установленного plasma-new-hope; `plasmaNewHopeVersion` и `apiMetaSha256`
        // пишет `npm run package` в dist, иначе каждый выпуск ядра требовал бы правки манифеста.
        const meta = JSON.parse(readFileSync(resolve(process.cwd(), 'public/api-meta.json'), 'utf8'));
        expect(manifest).not.toHaveProperty('apiMetaSha256');
        expect(manifest).not.toHaveProperty('plasmaNewHopeVersion');
        expect(installedPackageVersion('@salutejs/plasma-new-hope', process.cwd())).toMatch(/^\d+\.\d+\.\d+/);
        const components = meta.map((entry: { componentName: string }) => entry.componentName);
        expect(components).toEqual(expect.arrayContaining(manifest.components));
    });

    it('перечисляет ровно компоненты реестра в том же порядке', () => {
        expect(manifest.components).toEqual(Object.keys(registry));
    });

    it('все компоненты реестра есть в api-meta.json', () => {
        const meta = JSON.parse(readFileSync(resolve(process.cwd(), 'public/api-meta.json'), 'utf8'));
        const metaComponents = new Set(meta.map((entry: { componentName: string }) => entry.componentName));
        expect(Object.keys(registry).filter((name) => !metaComponents.has(name))).toEqual([]);
    });
});
