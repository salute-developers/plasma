import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { classes, tokens } from './Attach.tokens';

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

export const FilenameWrapper = styled.div<{ isInsideDropdown?: boolean }>`
    display: inline-grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    min-width: 8ch;

    height: ${({ isInsideDropdown }) =>
        isInsideDropdown ? `var(${tokens.filenameDropdownWrapperHeight})` : `var(${tokens.filenameWrapperHeight})`};
`;

export const FilesWrapper = styled.div<{ applyOverflow?: boolean }>`
    display: flex;

    overflow: ${({ applyOverflow }) => (applyOverflow ? 'hidden' : 'unset')};

    &.${classes.horizontal} {
        flex-direction: row;
    }

    &.${classes.vertical} {
        flex-direction: column;
    }

    &.${classes.auto} {
        flex-wrap: wrap;
    }

    &.${classes.horizontalHidden} {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -999;
        visibility: hidden;
        opacity: 0;

        max-width: 100%;
        overflow: hidden;
    }
`;

export const TruncatedFilenamePart = styled.span<{ applyEllipsis: boolean }>`
    overflow: ${({ applyEllipsis }) => (applyEllipsis ? 'hidden' : 'visible')};
    text-overflow: ${({ applyEllipsis }) => (applyEllipsis ? 'ellipsis' : 'unset')};
    white-space: nowrap;
`;

export const FilenameExtensionPart = styled.span``;
