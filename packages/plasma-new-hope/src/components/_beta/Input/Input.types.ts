// 1. Названия пропсов сверить с дизайном и, если нужно, привести к единому виду
// 2. При необходимости добавлять новые пропсы
// 3. Порядок пропсов менять можно

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
    leftHelper?: ReactNode;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    rightHelper?: ReactNode;
    /**
     * Слот для контента слева.
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа.
     */
    contentRight?: ReactNode;
    /**
     * Слот для вспомогательного текста слева.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста справа.
     */
    textAfter?: string;
    /**
     * Chips.
     */
    chips?: {
        /**
         * Массив чипов, которые будут отображаться в поле ввода.
         */
        value?: string[];
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
        contentLeft?: ReactNode;
    };
    /**
     * Размер.
     */
    size?: string;
    /**
     * Вид.
     */
    view?: string;
};
