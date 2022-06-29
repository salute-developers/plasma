import React from 'react';

import { Grid } from '../Grid';
import { CardSkeleton, CardSkeletonProps } from '../../Card/CardSkeleton/CardSkeleton';

export interface GridSkeletonProps {
    /** Количество строк */
    lines?: number;
    /** Количество колонок при разрешении XL */
    columnXL?: number;
    /** Количество колонок при разрешении M */
    columnM?: number;
    /** Количество колонок при разрешении S */
    columnS?: number;
    /** Свойства скелетона карточки */
    cardProps?: CardSkeletonProps;
    className?: string;
}

export function GridSkeleton({
    lines = 3,
    columnXL = 4,
    columnS = 2,
    columnM = 3,
    cardProps,
    className,
}: GridSkeletonProps) {
    return (
        <Grid columnXL={columnXL} columnM={columnM} columnS={columnS} className={className}>
            {[...Array(lines * columnXL)].map((_, index) => (
                <CardSkeleton key={index} height={0} width="100%" ratio="3 / 4" {...cardProps} />
            ))}
        </Grid>
    );
}
