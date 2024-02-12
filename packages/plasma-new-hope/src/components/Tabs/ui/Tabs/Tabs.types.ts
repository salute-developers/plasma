import type { AsProps } from '@salutejs/plasma-core';
import type { HTMLAttributes } from 'react';

export type TabsProps = AsProps &
    HTMLAttributes<HTMLDivElement> & {
        /**
         * Табы неактивны
         * @default false
         */
        disabled?: boolean;
        /**
         * Табы растянуты на доступную область
         * @default false
         */
        stretch?: boolean;
        /**
         * Табы c округлым border-radius
         * @default false
         */
        pilled?: boolean;
        /**
         * Размер табов
         */
        size?: string;
        /**
         * Вид табов
         */
        view?: string;
        /**
         * Уберет скругление с выбранной стороны и подвинет контейнер
         * @deprecated
         */
        outsideScroll?: boolean | { left?: string; right?: string };
        /**
         *
         * Индекс активного элемента, необходим для клавиатурной навигации
         */
        index?: number;
    };
