import styled, { css } from 'styled-components';

import { classes, tokens } from './Editable.tokens';

export const EditButton = styled.span<{ isHidden: boolean }>`
    position: relative;
    align-self: stretch;
    flex-shrink: 0;

    display: ${({ isHidden }) => (isHidden ? 'none' : 'inline-flex')};
    align-items: center;
    justify-content: center;
`;

export const StyledInput = styled.input``;

export const StyledPlacehpolder = styled.span`
    display: inline-block;
    color: var(${tokens.placeholderColor});
`;

export const base = css`
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    cursor: pointer;

    .${classes.textClip} {
        position: relative;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        /* stylelint-disable value-list-comma-space-after, value-list-comma-newline-after */
        background-image: linear-gradient(currentColor, currentColor),
            linear-gradient(to right, currentColor, transparent), linear-gradient(currentColor, currentColor);
        /* stylelint-enable value-list-comma-space-after, value-list-comma-newline-after */
        background-size: 4rem 100%, 4rem 100%, calc(100% - 4rem) 100%;
        background-position: right top, right top, left top;
        background-repeat: no-repeat;
        background-attachment: local, scroll, scroll;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .${classes.editableTextBox} {
        width: max-content;
        max-width: none;
        outline: none;
        white-space: nowrap;
        caret-color: var(${tokens.caretColor});
    }

    &:focus-within .${classes.textClip} {
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    &.${classes.multiline} {
        gap: var(${tokens.iconGap});

        .${classes.textClip} {
            margin-right: 0;
            padding-right: 0;
            background: none;
            -webkit-text-fill-color: currentColor;
        }

        .${classes.editableTextBox} {
            width: auto;
            min-width: 0;
            white-space: pre-wrap;
            overflow-wrap: break-word;
        }

        ${EditButton} {
            padding-left: 0;
            background: var(${tokens.iconBackground}, var(${tokens.editButtonBackground}));
        }
    }
`;
