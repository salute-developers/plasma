import { component, mergeConfig, viewContainerConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, RefObject } from 'react';

const ViewContainer = component(mergeConfig(viewContainerConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

type Mode = 'onDark' | 'onLight';

/**
 * Набор переменных вида, как `createViewContainerTokens` генератора темы: в сгенерированном пакете вид onDark/onLight
 * берёт его из темы (`viewContainer.dark/light`). Здесь он строится из переменных сцены превью:
 * `--text-primary` → `var(--on-dark-text-primary)`, `--background-primary` → `var(--dark-background-primary)`,
 * `--inverse-*` — из противоположного набора.
 */
export const viewContainerVariables = (names: string[], mode: Mode): Record<string, string> => {
    const [own, opposite] = mode === 'onDark' ? ['dark', 'light'] : ['light', 'dark'];
    const variables: Record<string, string> = {};

    for (const name of names) {
        const match = name.match(/^--(on-dark|on-light|dark|light)-(.+)$/);
        if (!match) {
            // eslint-disable-next-line no-continue
            continue;
        }
        const [, group, rest] = match;
        const isBackground = group === 'dark' || group === 'light';
        if (isBackground && !rest.startsWith('background-')) {
            // eslint-disable-next-line no-continue
            continue;
        }
        const side = group.replace('on-', '');
        if (side === own) {
            variables[`--${rest}`] = `var(${name})`;
        }
        if (side === opposite) {
            variables[`--inverse-${rest}`] = `var(${name})`;
        }
    }

    return variables;
};

/** Имена CSS-переменных, которые превью положило на сцену. */
const useSurfaceVariableNames = (ref: RefObject<HTMLElement | null>) => {
    const [names, setNames] = useState<string[]>([]);

    useLayoutEffect(() => {
        const surface = ref.current?.closest<HTMLElement>('[data-preview-surface]');
        if (!surface) {
            return;
        }
        const next = Array.from({ length: surface.style.length }, (_, index) => surface.style[index]).filter((name) =>
            name.startsWith('--'),
        );
        // Без массива зависимостей эффект идёт после каждой отрисовки: переменные меняются с payload.
        if (next.join() !== names.join()) {
            setNames(next);
        }
    });

    return names;
};

const card: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    background: 'var(--background-primary)',
    color: 'var(--text-primary)',
};

const ViewContainerDefault = {
    name: 'Default',
    args: [
        {
            name: 'mode',
            value: 'onDark',
            items: toItems(['onDark', 'onLight']),
        },
        {
            name: 'text',
            value: 'Текст внутри контейнера',
        },
    ],
    render: function Story(args: any) {
        const { mode, text, view: _view, ...rest } = args;
        const scene = useRef<HTMLDivElement>(null);
        const names = useSurfaceVariableNames(scene);
        const style = viewContainerVariables(names, mode === 'onLight' ? 'onLight' : 'onDark') as CSSProperties;

        return (
            <div ref={scene}>
                <ViewContainer {...rest} style={style}>
                    <div style={card}>
                        <span>{text}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Вторичный текст</span>
                        <span style={{ color: 'var(--text-accent)' }}>Акцентный текст</span>
                    </div>
                </ViewContainer>
            </div>
        );
    },
};

export const ViewContainerStories = [ViewContainerDefault];
