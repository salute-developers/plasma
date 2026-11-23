import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { startBridge } from '../src/bridge';
import { registry } from '../src/registry';
import { createPreviewRenderer } from '../src/render';
import type { PreviewComponentEntry } from '../src/registry';

import { webButtonPayload } from './fixtures';

const HOST_ORIGIN = 'http://host.test';

const Crashing = (): never => {
    throw new Error('story exploded');
};

const testRegistry: Record<string, PreviewComponentEntry> = {
    ...registry,
    Crashing: { stories: [{ name: 'Default', args: [], render: Crashing }] },
};

let host: Window;
let postMessage: ReturnType<typeof vi.fn>;
let stop: () => void;
let container: HTMLElement;

const send = (data: unknown, source: Window = host) => {
    window.dispatchEvent(new MessageEvent('message', { data, origin: HOST_ORIGIN, source }));
};

const lastMessage = async (type: string) => {
    await vi.waitFor(() => expect(postMessage.mock.calls.some(([message]) => message.type === type)).toBe(true));
    return postMessage.mock.calls.filter(([message]) => message.type === type).at(-1)!;
};

const payloadEnvelope = (payload: Record<string, unknown>) => ({
    type: 'sdds.preview.payload',
    protocolVersion: 1,
    requestId: payload.requestId,
    payload,
});

beforeEach(() => {
    const frame = document.createElement('iframe');
    document.body.appendChild(frame);
    host = frame.contentWindow!;
    postMessage = vi.fn();
    host.postMessage = (postMessage as unknown) as Window['postMessage'];
    container = document.createElement('div');
    document.body.appendChild(container);
    // React в тестах сообщает о пойманном исключении в console.error.
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    stop = startBridge(window, { parent: host, registry: testRegistry, renderer: createPreviewRenderer(container) });
});

afterEach(() => {
    stop();
    document.body.innerHTML = '';
});

