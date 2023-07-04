import type { TextAreaProps as BaseProps } from '@salutejs/plasma-core';

export interface TextAreaProps extends Omit<BaseProps, 'size'> {
    /**
     * @deprecated не используется в компоненте.
     */
    helperBlock?: React.ReactElement;
    /**
     * @deprecated свойство устарело, необходимо использовать `leftHelper`.
     */
    helperText?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    rightHelper?: string;
    /**
     * Возможные размеры компонента.
     */
    size?: 'l' | 'm' | 's' | 'xs';
}

export interface TextAreaPropsCommon extends TextAreaProps {
    hasHelper: boolean;
    placeLabel?: string;
    outerRef: React.RefObject<HTMLTextAreaElement>;
    helperWidth: number;
}

export type Design = {
    design: 'b2c' | 'web';
};
