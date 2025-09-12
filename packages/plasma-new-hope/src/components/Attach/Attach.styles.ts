import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { applyEllipsis } from 'src/mixins';

export const base = css`
    position: relative;
    display: flex;
`;

export const StyledHiddenInput = styled.input`
    display: none;
`;

export const StyledAttachButtonWrapper = styled.div`
    position: relative;
`;

export const StyledHelperText = styled.div`
    position: absolute;
    margin-top: 0.25rem;
`;

export const FilenameWrapper = styled.div`
    display: inline-grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    min-width: 8ch;
`;

export const TruncatedFilenamePart = styled.span`
    ${applyEllipsis()}
`;

export const FilenameExtensionPart = styled.span``;
