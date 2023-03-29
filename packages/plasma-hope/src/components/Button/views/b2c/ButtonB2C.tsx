import styled from 'styled-components';
import { ButtonRoot, getButtonSizesMixin, buttonSizes } from '@salutejs/plasma-core';
import type { ButtonSizeProps, ButtonViewProps } from '@salutejs/plasma-core';
import { bodySBold, bodyLBold, bodyMBold } from '@salutejs/plasma-typo';

import { buttonViews } from '../../Button.props';
import type { ButtonView } from '../../Button.props';

const buttonTypography = {
    l: bodyLBold,
    m: bodyMBold,
    s: bodySBold,
};

const applySizes = getButtonSizesMixin(buttonSizes, buttonTypography);

export const ButtonB2C = styled(ButtonRoot)<Partial<ButtonSizeProps> & Partial<ButtonViewProps<ButtonView>>>`
    ${applySizes}
    ${({ view }) => buttonViews[view]}
`;
