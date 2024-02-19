import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const base = css`
    display: flex;
    box-sizing: border-box;
`;

export const SpinnerWrapper = styled.div<{ width: string; height: string }>`
    display: flex;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    animation: rotate 1s linear infinite;

    @keyframes rotate {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;
