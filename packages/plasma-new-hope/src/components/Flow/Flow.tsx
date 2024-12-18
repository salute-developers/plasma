import React, { CSSProperties, forwardRef } from 'react';
import cls from 'classnames';
import chunk from 'lodash.chunk';

import { RootProps } from '../../engines';

import { base, Line } from './Flow.styles';
import { FlowProps } from './Flow.types';

type TempFlowTypes = FlowProps & {
    /**
     *  Минимальный размер колонки для эластичной сетки с динамическим количеством растянутых столбцов
     *  через `repeat(auto-fill, minmax(${minColWidth}, auto))`
     */
    minColWidth?: string;
};

export const flowRoot = (Root: RootProps<HTMLDivElement, TempFlowTypes>) =>
    forwardRef<HTMLDivElement, TempFlowTypes>(
        (
            {
                children,
                className,
                style,
                orientation = 'horizontal',
                arrangement,
                alignment,
                mainAxisGap = '0',
                crossAxisGap = '0',
                minColWidth = 'auto',
                itemsPerLine,
                ...rest
            },
            ref,
        ) => {
            const isVertical = orientation === 'vertical';
            const hasMinWidth = Boolean(minColWidth && minColWidth !== 'auto');
            const needGrid = Boolean(Number(itemsPerLine) > 0 || hasMinWidth);

            let innerMainAxisGap =
                typeof mainAxisGap === 'number' || !Number.isNaN(+mainAxisGap) ? `${mainAxisGap || 0}px` : mainAxisGap;
            const innerCrossAxisGap =
                typeof crossAxisGap === 'number' || !Number.isNaN(+crossAxisGap)
                    ? `${crossAxisGap || 0}px`
                    : crossAxisGap;

            if (arrangement === 'spaceBetween' || arrangement === 'spaceAround') {
                innerMainAxisGap = '0';
            }

            const hasChunks = Number(itemsPerLine) > 0;
            const chunks: React.ReactNode[] = hasChunks ? chunk(React.Children.toArray(children), itemsPerLine) : [];

            const gap = isVertical
                ? `${innerMainAxisGap} ${innerCrossAxisGap}`
                : `${innerCrossAxisGap} ${innerMainAxisGap}`;

            const wrapperGap = isVertical ? `0 ${innerCrossAxisGap}` : `${innerCrossAxisGap} 0`;
            const lineGap = isVertical ? `${innerMainAxisGap} 0` : `0 ${innerMainAxisGap}`;

            return (
                <Root
                    ref={ref}
                    className={cls(className, {
                        vertical: isVertical,
                        grid: hasMinWidth,
                        elastic: hasMinWidth,
                        hasChunks,
                    })}
                    style={
                        {
                            ...style,
                            '--plasma-private-gap': hasChunks ? wrapperGap : gap,
                            '--plasma-private-items': String(itemsPerLine),
                            '--plasma-private-min-width': String(minColWidth),
                        } as CSSProperties & {
                            '--plasma-private-gap': string;
                            '--plasma-private-items': string;
                            '--plasma-private-min-width': string;
                        }
                    }
                    data-arrangement={arrangement}
                    data-alignment={alignment}
                    {...rest}
                >
                    {hasChunks &&
                        chunks.map((chunkNode) => (
                            <Line
                                className={cls({
                                    vertical: isVertical,
                                    grid: needGrid,
                                    elastic: hasMinWidth,
                                })}
                                style={
                                    {
                                        '--plasma-private-gap': lineGap,
                                    } as CSSProperties & {
                                        '--plasma-private-gap': string;
                                    }
                                }
                                data-arrangement={arrangement}
                                data-alignment={alignment}
                            >
                                {chunkNode}
                            </Line>
                        ))}
                    {!hasChunks && children}
                </Root>
            );
        },
    );

export const flowConfig = {
    name: 'Flow',
    tag: 'div',
    layout: flowRoot,
    base,
    defaults: {},
    variations: {},
};
