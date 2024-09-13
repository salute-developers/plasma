import React from 'react';
// import { styled } from '@linaria/react';
import styled from 'styled-components';
import { useUniqId } from '@salutejs/plasma-core';

import { SpinnerSvg } from './SpinnerSvg';

const StyledRoot = styled.div<{ $size: string }>`
    display: flex;
    box-sizing: border-box;

    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};

    @keyframes rotate {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    animation: rotate 1s linear infinite;
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
    const { id, size = 56, color = 'var(--plasma-colors-accent)', deviceScale, ...rest } = props;
    const uniqId = useUniqId();
    const innerId = id || uniqId;
    const currentSize = sizeFormatting(size, 2);

    return (
        <StyledRoot id={innerId} $size={currentSize} {...rest}>
            <SpinnerSvg id={innerId} width={size} height={size} color={color} />
        </StyledRoot>
    );
};
