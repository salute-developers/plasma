import React from 'react';
import { HTMLAttributesWithoutOnChange } from 'src/engines/types';

export type { ColorStop } from './lib/gradientParser';

export type PassedConfig = {
    barSize?: number;
    crossSize?: number;
    defaultColor?: string;
    defaultGradient?: string;
};

export type Config = Required<PassedConfig>;

export type ColorPickerProps = {
    /** Колбэк, вызываемый при изменении цвета или градиента. Возвращает итоговое CSS-значение. */
    onChange?: (value: string) => void;
    /** Суффикс, добавляемый к id внутренних элементов (нужен для нескольких пикеров на странице). */
    idSuffix?: string;
    /** Текущее значение цвета или градиента (любое валидное CSS-значение). */
    value?: string;
    /** Скрывает панель управляющих элементов (переключатель типа цвета, инпуты и т.п.). */
    hideControls?: boolean;
    /** Скрывает блок инпутов со значениями цвета (HEX/RGB/HSL и т.д.). */
    hideInputs?: boolean;
    /** Скрывает слайдер прозрачности (alpha). */
    hideOpacity?: boolean;
    /** Скрывает блок пресетов (палитру предустановленных цветов). */
    hidePresets?: boolean;
    /** Скрывает слайдер выбора оттенка (Hue). */
    hideHue?: boolean;
    /** Список пресетов — цветов и/или градиентов, отображаемых в палитре. */
    presets?: string[];
    /** Скрывает кнопку пипетки (EyeDropper). */
    hideEyeDrop?: boolean;
    /** Скрывает расширенные слайдеры. */
    hideAdvancedSliders?: boolean;
    /** Скрывает подсказку по цвету. */
    hideColorGuide?: boolean;
    /** Скрывает переключатель типа инпута (формата значения цвета). */
    hideInputType?: boolean;
    /** Скрывает переключатель типа цвета (сплошной / градиент). */
    hideColorTypeControls?: boolean;
    /** Скрывает переключатель типа градиента (linear / radial и т.д.). */
    hideGradientType?: boolean;
    /** Скрывает поле угла градиента. */
    hideGradientAngle?: boolean;
    /** Скрывает управление точками градиента (stops). */
    hideGradientStop?: boolean;
    /** Скрывает панель управления градиентом целиком. */
    hideGradientControls?: boolean;
    /** Ширина компонента в пикселях. */
    width?: number;
    /** Высота компонента в пикселях. */
    height?: number;
    /** Дополнительный CSS-класс корневого элемента. */
    className?: string;
    /** Локализация текстовых подписей. */
    locales?: LocalesProps;
    /** Отключает тёмную тему. */
    disableDarkMode?: boolean;
    /** Отключает светлую тему. */
    disableLightMode?: boolean;
    /** Скрывает квадрат выбора насыщенности/яркости. */
    hidePickerSquare?: boolean;
    /** Показывает alpha-канал в HEX-инпуте. */
    showHexAlpha?: boolean;
    /** Переопределяет параметры конфигурации по умолчанию. */
    config?: PassedConfig;
    /** Слот для кастомной кнопки пипетки. Получает обработчик клика. */
    dropperButtonSlot?: (onClick: VoidFunction) => React.ReactNode;
    /** Слот для кастомного поля выбора угла градиента. */
    degreePickerSlot?: (props: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: number;
    }) => React.ReactElement;
    /** Слот для кастомного поля выбора позиции точки градиента. */
    stopPickerSlot?: (props: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: number;
    }) => React.ReactElement;
    /** Слот для кастомной кнопки удаления точки градиента. */
    removeGradientStopSlot?: (props: { onRemove: () => void }) => React.ReactElement;
} & HTMLAttributesWithoutOnChange<HTMLElement>;

export type LocalesProps = {
    CONTROLS: ControlsProps;
};

type ControlsProps = {
    SOLID: string;
    GRADIENT: string;
};

export type ThemeProps = {
    light: ThemeMode;
    dark: ThemeMode;
};

export type ThemeMode = {
    color?: string;
    background?: string;
    highlights?: string;
    accent?: string;
};
