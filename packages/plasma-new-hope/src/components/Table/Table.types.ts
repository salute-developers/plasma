import type { ReactNode, HTMLAttributes, CSSProperties, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { RowData, RowSelectionState } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowId: string, columnId: string, value: unknown) => void;
    }
    interface ColumnMeta<TData extends RowData, TValue> {
        filters?: TableColumnData['filters'];
        enableEditing?: boolean;
        renderCell?: TableColumnData['renderCell'];
        setCellProps?: TableColumnData['setCellProps'];
    }
}

export type TableRowData = {
    /**
     * Уникальный идентификатор строки
     */
    id: string;
    /**
     * Неограниченный список пар ключ:значение, составляющих контент таблицы.
     * Должен совпадать с ключами из TableColumnData
     */
    [key: string]: string | number | object;
};

export type TableColumnData = {
    /**
     * Уникальный идентификатор колонки
     */
    id: string;
    /**
     * Label колонки
     */
    label: string;
    /**
     * Ширина колонки
     */
    width?: number;
    /**
     * Включение сортировки
     */
    enableSorting?: boolean;
    /**
     * Включение ресайза
     */
    enableResizing?: boolean;
    /**
     * Включение изменения ячеек
     */
    enableEditing?: boolean;
    /**
     * Набор опций для фильтрации строк
     */
    filters?: { value: string; label: string }[];
    /**
     * Кастомный обработчик для фильтрации строк
     */
    filterFn?: (filteredValue: string, cellValue: unknown) => boolean;
    /**
     * Рендер-пропс для ячейки
     */
    renderCell?: (value: unknown, row: TableRowData, rowIndex: number) => ReactNode;
    /**
     * Сеттер свойств для ячейки
     */
    setCellProps?: (row: TableRowData, cellId: string) => HTMLAttributes<any> & TdHTMLAttributes<any>;
};

export interface TableProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Основной контент
     */
    data: TableRowData[];
    /**
     * Настройка колонок
     */
    columns: TableColumnData[];
    /**
     * Обработчик изменения состояния
     */
    onChange?: (data: {
        selected: TableProps['selected'];
        filtered: TableProps['filtered'];
        sorted: TableProps['sorted'];
    }) => void;
    /**
     * Вариант отображения border
     * @default all
     */
    borderVariant?: 'all' | 'rows' | 'header';
    /**
     * Включение функционала выбора строк
     * @default false
     */
    enableSelection?: boolean;
    /**
     * Состояние параметров выбранных строк
     */
    selected?: RowSelectionState;
    /**
     * Состояние параметров фильтрации
     */
    filtered?: {
        id: string;
        value: unknown;
    }[];
    /**
     * Состояние параметров сортировки
     */
    sorted?: {
        id: string;
        desc: boolean;
    }[];
    /**
     * Максимальная высота таблицы
     */
    maxHeight?: CSSProperties['maxHeight'];
    /**
     * Прилипание шапки при скролле
     * @default false
     */
    stickyHeader?: boolean;
    /**
     * Обработчик обновления контента ячейки
     */
    onCellUpdate?: (rowId: string, columnId: string, value: unknown) => void;
    /**
     * Сеттер свойств для строки
     */
    setRowProps?: (row: TableRowData) => HTMLAttributes<any> & ThHTMLAttributes<any>;

    /**
     * Размер таблицы
     */
    size?: string;
    /**
     * Внешний вид таблицы
     */
    view?: string;
}
