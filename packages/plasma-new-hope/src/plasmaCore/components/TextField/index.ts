import type { InputHTMLAttributes, KeyboardEvent } from 'react';

import type { FieldProps } from '../Field';

export interface TextFieldProps extends Omit<FieldProps, 'size'>, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
     * Выполняет роль label (только для plasma-b2c).
     */
    caption?: string;
    /**
     * Определяет внешний вид компонента и поведение label/placeholder (только для plasma-b2c).
     */
    view?: 'default' | 'innerLabel';
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Callback по нажатию Enter
     */
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
}
