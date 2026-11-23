import { describeStory } from './describe';
import { parseWebPayload } from './payload';
import { PREVIEW_MESSAGE_TYPES, PREVIEW_PROTOCOL_VERSION } from './protocol';
import type {
    PreviewComponentDescriptionResult,
    PreviewDescriptionEnvelope,
    PreviewReadyEnvelope,
    PreviewResult,
    PreviewResultEnvelope,
} from './protocol';
import { registry as defaultRegistry, findStory } from './registry';
import type { PreviewComponentEntry } from './registry';
import { createPreviewRenderer } from './render';
import type { PreviewRenderer } from './render';

const MAX_DETAILS_LENGTH = 8000;
const clip = (text: string) => (text.length > MAX_DETAILS_LENGTH ? `${text.slice(0, MAX_DETAILS_LENGTH)}…` : text);

export interface BridgeOptions {
    /** Окно хоста; по умолчанию `window.parent`. Сообщения от других окон игнорируются. */
    parent?: Window;
    registry?: Record<string, PreviewComponentEntry>;
    renderer?: PreviewRenderer;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Мост `postMessage` web-плагина в форматах `ComposePreviewSession` клиента:
 * - после запуска отправляет хосту `sdds.preview.ready`;
 * - `sdds.preview.describe` (`componentId`, необязательный `storyId`) → `sdds.preview.description` со списком story
 *   компонента и аргументами выбранной story (без `storyId` — первой);
 * - `sdds.preview.payload` → `sdds.preview.result`: `success` после отрисовки story `example.id`, иначе `failure`
 *   (`invalid_payload`, `unknown_style_ref`, `style_ref_cycle`, `component_not_found`, `story_not_found`,
 *   `render_crashed` с `details`); предупреждения разрешения payload (`unmapped_property` и др.) — в `success`.
 * Принимает сообщения только от родительского окна и отвечает в origin отправителя. Возвращает функцию остановки.
 */
export const startBridge = (win: Window, options: BridgeOptions = {}): (() => void) => {
    const parent = options.parent ?? win.parent;
    const registry = options.registry ?? defaultRegistry;
    let { renderer } = options;
    const getRenderer = () => {
        if (!renderer) {
            const container =
                win.document.getElementById('root') ?? win.document.body.appendChild(win.document.createElement('div'));
            renderer = createPreviewRenderer(container);
        }
        return renderer;
    };
    // Отрисовки идут по очереди: каждая получает свой ответ.
    let queue: Promise<void> = Promise.resolve();

    const reply = (
        target: MessageEventSource,
        origin: string,
        message: PreviewResultEnvelope | PreviewDescriptionEnvelope,
    ) => {
        (target as Window).postMessage(message, origin);
    };

    const sendResult = (target: MessageEventSource, origin: string, result: PreviewResult) =>
        reply(target, origin, {
            type: PREVIEW_MESSAGE_TYPES.result,
            protocolVersion: PREVIEW_PROTOCOL_VERSION,
            requestId: result.requestId,
            result,
        });

    const handleDescribe = (data: Record<string, unknown>, target: MessageEventSource, origin: string) => {
        const { requestId } = data;
        if (typeof requestId !== 'string' || !requestId) return;
        const { componentId, storyId } = data;
        const entry = typeof componentId === 'string' ? registry[componentId] : undefined;
        const story =
            entry && (storyId === undefined || typeof storyId === 'string') ? findStory(entry, storyId) : undefined;
        let result: PreviewComponentDescriptionResult;
        if (typeof componentId !== 'string' || !componentId.trim()) {
            result = {
                type: 'failure',
                requestId,
                code: 'invalid_request',
                message: 'componentId must be a non-empty string',
            };
        } else if (storyId !== undefined && (typeof storyId !== 'string' || !storyId.trim())) {
            result = {
                type: 'failure',
                requestId,
                code: 'invalid_request',
                message: 'storyId must be a non-empty string',
            };
        } else if (!entry) {
            result = {
                type: 'failure',
                requestId,
                code: 'component_not_found',
                message: `Web preview plugin has no component ${componentId}`,
            };
        } else if (!story) {
            result = {
                type: 'failure',
                requestId,
                code: 'story_not_found',
                message: `Component ${componentId} has no story ${String(storyId)}`,
            };
        } else {
            result = { type: 'success', requestId, description: describeStory(componentId, entry, story) };
        }
        reply(target, origin, {
            type: PREVIEW_MESSAGE_TYPES.description,
            protocolVersion: PREVIEW_PROTOCOL_VERSION,
            requestId,
            result,
        });
    };

    const handlePayload = async (data: Record<string, unknown>, target: MessageEventSource, origin: string) => {
        let { payload } = data;
        const envelopeRequestId = typeof data.requestId === 'string' ? data.requestId : '';
        if (typeof payload === 'string') {
            try {
                payload = JSON.parse(payload);
            } catch (error) {
                sendResult(target, origin, {
                    type: 'failure',
                    requestId: envelopeRequestId,
                    code: 'invalid_payload',
                    message: error instanceof Error ? error.message : 'Preview payload could not be decoded',
                });
                return;
            }
        }

        const parsed = parseWebPayload(payload);
        if (!parsed.ok) {
            sendResult(target, origin, {
                type: 'failure',
                requestId: parsed.requestId || envelopeRequestId,
                code: parsed.code,
                message: parsed.message,
                ...(parsed.path ? { path: parsed.path } : {}),
            });
            return;
        }

        const { request } = parsed;
        const entry = registry[request.componentId];
        if (!entry) {
            sendResult(target, origin, {
                type: 'failure',
                requestId: request.requestId,
                code: 'component_not_found',
                message: `Web preview plugin has no component ${request.componentId}`,
                path: '$.component.id',
            });
            return;
        }

        const story = findStory(entry, request.example.id);
        if (!story) {
            sendResult(target, origin, {
                type: 'failure',
                requestId: request.requestId,
                code: 'story_not_found',
                message: `Component ${request.componentId} has no story ${request.example.id}`,
                path: '$.example.id',
            });
            return;
        }

        const outcome = await getRenderer().render(request, story);
        if (outcome.ok) {
            const warnings = [...request.warnings, ...(outcome.warnings ?? [])];
            sendResult(target, origin, {
                type: 'success',
                requestId: request.requestId,
                ...(warnings.length ? { warnings } : {}),
            });
            return;
        }
        if (outcome.code !== undefined) {
            sendResult(target, origin, {
                type: 'failure',
                requestId: request.requestId,
                code: outcome.code,
                message: outcome.message,
                ...(outcome.path ? { path: outcome.path } : {}),
            });
            return;
        }
        const stack = [outcome.stack, outcome.componentStack].filter(Boolean).join('\n');
        sendResult(target, origin, {
            type: 'failure',
            requestId: request.requestId,
            code: 'render_crashed',
            message: `Web preview render failed: ${outcome.message}`,
            details: { ...(stack ? { stack: clip(stack) } : {}), consoleError: clip(outcome.message) },
        });
    };

    const onMessage = (event: MessageEvent) => {
        if (!event.source || event.source !== parent || typeof event.origin !== 'string') return;
        const { data } = event;
        if (!isRecord(data)) return;
        if (data.protocolVersion !== undefined && data.protocolVersion !== PREVIEW_PROTOCOL_VERSION) return;

        // Ответ уходит в origin отправителя; `null` (sandbox без allow-same-origin у хоста) — только в `*`.
        const origin = event.origin && event.origin !== 'null' ? event.origin : '*';
        if (data.type === PREVIEW_MESSAGE_TYPES.describe) {
            handleDescribe(data, event.source, origin);
            return;
        }
        if (data.type === PREVIEW_MESSAGE_TYPES.payload) {
            const { source } = event;
            queue = queue.then(() => handlePayload(data, source, origin)).catch(() => undefined);
        }
    };

    win.addEventListener('message', onMessage);
    const sendReady = () => {
        const ready: PreviewReadyEnvelope = {
            type: PREVIEW_MESSAGE_TYPES.ready,
            protocolVersion: PREVIEW_PROTOCOL_VERSION,
        };
        parent?.postMessage(ready, '*');
    };
    const hasParent = Boolean(parent && parent !== win);
    if (hasParent) {
        sendReady();
        // `ready` уходит при старте скрипта, раньше события `load` окна. Хост, который принял `load` за перезапуск
        // плагина и ждёт нового `ready`, получит его здесь; повторный `ready` для готовой сессии безвреден.
        if (win.document.readyState !== 'complete') win.addEventListener('load', sendReady, { once: true });
    }

    return () => {
        win.removeEventListener('message', onMessage);
        win.removeEventListener('load', sendReady);
        renderer?.dispose();
    };
};
