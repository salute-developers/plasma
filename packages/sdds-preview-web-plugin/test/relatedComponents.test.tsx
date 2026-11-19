import { buttonConfig, lineSkeletonConfig, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { getCoreConfig } from '../src/cssVariables';
import { parseWebPayload } from '../src/payload';
import type { ResolvedRelatedComponent, WebPreviewRequest } from '../src/protocol';
import { buildRelatedComponents, registry } from '../src/registry';
import { PreviewSurface, surfaceStyle } from '../src/render';

/** Запрос по payload общего формата: компонент, его свойства и `styles` связанных компонентов. */
const request = (componentId: string, patch: Record<string, unknown> = {}): WebPreviewRequest => {
    const parsed = parseWebPayload({
        protocolVersion: 1,
        requestId: 'r-1',
        platform: 'WEB',
        theme: {},
        component: { id: componentId, variations: {}, properties: {} },
        example: { id: registry[componentId].stories[0].name, props: {} },
        ...patch,
    });
    if (!parsed.ok) throw new Error(`${parsed.message} at ${parsed.path}`);
    return parsed.request;
};

const literal = (value: string | number) => ({ base: { type: 'literal', value } });

/** Все стили `Button` в `styles`, как их кладёт ассемблер для зависимостей компонента. */
const buttonStyles = {
    'Button/view/default': {
        component: 'Button',
        variation: 'view',
        name: 'default',
        default: true,
        properties: {
            backgroundColor: {
                base: { type: 'literal', value: '#111111FF' },
                states: [{ when: ['hovered'], source: { type: 'literal', value: '#222222FF' } }],
            },
        },
    },
    'Button/view/secondary': {
        component: 'Button',
        variation: 'view',
        name: 'secondary',
        properties: { backgroundColor: literal('#333333FF') },
    },
    'Button/size/m': {
        component: 'Button',
        variation: 'size',
        name: 'm',
        default: true,
        properties: { height: literal(48) },
    },
    'Button/invariants': {
        component: 'Button',
        invariant: true,
        properties: { labelStyle: { base: { type: 'tokenRef', tokenId: 'body.m' } } },
    },
};

const bodyTheme = {
    'fontFamily.body': { type: 'fontFamily', faces: [{ assetId: 'body', weight: 400 }] },
    'body.m': {
        type: 'typography',
        fontFamilyTokenId: 'fontFamily.body',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0,
        weight: 400,
    },
};

const buttonTheme: ResolvedRelatedComponent = {
    defaults: { view: 'default', size: 'm' },
    variations: {
        view: {
            default: {
                '--plasma-button-background-color': '#111111FF',
                '--plasma-button-background-color-hover': '#222222FF',
            },
            secondary: { '--plasma-button-background-color': '#333333FF' },
        },
        size: { m: { '--plasma-button-height': '3rem' } },
    },
    invariants: { '--plasma-button-font-family': 'SB Sans Text' },
};

/** Текст стилей styled-components в документе. */
const styleText = () =>
    Array.from(document.querySelectorAll('style'))
        .map((style) => style.textContent ?? '')
        .join('\n');

describe('buildRelatedComponents', () => {
    it('собирает <Имя> и <Имя>Config из конфига ядра и конфига темы с CSS-переменными ядра', () => {
        const related = buildRelatedComponents({ Button: buttonTheme });

        expect(Object.keys(related)).toEqual(['Button', 'ButtonConfig']);
        const config = related.ButtonConfig as typeof buttonConfig & { defaults: Record<string, string> };
        expect(config.name).toBe(buttonConfig.name);
        expect(config.defaults).toMatchObject({ view: 'default', size: 'm' });
        const viewDefault = ((config.variations as unknown) as Record<string, Record<string, unknown>>).view.default;
        expect(String(viewDefault).replace(/,/g, '')).toContain('--plasma-button-background-color: #111111FF;');
        expect(String(viewDefault).replace(/,/g, '')).toContain('--plasma-button-background-color-hover: #222222FF;');
    });

    it('у компонента без конфига ядра передаёт только <Имя>Config с конфигом темы', () => {
        const related = buildRelatedComponents({
            Missing: { defaults: { size: 'm' }, variations: {}, invariants: {} },
        });

        expect(Object.keys(related)).toEqual(['MissingConfig']);
        expect(related.MissingConfig).toMatchObject({ defaults: { size: 'm' }, variations: {} });
    });

    it('Skeleton собирается из lineSkeletonConfig', () => {
        expect(getCoreConfig('Skeleton')).toBe(lineSkeletonConfig);
        expect(registry.Skeleton.coreConfig).toBe(lineSkeletonConfig);

        const related = buildRelatedComponents({
            Skeleton: { defaults: {}, variations: {}, invariants: { '--x': 'red' } },
        });
        expect(Object.keys(related)).toEqual(['Skeleton', 'SkeletonConfig']);
        expect((related.SkeletonConfig as { name: string }).name).toBe(lineSkeletonConfig.name);
    });
});

describe('ButtonGroup со связанным Button из styles', () => {
    it('relatedComponents.Button собирается из записей styles', () => {
        const { resolved } = request('ButtonGroup', { theme: bodyTheme, styles: buttonStyles });

        expect(resolved.relatedComponents.Button).toEqual({
            defaults: { view: 'default', size: 'm' },
            variations: {
                view: {
                    default: {
                        '--plasma-button-background-color': '#111111FF',
                        '--plasma-button-background-color-hover': '#222222FF',
                    },
                    secondary: { '--plasma-button-background-color': '#333333FF' },
                },
                size: { m: { '--plasma-button-height': '3rem' } },
            },
            invariants: expect.objectContaining({
                '--plasma-button-font-family': '"fontFamily.body", sans-serif',
                '--plasma-button-font-size': '1rem',
            }),
        });
    });

    it('кнопки story получают CSS-переменные ядра Button из стиля по умолчанию', async () => {
        const onRendered = vi.fn();
        render(
            <PreviewSurface
                renderId={1}
                request={request('ButtonGroup', { theme: bodyTheme, styles: buttonStyles })}
                story={registry.ButtonGroup.stories[0]}
                onRendered={onRendered}
                onCrash={vi.fn()}
            />,
        );

        await vi.waitFor(() => expect(onRendered).toHaveBeenCalled());
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5);
        // Правила классов кнопки: styled-components пишет CSS без пробелов.
        const css = styleText().replace(/\s+/g, '');
        const ruleOf = (className: string) =>
            css
                .split('}')
                .filter((rule) => rule.includes(`.${className}{`))
                .join('}');
        const buttonRules = buttons[0].className.split(' ').filter(Boolean).map(ruleOf).join('\n');
        expect(buttonRules).toContain('--plasma-button-background-color:#111111FF');
        expect(buttonRules).toContain('--plasma-button-background-color-hover:#222222FF');
        expect(buttonRules).toContain('--plasma-button-height:3rem');
        expect(buttonRules).toContain('--plasma-button-font-family:"fontFamily.body"');
        // Стиль `secondary` есть в конфиге, но story его не выбрала.
        expect(buttonRules).not.toContain('#333333FF');
    });
});

