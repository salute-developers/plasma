import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyEllipsis, addFocus } from '../../mixins';
import { component, mergeConfig } from '../../engines';
import { spinnerConfig, spinnerTokens } from '../Spinner';

import { classes, tokens } from './Button.tokens';

// issue #823
const mergedConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedConfig);

export const ButtonText = styled.span`
    min-width: 4ch;
    flex-shrink: 2;

    ${applyEllipsis()}


    &.${String(classes.contentRelaxed)} {
        text-align: start;
        flex-grow: 2;
    }
`;

export const ButtonValue = styled.span`
    color: var(${tokens.buttonValueColor});

    margin: var(${tokens.buttonValueMargin});

    min-width: 4ch;

    ${applyEllipsis()}
`;

// TODO: #720
export const LoadWrap = styled.div<{ contentPlacing: string; isLoading?: boolean }>`
    opacity: ${({ isLoading }) => (isLoading ? '0' : '1')};
    display: flex;
    align-items: inherit;
    justify-content: ${({ contentPlacing }) => contentPlacing};
    height: 100%;
    width: 100%;
`;

export const Loader = styled.div`
    position: absolute;
`;

export const StyledSpinner = styled(Spinner)`
    ${spinnerTokens.size}: var(${tokens.buttonSpinnerSize});
    ${spinnerTokens.color}: var(${tokens.buttonSpinnerColor});
`;

export const StyledContentLeft = styled.div`
    display: flex;
    margin: var(${tokens.buttonLeftContentMargin});
    align-self: var(${tokens.buttonLeftContentAlignSelf});
`;

export const StyledContentRight = styled.div`
    display: flex;
    margin: var(${tokens.buttonRightContentMargin});
    align-self: var(${tokens.buttonRightContentAlignSelf});
`;

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    a& {
        text-decoration: none;
    }

    /* NOTE:
        --plasma_computed-btn-br-radius is defined in Button.tsx
    */
    --plasma_private-btn-br: var(--plasma_computed-btn-br);
    border-radius: var(--plasma_private-btn-br);

    &&.${String(classes.buttonSquare)} {
        width: var(${tokens.buttonHeight});
        padding: 0;
    }
`;

// INFO: Для возможности переиспользования стилей в других компонентах
export const baseContent = `
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    a& {
        text-decoration: none;
    }

    /* NOTE:
        --plasma_computed-btn-br-radius is defined in Button.tsx
    */
    --plasma_private-btn-br: var(--plasma_computed-btn-br);
    border-radius: var(--plasma_private-btn-br);

    &&.${String(classes.buttonSquare)} {
        width: var(${tokens.buttonHeight});
        padding: 0;
    }

    color: var(${tokens.buttonColor});
    background-color: var(${tokens.buttonBackgroundColor});

    :hover {
        color: var(${tokens.buttonColorHover}, var(${tokens.buttonColor}));
        background-color: var(${tokens.buttonBackgroundColorHover}, var(${tokens.buttonBackgroundColor}));

        scale: var(${tokens.buttonScaleHover});
    }

    :active {
        color: var(${tokens.buttonColorActive}, var(${tokens.buttonColor}));
        background-color: var(${tokens.buttonBackgroundColorActive}, var(${tokens.buttonBackgroundColor}));

        scale: var(${tokens.buttonScaleActive});
    }

    height: var(${tokens.buttonHeight});
    width: var(${tokens.buttonWidth});

    /* TODO: #714 move these calc's to plasma-mapping | ds-generator and add Math.round() */
    padding: 0 var(${tokens.buttonPadding}, calc(var(${tokens.buttonHeight}) * 1.618 / 4));

    font-family: var(${tokens.buttonFontFamily});
    font-size: var(${tokens.buttonFontSize});
    font-style: var(${tokens.buttonFontStyle});
    font-weight: var(${tokens.buttonFontWeight});
    letter-spacing: var(${tokens.buttonLetterSpacing});
    line-height: var(${tokens.buttonLineHeight});

    /* TODO: #710 make it token API ? */
    --plasma_private-btn-outline-size: var(--plasma-button-outline-size, 0.0625rem);

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '-0.125rem',
        outlineSize: 'var(--plasma_private-btn-outline-size)',
        outlineRadius: 'calc(0.125rem + var(--plasma_private-btn-br))',
        outlineColor: `var(${tokens.buttonFocusColor})`,
    })}

    &[disabled] {
        opacity: var(${tokens.buttonDisabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            scale: none;

            color: var(${tokens.buttonColor});
            background-color: var(${tokens.buttonBackgroundColor});
        }
    }

    &.${classes.fixedStretching} {
        width: var(${tokens.buttonWidth});
    }
    &.${classes.filledStretching} {
        width: 100%;
    }
    &.${classes.autoStretching} {
        width: fit-content;
    }
`;
