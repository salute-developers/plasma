import { Component, useEffect, useMemo } from 'react';
import type { CSSProperties, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';

import { storyArgName, storyDefaults } from './describe';
import { waitForFonts } from './fonts';
import type { PreviewWarning, ResolvedFontLoad, WebPreviewRequest } from './protocol';
import { buildRelatedComponents } from './registry';
import { pathKey } from './resolve/warnings';
import type { WebStory } from './stories/types';

export type RenderOutcome =
    | { ok: true; warnings?: PreviewWarning[] }
    | { ok: false; code: string; message: string; path?: string }
    | { ok: false; code?: undefined; message: string; stack?: string; componentStack?: string };

/** Имя стиля `true` у логической вариации — пропс `true`, как `toStoryArg` в `ComponentEditorPreview` клиента. */
const toStoryArg = (styleName: string) => (styleName === 'true' ? true : styleName);

/**
 * Пропсы story: значения по умолчанию, затем `example.props` (только отличные от умолчаний), затем имена стилей
 * вариаций.
 */
export const storyProps = (request: WebPreviewRequest, story: WebStory): Record<string, unknown> => ({
    ...storyDefaults(story),
    ...Object.fromEntries(Object.entries(request.example.props).map(([name, value]) => [storyArgName(name), value])),
    ...Object.fromEntries(Object.entries(request.variations).map(([name, style]) => [name, toStoryArg(style)])),
});

/**
 * Стиль области отрисовки: фон, цвет текста и CSS-переменные, как `StyledComponentWrapper` прежнего клиента
 * (`style={{ ...componentVars, ...themeVars }}`, где `componentVars = { ...relatedVars, ...createComponentVars(…) }`).
 * Переменные и их порядок перекрытия готовит `resolvePayload` (`resolved.variables`).
 */
export const surfaceStyle = (request: WebPreviewRequest): CSSProperties =>
    ({
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '100vh',
        padding: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--text-primary)',
        ...(request.resolved.background !== undefined ? { background: request.resolved.background } : {}),
        ...request.resolved.variables,
    } as CSSProperties);

interface BoundaryProps {
    renderId: number;
    onCrash: (error: unknown, info: ErrorInfo) => void;
    children: ReactNode;
}

interface BoundaryState {
    renderId: number;
    failed: boolean;
}

class RenderErrorBoundary extends Component<BoundaryProps, BoundaryState> {
    state: BoundaryState = { renderId: this.props.renderId, failed: false };

    static getDerivedStateFromProps(props: BoundaryProps, state: BoundaryState): Partial<BoundaryState> | null {
        // Новый payload снимает сбой предыдущего: story рисуется заново.
        return props.renderId !== state.renderId ? { renderId: props.renderId, failed: false } : null;
    }

    static getDerivedStateFromError(): Partial<BoundaryState> {
        return { failed: true };
    }

    componentDidCatch(error: unknown, info: ErrorInfo): void {
        this.props.onCrash(error, info);
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}

interface RenderedSignalProps {
    renderId: number;
    fontLoads: ResolvedFontLoad[];
    onRendered: (unavailableFonts: ResolvedFontLoad[]) => void;
}

/**
 * Сообщает об отрисовке после коммита, ближайшего кадра и загрузки шрифтов темы. В скрытом iframe кадр может не прийти,
 * поэтому есть таймер.
 */
const RenderedSignal = ({ renderId, fontLoads, onRendered }: RenderedSignalProps) => {
    useEffect(() => {
        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            void waitForFonts(fontLoads).then(onRendered);
        };
        const frame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame(finish) : undefined;
        const timer = setTimeout(finish, 50);
        return () => {
            if (frame !== undefined) cancelAnimationFrame(frame);
            clearTimeout(timer);
        };
        // Сигнал привязан к отрисовке (`renderId`), а не к колбэку.
    }, [renderId]);

    return null;
};

interface PreviewSurfaceProps {
    renderId: number;
    request: WebPreviewRequest;
    story: WebStory;
    onRendered: (unavailableFonts: ResolvedFontLoad[]) => void;
    onCrash: (error: unknown, info: ErrorInfo) => void;
}

export const PreviewSurface = ({ renderId, request, story, onRendered, onCrash }: PreviewSurfaceProps) => {
    const Story = story.render;
    // Компоненты пересоздаются только с новым payload: иначе styled-компоненты связанных компонентов
    // менялись бы на каждой отрисовке и story теряла бы состояние.
    const relatedComponents = useMemo(() => buildRelatedComponents(request.resolved.relatedComponents), [
        request.resolved.relatedComponents,
    ]);
    const { fontFaces, fontFamily, fontLoads } = request.resolved;

    return (
        <div data-preview-surface style={surfaceStyle(request)}>
            {fontFaces ? <style data-preview-fonts>{fontFaces}</style> : null}
            <div data-preview style={{ display: 'contents', fontFamily }}>
                <RenderErrorBoundary renderId={renderId} onCrash={onCrash}>
                    <Story {...storyProps(request, story)} relatedComponents={relatedComponents} />
                    <RenderedSignal renderId={renderId} fontLoads={fontLoads} onRendered={onRendered} />
                </RenderErrorBoundary>
            </div>
        </div>
    );
};

const toOutcome = (error: unknown, info?: ErrorInfo): RenderOutcome => ({
    ok: false,
    message: error instanceof Error ? error.message : String(error),
    ...(error instanceof Error && error.stack ? { stack: error.stack } : {}),
    ...(info?.componentStack ? { componentStack: info.componentStack } : {}),
});

const fontDescription = ({ tokenId, weight, style }: ResolvedFontLoad) => `${tokenId} (${weight} ${style})`;

/** Итог отрисовки по недоступным начертаниям: подмена шрифта только с разрешения токена, иначе отказ. */
const fontOutcome = (unavailable: ResolvedFontLoad[]): RenderOutcome => {
    const required = unavailable.find((font) => !font.allowFallback);
    if (required) {
        return {
            ok: false,
            code: 'font_unavailable',
            message: `Font ${fontDescription(required)} is unavailable`,
            path: `$.theme${pathKey(required.tokenId)}`,
        };
    }
    if (!unavailable.length) return { ok: true };
    return {
        ok: true,
        warnings: unavailable.map((font) => ({
            code: 'font_fallback',
            message: `Font ${fontDescription(font)} is unavailable, a fallback font is used`,
            path: `$.theme${pathKey(font.tokenId)}`,
        })),
    };
};

export interface PreviewRenderer {
    render(request: WebPreviewRequest, story: WebStory): Promise<RenderOutcome>;
    dispose(): void;
}

/** Рисует payload в контейнер. Запросы обрабатываются по одному: каждый ждёт своей отрисовки или сбоя. */
export const createPreviewRenderer = (container: Element): PreviewRenderer => {
    const root: Root = createRoot(container);
    let renderId = 0;

    return {
        render(request, story) {
            const currentId = ++renderId;
            return new Promise<RenderOutcome>((resolve) => {
                let settled = false;
                const settle = (outcome: RenderOutcome) => {
                    if (settled) return;
                    settled = true;
                    resolve(outcome);
                };
                try {
                    root.render(
                        <PreviewSurface
                            renderId={currentId}
                            request={request}
                            story={story}
                            onRendered={(unavailableFonts) => settle(fontOutcome(unavailableFonts))}
                            onCrash={(error, info) => settle(toOutcome(error, info))}
                        />,
                    );
                } catch (error) {
                    settle(toOutcome(error));
                }
            });
        },
        dispose() {
            root.unmount();
        },
    };
};
