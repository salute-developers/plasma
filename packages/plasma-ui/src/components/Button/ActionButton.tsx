import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
    createButton,
    ButtonRoot,
    getButtonSizesMixin,
    buttonViews,
    applyNoSelect,
    button2,
    caption,
} from '@salutejs/plasma-core';
import type {
    ButtonProps as BaseProps,
    ButtonSizeProps,
    ButtonViewProps,
    PinProps,
    ThemeProviderContextBase,
} from '@salutejs/plasma-core';

import { useThemeContext } from '../../hooks';
import { applyInteraction, InteractionProps } from '../../mixins';

import { sizes } from './ActionButton.sizes';

type ActionButtonBaseProps = Omit<BaseProps, 'stretch' | 'pin'> &
    Partial<ButtonSizeProps> &
    Partial<ButtonViewProps> &
    InteractionProps & { pin?: Extract<PinProps['pin'], 'square-square' | 'circle-circle'> };

// INFO: Omit 'onResize' | 'onResizeCapture' | 'nonce'
// because this types coming with @types/react@18 and breaks react@17.0.2 with @types/react@18
// test
export type ActionButtonProps = Omit<ActionButtonBaseProps, 'nonce' | 'onResize' | 'onResizeCapture'>;

const buttonSizes = {
    l: {
        height: 'var(--plasma-actionbutton-l-height)',
        paddingY: 'var(--plasma-actionbutton-l-padding-y)',
        paddingX: 'var(--plasma-actionbutton-l-padding-x)',
        paddingContentX: 'var(--plasma-actionbutton-l-padding-content-x)',
        paddingStretchX: 'var(--plasma-actionbutton-l-padding-stretch-x)',
        radius: 'var(--plasma-actionbutton-l-radius)',
        radiusCircle: 'var(--plasma-actionbutton-l-radius-circle)',
    },
    m: {
        height: 'var(--plasma-actionbutton-m-height)',
        paddingY: 'var(--plasma-actionbutton-m-padding-y)',
        paddingX: 'var(--plasma-actionbutton-m-padding-x)',
        paddingContentX: 'var(--plasma-actionbutton-m-padding-content-x)',
        paddingStretchX: 'var(--plasma-actionbutton-m-padding-stretch-x)',
        radius: 'var(--plasma-actionbutton-m-radius)',
        radiusCircle: 'var(--plasma-actionbutton-m-radius-circle)',
    },
    s: {
        height: 'var(--plasma-actionbutton-s-height)',
        paddingY: 'var(--plasma-actionbutton-s-padding-y)',
        paddingX: 'var(--plasma-actionbutton-s-padding-x)',
        paddingContentX: 'var(--plasma-actionbutton-s-padding-content-x)',
        paddingStretchX: 'var(--plasma-actionbutton-s-padding-stretch-x)',
        radius: 'var(--plasma-actionbutton-s-radius)',
        radiusCircle: 'var(--plasma-actionbutton-s-radius-circle)',
    },
};
const buttonTypography = {
    xs: button2,
    xxs: caption,
    xxxs: caption,
};

const applySizes = getButtonSizesMixin(buttonSizes, buttonTypography);
const applyViews = ({ view }: ButtonViewProps) => buttonViews[view];

const StyledButtonRoot = styled(ButtonRoot)<InteractionProps>`
    ${sizes}

    ${applySizes}
    ${applyViews}
    ${applyInteraction}
    ${applyNoSelect}
`;

/**
 * Кнопка для размещения внутри карточек.
 * Упрощенная версия ``Button`` для создания квадратных кнопок (с соотношением сторон 1:1).
 * Размеры ``ActionButton`` меньше размеров ``Button``.
 * Обладает теми же цветами, размерами и модификаторами, что и основная кнопка.
 */
const ButtonBase = createButton<HTMLButtonElement, ActionButtonProps & ThemeProviderContextBase>(StyledButtonRoot);

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>((props, ref) => {
    const { deviceScale } = useThemeContext();

    return <ButtonBase {...props} ref={ref} deviceScale={deviceScale} />;
});

ActionButton.defaultProps = {
    size: 'm',
    view: 'secondary',
    pin: 'square-square',
    square: true,
    outlined: true,
    scaleOnInteraction: true,
};
