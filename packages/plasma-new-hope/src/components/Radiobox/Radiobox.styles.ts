import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { checkboxTokens } from '../Checkbox';
import { applyEllipsis, applyNoUserSelect } from '../../mixins';

import { classes, tokens } from './Radiobox.tokens';

// NOTE: Необходимое переопределение токенов из компонента Checkbox т.к. используются его части
const mappingOverride = `
    ${checkboxTokens.labelFontFamily}: var(${tokens.labelFontFamily});
    ${checkboxTokens.labelFontSize}: var(${tokens.labelFontSize});
    ${checkboxTokens.labelFontStyle}: var(${tokens.labelFontStyle});
    ${checkboxTokens.labelFontWeight}: var(${tokens.labelFontWeight});
    ${checkboxTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
    ${checkboxTokens.labelLineHeight}: var(${tokens.labelLineHeight});
    ${checkboxTokens.descriptionMarginTop}: var(${tokens.descriptionMarginTop});
    ${checkboxTokens.descriptionFontFamily}: var(${tokens.descriptionFontFamily});
    ${checkboxTokens.descriptionFontSize}: var(${tokens.descriptionFontSize});
    ${checkboxTokens.descriptionFontStyle}: var(${tokens.descriptionFontStyle});
    ${checkboxTokens.descriptionFontWeight}: var(${tokens.descriptionFontWeight});
    ${checkboxTokens.descriptionLetterSpacing}: var(${tokens.descriptionLetterSpacing});
    ${checkboxTokens.descriptionLineHeight}: var(${tokens.descriptionLineHeight});

    ${checkboxTokens.fillColor}: var(${tokens.fillColor});
    ${checkboxTokens.descriptionColor}: var(${tokens.descriptionColor});
    ${checkboxTokens.triggerBorderColor}: var(${tokens.triggerBorderColor});

    ${checkboxTokens.contentTopOffset}: var(${tokens.contentTopOffset});
    ${checkboxTokens.contentLeftOffset}: var(${tokens.contentLeftOffset});
    ${checkboxTokens.triggerSize}: var(${tokens.triggerSize});
    ${checkboxTokens.triggerBorderRadius}: var(${tokens.triggerBorderRadius});
    ${checkboxTokens.triggerMargin}: var(${tokens.triggerMargin});
`;

export const StyledEllipse = styled.div`
    width: var(${tokens.ellipseSize});
    height: var(${tokens.ellipseSize});
    border-radius: var(${tokens.ellipseSize});

    background-color: var(${tokens.ellipseColor});
    transition: transform 0.3s ease-in-out;
    transform: scale(0);

    input:checked + label & {
        transform: scale(1);
    }
`;

export const base = css`
    ${mappingOverride};

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
