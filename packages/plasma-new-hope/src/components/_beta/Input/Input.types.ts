import type { ComponentPropsWithRef, InputHTMLAttributes, ReactNode, Ref } from 'react';

/**
 * Внутренний компонент поля ввода.
 */
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    /**
     * Ссылка на нативный элемент ввода.
     */
    ref?: Ref<HTMLInputElement>;
    /**
     * Атрибуты и ref внешнего контейнера.
     */
    rootProps?: Omit<ComponentPropsWithRef<'div'>, 'children' | 'dangerouslySetInnerHTML'>;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Метка-подпись к элементу справа.
     */
    titleCaption?: ReactNode;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    caption?: ReactNode;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    counter?: ReactNode;
    /**
     * Слот для контента слева.
     */
    contentBefore?: ReactNode;
    /**
     * Слот для контента справа.
     */
    contentAfter?: ReactNode;
    /**
     * Слот для вспомогательного текста слева.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста справа.
     */
    textAfter?: string;
    /**
     * Скрывать плейсхолдер, пока в поле есть хотя бы один чип.
     * После удаления последнего чипа плейсхолдер отображается снова.
     * @default false
     */
    hidePlaceholderOnChips?: boolean;
    /**
     * Chips.
     */
    chips?: {
        /**
         * Массив чипов, которые будут отображаться в поле ввода.
         */
        value?: string[];
        /**
         * Область удаления чипа: весь чип или только иконка закрытия.
         * @default close-icon
         */
        clickArea?: 'full' | 'close-icon';
        /**
         * Callback для удаления чипа.
         */
        onRemove?: (value: string) => void;
    };
    /**
     * Свойства индикатора.
     */
    indicator?: {
        /**
         * Выбор индикатора.
         */
        value?: 'required' | 'optional';
        /**
         * Выравнивание индикатора.
         * @default right
         */
        placement?: 'left' | 'right';
        /**
         * Подпись для указания необязательности поля.
         */
        optionalText?: string;
    };
    /**
     * Свойства лейбла.
     */
    label?: {
        /**
         * Метка-подпись к элементу
         */
        value?: string;
        /**
         * Расположение лейбла.
         */
        placement?: string;
        /**
         * Одновременно отображает label и placeholder (при пустом вводе)
         */
        keepPlaceholder?: boolean;
    };
    /**
     * Свойства подсказки.
     */
    hint?: {
        /**
         * Текст тултипа
         */
        value?: string;
        /**
         * Размер триггера подсказки
         */
        size?: 's' | 'm';
        /**
         * Способ открытия тултипа - наведение или клик мышью
         */
        trigger?: 'hover' | 'click';
        /**
         * Иконка, рядом с которым произойдет вызов всплывающего окна.
         * Если свойство не задано, применится иконка по умолчанию.
         */
        targetIcon?: ReactNode;
        /**
         * Расположение иконки подсказки, когда отсутствует label
         * или же он имеет labelPlacement='inner'.
         * @default `outer`
         */
        targetPlacement?: 'inner' | 'outer';
        /**
         * Направление раскрытия тултипа.
         */
        placement?: 'top' | 'right' | 'bottom' | 'left';
        /**
         * Видимость стрелки (хвоста).
         */
        hasArrow?: boolean;
        /**
         * Отступ окна относительно элемента, у которого оно вызвано.
         * @default
         * [0, 8]
         */
        offset?: [number, number];
        /**
         * Ширина окна (в rem).
         */
        width?: string;
        /**
         * Слот для контента слева, например `Icon`.
         */
        contentBefore?: ReactNode;
    };
};
