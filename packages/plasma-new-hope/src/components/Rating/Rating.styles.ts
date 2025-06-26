import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const base = css`
    display: inline-flex;
    flex-direction: column;
`;

export const Score = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`;

export const StarsWrapper = styled.div`
    display: flex;
`;

export const Star = styled.div`
    display: flex;
`;

export const HelperText = styled.span`
    word-break: break-word;
`;
