import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type CustomChipProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа, например `Icon`
     */
    contentRight?: ReactNode;
    /**
     * Слот для контента Clear
     */
    contentClearButton?: ReactNode;
    /**
     * Компонент не активен
     * @default
     * false
     */
    disabled?: boolean;
    /**
     * Компонент только для чтения
     * @default
     * false
     */
    readOnly?: boolean;
    /**
     * Размер Chip
     * @default
     * m
     */
    size?: string;
    /**
     * Вид Chip
     * @default
     * primary
     */
    view?: string;
    /**
     *  Коллбек при взаимодействии с элементом
     */
    onClear?: () => void;
} & PropsWithChildren;

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement>, CustomChipProps {}
