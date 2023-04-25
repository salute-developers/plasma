import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { accent } from '../../tokens';
import { useUniqId } from '../../hooks';

import { SpinnerSvg } from './SpinnerSvg';

const rotateAnimation = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`;

const StyledRoot = styled.div<{ $size: string }>`
    display: flex;
    box-sizing: border-box;

    ${({ $size }) => css`
        width: ${$size};
        height: ${$size};
    `}

    animation: ${rotateAnimation} 1s linear infinite;
`;

const scalingPixelBasis = 16;

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    color?: string;
    deviceScale?: number;
}

const sizeFormatting = (size: number | string, deviceScale = 1): string => {
    if (typeof size === 'number' || (!size.endsWith('rem') && !size.endsWith('px'))) {
        return `${Number(size) / (scalingPixelBasis * deviceScale)}rem`;
    }

    return size;
};

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner: React.FC<SpinnerProps> = (props) => {
    const { id, size = 56, color = accent, deviceScale, ...rest } = props;
    const uniqId = useUniqId();
    const innerId = id || uniqId;
    const currentSize = sizeFormatting(size, deviceScale);

    return (
        <StyledRoot id={innerId} $size={currentSize} {...rest}>
            <SpinnerSvg id={innerId} width={size} height={size} color={color} />
        </StyledRoot>
    );
};
