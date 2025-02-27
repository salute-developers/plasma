import React from 'react';

type CardBackground =
    | {
          backgroundType?: 'none' | 'solid';
          backgroundColor?: never;
      }
    | {
          backgroundType: 'color';
          backgroundColor?: string;
      };

type CardPropsBase = {
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

    /** Добавляет рамку для выбранной карточки */
    selected?: boolean;

    children: React.ReactNode;
};

export type CardProps = CardPropsBase & CardBackground & React.HTMLAttributes<HTMLDivElement>;

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
