import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type ChipSize = 'l' | 'm' | 's' | 'xs';
type ChipView = 'default' | 'secondary' | 'positive';

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
    size?: ChipSize;
    /**
     * Вид Chip
     * @default
     * default
     */
    view?: ChipView;
    /**
     *  Коллбек при взаимодействии с элементом
     */
    onClear?: () => void;
} & PropsWithChildren;

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomChipProps;
