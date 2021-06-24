import styled from 'styled-components';
import { Button as BaseButton } from '@salutejs/plasma-core';
import type { ButtonProps as BaseProps, SizeProps, ViewProps, ButtonContentProps } from '@salutejs/plasma-core';
import { applyNoSelect } from '@salutejs/plasma-core';

import { applyInteraction, InteractionProps } from '../../mixins';

export type ButtonProps = BaseProps &
    Partial<SizeProps<'l' | 'm' | 's'> & ViewProps> &
    InteractionProps &
    ButtonContentProps;

/**
 * Основной компонент для создания кнопок.
 */
export const Button = styled(BaseButton)<ButtonProps>`
    ${applyInteraction};
    ${applyNoSelect};
`;

Button.defaultProps = {
    ...BaseButton.defaultProps,
    view: 'secondary',
    size: 'l',
    outlined: true,
    scaleOnInteraction: true,
};
