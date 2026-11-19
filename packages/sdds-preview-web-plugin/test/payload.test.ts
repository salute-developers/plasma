import { describe, expect, it } from 'vitest';

import { parseWebPayload } from '../src/payload';

import { webButtonPayload } from './fixtures';

/** Payload `WEB` прежнего формата: ключи ядра с CSS-строками, состояния суффиксами, окружение в поле `web`. */
const legacyPayload = () => ({
    protocolVersion: 1,
    requestId: 'legacy',
    platform: 'WEB',
    assets: [],
    theme: {},
    component: {
        id: 'Button',
        variations: { view: 'accent', size: 'm' },
        properties: {
            backgroundColor: { base: { type: 'literal', value: '#2A72F8FF' } },
            backgroundColorHover: { base: { type: 'literal', value: '#3F81FDFF' } },
            height: { base: { type: 'literal', value: '3rem' } },
            padding: { base: { type: 'literal', value: '0 1.25rem' } },
        },
    },
    example: { id: 'Default', props: { text: 'Купить' } },
    web: {
        themeVariables: { '--text-primary': '#FFFFFFF5' },
        fontFamily: 'SB Sans Text',
        background: 'var(--background-primary)',
    },
});

describe('parseWebPayload: общий формат', () => {
    it('принимает payload общего формата и разрешает его', () => {
        const parsed = parseWebPayload(webButtonPayload());

        expect(parsed.ok).toBe(true);
        if (!parsed.ok) return;
        expect(parsed.request).toMatchObject({
            requestId: 'web-button',
            componentId: 'Button',
            variations: { view: 'accent', size: 'm' },
        });
        expect(parsed.request.resolved.componentVariables['--plasma-button-height']).toBe('3rem');
        expect(parsed.request.warnings).toEqual([]);
    });
});

describe('parseWebPayload: старый формат WEB — invalid_payload', () => {
    it('корневое поле web — путь $.web', () => {
        expect(parseWebPayload(legacyPayload())).toMatchObject({
            ok: false,
            requestId: 'legacy',
            code: 'invalid_payload',
            path: '$.web',
        });
    });

    it('значения, заранее переведённые в CSS, без поля web', () => {
        const { web: _web, ...withoutWeb } = legacyPayload();
        void _web;

        expect(parseWebPayload(withoutWeb)).toMatchObject({
            ok: false,
            code: 'invalid_payload',
            path: '$.component.properties.height.base.value',
        });
    });

    it('CSS-строки в стилях связанных компонентов', () => {
        const parsed = parseWebPayload({
            ...webButtonPayload(),
            styles: {
                'Button/view/accent': {
                    component: 'Button',
                    variation: 'view',
                    name: 'accent',
                    properties: { backgroundColor: { base: { type: 'literal', value: 'var(--surface-accent)' } } },
                },
            },
        });

        expect(parsed).toMatchObject({
            ok: false,
            code: 'invalid_payload',
            path: '$.styles["Button/view/accent"].properties.backgroundColor.base.value',
        });
    });
});

describe('parseWebPayload: выражения CSS в числовых свойствах', () => {
    const chipPayload = (width: unknown, id = 'width') => ({
        ...webButtonPayload(),
        component: { id: 'Chip', variations: {}, properties: { [id]: { base: { type: 'literal', value: width } } } },
    });

    it.each(['calc(100% - 8px)', 'var(--chip-width)', ' CLAMP(1px, 2vw, 3px)'])(
        '%s у Chip.width доходит до CSS как есть',
        (width) => {
            const parsed = parseWebPayload(chipPayload(width));

            expect(parsed).toMatchObject({ ok: true });
            if (!parsed.ok) return;
            expect(parsed.request.resolved.componentVariables['--plasma-chip-width']).toBe(width);
            expect(parsed.request.warnings).toEqual([]);
        },
    );

    it('число, переведённое клиентом в rem, — по-прежнему старый формат', () => {
        expect(parseWebPayload(chipPayload('3rem'))).toMatchObject({
            ok: false,
            code: 'invalid_payload',
            path: '$.component.properties.width.base.value',
        });
    });

    it('выражение у ключа ядра вне меты — старый формат', () => {
        const payload = {
            ...webButtonPayload(),
            component: {
                id: 'Button',
                variations: {},
                properties: { buttonHeight: { base: { type: 'literal', value: 'var(--button-height)' } } },
            },
        };

        expect(parseWebPayload(payload)).toMatchObject({
            ok: false,
            code: 'invalid_payload',
            path: '$.component.properties.buttonHeight.base.value',
        });
    });
});

describe('parseWebPayload: проверка формата', () => {
    it.each([
        ['цвет не #RRGGBBAA', { theme: { c: { type: 'color', value: '#FFF' } } }, '$.theme.c.value'],
        ['неизвестный тип токена', { theme: { c: { type: 'css', value: '1rem' } } }, '$.theme.c.type'],
        [
            'alpha вне 0..1',
            { component: { id: 'Button', properties: { height: { base: { type: 'literal', value: 1, alpha: 2 } } } } },
            '$.component.properties.height.base.alpha',
        ],
        [
            'пустой when',
            {
                component: {
                    id: 'Button',
                    properties: {
                        height: {
                            base: { type: 'literal', value: 1 },
                            states: [{ when: [], source: { type: 'literal', value: 2 } }],
                        },
                    },
                },
            },
            '$.component.properties.height.states[0].when',
        ],
        ['стиль без component', { styles: { s: { properties: {} } } }, '$.styles.s.component'],
        [
            'default не логическое',
            { styles: { s: { component: 'Button', properties: {}, default: 'yes' } } },
            '$.styles.s.default',
        ],
    ])('%s — invalid_payload с путём', (_name, patch, path) => {
        expect(parseWebPayload({ ...webButtonPayload(), ...patch })).toMatchObject({
            ok: false,
            code: 'invalid_payload',
            path,
        });
    });

    it('неизвестный styleRef — unknown_style_ref, цикл — style_ref_cycle', () => {
        expect(
            parseWebPayload({
                ...webButtonPayload(),
                component: { id: 'Button', properties: { x: { base: { type: 'styleRef', styleId: 'missing' } } } },
            }),
        ).toMatchObject({ ok: false, code: 'unknown_style_ref', path: '$.component.properties.x' });

        expect(
            parseWebPayload({
                ...webButtonPayload(),
                styles: {
                    a: { component: 'Button', properties: { x: { base: { type: 'styleRef', styleId: 'b' } } } },
                    b: { component: 'Button', properties: { y: { base: { type: 'styleRef', styleId: 'a' } } } },
                },
            }),
        ).toMatchObject({ ok: false, code: 'style_ref_cycle' });
    });

    it('отклоняет пустое имя семейства шрифта', () => {
        const payload = webButtonPayload() as { theme: Record<string, Record<string, unknown>> };
        payload.theme['fontFamily.body'] = { ...payload.theme['fontFamily.body'], family: '' };

        expect(parseWebPayload(payload)).toMatchObject({ ok: false, code: 'invalid_payload' });
    });
});
