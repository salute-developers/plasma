import styled from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';
import { bodyLBold, bodyMBold, bodySBold, bodyXSBold, bodyXS } from '@salutejs/plasma-typo';

import { buttonViews } from '../../Button.props';
import type { ButtonView } from '../../Button.props';

const { ButtonRoot, getButtonSizesMixin, buttonSizes } = plasmaCore;
type ButtonSizeProps = plasmaCore.ButtonSizeProps;
type ButtonViewProps<T> = plasmaCore.ButtonViewProps<T>;

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
