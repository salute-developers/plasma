import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { startBridge } from '../src/bridge';
import { registry } from '../src/registry';
import { createPreviewRenderer } from '../src/render';

/**
 * Дочерние компоненты, которые story берут из `relatedComponents` (`const { Button } = relatedComponents`,
 * `relatedComponents.StepsConfig`): в ДС это зависимости компонента, клиент кладёт их стили в `styles`.
 */
const STORY_CHILDREN: Record<string, string[]> = {
    AvatarGroup: ['Avatar'],
    ButtonGroup: ['Button'],
    ChipGroup: ['Chip'],
    Drawer: ['Button'],
    Dropdown: ['Button'],
    Modal: ['Button'],
    Notification: ['Button'],
    Popover: ['Button'],
    Popup: ['Button'],
    SegmentGroup: ['SegmentItem', 'Counter'],
    SegmentItem: ['Counter'],
    Sheet: ['Button'],
    Steps: ['StepItem'],
    TextFieldGroup: ['TextField'],
    Toast: ['Button'],
    Toolbar: ['Button'],
    Tooltip: ['Button'],
};

/**
 * Базовый payload общего формата: пустые `properties` и `theme`, `example.id` — story; компонент и его дочерние
 * приходят в `styles` записью инвариантов без свойств — из неё собирается пустой конфиг связанного компонента.
 */
const basePayload = (componentId: string, storyId: string, requestId: string) => ({
    protocolVersion: 1,
    requestId,
    platform: 'WEB',
    assets: [],
    theme: {},
    component: { id: componentId, variations: {}, properties: {} },
    example: { id: storyId, props: {} },
    surface: { width: 360, height: 160 },
    styles: Object.fromEntries(
        [componentId, ...(STORY_CHILDREN[componentId] ?? [])].map((name) => [
            `${name}/invariants`,
            { component: name, invariant: true, properties: {} },
        ]),
    ),
});

const cases = Object.entries(registry).flatMap(([componentId, entry]) =>
    entry.stories.map((story, index) => [componentId, story.name, index] as const),
);

let host: Window;
let postMessage: ReturnType<typeof vi.fn>;
let stop: () => void;

beforeEach(() => {
    const frame = document.createElement('iframe');
    document.body.appendChild(frame);
    host = frame.contentWindow!;
    postMessage = vi.fn();
    host.postMessage = (postMessage as unknown) as Window['postMessage'];
    const container = document.createElement('div');
    document.body.appendChild(container);
    // Ядро и React пишут в консоль предупреждения jsdom (порталы, анимации); падение ловит результат.
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    stop = startBridge(window, { parent: host, renderer: createPreviewRenderer(container) });
});

afterEach(() => {
    stop();
    document.body.innerHTML = '';
});

describe('смоук реестра: каждая story каждого компонента рисуется по базовому payload', () => {
    it('в реестре все story', () => {
        expect(cases.length).toBeGreaterThanOrEqual(Object.keys(registry).length);
    });

    it.each(cases)('%s / %s', async (componentId, storyId, index) => {
        const requestId = `smoke-${componentId}-${index}`;
        window.dispatchEvent(
            new MessageEvent('message', {
                data: {
                    type: 'sdds.preview.payload',
                    protocolVersion: 1,
                    requestId,
                    payload: basePayload(componentId, storyId, requestId),
                },
                origin: 'http://host.test',
                source: host,
            }),
        );

        await vi.waitFor(
            () => expect(postMessage.mock.calls.some(([message]) => message.type === 'sdds.preview.result')).toBe(true),
            {
                timeout: 10000,
            },
        );
        const [message] = postMessage.mock.calls.find(([item]) => item.type === 'sdds.preview.result')!;
        expect(message.result).toEqual({ type: 'success', requestId });
    });
});
