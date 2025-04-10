import type { HTMLAttributes } from 'react';

import { AsProps } from '../..';
import type { SpacingProps } from '../../mixins/applySpacing';

export interface BoldProps {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
    medium?: never | false;
}

export interface MediumProps {
    /**
     * Среднее начертание.
     */
    medium?: boolean;
    bold?: never | false;
}

export type FontProps = {
    /**
     * Не переносить строки.
     */
    noWrap?: boolean;
    /**
     * Переносить слова.
     */
    breakWord?: boolean;
    /**
     * Кастомный цвет текста.
     */
    color?: string;
    /**
     * Размер текста.
     */
    size?: string;
    /**
     * Делает цифровые значения моноширинным.
     */
    isNumeric?: boolean;
} & SpacingProps &
    (BoldProps | MediumProps) &
    AsProps &
    HTMLAttributes<HTMLDivElement>;
