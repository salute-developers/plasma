import type { HTMLAttributes } from 'react';

import { AsProps } from '../..';
import type { SpacingProps } from '../../mixins/applySpacing';

export type BoldProps = {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
    /**
     * Размер текста.
     */
    size?: string;
};
export type FontProps = {
    noWrap?: boolean;
    breakWord?: boolean;
    color?: string;
} & SpacingProps &
    BoldProps &
    AsProps &
    HTMLAttributes<HTMLDivElement>;
