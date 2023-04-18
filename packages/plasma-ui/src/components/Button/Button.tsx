import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { createButton, ButtonRoot, applyNoSelect } from '@salutejs/plasma-core';
import type {
    ButtonProps as BaseProps,
    ButtonContentProps,
    ButtonSizeProps,
    ButtonViewProps,
    ThemeProviderContextBase,
} from '@salutejs/plasma-core';

import { applyInteraction, InteractionProps } from '../../mixins';
import { useThemeContext } from '../../hooks';
import { spatnavClassNameAttrs } from '../../utils';

import { applySizes, applyViews } from './Button.mixins';
import { sizes } from './Button.sizes';

export type ButtonProps = BaseProps &
    ButtonContentProps &
    Partial<ButtonSizeProps> &
    Partial<ButtonViewProps> &
    InteractionProps;

const StyledButtonRoot = styled(ButtonRoot).attrs(spatnavClassNameAttrs)<InteractionProps>`
    ${sizes}

    ${applySizes}
    ${applyViews}
    ${applyInteraction}
    ${applyNoSelect}
`;

/**
 * Основной компонент для отображения кнопок.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
const ButtonBase = createButton<HTMLButtonElement, ButtonProps & ThemeProviderContextBase>(StyledButtonRoot);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { deviceScale } = useThemeContext();

    return <ButtonBase {...props} ref={ref} deviceScale={deviceScale} />;
});

Button.defaultProps = {
    size: 'l',
    view: 'secondary',
    pin: 'square-square',
    outlined: true,
    scaleOnInteraction: true,
};
