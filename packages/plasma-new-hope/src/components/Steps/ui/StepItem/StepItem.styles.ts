import { styled } from '@linaria/react';

import { classes, tokens } from '../../Steps.tokens';
import { component, mergeConfig } from '../../../../engines';
import { spinnerConfig, spinnerTokens } from '../../../Spinner';

const mergedConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedConfig);

export const SpinnerStyled = styled(Spinner)<{ hasIndicator?: boolean }>`
    ${spinnerTokens.size}: ${({ hasIndicator }) =>
    hasIndicator ? `var(${tokens.activeIndicatorSize})` : `var(${tokens.activeBulletSize})`};
    ${spinnerTokens.color}: var(${tokens.activeIndicatorColor});
`;

export const StepItemTitle = styled.div`
    padding-top: var(${tokens.titlePaddingTop});
    padding-right: var(${tokens.contentSidePadding});

    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    font-weight: var(${tokens.titleFontWeight});
    letter-spacing: var(${tokens.titleLetterSpacing});
    line-height: var(${tokens.titleLineHeight});

    word-break: break-word;
`;

export const StepItemContent = styled.div`
    padding-top: var(${tokens.contentPaddingTop});
    padding-right: var(${tokens.contentSidePadding});

    font-family: var(${tokens.contentFontFamily});
    font-size: var(${tokens.contentFontSize});
    font-style: var(${tokens.contentFontStyle});
    font-weight: var(${tokens.contentFontWeight});
    letter-spacing: var(${tokens.contentLetterSpacing});
    line-height: var(${tokens.contentLineHeight});

    word-break: break-word;

    color: var(${tokens.contentColor});
`;

export const BulletIndicatorWrapper = styled.div`
    display: flex;
    align-items: center;

    &:not(.${classes.simple}) {
        flex: 0;

        &.${classes.hasIndicator} {
            width: 100%;
            min-height: var(${tokens.activeIndicatorSize});
        }
        &:not(.${classes.hasIndicator}) {
            width: 100%;
            min-height: var(${tokens.activeBulletSize});
        }

        &.${classes.verticalOrientation} {
            padding-right: var(${tokens.verticalContentPaddingLeft});
        }
    }

    &.${classes.verticalOrientation} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;

        &.${classes.hasIndicator} {
            min-width: var(${tokens.activeIndicatorSize});
        }
        &:not(.${classes.hasIndicator}) {
            min-width: var(${tokens.activeBulletSize});
        }
    }

    &.${classes.centered} {
        justify-content: center;
    }
`;

export const BulletIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(${tokens.indicatorSize});
    height: var(${tokens.indicatorSize});
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;

    color: var(${tokens.completedIndicatorColor});
    background-color: var(${tokens.completedIndicatorBackground});

    font-family: var(${tokens.indicatorFontFamily});
    font-size: var(${tokens.indicatorFontSize});
    font-style: var(${tokens.indicatorFontStyle});
    font-weight: var(${tokens.indicatorFontWeight});
    letter-spacing: var(${tokens.indicatorLetterSpacing});
    line-height: var(${tokens.indicatorLineHeight});

    &.${classes.active} {
        width: var(${tokens.activeIndicatorSize});
        height: var(${tokens.activeIndicatorSize});

        border: var(${tokens.dividerThickness}) var(${tokens.activeIndicatorBorder});

        font-family: var(${tokens.activeIndicatorFontFamily});
        font-size: var(${tokens.activeIndicatorFontSize});
        font-style: var(${tokens.activeIndicatorFontStyle});
        font-weight: var(${tokens.activeIndicatorFontWeight});
        letter-spacing: var(${tokens.activeIndicatorLetterSpacing});
        line-height: var(${tokens.activeIndicatorLineHeight});

        color: var(${tokens.activeIndicatorColor});
        background: var(${tokens.activeIndicatorBackground});
    }

    &.${classes.inactive} {
        color: var(${tokens.inactiveIndicatorColor});
        background: var(${tokens.inactiveIndicatorBackground});

        &:before,
        &:after {
            background: var(${tokens.inactiveIndicatorBackground});
        }
    }
`;

export const Bullet = styled(BulletIndicator)`
    width: var(${tokens.bulletSize});
    height: var(${tokens.bulletSize});

    &.${classes.active} {
        width: var(${tokens.activeBulletSize});
        height: var(${tokens.activeBulletSize});

        border: var(${tokens.dividerThickness}) var(${tokens.activeIndicatorBorder});

        background-color: var(${tokens.activeIndicatorBackground});
    }
`;

export const StepItemDivider = styled.div<{ indentToken?: string }>`
    width: 100%;
    height: var(${tokens.dividerThickness});

    flex: 1;
    background-color: var(${tokens.activeIndicatorColor});

    &.${classes.inactive} {
        background-color: var(${tokens.inactiveIndicatorBackground});
    }

    &.${classes.transparentDivider} {
        background-color: transparent;
    }

    &.${classes.verticalOrientation} {
        width: var(${tokens.dividerThickness});
        height: 100%;
    }

    &.${classes.indentDivider} {
        height: ${({ indentToken }) => indentToken || ''};
        min-height: ${({ indentToken }) => indentToken || ''};
        max-height: ${({ indentToken }) => indentToken || ''};

        &.${classes.simple} {
            height: auto;
            max-height: none;
        }
    }
`;

export const StepItemContentWrapper = styled.div`
    &.${classes.verticalOrientation} {
        ${StepItemTitle} {
            padding-top: var(${tokens.contentVerticalPadding});
            padding-right: 0;
        }

        ${StepItemContent} {
            padding-top: var(${tokens.contentVerticalPadding});
            padding-bottom: var(${tokens.contentVerticalPadding});
            padding-right: 0;
        }
    }
`;

export const StepItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    &.${classes.verticalOrientation} {
        flex-direction: row;
        align-items: stretch;

        ${StepItemDivider} {
            width: var(${tokens.dividerThickness});
            height: 100%;
        }
    }

    &.${classes.active} {
        ${StepItemTitle} {
            color: var(${tokens.activeTitleColor});
        }
    }

    &.${classes.inactive} {
        ${StepItemTitle} {
            color: var(${tokens.inactiveTitleColor});
        }
    }

    &.${classes.hovered} {
        &:not(.${classes.active}) {
            ${StepItemTitle} {
                cursor: pointer;
                color: var(${tokens.activeTitleColorHover});
            }
            ${BulletIndicator}, ${Bullet} {
                color: var(${tokens.completedIndicatorColorHover});
                background: var(${tokens.completedIndicatorBackgroundHover});
            }
        }

        &.${classes.inactive} {
            ${StepItemTitle} {
                color: var(${tokens.inactiveTitleColorHover});
            }
            ${BulletIndicator}, ${Bullet} {
                color: var(${tokens.inactiveIndicatorColorHover});
                background: var(${tokens.inactiveIndicatorBackgroundHover});
            }
        }

        ${BulletIndicatorWrapper} {
            cursor: pointer;
        }
    }

    &.${classes.centered} {
        align-items: center;

        ${StepItemContentWrapper} {
            display: flex;
            flex-direction: column;
            align-items: center;

            padding-left: calc(var(${tokens.contentSidePadding}) / 2);
            padding-right: calc(var(${tokens.contentSidePadding}) / 2);

            ${StepItemTitle} {
                width: 100%;
            }

            ${StepItemTitle}, ${StepItemContent} {
                padding-right: 0;
                text-align: center;
            }
        }
    }

    &.${classes.simple} {
        flex: 0;
    }

    &.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
    }
`;
