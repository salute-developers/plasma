import type { ReactNode } from 'react';

import type { Pin } from '../../../../utils/roundness';

type CustomAccordionItemProps = {
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
     * Скругление аккардиона
     */
    pin?: Pin;

    /**
     * Заголовок аккардиона
     */
    title: ReactNode;

    /**
     * Контент аккардиона
     */
    body: ReactNode;

    /**
     * Функция при открытии аккардиона
     */
    onChangeValue?: (value: boolean) => void;
};

export type AccordionItemProps = CustomAccordionItemProps;
