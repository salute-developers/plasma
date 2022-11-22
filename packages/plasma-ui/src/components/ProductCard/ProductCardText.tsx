import React, { memo, isValidElement } from 'react';
import styled, { css } from 'styled-components';
import { body1 } from '@salutejs/plasma-core';

import { Footnote1 } from '../Typography';
import { mediaQuery } from '../../utils';

import { ProductCardProps } from './types';

type ProductCardTextProps = Pick<ProductCardProps, 'text'>;

// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledDefaultText = memo(styled(Footnote1)`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${({ theme: { deviceScale } }) =>
        mediaQuery(
            'XL',
            deviceScale,
        )(
            css`
                ${body1}
            `,
        )}
`);

export const ProductCardText = ({ text }: ProductCardTextProps) => {
    if (!text) {
        return null;
    }

    if (isValidElement(text)) {
        return text;
    }

    return <StyledDefaultText>{text}</StyledDefaultText>;
};
