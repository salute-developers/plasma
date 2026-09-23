import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import type { AsProps } from '@salutejs/plasma-new-hope/styled-components';

export type BubblePlacement = 'left' | 'right' | 'top-left' | 'top-right';

export type BubbleProps = {
    /**
     * Раскрытое состояние. Смена значения запускает CSS-анимацию.
     * @default false
     */
    opened?: boolean;
    /**
     * Контент, который появляется в раскрытом состоянии.
     */
    content?: ReactNode;
    /**
     * Направление раскрытия бабла относительно триггера.
     * @default top-right
     */
    placement?: BubblePlacement;
    /**
     * Обработчик клика по триггеру (звезда / крестик).
     */
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onClick' | 'content'> &
    AsProps;
