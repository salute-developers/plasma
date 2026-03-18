import type { HTMLAttributes } from 'react';
import type { SpacingProps } from 'src/mixins';

import { AsProps } from '../..';

export interface BoldProps {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
    medium?: never | false;
    extraBold?: never | false;
}

export interface MediumProps {
    /**
     * Среднее начертание.
     */
    medium?: boolean;
    bold?: never | false;
    extraBold?: never | false;
}

export interface ExtraBoldProps {
    /**
     * Жирное начертание.
     */
    extraBold?: boolean;
    bold?: never | false;
    medium?: never | false;
}

type FontWeightProps = MediumProps | BoldProps | ExtraBoldProps;

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
    /**
     * Определяет стиль шрифта как italic
     */
    isItalic?: boolean;
} & SpacingProps &
    FontWeightProps &
    AsProps &
    HTMLAttributes<HTMLDivElement>;
