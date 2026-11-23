import {
    Col,
    Row,
    component,
    css,
    getBaseGridView,
    gridConfig,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Ширины точек перелома со сцены превью: `--plasma-grid-<size>-min-width` со значениями ДС.
 * Медиазапрос не берёт ширину из CSS-переменной, поэтому вид сетки, как в sdds-serv, строится функцией ядра
 * `getBaseGridView` из готовых значений; без неё у колонок нет ширины и сетка схлопывается.
 */
const useGridBreakpoints = (ref: { current: HTMLElement | null }) => {
    const [breakpoints, setBreakpoints] = useState<Record<string, string>>({});

    useLayoutEffect(() => {
        const surface = ref.current?.closest<HTMLElement>('[data-preview-surface]');
        if (!surface) {
            return;
        }
        const next: Record<string, string> = {};
        for (let index = 0; index < surface.style.length; index++) {
            const name = surface.style[index];
            if (/^--plasma-grid-\w+-min-width$/.test(name)) {
                next[name] = surface.style.getPropertyValue(name).trim();
            }
        }
        // Без массива зависимостей эффект идёт после каждой отрисовки: значения меняются с payload.
        if (JSON.stringify(next) !== JSON.stringify(breakpoints)) {
            setBreakpoints(next);
        }
    });

    return breakpoints;
};

/** Grid с видом `default`, собранным из ширин точек перелома сцены. */
const ThemedGrid = ({ children, ...rest }: { children: ReactNode; [key: string]: unknown }) => {
    const scene = useRef<HTMLDivElement>(null);
    const breakpoints = useGridBreakpoints(scene);
    const Grid = useMemo(
        () =>
            component(
                mergeConfig(
                    gridConfig as any,
                    {
                        variations: {
                            view: {
                                default: css`
                                    ${getBaseGridView(breakpoints as any, 'default')}
                                `,
                            },
                        },
                    } as any,
                ),
            ) as any,
        [breakpoints],
    );

    return (
        <div ref={scene} style={{ width: '100%' }}>
            <Grid {...rest}>{children}</Grid>
        </div>
    );
};

const contentStyle = {
    height: '10rem',
    width: '100%',
    background: 'var(--surface-transparent-secondary)',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--inverse-text-primary)',
    boxSizing: 'border-box' as const,
};

const GridDefault = {
    name: 'Default',
    args: [
        {
            name: 'colsCount',
            value: 6,
        },
    ],
    render: function Story(args: any) {
        const { colsCount, ...rest } = args;
        const count = Math.max(1, Number(colsCount) || 1);

        return (
            <div style={{ width: '100%' }}>
                <ThemedGrid {...rest}>
                    <Row>
                        {Array.from({ length: count }, (_, i) => (
                            <Col size={1} key={i}>
                                <div style={contentStyle}>{i + 1}</div>
                            </Col>
                        ))}
                    </Row>
                </ThemedGrid>
            </div>
        );
    },
};

const GridCustomColsPosition = {
    name: 'CustomColsPosition',
    args: [],
    render: function Story(args: any) {
        return (
            <div style={{ width: '100%' }}>
                <ThemedGrid {...args}>
                    <Row>
                        <Col
                            smallM={{ size: 1 }}
                            mediumS={{ size: 2 }}
                            mediumM={{ size: 3, offset: 1 }}
                            largeS={{ size: 4, offset: 1 }}
                            largeM={{ size: 5, offset: 2 }}
                        >
                            <div style={contentStyle}>1</div>
                        </Col>
                        <Col
                            smallM={{ size: 1, offset: 1 }}
                            mediumS={{ size: 2, offset: 1 }}
                            mediumM={{ size: 4 }}
                            largeS={{ size: 4, offset: 3 }}
                            largeM={{ size: 5, offset: 1 }}
                        >
                            <div style={contentStyle}>2</div>
                        </Col>
                        <Col
                            smallM={{ size: 1 }}
                            mediumS={{ size: 2, offset: 1 }}
                            mediumM={{ size: 2, offset: 2 }}
                            largeS={{ size: 3, offset: 4 }}
                            largeM={{ size: 6, offset: 3 }}
                        >
                            <div style={contentStyle}>3</div>
                        </Col>
                    </Row>
                </ThemedGrid>
            </div>
        );
    },
};

export const GridStories = [GridDefault, GridCustomColsPosition];
