import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { KNOWN_TOOLS, parseConfig } from '../src/config.ts';
import { generateMdxLink } from '../src/index/generateMdxLink.ts';
import { extractProps } from '../src/mcp/props.ts';
import { stripCssVarFallbacks, uniqueFileName } from '../src/mcp/text.ts';
import { formatPropsMarker, PROPS_MARKER_REGEX } from '../src/propsMarker.ts';

import { BASE_CONFIG } from './helpers.ts';

describe('config', () => {
    it('подставляет значения по умолчанию', () => {
        const config = parseConfig(BASE_CONFIG, 'test');

        assert.deepEqual(config.exclude, []);
        assert.deepEqual(config.extraComponentCategories, {});
    });

    it('принимает qdrantConfig как есть', () => {
        const qdrantConfig = { collectionName: 'plasma-docs', payloadSchema: ['metadata.productId'] };

        assert.deepEqual(parseConfig({ ...BASE_CONFIG, qdrantConfig }, 'test').qdrantConfig, qdrantConfig);
    });

    it('принимает все известные tools', () => {
        assert.deepEqual(parseConfig({ ...BASE_CONFIG, tools: [...KNOWN_TOOLS] }, 'test').tools, [...KNOWN_TOOLS]);
    });

    it('get_tokens без tokens.entry — ошибка', () => {
        const { tokens, ...withoutTokens } = BASE_CONFIG;

        assert.ok(tokens);
        assert.throws(
            () => parseConfig({ ...withoutTokens, tools: ['get_tokens'] }, 'test'),
            /get_tokens требует tokens\.entry/,
        );
        assert.doesNotThrow(() => parseConfig(withoutTokens, 'test'));
    });

    it('отклоняет неизвестный tool', () => {
        assert.throws(() => parseConfig({ ...BASE_CONFIG, tools: ['get_unknown'] }, 'test'), /tools/);
    });

    it('отклоняет дубликаты tools', () => {
        assert.throws(
            () => parseConfig({ ...BASE_CONFIG, tools: ['get_component', 'get_component'] }, 'test'),
            /дубликаты/,
        );
    });

    it('отклоняет лишний ключ', () => {
        assert.throws(() => parseConfig({ ...BASE_CONFIG, productId: 'fixture' }, 'test'), /productId/);
    });

    it('требует tools и baseUrl', () => {
        assert.throws(() => parseConfig({ baseUrl: BASE_CONFIG.baseUrl }, 'test'), /tools/);
        assert.throws(() => parseConfig({ tools: BASE_CONFIG.tools }, 'test'), /baseUrl/);
    });
});

describe('generateMdxLink', () => {
    it('заменяет имя файла на id и добавляет слеш', () => {
        assert.equal(
            generateMdxLink(
                '/site/docs/components/data-entry/Button.mdx',
                '/site/docs',
                'button',
                'https://x.test/web',
            ),
            'https://x.test/web/components/data-entry/button/',
        );
    });

    it('intro ведёт на baseUrl', () => {
        assert.equal(
            generateMdxLink('/site/docs/intro.mdx', '/site/docs', 'intro', 'https://x.test/web/'),
            'https://x.test/web/',
        );
    });

    it('файл вне docs возвращается как есть', () => {
        assert.equal(
            generateMdxLink('/other/Button.mdx', '/site/docs', 'button', 'https://x.test/'),
            '/other/Button.mdx',
        );
    });
});

describe('props marker', () => {
    it('маркер, который пишет index, находится при разборе props', () => {
        const content = `Описание. ${formatPropsMarker(
            'Button',
        )} [{"name":"text","type":{"name":"string"}}] ## Примеры`;

        assert.ok(PROPS_MARKER_REGEX.test(content));
        assert.deepEqual(extractProps(content), [
            { name: 'text', type: 'string', required: false, default: '', description: '' },
        ]);
    });

    it('слово props в коде не принимается за таблицу', () => {
        assert.deepEqual(extractProps('```tsx\nconst App = (props) => [props];\n```'), []);
    });
});

describe('text helpers', () => {
    it('stripCssVarFallbacks учитывает вложенные скобки', () => {
        assert.equal(stripCssVarFallbacks('color: var(--a, rgba(0, 0, 0, 0.5));'), 'color: var(--a);');
        assert.equal(stripCssVarFallbacks('var(--b)'), 'var(--b)');
    });

    it('uniqueFileName добавляет суффикс к повторам', () => {
        const used = new Set<string>();

        assert.deepEqual(
            [uniqueFileName('Button', used), uniqueFileName('Button', used), uniqueFileName('a/b', used)],
            ['Button', 'Button-2', 'a_b'],
        );
    });
});
