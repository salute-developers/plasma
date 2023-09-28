import styled from 'styled-components';
import { ButtonRoot, getButtonSizesMixin, buttonSizes } from '@salutejs/plasma-core';
import type { ButtonSizeProps, ButtonViewProps } from '@salutejs/plasma-core';
import { bodyLBold, bodyMBold, bodySBold, bodyXSBold, bodyXS } from '@salutejs/plasma-typo';

import { buttonViews } from '../../Button.props';
import type { ButtonView } from '../../Button.props';

const buttonTypography = {
    l: bodyLBold,
    m: bodyMBold,
    s: bodySBold,
    xs: bodyXSBold,
    xxs: bodyXS,
};

const buttonSizesB2C = {
    ...buttonSizes,
    xs: {
        height: '2rem',
        paddingY: '0.5625rem',
        paddingX: '0.75rem',
        paddingContentX: '0.75rem',
        paddingStretchX: '0.75rem',
        radius: '0.5rem',
        radiusCircle: '1rem',
    },
    xxs: {
        height: '1.5rem',
        paddingY: '0.3125rem',
        paddingX: '0.625rem',
        paddingContentX: '0.625rem',
        paddingStretchX: '0.625rem',
        radius: '0.375rem',
        radiusCircle: '0.75rem',
    },
};

const applySizes = getButtonSizesMixin(buttonSizesB2C, buttonTypography);

export const ButtonB2C = styled(ButtonRoot)<Partial<ButtonSizeProps> & Partial<ButtonViewProps<ButtonView>>>`
    ${applySizes}
    ${({ view }) => buttonViews[view]}
`;
