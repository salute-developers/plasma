import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode, MouseEvent } from 'react';

import type { Pin } from '../../utils/roundness';

type CustomChipProps = {
    /**
     * @internal
     */
    appearance?: string;
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
     * @default 'true'
     */
    hasClear?: boolean;
    /**
     * Слот для контента Clear
     */
    contentClearButton?: ReactNode;
    /**
     * Компонент c округлым border-radius
     * @default 'false'
     */
    pilled?: boolean;
    /**
     * Свойство задает скругление border-radius
     */
    pin?: Pin;
    /**
     * Компонент не активен
     * @default 'false'
     */
    disabled?: boolean;
    /**
     * Компонент только для чтения
     * @default 'false'
     */
    readOnly?: boolean;
    /**
     * Размер Chip
     * @default 'm'
     */
    size?: string;
    /**
     * Вид Chip
     * @default 'primary'
     */
    view?: string;
    /**
     *  Коллбек при взаимодействии с элементом
     * @deprecated
     * Использовать onClickClose для закрытия
     */
    onClear?: () => void;
    /**
     *  Коллбек при нажатии на крестик
     */
    onClickClose?: (event: MouseEvent<HTMLDivElement>) => void;
} & PropsWithChildren;

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement>, CustomChipProps {}
