import styled from 'styled-components';
import { ButtonRoot, getButtonSizesMixin, buttonSizes, buttonTypography } from '@salutejs/plasma-core';
import type { ButtonSizeProps, ButtonViewProps } from '@salutejs/plasma-core';

import { buttonViews } from '../../Button.props';
import type { ButtonView } from '../../Button.props';

export const applySizes = getButtonSizesMixin(buttonSizes, buttonTypography);

export const ButtonWeb = styled(ButtonRoot)<Partial<ButtonSizeProps> & Partial<ButtonViewProps<ButtonView>>>`
    ${applySizes}
    ${({ view }) => buttonViews[view]}
`;
