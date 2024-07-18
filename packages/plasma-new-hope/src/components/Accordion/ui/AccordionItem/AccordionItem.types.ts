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
     * Позиционирование текста без учета размера иконки
     */
    alignWithTitle?: boolean;

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
     * @deprecated Внутренняя функция при открытии аккардеона (будет удалена в ближайшее время)
     */
    onChange?: (index: number, value: boolean) => void;

    /**
     * Блокировка элемента
     */
    disabled?: boolean;

    //
    // Свойства которые автоматически добавляется Accordion'ом
    //

    /**
     * Индекс элемента, который необходимо автоматически открыть
     */
    eventKey?: number;

    /**
     * @deprecated Внутреннее свойство индекс элемента (будет удалено в ближайшее время)
     */
    index?: number;

    view: string;
};

export type AccordionItemProps = CustomAccordionItemProps;
