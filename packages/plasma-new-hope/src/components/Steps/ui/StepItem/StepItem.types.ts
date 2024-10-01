import { ReactNode } from 'react';

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
