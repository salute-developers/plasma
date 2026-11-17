import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';

import { generateIndex } from '../src/index/generateIndex.ts';
import { generateMcpData } from '../src/mcp/generateMcpData.ts';
import type { ResolvedMcpDataConfig } from '../src/config.ts';
import type { CategoryIndexItem, ComponentOutputFile, SimpleOutputFile } from '../src/mcp/schemas.ts';
import type { Site } from '../src/site.ts';

import { createConfig, createFixtureSite, readJson } from './helpers.ts';

function run(config: ResolvedMcpDataConfig): Site {
    const site = createFixtureSite();
    generateIndex(site, config);
    generateMcpData(site, config);

    return site;
}

describe('generateMcpData', () => {
    it('собирает паспорт компонента: summary, props, examples', () => {
        const site = run(createConfig());
        const button = readJson<ComponentOutputFile>(path.join(site.outputDir, 'components', 'Button.json'));

        assert.equal(button.package, 'fixture');
        // Слово Props в описании не должно обрезать summary и ломать разбор props.
        // Имя в начале — текущее поведение: index пишет `# Button `, затем ещё раз текст заголовка.
        assert.equal(button.summary, 'Button Кнопка запускает действие.');
        assert.deepEqual(button.api.props, [
            { name: 'text', type: 'string', required: false, default: '', description: 'Текст кнопки' },
            {
                name: 'view',
                type: '"default" | "accent"',
                required: true,
                default: 'default',
                description: 'Вид кнопки',
            },
        ]);
        assert.equal(button.examples.length, 1);
        assert.equal(button.examples[0].title, 'Базовая кнопка');
        assert.match(button.examples[0].snippet, /\(props\) =>/);
    });

    it('без extraComponentCategories страницы ai — обычный текст', () => {
        const site = run(createConfig());
        const answer = readJson<SimpleOutputFile & { api?: unknown }>(path.join(site.outputDir, 'ai', 'Answer.json'));
        const components = readJson<CategoryIndexItem[]>(path.join(site.outputDir, 'components', 'index.json'));

        assert.equal(answer.api, undefined);
        assert.deepEqual(
            components.map((item) => item.name),
            ['Button'],
        );
    });

    it('extraComponentCategories: паспорт с package категории и ссылка в components/index.json', () => {
        const site = run(createConfig({ extraComponentCategories: { ai: { package: 'fixture/ai' } } }));
        const answer = readJson<ComponentOutputFile>(path.join(site.outputDir, 'ai', 'Answer.json'));
        const components = readJson<CategoryIndexItem[]>(path.join(site.outputDir, 'components', 'index.json'));

        assert.equal(answer.package, 'fixture/ai');
        assert.equal(answer.api.props.length, 1);
        assert.deepEqual(
            components.map((item) => item.href),
            ['Button.json', '../ai/Answer.json'],
        );
        assert.ok(fs.existsSync(path.resolve(site.outputDir, 'components', components[1].href)));
    });

    it('берёт токены из .d.ts модуля tokens.entry и убирает fallback из var()', () => {
        const site = run(createConfig());
        const tokens = readJson<SimpleOutputFile>(path.join(site.outputDir, 'tokens', 'tokens.ts.json'));

        assert.equal(
            tokens.summary,
            '/** Основной фон */\n' +
                "export declare const surfaceSolidPrimary = 'var(--surface-solid-primary)';\n" +
                '/** Основной цвет текста */\n' +
                "export declare const textPrimary = 'var(--text-primary)';\n",
        );
    });

    it('без tokens категория tokens не создаётся', () => {
        const site = run(createConfig({ tokens: undefined }));

        assert.equal(fs.existsSync(path.join(site.outputDir, 'tokens')), false);
    });

    it('падает, если модуль токенов не найден, и не трогает прошлый результат', () => {
        const site = run(createConfig());
        const manifestPath = path.join(site.outputDir, 'manifest.json');
        const before = fs.readFileSync(manifestPath, 'utf8');

        assert.throws(
            () => generateMcpData(site, createConfig({ tokens: { entry: './theme/missing' } })),
            /Не найден модуль токенов "\.\/theme\/missing"/,
        );
        assert.equal(fs.readFileSync(manifestPath, 'utf8'), before);
    });

    it('падает, если у модуля токенов нет объявлений', () => {
        const site = createFixtureSite();
        generateIndex(site, createConfig());

        // В `fixtures/site/vertical/theme/empty/index.d.ts` нет ни одного `export declare const`.
        assert.throws(
            () => generateMcpData(site, createConfig({ tokens: { entry: './theme/empty' } })),
            /нет объявлений токенов/,
        );
    });

    it('пишет manifest: версия вертикали, tools в порядке конфига, пути категорий', () => {
        const config = createConfig({ tools: ['get_component', 'list_components', 'get_tokens'] });
        const site = run(config);
        const manifest = readJson<{ version: string; tools: string[]; paths: Record<string, string> }>(
            path.join(site.outputDir, 'manifest.json'),
        );

        assert.equal(manifest.version, '1.2.3');
        assert.deepEqual(manifest.tools, ['get_component', 'list_components', 'get_tokens']);
        assert.deepEqual(Object.keys(manifest.paths).sort(), ['FAQ', 'ai', 'components', 'intro', 'tokens']);
        Object.values(manifest.paths).forEach((relativePath) => {
            assert.ok(fs.existsSync(path.join(site.outputDir, relativePath)), relativePath);
        });
    });

    it('пересоздаёт mcpData с нуля', () => {
        const config = createConfig();
        const site = run(config);
        const stale = path.join(site.outputDir, 'stale.json');
        fs.writeFileSync(stale, '{}');

        generateMcpData(site, config);

        assert.equal(fs.existsSync(stale), false);
    });
});
