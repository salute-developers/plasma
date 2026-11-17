import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { generateIndex } from '../src/index/generateIndex.ts';
import type { IndexItem } from '../src/index/generateIndex.ts';
import { PROPS_MARKER_REGEX } from '../src/propsMarker.ts';

import { createConfig, createFixtureSite, readJson } from './helpers.ts';

function runIndex(): IndexItem[] {
    const site = createFixtureSite();
    generateIndex(site, createConfig());

    return readJson<IndexItem[]>(site.indexJsonPath);
}

function byName(items: IndexItem[], name: string): IndexItem {
    const item = items.find((entry) => entry.metadata.heading.text === name);
    assert.ok(item, `нет страницы ${name}`);

    return item;
}

describe('generateIndex', () => {
    it('пропускает файлы и папки с префиксом `_`', () => {
        const names = runIndex()
            .map((item) => item.metadata.heading.text)
            .sort();

        assert.deepEqual(names, ['Answer', 'Button', 'faq', 'intro']);
    });

    it('добавляет содержимое импортированного partial в страницу', () => {
        const button = byName(runIndex(), 'Button');

        assert.match(button.pageContent, /Текст из импортированного partial\./);
    });

    it('категория — первый сегмент пути, для файла в корне docs — имя файла', () => {
        const items = runIndex();

        assert.equal(byName(items, 'Button').metadata.category, 'components');
        assert.equal(byName(items, 'Answer').metadata.category, 'ai');
        assert.equal(byName(items, 'faq').metadata.category, 'FAQ');
        assert.equal(byName(items, 'intro').metadata.category, 'intro');
    });

    it('строит URL страниц, intro ведёт на baseUrl', () => {
        const items = runIndex();

        assert.equal(
            byName(items, 'Button').metadata.source.url,
            'https://example.test/fixture/components/data-entry/button/',
        );
        assert.equal(byName(items, 'intro').metadata.source.url, 'https://example.test/fixture/');
    });

    it('productId — имя вертикали', () => {
        assert.ok(runIndex().every((item) => item.metadata.productId === 'fixture'));
    });

    it('заменяет PropsTable маркером с отфильтрованными props', () => {
        const { pageContent } = byName(runIndex(), 'Button');
        const match = PROPS_MARKER_REGEX.exec(pageContent);

        assert.ok(match);

        // Формат: `<маркер> <JSON> `; в JSON фикстуры нет последовательности `] `.
        const rest = pageContent.slice(match.index + match[0].length + 1);
        const props = JSON.parse(rest.slice(0, rest.indexOf('] ') + 1)) as Array<Record<string, unknown>>;

        // size — из exclude, title — из @types/react, ref — исключается по умолчанию.
        assert.deepEqual(
            props.map((prop) => prop.name),
            ['text', 'view'],
        );
        assert.deepEqual(props[1], {
            name: 'view',
            type: { name: 'enum', raw: '"default" | "accent"' },
            required: true,
            defaultValue: { value: 'default' },
            description: 'Вид кнопки',
        });
    });

    it('падает, если сайт не собран и docgen-данных нет', () => {
        const site = { ...createFixtureSite(), docgenDir: '/nonexistent/docgen' };

        assert.throws(() => generateIndex(site, createConfig()), /Нет docgen-данных/);
    });
});
