import styled from 'styled-components';
import { createButton, ButtonRoot, getButtonSizesMixin, buttonSizes } from '@salutejs/plasma-core';
import type {
    ButtonProps as BaseProps,
    ButtonContentProps,
    ButtonSizeProps,
    ButtonViewProps,
} from '@salutejs/plasma-core';
import { buttonViews, ButtonView } from '@salutejs/plasma-web';
import { bodySBold, bodyLBold, bodyMBold } from '@salutejs/plasma-typo';

export type ButtonProps = BaseProps &
    ButtonContentProps &
    Partial<ButtonSizeProps> &
    Partial<ButtonViewProps<ButtonView>>;

const buttonTypography = {
    l: bodyLBold,
    m: bodyMBold,
    s: bodySBold,
};

const applySizes = getButtonSizesMixin(buttonSizes, buttonTypography);

const StyledButtonRoot = styled(ButtonRoot)<Partial<ButtonSizeProps> & Partial<ButtonViewProps<ButtonView>>>`
    ${applySizes}
    ${({ view }) => buttonViews[view]}
`;

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = createButton<HTMLButtonElement, ButtonProps>(StyledButtonRoot);

Button.defaultProps = {
    size: 'm',
    view: 'secondary',
    pin: 'square-square',
};
