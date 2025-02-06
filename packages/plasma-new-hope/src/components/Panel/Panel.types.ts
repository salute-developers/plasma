import type { HTMLAttributes } from 'react';

type BorderRadius = 'none' | 'default';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Вид компонента.
     * @default
     * default
     */
    view?: string;
    /**
     * Размер компонента.
     * @default
     * m
     */
    size?: string;
    /**
     * Ширина компонента.
     * @default
     * 100%
     * @description
     * Принимает значение в виде строки с css величиной измерения (px/%/rem...).
     * Значение, передаваемые числом будут измеряться в px.
     */
    width?: string | number;
    /**
     * Высота компонента.
     * @default
     * 100%
     * @description
     * Принимает значение в виде строки с css величиной измерения (px/%/rem...).
     * Значение, передаваемые числом будут измеряться в px.
     */
    height?: string | number;
    /**
     * Скругление компонента.
     * @default
     * none
     */
    borderRadius?: BorderRadius;
    /**
     * Пользовательский цвет фона Panel.
     */
    customBackgroundColor?: string;
    /**
     * Пользовательский цвет фона контента Panel.
     */
    customContentBackgroundColor?: string;
}
