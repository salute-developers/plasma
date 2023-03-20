import { InputHTMLAttributes, KeyboardEvent } from 'react';

export enum TextFieldView {
    default = 'default',
    innerLabel = 'innerLabel',
}

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * @deprecated внутреннее свойство.
     */
    $isFocused?: boolean;
    /**
     * @deprecated устаревшее свойство.
     */
    htmlSize?: InputHTMLAttributes<HTMLInputElement>['size'];
    /**
     * Доступные размеры компонента. (для plasma-web: l, m, s).
     */
    size?: 'l' | 'm' | 's' | 'xs';
    /**
     * Анимированные подсказки внутри инпута (только для plasma-web). Отображается только в размере `l`.
     */
    animatedHint?: 'label' | 'placeholder';
    /**
     * Надпись лейбла. (для plasma-web: отображается только в размере `l`).
     */
    label?: string | number;
    /**
     * Выполняет роль label (только для plasma-b2c).
     */
    caption?: string;
    /**
     * Определяет внешний вид компонента и поведение label/placeholder (только для plasma-b2c).
     */
    view?: TextFieldView | keyof typeof TextFieldView;
    /**
     * Статус компонента: заполнен успешно / с ошибкой.
     */
    status?: 'success' | 'warning' | 'error';
    /**
     * Подсказка для поля ввода.
     */
    helperText?: string;
    /**
     * Слот для контента слева.
     */
    contentLeft?: React.ReactElement;
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Callback по нажатию Enter
     */
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
}

export interface TextFieldPropsCommon extends TextFieldProps {
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
