import React from 'react';

export interface CardVertical {
    orientation: 'vertical';
    textPosition?: 'top' | 'center' | 'bottom';
    contentPosition?: 'top' | 'center' | 'bottom';
}

export interface CardHorizontal {
    orientation: 'horizontal';
    textPosition?: 'left' | 'center' | 'right';
    contentPosition?: 'left' | 'center' | 'right';
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Размер контрола.
     */
    size?: string;

    /**
     * Вид контрола.
     */
    view?: string;

    /**
     * Расположение outer контента
     */
    orientation?: 'horizontal' | 'vertical';

    backgroundType?: 'none' | 'solid' | 'color';

    /** Добавляет рамку для выбранной карточки */
    selected?: boolean;

    /** Компонент в фокусе */
    focused?: boolean;
    /** Увеличение по фокусу */
    scaleOnFocus?: boolean;
    /** Компонент неактивен */
    disabled?: boolean;
    /** Добавить рамку при фокусе */
    outlined?: boolean;
    /** Цвет подложки */
    background?: string;

    textPosition: 'inner' | 'outer';
    contentPosition: 'inner' | 'outer';

    children: React.ReactNode;
}

const ratios = {
    '1 / 1': '100',
    '1/1': '100',
    '3 / 4': '133.3333',
    '3/4': '133.3333',
    '4 / 3': '75',
    '4/3': '75',
    '9 / 16': '177.7778',
    '9/16': '177.7778',
    '16 / 9': '56.25',
    '16/9': '56.25',
    '1 / 2': '200',
    '1/2': '200',
    '2 / 1': '50',
    '2/1': '50',
};

export type Ratio = keyof typeof ratios;

/**
 * CardMedia из текущей реализации
 * Стоит ли заменить пропсом `cover?: ReactNode;` в Card как в Ant?
 * а width и height передавать в style...
 *
 * имхо, нет. у Card может быть title и subtitle под карточкой
 * скорее всего, на них свойство height не должно распространяться
 * стоит подождать финальный дизайн
 */
export interface CardMedia {
    base?: 'img' | 'div';
    height?: string | number;
    ratio?: Ratio;
    customRatio?: string;
}

export interface CardTimeline {
    /**
     * Описание, например время до конца фильма. Возможно,
     * не нужно и стоит указывать bottomRight контент
     */
    text?: string;
    progress?: string | number;
    /**
     * Не увеличивать высоту карточки
     * @default true
     */
    inline?: boolean;
}
