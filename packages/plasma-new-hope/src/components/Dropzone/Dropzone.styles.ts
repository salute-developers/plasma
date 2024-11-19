import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const base = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
`;

export const DropzoneHandlerOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 2;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    user-select: none;
`;

export const StyledIcon = styled.div``;

export const ContentWrapper = styled.div`
    position: relative;
`;

export const Title = styled.div``;
export const TitleHelper = styled.div`
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
`;

export const Description = styled.span`
    display: block;
`;
export const DescriptionHelper = styled.span`
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
`;

export const HiddenInput = styled.input`
    display: none;
`;
