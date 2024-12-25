import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const base = css`
    position: relative;
    display: flex;
    box-sizing: border-box;
`;

export const ContentBefore = styled.div`
    display: flex;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Title = styled.div``;
export const TitleHelper = styled.div`
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
`;

export const Text = styled.span`
    display: block;
    position: relative;
`;
export const TextHelper = styled.span`
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
    top: 0;
    left: 0;
`;