describe('startBridge', () => {
    it('отправляет ready с версией протокола', () => {
        expect(postMessage).toHaveBeenCalledWith({ type: 'sdds.preview.ready', protocolVersion: 1 }, '*');
    });

    it('повторяет ready на load окна, если стартовал до него', () => {
        stop();
        postMessage.mockClear();
        const readyState = vi.spyOn(document, 'readyState', 'get').mockReturnValue('interactive');
        stop = startBridge(window, {
            parent: host,
            registry: testRegistry,
            renderer: createPreviewRenderer(container),
        });
        readyState.mockRestore();

        window.dispatchEvent(new Event('load'));

        const ready = postMessage.mock.calls.filter(([message]) => message.type === 'sdds.preview.ready');
        expect(ready).toHaveLength(2);
    });

    it('отвечает на describe описанием story в origin отправителя', async () => {
        send({ type: 'sdds.preview.describe', protocolVersion: 1, requestId: 'd-1', componentId: 'Button' });

        const [message, origin] = await lastMessage('sdds.preview.description');
        expect(origin).toBe(HOST_ORIGIN);
        expect(message).toMatchObject({
            type: 'sdds.preview.description',
            protocolVersion: 1,
            requestId: 'd-1',
            result: {
                type: 'success',
                requestId: 'd-1',
                description: {
                    protocolVersion: 1,
                    componentId: 'Button',
                    storyId: 'Default',
                    stories: [{ id: 'Default', name: 'Default' }],
                },
            },
        });
        expect(message.result.description.properties).toHaveLength(8);
    });

    it('describe без storyId описывает первую story и перечисляет все story компонента', async () => {
        send({ type: 'sdds.preview.describe', protocolVersion: 1, requestId: 'd-4', componentId: 'Tooltip' });

        const [message] = await lastMessage('sdds.preview.description');
        expect(message.result.description).toMatchObject({
            componentId: 'Tooltip',
            storyId: 'Default',
            stories: [
                { id: 'Default', name: 'Default' },
                { id: 'Live', name: 'Live' },
            ],
        });
        expect(message.result.description.properties.map((item: { name: string }) => item.name)).toEqual(
            registry.Tooltip.stories[0].args.map((arg) => arg.name),
        );
    });

    it('describe со storyId описывает аргументы этой story', async () => {
        send({
            type: 'sdds.preview.describe',
            protocolVersion: 1,
            requestId: 'd-5',
            componentId: 'Tooltip',
            storyId: 'Live',
        });

        const [message] = await lastMessage('sdds.preview.description');
        expect(message.result).toMatchObject({ type: 'success', requestId: 'd-5', description: { storyId: 'Live' } });
        expect(message.result.description.properties.map((item: { name: string }) => item.name)).toEqual(
            registry.Tooltip.stories[1].args.map((arg) => arg.name),
        );
    });

    it('describe с неизвестной story — story_not_found', async () => {
        send({
            type: 'sdds.preview.describe',
            protocolVersion: 1,
            requestId: 'd-6',
            componentId: 'Tooltip',
            storyId: 'Missing',
        });

        const [message] = await lastMessage('sdds.preview.description');
        expect(message.result).toMatchObject({ type: 'failure', requestId: 'd-6', code: 'story_not_found' });
    });

    it('describe неизвестного компонента — component_not_found', async () => {
        send({ type: 'sdds.preview.describe', protocolVersion: 1, requestId: 'd-2', componentId: 'Unknown' });

        const [message] = await lastMessage('sdds.preview.description');
        expect(message.result).toMatchObject({ type: 'failure', requestId: 'd-2', code: 'component_not_found' });
    });

    it('рисует payload и отвечает success с тем же requestId после отрисовки', async () => {
        send(payloadEnvelope(webButtonPayload()));

        const [message, origin] = await lastMessage('sdds.preview.result');
        expect(origin).toBe(HOST_ORIGIN);
        expect(message).toEqual({
            type: 'sdds.preview.result',
            protocolVersion: 1,
            requestId: 'web-button',
            result: { type: 'success', requestId: 'web-button' },
        });
        expect(container.querySelector('button')).toHaveTextContent('Купить');
        expect(
            container
                .querySelector<HTMLElement>('[data-preview-surface]')!
                .style.getPropertyValue('--plasma-button-background-color'),
        ).toBe('#2A72F8FF');
    });

    it('payload строкой JSON тоже принимается', async () => {
        const payload = webButtonPayload();
        send({
            type: 'sdds.preview.payload',
            protocolVersion: 1,
            requestId: payload.requestId,
            payload: JSON.stringify(payload),
        });

        const [message] = await lastMessage('sdds.preview.result');
        expect(message.result).toEqual({ type: 'success', requestId: 'web-button' });
    });

    it('неизвестный компонент — component_not_found', async () => {
        const payload = webButtonPayload();
        send(
            payloadEnvelope({
                ...payload,
                requestId: 'r-2',
                component: { ...(payload.component as object), id: 'Unknown' },
            }),
        );

        const [message] = await lastMessage('sdds.preview.result');
        expect(message.result).toMatchObject({ type: 'failure', requestId: 'r-2', code: 'component_not_found' });
    });

    it('payload с неизвестной story в example.id — story_not_found', async () => {
        send(payloadEnvelope({ ...webButtonPayload(), requestId: 'r-5', example: { id: 'Missing', props: {} } }));

        const [message] = await lastMessage('sdds.preview.result');
        expect(message.result).toMatchObject({
            type: 'failure',
            requestId: 'r-5',
            code: 'story_not_found',
            path: '$.example.id',
        });
    });

    it.each([
        ['чужая платформа', { platform: 'COMPOSE' }, '$.platform'],
        ['корневое поле web (старый формат)', { web: { themeVariables: {} } }, '$.web'],
        [
            'значение в CSS-строке (старый формат)',
            { component: { id: 'Button', properties: { height: { base: { type: 'literal', value: '3rem' } } } } },
            '$.component.properties.height.base.value',
        ],
        [
            'неизвестный источник',
            { component: { id: 'Button', properties: { height: { base: { type: 'css', value: 'x' } } } } },
            '$.component.properties.height.base.type',
        ],
        ['нет example', { example: undefined }, '$.example.id'],
    ])('некорректный payload (%s) — invalid_payload с причиной', async (_name, patch, path) => {
        send(payloadEnvelope({ ...webButtonPayload(), requestId: 'r-3', ...patch }));

        const [message] = await lastMessage('sdds.preview.result');
        expect(message.requestId).toBe('r-3');
        expect(message.result).toMatchObject({ type: 'failure', requestId: 'r-3', code: 'invalid_payload', path });
        expect(message.result.message).toEqual(expect.any(String));
    });

    it('неизвестный styleRef — unknown_style_ref', async () => {
        send(
            payloadEnvelope({
                ...webButtonPayload(),
                requestId: 'r-6',
                component: {
                    id: 'Button',
                    properties: { labelStyle: { base: { type: 'styleRef', styleId: 'missing' } } },
                },
            }),
        );

        const [message] = await lastMessage('sdds.preview.result');
        expect(message.result).toMatchObject({
            type: 'failure',
            requestId: 'r-6',
            code: 'unknown_style_ref',
            path: '$.component.properties.labelStyle',
        });
    });

    it('свойство без параметра в мете — success с предупреждением unmapped_property', async () => {
        const payload = webButtonPayload();
        const component = payload.component as { id: string; properties: Record<string, unknown> };
        send(
            payloadEnvelope({
                ...payload,
                requestId: 'r-7',
                component: {
                    ...component,
                    properties: { ...component.properties, notInMeta: { base: { type: 'literal', value: 1 } } },
                },
            }),
        );

        const [message] = await lastMessage('sdds.preview.result');
        expect(message.result).toEqual({
            type: 'success',
            requestId: 'r-7',
            warnings: [
                expect.objectContaining({ code: 'unmapped_property', path: '$.component.properties.notInMeta' }),
            ],
        });
    });

    it('исключение отрисовки — render_crashed с details, следующий payload рисуется', async () => {
        const payload = webButtonPayload();
        send(payloadEnvelope({ ...payload, requestId: 'r-4', component: { id: 'Crashing' } }));

        const [crashed] = await lastMessage('sdds.preview.result');
        expect(crashed.result).toMatchObject({ type: 'failure', requestId: 'r-4', code: 'render_crashed' });
        expect(crashed.result.message).toContain('story exploded');
        expect(crashed.result.details.stack).toContain('story exploded');

        send(payloadEnvelope(payload));
        await vi.waitFor(() =>
            expect(postMessage.mock.calls.at(-1)?.[0].result).toEqual({ type: 'success', requestId: 'web-button' }),
        );
    });

    describe('шрифты темы', () => {
        const fontsLoad = vi.fn();

        beforeEach(() => {
            fontsLoad.mockReset();
            Object.defineProperty(document, 'fonts', { configurable: true, value: { load: fontsLoad } });
        });

        afterEach(() => {
            delete (document as { fonts?: unknown }).fonts;
        });

        it('не отправляет success, пока шрифт загружается', async () => {
            let loaded: (faces: Array<{ status: string }>) => void = () => undefined;
            fontsLoad.mockReturnValue(
                new Promise((resolve) => {
                    loaded = resolve;
                }),
            );

            send(payloadEnvelope(webButtonPayload('font-1')));
            await vi.waitFor(() => expect(fontsLoad).toHaveBeenCalledWith('normal 600 16px "fontFamily.body"'));
            expect(postMessage.mock.calls.some(([message]) => message.type === 'sdds.preview.result')).toBe(false);

            loaded([{ status: 'loaded' }]);

            const [message] = await lastMessage('sdds.preview.result');
            expect(message.result).toEqual({ type: 'success', requestId: 'font-1' });
        });

        it('разрешённая подмена шрифта — success с warning font_fallback', async () => {
            fontsLoad.mockRejectedValue(new Error('network'));

            send(payloadEnvelope(webButtonPayload('font-2')));

            const [message] = await lastMessage('sdds.preview.result');
            expect(message.result).toMatchObject({
                type: 'success',
                warnings: [{ code: 'font_fallback', path: '$.theme["fontFamily.body"]' }],
            });
        });

        it('запрещённая подмена шрифта — failure font_unavailable', async () => {
            fontsLoad.mockRejectedValue(new Error('network'));
            const payload = webButtonPayload('font-3');
            const theme = payload.theme as Record<string, Record<string, unknown>>;

            send(
                payloadEnvelope({
                    ...payload,
                    theme: { ...theme, 'fontFamily.body': { ...theme['fontFamily.body'], allowFallback: false } },
                }),
            );

            const [message] = await lastMessage('sdds.preview.result');
            expect(message.result).toMatchObject({
                type: 'failure',
                code: 'font_unavailable',
                path: '$.theme["fontFamily.body"]',
            });
        });
    });

    it('игнорирует сообщения не от родительского окна', async () => {
        const other = document.createElement('iframe');
        document.body.appendChild(other);
        postMessage.mockClear();

        send(
            { type: 'sdds.preview.describe', protocolVersion: 1, requestId: 'd-3', componentId: 'Button' },
            other.contentWindow!,
        );
        await new Promise((resolve) => setTimeout(resolve, 20));

        expect(postMessage).not.toHaveBeenCalled();
    });
});
