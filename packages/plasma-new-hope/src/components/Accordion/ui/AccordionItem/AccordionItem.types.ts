import type { ReactNode, HTMLAttributes } from 'react';

import type { Pin } from '../../../../utils/roundness';

type Props = {
    /**
     * Значение раскрытия элемента accordion
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
     * Скругление элемента accordion
     */
    pin?: Pin;

    /**
     * Заголовок элемента accordion
     */
    title?: ReactNode | string;

    /**
     * Контент элемента accordion
     */
    children: ReactNode;

    /**
     * @deprecated Внутренняя функция при открытии accordion (будет удалена в ближайшее время), использовать onClick
     */
    onChange?: (index: number, value: boolean) => void;

    /**
     * Функция при открытии accordion
     */
    onClick?: (index: number, value: boolean) => void;

    /**
     * Блокировка элемента accordion
     */
    disabled?: boolean;

    /**
     * Контроль элемента accordion из вне
     */
    opened?: boolean;

    //
    // Свойства которые автоматически добавляется Accordion'ом
    //

    /**
     * Индекс элемента accordion, который необходимо автоматически открыть
     */
    eventKey?: number;

    /**
     * @deprecated Внутреннее свойство индекс элемента accordion (будет удалено в ближайшее время)
     */
    index?: number;

    /**
     * @deprecated Внутреннее свойство (будет удалено в ближайшее время)
     */
    view?: string;
};

export type AccordionItemProps = Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'title'> & Props;
