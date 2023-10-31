import type { HTMLAttributes } from 'react';

import type { SpacingProps } from '../../mixins/applySpacing';

export type BoldProps = {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
};
export type FontProps = {
    breakWord?: boolean;
} & SpacingProps &
    BoldProps &
    HTMLAttributes<HTMLDivElement>;
