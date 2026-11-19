import styled from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

import { buttonViews } from '../../Button.props';
import type { ButtonView } from '../../Button.props';

const { ButtonRoot, getButtonSizesMixin, buttonSizes, buttonTypography } = plasmaCore;
type ButtonSizeProps = plasmaCore.ButtonSizeProps;
type ButtonViewProps<T> = plasmaCore.ButtonViewProps<T>;

const buttonTypographyWEB = {
    ...buttonTypography,
    xs: {
        ...buttonTypography.s,
        lineHeight: '0.875rem',
        fontSize: '0.75rem',
    },
    xxs: {
        ...buttonTypography.s,
        lineHeight: '0.875rem',
        fontSize: '0.75rem',
        fontWeight: 400,
    },
};

const buttonSizesWEB = {
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

const applySizes = getButtonSizesMixin(buttonSizesWEB, buttonTypographyWEB);

export const ButtonWeb = styled(ButtonRoot)<Partial<ButtonSizeProps> & Partial<ButtonViewProps<ButtonView>>>`
    ${applySizes}
    ${({ view }) => buttonViews[view]}
`;
