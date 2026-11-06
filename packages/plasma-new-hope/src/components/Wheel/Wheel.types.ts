import type { CSSProperties, HTMLAttributes, ReactNode, ReactElement, Ref } from 'react';

export type WheelItemValue = string | number;
export type WheelAlignment = 'left' | 'center' | 'right' | 'mixed';
export type WheelSeparatorPreset = 'none' | 'dots' | 'divider';
/**
 * ReactNode с подсказками предустановленных строковых вариантов в редакторе.
 */
export type WheelSeparator = WheelSeparatorPreset | Exclude<ReactNode, string> | (string & {});
export type WheelValue<Value = Record<string, WheelItemValue>> = { [Name in keyof Value]: WheelItemValue };

/**
 * Состояние элемента относительно выбранной строки.
 */
export type WheelItemState = {
    selected: boolean;
    /**
     * Позиция относительно выбранной строки, включая скрытые строки для анимации.
     * При visibleItemsCount=3 буферные позиции — ±2, при 5 — ±3.
     */
    offset: -3 | -2 | -1 | 0 | 1 | 2 | 3;
};

export type WheelItem<Value extends WheelItemValue = WheelItemValue> = {
    /**
     * Уникальное в пределах столбца значение.
     */
    value: Value;
    disabled?: boolean;
} & (
    | { label: string | number; textValue?: string }
    | {
          label: ReactNode;
          /**
           * Текст для скринридера при использовании JSX.
           */
          textValue: string;
      }
);

export type WheelColumn<Value extends WheelItemValue = WheelItemValue> = {
    /**
     * Доступное имя столбца.
     */
    label: string;
    /**
     * Элементы столбца.
     */
    items: readonly WheelItem<Value>[];
    /**
     * Ширина колонки: число в пикселях или CSS-размер.
     * По умолчанию определяется самым широким элементом, включая textAfter и description.
     * При заданной ширине Wheel автоматические колонки делят оставшееся пространство.
     */
    width?: CSSProperties['width'];
    /**
     * Подпись под выбранным элементом.
     */
    description?: ReactNode;
    /**
     * Дополнительный контент после каждой строки, например единица измерения.
     */
    textAfter?: ReactNode;
    /**
     * Столбец неактивен.
     */
    disabled?: boolean;
    /**
     * Зацикливание элементов этой колонки.
     * @default false
     */
    loop?: boolean;
    /**
     * Контент строки.
     */
    renderItem?: (item: WheelItem<Value>, state: WheelItemState) => ReactNode;
};

/**
 * Имя столбца определяет тип его опций и аргумента renderItem.
 */
export type WheelColumns<Value extends WheelValue<Value>> = readonly {
    [Name in Extract<keyof Value, string>]: WheelColumn<Value[Name]> & { name: Name };
}[Extract<keyof Value, string>][];

export type WheelProps<Value extends WheelValue<Value> = WheelValue> = Omit<
    HTMLAttributes<HTMLDivElement>,
    'onChange' | 'defaultValue' | 'children'
> & {
    /**
     * Колонки с элементами.
     */
    columns: WheelColumns<NoInfer<Value>>;
    /**
     * Ширина контейнера колонок: число в пикселях или CSS-размер.
     * По умолчанию определяется содержимым.
     */
    width?: CSSProperties['width'];
    /**
     * Управляемое значение. Все значения должны присутствовать в соответствующих столбцах.
     */
    value: Value;
    /**
     * Callback при изменении активного значения.
     */
    onChange?: (value: Value, column: Extract<keyof Value, string>) => void;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Отображение стрелок для перелистывания.
     * @default true
     */
    hasControls?: boolean;
    /**
     * Количество видимых значений в каждой колонке, включая выбранное.
     * @default 5
     */
    visibleItemsCount?: 3 | 5;
    /**
     * Плавное перелистывание. Учитывает prefers-reduced-motion.
     * @default true
     */
    animated?: boolean;
    /**
     * Выравнивание строк, подписей и стрелок в столбцах.
     * mixed — первая колонка вправо, последняя влево, остальные по центру.
     * Единственная колонка всегда по центру в mixed.
     * @default center
     */
    align?: WheelAlignment;
    /**
     * Разделитель между колонками.
     * Строки none, dots и divider зарезервированы. null и false скрывают разделитель.
     * @default none
     */
    separator?: WheelSeparator;
    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
};

/**
 * Generic-сигнатура для обёрток, создаваемых через component(mergeConfig(...)).
 */
export type WheelComponent = <Value extends WheelValue<Value>>(
    props: WheelProps<Value> & { ref?: Ref<HTMLDivElement> },
) => ReactElement | null;
