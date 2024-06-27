import type { ReactNode } from 'react';

import type { Pin } from '../../../../utils/roundness';

type CustomAccordionItemProps = {
    /**
     * Значение раскрытия аккордеона
     */
    value?: boolean;

    /**
     * Тип анимации раскрытия
     */
    type?: 'clear' | 'arrow' | 'sign';

    /**
     * Контент слева
     */
    contentLeft?: ReactNode;

    /**
     * Контент справа
     */
    contentRight?: ReactNode;

    /**
     * Скругление аккордеона
     */
    pin?: Pin;

    /**
     * Заголовок аккордеона
     */
    title: ReactNode;

    /**
     * Контент аккордеона
     */
    children: ReactNode;

    /**
     * Функция при открытии аккардеона
     */
    onChange: (index: number, value: boolean) => void;

    /**
     * Блокировка элемента
     */
    disabled?: boolean;

    //
    // Свойства которые автоматически добавляется Accordion'ом
    //

    /**
     * Индекс элемента
     */
    eventKey?: number;

    /**
     * Индекс элемента
     */
    index: number;
};

export type AccordionItemProps = CustomAccordionItemProps;
