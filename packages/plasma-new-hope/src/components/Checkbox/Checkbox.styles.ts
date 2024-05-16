import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyEllipsis, applyNoUserSelect } from '../../mixins';

import { classes, tokens } from './Checkbox.tokens';

export const base = css`
    margin: var(${tokens.margin});

    ${applyNoUserSelect()};

    position: relative;
    align-items: flex-start;
    display: flex;
    cursor: pointer;

    .${classes.singleLine} {
        ${applyEllipsis()};
    }
`;

export const StyledInput = styled.input`
    position: absolute;

    &:focus {
        outline: 0 none;
    }

    /* Спрятать от IE */
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
`;

export const StyledTrigger = styled.div`
    margin: var(${tokens.triggerMargin});

    width: var(${tokens.triggerSize});
    height: var(${tokens.triggerSize});
    border-radius: var(${tokens.triggerBorderRadius});

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0.125rem solid var(${tokens.triggerBorderColor});
    box-sizing: border-box;

    flex-shrink: 0;
    flex-grow: 0;

    input:not(:indeterminate) + label & div {
        transform: scale(0);
        transition: transform 0.15s ease-in-out;
    }

    input:checked + label & div {
        transform: scale(1);
    }
`;

export const StyledContentWrapper = styled.label`
    position: relative;
    align-items: flex-start;
    display: flex;
    width: 100%;
    cursor: inherit;
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: var(${tokens.contentTopOffset});
    margin-left: var(${tokens.contentLeftOffset});
`;

export const StyledLabel = styled.span`
    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelLetterSpacing});
    line-height: var(${tokens.labelLineHeight});
`;

export const StyledDescription = styled.div`
    margin-top: var(${tokens.descriptionMarginTop});
    color: var(${tokens.descriptionColor});

    font-family: var(${tokens.descriptionFontFamily});
    font-size: var(${tokens.descriptionFontSize});
    font-style: var(${tokens.descriptionFontStyle});
    font-weight: var(${tokens.descriptionFontWeight});
    letter-spacing: var(${tokens.descriptionLetterSpacing});
    line-height: var(${tokens.descriptionLineHeight});

    &.${classes.onlyDescription} {
        margin-top: 0;
    }
`;
