import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { Pin } from '../../utils';

type CustomButtonProps = {
    text?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;

    isLoading?: boolean;
    loader?: ReactNode;
    stretch?: boolean;
    square?: boolean;
    focused?: boolean;
    pin?: Pin;
    view?: string;
    size?: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps;
