import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const base = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const DropzoneHandlerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.span``;

export const Description = styled.span``;

export const HiddenInput = styled.input`
    display: none;
`;
