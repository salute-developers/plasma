import styled, { css } from 'styled-components';

export const base = css`
    display: flex;
    box-sizing: border-box;
    position: relative;
`;

export const BodyWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
