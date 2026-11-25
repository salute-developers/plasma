import { buttonTokens, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import { describe, expect, it } from 'vitest';

import type { PreviewPayload, PreviewPropertyValue, PreviewStyle, PreviewTokenValue } from '../src/protocol';
import { apiMeta, findPreconvertedCss, indexMeta, resolvePayload, webAdapter } from '../src/resolve';
import type { ApiMeta } from '../src/resolve';
import { stateParamFor } from '../src/resolve/meta';
import { applyTemplate, indexTemplates, templateFor } from '../src/resolve/templates';
import { themeVariableName, typographyThemeVariables, typographyVariableBase } from '../src/resolve/theme';
import { cornerRadiiToCss, gradientToCss, shadowToCss, toCssColor, toRem } from '../src/resolve/tokens';
import { typographyPartFor, typographyValues } from '../src/resolve/typography';

import { buttonTheme, webButtonPayload } from './fixtures';

const payloadOf = (patch: Partial<PreviewPayload> = {}): PreviewPayload => ({
    ...((webButtonPayload() as unknown) as PreviewPayload),
    ...patch,
});

const buttonWith = (properties: Record<string, PreviewPropertyValue>, theme: Record<string, PreviewTokenValue> = {}) =>
    payloadOf({
        theme: theme as PreviewPayload['theme'],
        component: { id: 'Button', variations: {}, properties },
        surface: undefined,
    });

describe('meta.ts: индекс api-meta.json', () => {
    const index = indexMeta(apiMeta);

    it('свойство и состояние → ключ ядра', () => {
        const backgroundColor = index.get('Button')!.properties.get('backgroundColor')!;
        expect(backgroundColor.base.map((param) => param.paramName)).toEqual(['buttonBackgroundColor']);
        expect(stateParamFor(backgroundColor, backgroundColor.base[0], 'hovered')?.paramName).toBe(
            'buttonBackgroundColorHover',
        );
        expect(stateParamFor(backgroundColor, backgroundColor.base[0], 'pressed')?.paramName).toBe(
            'buttonBackgroundColorActive',
        );
    });

    it('многозначное свойство даёт все свои ключи; типографика — состояние по полю', () => {
        const button = index.get('Button')!;
        expect(button.properties.get('iconMargin')!.base.map((param) => param.paramName)).toEqual([
            'buttonLeftContentMargin',
            'buttonRightContentMargin',
        ]);
        const textStyle = index.get('TabItem')!.properties.get('textStyle')!;
        const fontWeight = textStyle.base.find((param) => param.part === 'fontWeight')!;
        const fontSize = textStyle.base.find((param) => param.part === 'fontSize')!;
        expect(stateParamFor(textStyle, fontWeight, 'selected')?.paramName).toBe('fontWeightSelected');
        expect(stateParamFor(textStyle, fontSize, 'selected')).toBeUndefined();
    });

    it('цвет без состояния в мете — суффикс Hover/Active, как прежний клиент; другие типы — нет', () => {
        const tabs = index.get('Tabs')!;
        const color = tabs.properties.get('color')!;
        expect(stateParamFor(color, color.base[0], 'hovered')?.paramName).toBe('colorHover');
        expect(stateParamFor(color, color.base[0], 'pressed')?.paramName).toBe('colorActive');
        const height = index.get('Button')!.properties.get('height')!;
        expect(stateParamFor(height, height.base[0], 'hovered')).toBeUndefined();
    });
});

describe('tokens.ts: единицы и значения', () => {
    it('px → rem по базе 16', () => {
        expect(toRem(48)).toBe('3rem');
        expect(toRem(2)).toBe('0.125rem');
        expect(toRem(0)).toBe('0rem');
    });

    it('цвет #RRGGBBAA как есть, alpha умножает прозрачность', () => {
        expect(toCssColor('#2A72F8FF')).toBe('#2A72F8FF');
        expect(toCssColor('#2A72F8FF', 0.5)).toBe('#2A72F880');
        expect(toCssColor('#2A72F880', 0.5)).toBe('#2A72F840');
    });

    it('форма, тень и градиент', () => {
        expect(cornerRadiiToCss([12, 12, 12, 12])).toBe('0.75rem');
        expect(cornerRadiiToCss([12, 12, 0, 0])).toBe('0.75rem 0.75rem 0rem 0rem');
        expect(
            shadowToCss([
                { x: 0, y: 4, blur: 14, spread: -4, color: '#08080814' },
                { x: 0, y: 1, blur: 4, spread: -1, color: '#0000000A' },
            ]),
        ).toBe('0rem 0.25rem 0.875rem -0.25rem #08080814, 0rem 0.0625rem 0.25rem -0.0625rem #0000000A');
        expect(
            gradientToCss([
                {
                    kind: 'linear',
                    angle: 90,
                    stops: [
                        { color: '#FFFFFF17', position: 0 },
                        { color: '#FFFFFF14', position: 0.0625 },
                        { color: '#FFFFFF17', position: 1 },
                    ],
                },
            ]),
        ).toBe('linear-gradient(90deg, #FFFFFF17 0%, #FFFFFF14 6.25%, #FFFFFF17 100%)');
    });
});

describe('typography.ts', () => {
    const theme = (buttonTheme() as unknown) as PreviewPayload['theme'];
    const token = theme['body.m.bold'] as Extract<PreviewTokenValue, { type: 'typography' }>;

    it('токен typography → поля ядра; letterSpacing px → em от fontSize, 0 → normal', () => {
        expect(typographyValues(token, theme)).toEqual({
            fontFamily: '"fontFamily.body", sans-serif',
            fontWeight: '600',
            fontStyle: 'normal',
            fontSize: '1rem',
            lineHeight: '1.25rem',
            letterSpacing: 'normal',
        });
        expect(typographyValues({ ...token, letterSpacing: -0.32, fontStyle: undefined }, theme)).toMatchObject({
            letterSpacing: '-0.02em',
        });
        expect(typographyValues({ ...token, fontStyle: undefined }, theme)).not.toHaveProperty('fontStyle');
    });

    it('поле параметра — part меты, без него — по вхождению имени поля в paramName', () => {
        expect(typographyPartFor('typoFontLetterSpacing')).toBe('letterSpacing');
        expect(typographyPartFor('buttonFontSize')).toBe('fontSize');
        expect(typographyPartFor('x', 'lineHeight')).toBe('lineHeight');
    });
});

describe('templates.ts: web-adapter.json', () => {
    const index = indexTemplates(webAdapter);

    it('шаблоны многозначных свойств из файла плагина', () => {
        expect(templateFor(index, 'Button', 'iconMargin', 'buttonLeftContentMargin')).toBe('0 $1 -0.125rem');
        expect(templateFor(index, 'Button', 'iconMargin', 'buttonRightContentMargin')).toBe('0 -0.125rem 0 $1');
        expect(templateFor(index, 'Button', 'height', 'buttonHeight')).toBeUndefined();
        // Первая конфигурация файла: у TabItem `horizontal`, затем `vertical`.
        expect(templateFor(index, 'TabItem', 'itemPaddingOrientationVertical', 'itemPaddingOrientationVertical')).toBe(
            '1rem $1',
        );
    });

    it('подставляет $1…$n, номер без значения оставляет', () => {
        expect(applyTemplate('0 $1 $2 $3', ['1rem', '2rem'])).toBe('0 1rem 2rem $3');
    });
});

describe('resolvePayload: компонент', () => {
    it('Button: токены, состояния, размеры, форма, типографика, шаблоны, float', () => {
        const resolved = resolvePayload((webButtonPayload() as unknown) as PreviewPayload);

        expect(resolved.componentVariables).toEqual({
            '--plasma-button-background-color': '#2A72F8FF',
            '--plasma-button-background-color-hover': '#3F81FDFF',
            '--plasma-button-background-color-active': '#2462D6FF',
            '--plasma-button-color': '#FFFFFFFF',
            '--plasma-button-height': '3rem',
            '--plasma-button-padding': '1.25rem',
            '--plasma-button-radius': '0.75rem',
            '--plasma-button-font-family': '"fontFamily.body", sans-serif',
            '--plasma-button-font-size': '1rem',
            '--plasma-button-font-style': 'normal',
            '--plasma-button-font-weight': '600',
            '--plasma-button-letter-spacing': 'normal',
            '--plasma-button-line-height': '1.25rem',
            '--plasma-button-left-content-margin': '0 0.5rem -0.125rem',
            '--plasma-button-right-content-margin': '0 -0.125rem 0 0.5rem',
            '--plasma-button-disabled-opacity': '0.4',
        });
        expect(Object.keys(resolved.componentVariables)).toEqual(
            expect.arrayContaining([buttonTokens.buttonBackgroundColorActive, buttonTokens.buttonHeight]),
        );
        expect(resolved.warnings).toEqual([]);
    });

    it('спецификация: dimension-токен 48 → 3rem', () => {
        const resolved = resolvePayload(
            buttonWith(
                { height: { base: { type: 'tokenRef', tokenId: 'spacing.48' } } },
                { 'spacing.48': { type: 'dimension', value: 48 } },
            ),
        );
        expect(resolved.componentVariables['--plasma-button-height']).toBe('3rem');
    });

    it('alpha источника применяется к цвету токена и литерала', () => {
        const resolved = resolvePayload(
            buttonWith(
                {
                    backgroundColor: { base: { type: 'tokenRef', tokenId: 'c', alpha: 0.2 } },
                    focusColor: { base: { type: 'literal', value: '#FF0000FF', alpha: 0.5 } },
                },
                { c: { type: 'color', value: '#000000FF' } },
            ),
        );
        expect(resolved.componentVariables['--plasma-button-background-color']).toBe('#00000033');
        expect(resolved.componentVariables['--plasma-button-focus-color']).toBe('#FF000080');
    });

    it('скорректированная форма @adjust → calc, как ShapeProp прежнего клиента', () => {
        const resolved = resolvePayload(
            buttonWith(
                { shape: { base: { type: 'tokenRef', tokenId: 'round.m@adjust(2)' } } },
                {
                    'round.m': { type: 'shape', cornerRadii: [12, 12, 12, 12] },
                    'round.m@adjust(2)': { type: 'shape', cornerRadii: [14, 14, 14, 14] },
                },
            ),
        );
        expect(resolved.componentVariables['--plasma-button-radius']).toBe('calc(0.75rem + 0.125rem)');
    });

    it('тень и градиент по токенам', () => {
        const resolved = resolvePayload(
            payloadOf({
                theme: {
                    'down.soft.s': {
                        type: 'shadow',
                        layers: [{ x: 0, y: 4, blur: 14, spread: -4, color: '#08080814' }],
                    },
                    skeleton: {
                        type: 'gradient',
                        layers: [
                            {
                                kind: 'linear',
                                angle: 90,
                                stops: [
                                    { color: '#FFFFFF17', position: 0 },
                                    { color: '#FFFFFF03', position: 1 },
                                ],
                            },
                        ],
                    },
                },
                component: {
                    id: 'Accordion',
                    variations: {},
                    properties: {
                        accordionItemShadow: { base: { type: 'tokenRef', tokenId: 'down.soft.s' } },
                        accordionItemBackground: { base: { type: 'tokenRef', tokenId: 'skeleton' } },
                    },
                },
                surface: undefined,
            }),
        );
        expect(resolved.componentVariables).toMatchObject({
            '--plasma-accordion-item-shadow': '0rem 0.25rem 0.875rem -0.25rem #08080814',
            '--plasma-accordion-item-background': 'linear-gradient(90deg, #FFFFFF17 0%, #FFFFFF03 100%)',
        });
    });

    it('свойство без параметра в мете не пишется, предупреждение unmapped_property', () => {
        const resolved = resolvePayload(
            buttonWith({
                height: { base: { type: 'literal', value: 40 } },
                unknownProperty: { base: { type: 'literal', value: 1 } },
            }),
        );
        expect(resolved.componentVariables).toEqual({ '--plasma-button-height': '2.5rem' });
        expect(resolved.warnings).toEqual([
            expect.objectContaining({ code: 'unmapped_property', path: '$.component.properties.unknownProperty' }),
        ]);
    });

    it('мета передаётся аргументом: без компонента в мете все свойства unmapped', () => {
        const meta: ApiMeta = [];
        const resolved = resolvePayload(buttonWith({ height: { base: { type: 'literal', value: 40 } } }), meta);
        expect(resolved.componentVariables).toEqual({});
        expect(resolved.warnings.map((warning) => warning.code)).toEqual(['unmapped_property']);
    });

    it('состояния: последняя запись состояния побеждает, комбинация и состояние без параметра — предупреждения', () => {
        const resolved = resolvePayload(
            buttonWith({
                backgroundColor: {
                    base: { type: 'literal', value: '#000000FF' },
                    states: [
                        { when: ['hovered'], source: { type: 'literal', value: '#111111FF' } },
                        { when: ['hovered'], source: { type: 'literal', value: '#222222FF' } },
                        { when: ['hovered', 'pressed'], source: { type: 'literal', value: '#333333FF' } },
                    ],
                },
                height: {
                    base: { type: 'literal', value: 40 },
                    states: [{ when: ['pressed'], source: { type: 'literal', value: 30 } }],
                },
            }),
        );
        expect(resolved.componentVariables).toEqual({
            '--plasma-button-background-color': '#000000FF',
            '--plasma-button-background-color-hover': '#222222FF',
            '--plasma-button-height': '2.5rem',
        });
        expect(resolved.warnings.map((warning) => warning.code)).toEqual(['unsupported_state', 'unsupported_state']);
    });

    it('цвет-токен без записи состояния: -hover/-active из темы, явная запись и литерал — без вывода', () => {
        const theme: Record<string, PreviewTokenValue> = {
            'surface.solid.accent': { type: 'color', value: '#2A72F8FF' },
            'surface.solid.accent-hover': { type: 'color', value: '#3F81FDFF' },
            'surface.solid.accent-active': { type: 'color', value: '#2462D6FF' },
        };
        const derived = resolvePayload(
            buttonWith({ backgroundColor: { base: { type: 'tokenRef', tokenId: 'surface.solid.accent' } } }, theme),
        );
        expect(derived.componentVariables).toEqual({
            '--plasma-button-background-color': '#2A72F8FF',
            '--plasma-button-background-color-hover': '#3F81FDFF',
            '--plasma-button-background-color-active': '#2462D6FF',
        });
        const explicit = resolvePayload(
            buttonWith(
                {
                    backgroundColor: {
                        base: { type: 'tokenRef', tokenId: 'surface.solid.accent' },
                        states: [{ when: ['hovered'], source: { type: 'literal', value: '#111111FF' } }],
                    },
                },
                theme,
            ),
        );
        expect(explicit.componentVariables['--plasma-button-background-color-hover']).toBe('#111111FF');
        const ambient = resolvePayload(
            buttonWith(
                { backgroundColor: { base: { type: 'tokenRef', tokenId: 'surface.solid.accent' } } },
                {
                    'surface.solid.accent': { type: 'color', value: '#2A72F8FF' },
                    'dark.surface.solid.accent-hover': { type: 'color', value: '#3F81FDFF' },
                },
            ),
        );
        expect(ambient.componentVariables['--plasma-button-background-color-hover']).toBe('#3F81FDFF');
        const literal = resolvePayload(
            buttonWith({ backgroundColor: { base: { type: 'literal', value: '#000000FF' } } }, theme),
        );
        expect(literal.componentVariables).toEqual({ '--plasma-button-background-color': '#000000FF' });
    });

    it('отсутствующий токен и styleRef — предупреждения, значения нет', () => {
        const resolved = resolvePayload(
            payloadOf({
                theme: {},
                component: {
                    id: 'Button',
                    variations: {},
                    properties: {
                        backgroundColor: { base: { type: 'tokenRef', tokenId: 'missing.token' } },
                        labelColor: { base: { type: 'styleRef', styleId: 'nested' } },
                    },
                },
                styles: { nested: { component: 'Spinner', properties: {} } },
                surface: undefined,
            }),
        );
        expect(resolved.componentVariables).toEqual({});
        expect(resolved.warnings.map((warning) => warning.code).sort()).toEqual([
            'missing_token',
            'unsupported_source',
        ]);
    });
});

describe('resolvePayload: окружение (theme.ts)', () => {
    it('переменные цветов темы по правилу createThemeVars, фон, шрифт тела, @font-face', () => {
        const resolved = resolvePayload((webButtonPayload() as unknown) as PreviewPayload);

        const colorVariables = Object.fromEntries(
            Object.entries(resolved.themeVariables).filter(([name]) => !name.startsWith('--plasma-typo-')),
        );
        expect(colorVariables).toEqual({
            '--solid-surface-accent': '#2A72F8FF',
            '--solid-surface-accent-hover': '#3F81FDFF',
            '--solid-surface-accent-active': '#2462D6FF',
            '--on-dark-text-primary': '#FFFFFFFF',
            '--text-primary': '#FFFFFFF5',
            '--background-primary': '#000000FF',
        });
        expect(resolved.variables).toMatchObject({ ...resolved.componentVariables, ...resolved.themeVariables });
        expect(resolved.background).toBe('#000000FF');
        expect(resolved.fontFamily).toBe('"fontFamily.body", sans-serif');
        expect(resolved.fontFaces).toContain('font-family: "fontFamily.body";');
        expect(resolved.fontFaces).toContain("src: url('https://cdn.test/fonts/Body-Semibold.woff2') format('woff2');");
        expect(resolved.fontFaces).toContain('font-weight: 600;');
    });

    describe('имя семейства шрифта', () => {
        const family = (id: string, url: string, name = 'SB Sans Text'): Partial<PreviewPayload> => ({
            theme: {
                [id]: {
                    type: 'fontFamily',
                    family: name,
                    faces: [{ assetId: `${id}:0`, weight: 400, style: 'NORMAL' }],
                    allowFallback: true,
                },
            },
            assets: [{ id: `${id}:0`, type: 'WOFF2', url }],
        });

        const resolveFonts = (...parts: Array<Partial<PreviewPayload>>) => {
            const payload = (webButtonPayload() as unknown) as PreviewPayload;
            return resolvePayload({
                ...payload,
                theme: { ...payload.theme, ...Object.assign({}, ...parts.map((part) => part.theme)) },
                assets: [...payload.assets, ...parts.flatMap((part) => part.assets ?? [])],
            });
        };

        const faceCount = (css: string, name: string) => css.split(`font-family: "${name}";`).length - 1;

        it('family задаёт имя в @font-face, а шрифт области — со sans-serif', () => {
            const resolved = resolveFonts(family('fontFamily.body', 'https://cdn.test/a.woff2'));

            expect(resolved.fontFamily).toBe('"SB Sans Text", sans-serif');
            expect(faceCount(resolved.fontFaces, 'SB Sans Text')).toBe(1);
            expect(resolved.fontLoads).toContainEqual(expect.objectContaining({ family: '"SB Sans Text"' }));
        });

        it('одно имя и одинаковые файлы — одно правило', () => {
            const resolved = resolveFonts(
                family('fontFamily.body', 'https://cdn.test/a.woff2'),
                family('fontFamily.text', 'https://cdn.test/a.woff2'),
            );

            expect(faceCount(resolved.fontFaces, 'SB Sans Text')).toBe(1);
            expect(resolved.fontLoads.filter((font) => font.family === '"SB Sans Text"')).toHaveLength(1);
        });

        it('одно имя и разные файлы — разные семейства', () => {
            const resolved = resolveFonts(
                family('fontFamily.body', 'https://cdn.test/a.woff2'),
                family('fontFamily.text', 'https://cdn.test/b.woff2'),
            );

            expect(faceCount(resolved.fontFaces, 'SB Sans Text')).toBe(1);
            expect(faceCount(resolved.fontFaces, 'fontFamily.text')).toBe(1);
            expect(resolved.fontFaces).toMatch(/"fontFamily\.text";\n\s+src: url\('https:\/\/cdn\.test\/b\.woff2'\)/);
            expect(resolved.fontFamily).toBe('"SB Sans Text", sans-serif');
        });
    });

    it('переменные типографики темы: имена plasma-typo (без normal, header опускается, display → dspl), поля и семейство группы', () => {
        expect(typographyVariableBase('text.m.bold')).toBe('text-m-bold');
        expect(typographyVariableBase('text.m.normal')).toBe('text-m');
        expect(typographyVariableBase('header.h1.medium')).toBe('h1-medium');
        expect(typographyVariableBase('display.l.bold')).toBe('dspl-l-bold');
        expect(typographyVariableBase('mygroup.m.bold')).toBe('mygroup-m-bold');
        const theme = ({
            'fontFamily.text': { type: 'fontFamily', faces: [] },
            'text.m.bold': {
                type: 'typography',
                fontFamilyTokenId: 'fontFamily.text',
                fontSize: 16,
                lineHeight: 20,
                letterSpacing: -0.32,
                weight: 600,
            },
            'text.m.normal': {
                type: 'typography',
                fontFamilyTokenId: 'fontFamily.text',
                fontSize: 16,
                lineHeight: 20,
                letterSpacing: 0,
                weight: 400,
            },
        } as unknown) as PreviewPayload['theme'];
        const vars = typographyThemeVariables(theme);
        expect(vars).toMatchObject({
            '--plasma-typo-text-m-bold-font-weight': '600',
            '--plasma-typo-text-m-bold-font-size': '1rem',
            '--plasma-typo-text-m-bold-line-height': '1.25rem',
            '--plasma-typo-text-m-bold-letter-spacing': '-0.02em',
            '--plasma-typo-text-m-font-weight': '400',
            '--plasma-typo-text-m-letter-spacing': 'normal',
        });
        expect(vars['--plasma-typo-text-font-family']).toBe(vars['--plasma-typo-text-m-font-family']);
        expect(resolvePayload(payloadOf({ theme })).themeVariables).toMatchObject({
            '--plasma-typo-text-m-bold-font-weight': '600',
        });
    });

    it('имена переменных темы', () => {
        expect(themeVariableName('dark.text.default.primary')).toBe('--text-primary');
        expect(themeVariableName('light.surface.on-dark.solid-default')).toBe('--on-dark-surface-solid-default');
        expect(themeVariableName('text.default.secondary')).toBe('--text-secondary');
        expect(themeVariableName('round.m')).toBeUndefined();
    });

    it('фон — CSS-значение, если это не токен; ресурсы WOFF/TTF/OTF, SVG — предупреждение', () => {
        const resolved = resolvePayload(
            payloadOf({
                theme: {
                    'fontFamily.display': {
                        type: 'fontFamily',
                        faces: [
                            { assetId: 'a', weight: 400 },
                            { assetId: 'b', weight: 500, style: 'ITALIC' },
                            { assetId: 'c', weight: 600 },
                            { assetId: 'd', weight: 700 },
                            { assetId: 'missing', weight: 800 },
                        ],
                    },
                },
                assets: [
                    { id: 'a', type: 'WOFF', url: 'a.woff' },
                    { id: 'b', type: 'TTF', url: 'b.ttf' },
                    { id: 'c', type: 'OTF', url: 'c.otf' },
                    { id: 'd', type: 'SVG', url: 'd.svg' },
                ],
                component: { id: 'Button', variations: {}, properties: {} },
                surface: { width: 1, height: 1, background: '#FF0000FF' },
            }),
        );
        expect(resolved.background).toBe('#FF0000FF');
        expect(resolved.fontFamily).toBeUndefined();
        expect(resolved.fontFaces).toContain("format('woff')");
        expect(resolved.fontFaces).toContain("format('truetype')");
        expect(resolved.fontFaces).toContain('font-style: italic;');
        expect(resolved.fontFaces).toContain("format('opentype')");
        expect(resolved.warnings.map((warning) => warning.code)).toEqual(['unsupported_font_format', 'missing_asset']);
    });
});

const style = (
    component: string,
    patch: Partial<PreviewStyle>,
    properties: Record<string, PreviewPropertyValue>,
): PreviewStyle => ({
    component,
    properties,
    ...patch,
});

describe('resolvePayload: связанные компоненты (related.ts)', () => {
    it('ButtonGroup: конфиг Button из styles со стилями вариаций, стилем по умолчанию и инвариантами', () => {
        const resolved = resolvePayload(
            payloadOf({
                theme: (buttonTheme() as unknown) as PreviewPayload['theme'],
                component: { id: 'ButtonGroup', variations: {}, properties: {} },
                styles: {
                    'Button/view/accent': style(
                        'Button',
                        { variation: 'view', name: 'accent', default: true },
                        {
                            backgroundColor: {
                                base: { type: 'tokenRef', tokenId: 'surface.solid.accent' },
                                states: [
                                    {
                                        when: ['hovered'],
                                        source: { type: 'tokenRef', tokenId: 'surface.solid.accent-hover' },
                                    },
                                ],
                            },
                        },
                    ),
                    'Button/view/secondary': style(
                        'Button',
                        { variation: 'view', name: 'secondary' },
                        {
                            backgroundColor: { base: { type: 'literal', value: '#333333FF' } },
                        },
                    ),
                    'Button/size/m': style(
                        'Button',
                        { variation: 'size', name: 'm', default: true },
                        {
                            height: { base: { type: 'literal', value: 48 } },
                            iconMargin: { base: { type: 'literal', value: 8 } },
                        },
                    ),
                    'Button/invariants': style(
                        'Button',
                        { invariant: true },
                        {
                            labelStyle: { base: { type: 'tokenRef', tokenId: 'body.m.bold' } },
                        },
                    ),
                    nested: style('Spinner', {}, {}),
                },
                surface: undefined,
            }),
        );

        expect(Object.keys(resolved.relatedComponents)).toEqual(['Button']);
        expect(resolved.relatedComponents.Button).toEqual({
            defaults: { view: 'accent', size: 'm' },
            variations: {
                view: {
                    accent: {
                        '--plasma-button-background-color': '#2A72F8FF',
                        // Нажатие явно не задано: значение из производного токена темы `-active`.
                        '--plasma-button-background-color-active': '#2462D6FF',
                        '--plasma-button-background-color-hover': '#3F81FDFF',
                    },
                    secondary: { '--plasma-button-background-color': '#333333FF' },
                },
                size: {
                    m: {
                        '--plasma-button-height': '3rem',
                        '--plasma-button-left-content-margin': '0 0.5rem -0.125rem',
                        '--plasma-button-right-content-margin': '0 -0.125rem 0 0.5rem',
                    },
                },
            },
            invariants: {
                '--plasma-button-font-family': '"fontFamily.body", sans-serif',
                '--plasma-button-font-size': '1rem',
                '--plasma-button-font-style': 'normal',
                '--plasma-button-font-weight': '600',
                '--plasma-button-letter-spacing': 'normal',
                '--plasma-button-line-height': '1.25rem',
            },
        });
        // `reuse`-зависимость не задаёт переменных на области превью.
        expect(resolved.relatedVariables).toEqual({});
    });

    it('Tabs → TabItem (compose): общие переменные — стиль с тем же именем вариации, остальные по умолчанию, затем инварианты', () => {
        const resolved = resolvePayload(
            payloadOf({
                theme: {},
                component: {
                    id: 'Tabs',
                    variations: { size: 's' },
                    properties: { tabsDividerColor: { base: { type: 'literal', value: '#111111FF' } } },
                },
                styles: {
                    'TabItem/size/m': style(
                        'TabItem',
                        { variation: 'size', name: 'm', default: true },
                        {
                            itemHeight: { base: { type: 'literal', value: 48 } },
                        },
                    ),
                    'TabItem/size/s': style(
                        'TabItem',
                        { variation: 'size', name: 's' },
                        {
                            itemHeight: { base: { type: 'literal', value: 40 } },
                        },
                    ),
                    'TabItem/view/default': style(
                        'TabItem',
                        { variation: 'view', name: 'default', default: true },
                        {
                            itemSelectedDividerColor: { base: { type: 'literal', value: '#ABABABFF' } },
                        },
                    ),
                    'TabItem/invariants': style(
                        'TabItem',
                        { invariant: true },
                        {
                            itemColor: { base: { type: 'literal', value: '#999999FF' } },
                            itemSelectedDividerColor: { base: { type: 'literal', value: '#CDCDCDFF' } },
                        },
                    ),
                },
                surface: undefined,
            }),
        );

        expect(resolved.relatedVariables).toEqual({
            [tabsTokens.itemHeight]: '2.5rem',
            // Инварианты после стилей вариаций перекрывают их.
            [tabsTokens.itemSelectedDividerColor]: '#CDCDCDFF',
            [tabsTokens.itemColor]: '#999999FF',
        });
        expect(resolved.variables[tabsTokens.tabsDividerColor]).toBe('#111111FF');
        expect(resolved.variables[tabsTokens.itemHeight]).toBe('2.5rem');
    });
});

describe('findPreconvertedCss: старый формат', () => {
    it('CSS-строки у свойств не типа value и у ключей ядра — путь значения', () => {
        expect(findPreconvertedCss(buttonWith({ height: { base: { type: 'literal', value: '3rem' } } }))).toBe(
            '$.component.properties.height.base.value',
        );
        expect(
            findPreconvertedCss(
                buttonWith({
                    buttonBackgroundColorHover: { base: { type: 'literal', value: 'var(--surface-accent)' } },
                }),
            ),
        ).toBe('$.component.properties.buttonBackgroundColorHover.base.value');
    });

    it('CSS-строка у параметра типа value и числа протокола — не старый формат', () => {
        expect(
            findPreconvertedCss(
                buttonWith({
                    buttonLeftContentAlignSelf: { base: { type: 'literal', value: 'calc(1px + 1rem)' } },
                    height: { base: { type: 'literal', value: 48 } },
                    backgroundColor: { base: { type: 'literal', value: '#2A72F8FF' } },
                    somethingNew: { base: { type: 'literal', value: '0 1rem' } },
                }),
            ),
        ).toBeUndefined();
    });
});
