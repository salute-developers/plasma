import type {
    ButtonProps as BaseProps,
    ButtonContentProps,
    ButtonSizeProps,
    ButtonViewProps,
} from '@salutejs/plasma-core';

import { ButtonView } from './Button.props';

export type ButtonProps = BaseProps &
    Partial<ButtonSizeProps> &
    Partial<ButtonViewProps<ButtonView>> &
    ButtonContentProps;
