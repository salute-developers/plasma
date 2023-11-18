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
     * Есть ли иконка закрытия
     */
    hasClear?: boolean;
    /**
     * Слот для контента Clear
     */
    contentClear?: ReactNode;
    /**
     * Компонент не активен
     */
    disabled?: boolean;
    /**
     * Компонент только для чтения
     */
    readOnly?: boolean;
    /**
     *  Коллбек при взаимодействии с элементом
     */
    onClear?: () => void;

    size?: string;
} & PropsWithChildren;

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomChipProps;