describe('исключения токенов и зависимости compose', () => {
    it('TabItem берёт имена CSS-переменных из tabsTokens', () => {
        const style = surfaceStyle(
            request('TabItem', {
                component: {
                    id: 'TabItem',
                    properties: {
                        itemColor: literal('#FF0000FF'),
                        itemSelectedDividerColorHover: literal('#00FF00FF'),
                    },
                },
            }),
        ) as Record<string, string>;

        expect(style[tabsTokens.itemColor]).toBe('#FF0000FF');
        expect(style[tabsTokens.itemSelectedDividerColorHover]).toBe('#00FF00FF');
        expect(style['--plasma-tab-item-selected-hover-divider-color']).toBe('#00FF00FF');
    });

    it('стили TabItem задают общие переменные Tabs, переменные компонента и темы их перекрывают', () => {
        const style = surfaceStyle(
            request('Tabs', {
                theme: { 'dark.text.default.primary': { type: 'color', value: '#FFFFFFFF' } },
                component: { id: 'Tabs', properties: { disabledOpacity: literal(0.4) } },
                styles: {
                    'TabItem/invariants': {
                        component: 'TabItem',
                        invariant: true,
                        properties: { itemSelectedDividerColor: literal('#ABABABFF'), disabledOpacity: literal(0.5) },
                    },
                },
            }),
        ) as Record<string, string>;

        expect(style['--plasma-tab-item-selected-divider-color']).toBe('#ABABABFF');
        // Как `{ ...relatedVars, ...componentVars }` прежнего клиента: значение Tabs побеждает.
        expect(style[tabsTokens.disabledOpacity]).toBe('0.4');
        expect(style['--text-primary']).toBe('#FFFFFFFF');
    });
});
