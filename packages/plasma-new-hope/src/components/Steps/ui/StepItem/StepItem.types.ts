import { ReactNode } from 'react';

import type { StepsContent, StepsContentAlign, StepsOrientation } from '../../Steps.types';

export type StepStatus = 'active' | 'inactive' | 'completed';

type StepIndicatorFunc = ({
    status,
    item,
    size,
}: {
    status: StepStatus;
    item: StepItemProps;
    size: string;
}) => ReactNode;

export interface StepItemProps {
    /**
     * Отображение выполненного шага
     */
    completedItemView?: string;
    /**
     * Заголовок
     */
    title?: string;
    /**
     * Контент, может быть как React компонентом, так и функцией
     */
    content?: string | ReactNode | ((status: StepStatus, index: number, items: StepItemProps[]) => ReactNode);
    /**
     * Индикатор шага, может быть как React компонентом, так и функцией
     */
    indicator?: number | string | ReactNode | StepIndicatorFunc;
    /**
     * Статус шага
     * @description
     * active - активный шаг
     * inactive - не пройденный шаг
     * completed - завершенный шаг
     */
    status?: StepStatus;
    /**
     * Отключенный шаг
     * @default false
     */
    disabled?: boolean;
}

export type StepItemExtendedProps = StepItemProps & {
    index: number;
    items: StepItemProps[];
    size: string;
    hasLine?: boolean;
    hasContent?: StepsContent;
    hasLoader?: boolean;
    onClick?: (item: StepItemProps, index: number) => void;
    contentAlign?: StepsContentAlign;
    orientation?: StepsOrientation;
    /**
     * Отображение шага по умолчанию (берётся из Steps.view)
     */
    rootView?: string;
};
