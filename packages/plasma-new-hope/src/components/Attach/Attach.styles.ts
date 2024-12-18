import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const base = css`
    position: relative;
    display: flex;
`;

export const StyledHiddenInput = styled.input`
    display: none;
`;

export const StyledHiddenInputHelper = styled.div`
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
`;

export const StyledAttachButtonWrapper = styled.div`
    position: relative;
`;

export const StyledHelperText = styled.div`
    position: absolute;
    margin-top: 0.25rem;
`;
