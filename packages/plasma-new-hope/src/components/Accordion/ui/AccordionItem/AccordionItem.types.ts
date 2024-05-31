import type { ReactNode } from 'react';

import type { Pin } from '../../../../utils/roundness';

type CustomAccordionItemProps = {
    /**
     * Ключ аккордиона
     */
    eventKey?: string | number;
    /**
     * Значение раскрытия аккардиона
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
     * Скругление аккордиона
     */
    pin?: Pin;

    /**
     * Заголовок аккордиона
     */
    title: ReactNode;

    /**
     * Контент аккордиона
     */
    body: ReactNode;

    /**
     * Функция при открытии аккардиона
     */
    onChangeValue?: (value: boolean, eventKey?: string | number) => void;

    //
    // Свойства которые автоматически добавляется Accordion'ом
    //

    /**
     * Индекс элемента
     */
    index?: number;

    /**
     * Функция, которая позволяет родительскому компоненту понять, что элемент открылся и закрыть другой элемент
     */
    updateValue?: (index?: number, value?: boolean) => void;
};

export type AccordionItemProps = CustomAccordionItemProps;
