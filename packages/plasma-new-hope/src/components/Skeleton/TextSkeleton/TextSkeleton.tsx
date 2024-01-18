import React, { useEffect, useState } from 'react';
import type { FC, HTMLAttributes } from 'react';

import type { LineSkeletonProps } from '../LineSkeleton';

import type { TextSkeletonProps } from './TextSkeleton.types';
import { StyledTextSkeleton } from './TextSkeleton.styles';

const variousWidth = [7.58, 5.27, 13.54, 6.63, 0.28, 14.8, 0.33, 11.26, 14.1, 10.59, 3.38, 13.5, 7.71, 3.34, 7.96];

/**
 * Хок для создания компонента плейсхолдера нескольких строк текста.
 * Размеры компонента задаются с помощью констант и соответствуют размерам [типографических элементов](/?path=/docs/).
 */
export const textSkeleton = (
    Component: FC<LineSkeletonProps>,
): FC<TextSkeletonProps & HTMLAttributes<HTMLDivElement>> => ({
    lines,
    width,
    roundness,
    customGradientColor,
    lighter,
    size = 'body1',
    ...props
}: TextSkeletonProps & HTMLAttributes<HTMLDivElement>) => {
    const [fixedWidth, setFixedWidth] = useState<string | number | null>(null);
    const [linesWidth, setLinesWidth] = useState([]);

    useEffect(() => {
        if (!width) {
            setFixedWidth(null);
            const computedLengths = Array(lines)
                .fill(0)
                .reduce((acc, _, i) => {
                    let w;
                    // Последняя строка
                    if (i === lines - 1 && lines !== 1) {
                        w = 45 - variousWidth[i % variousWidth.length];
                    } else if (lines === 1 || lines === 2) {
                        // Единственная или первая из двух
                        w = 100;
                    } else {
                        w = 100 - variousWidth[i % variousWidth.length];
                    }

                    return { ...acc, [i]: w };
                }, {});

            setLinesWidth(Object.values(computedLengths));
            return;
        }

        if (!Number.isNaN(Number(width))) {
            setFixedWidth(`${width}%`);
        } else {
            setFixedWidth(String(width));
        }
    }, [width, lines]);

    return (
        <StyledTextSkeleton {...props}>
            {Array.from(Array<number>(lines), (_, i) => {
                return (
                    <Component
                        key={`line:${i}`}
                        size={size}
                        roundness={roundness}
                        customGradientColor={customGradientColor}
                        lighter={lighter}
                        style={{ width: fixedWidth || `${linesWidth[i]}%` }}
                    />
                );
            })}
        </StyledTextSkeleton>
    );
};
