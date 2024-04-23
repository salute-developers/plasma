import type { ButtonProps } from '../Button';

type CustomIconButton = {
    /**
     * Иконка
     */
    icon?: React.ReactNode;
};

type OmitButtonProps = Omit<
    ButtonProps,
    'text' | 'contentLeft' | 'contentRight' | 'stretch' | 'stretching' | 'square' | 'shiftLeft' | 'shiftRight' | 'blur'
>;

export interface IconButtonProps extends CustomIconButton, OmitButtonProps {}
