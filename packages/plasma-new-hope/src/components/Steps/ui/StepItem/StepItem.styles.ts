import { styled } from '@linaria/react';

import { classes, tokens } from '../../Steps.tokens';
import { component, mergeConfig } from '../../../../engines';
import { spinnerConfig, spinnerTokens } from '../../../Spinner';
import { addFocus } from '../../../../mixins';

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

    &.${classes.simple} {
        flex: 0;
        justify-content: center;

        &.${classes.hasIndicator} {
            width: var(${tokens.activeIndicatorSize});
        }

        &:not(.${classes.hasIndicator}) {
            width: var(${tokens.activeBulletSize});
        }
    }

    &.${classes.verticalOrientation} {
        flex-direction: column;
        align-items: center;
        justify-content: center;

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

export const BulletIndicator = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(${tokens.indicatorSize});
    height: var(${tokens.indicatorSize});
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;

    outline: none;
    padding: 0;
    margin: 0;
    border: none;

    cursor: pointer;
    color: var(${tokens.completedIndicatorColor});
    background: var(${tokens.completedIndicatorBackground});

    font-family: var(${tokens.indicatorFontFamily});
    font-size: var(${tokens.indicatorFontSize});
    font-style: var(${tokens.indicatorFontStyle});
    font-weight: var(${tokens.indicatorFontWeight});
    letter-spacing: var(${tokens.indicatorLetterSpacing});
    line-height: var(${tokens.indicatorLineHeight});

    ${addFocus({
        outlineOffset: '-0.0625rem',
        outlineSize: '0.0625rem',
        outlineRadius: '50%',
        outlineColor: `var(${tokens.focusColor})`,
    })}

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

        ${addFocus({
            outlineOffset: '-0.1875rem',
            outlineSize: '0.0625rem',
            outlineRadius: '50%',
            outlineColor: `var(${tokens.focusColor})`,
        })}
    }

    &.${classes.inactive} {
        color: var(${tokens.inactiveIndicatorColor});
        background: var(${tokens.inactiveIndicatorBackground});

        &.${classes.simple} {
            &:before,
            &:after {
                background: var(${tokens.dividerColor});
            }
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

        background: var(${tokens.activeIndicatorBackground});
    }
`;

export const StepItemDivider = styled.div<{ indentToken?: string }>`
    flex: 1;

    width: 100%;
    height: var(${tokens.dividerThickness});

    background: var(${tokens.dividerColor});

    &.${classes.inactive} {
        background: var(${tokens.inactiveIndicatorBackground});
    }

    &.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
    }

    &.${classes.transparentDivider} {
        background: transparent;
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
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    color: var(${tokens.activeIndicatorColor});

    &.${classes.verticalOrientation} {
        flex-direction: row;
        align-items: stretch;

        ${StepItemDivider} {
            width: var(${tokens.dividerThickness});
            height: 100%;
        }
    }

    ${StepItemTitle} {
        color: var(${tokens.completedTitleColor}, ${tokens.activeTitleColor});
    }

    &.${classes.active} {
        ${BulletIndicator} {
            cursor: default;
        }

        ${StepItemTitle} {
            color: var(${tokens.activeTitleColor});
        }
    }

    &.${classes.inactive} {
        color: var(${tokens.inactiveIndicatorColor});

        ${StepItemTitle} {
            color: var(${tokens.inactiveTitleColor});
        }
    }

    &.${classes.simple} {
        flex: 0;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 100%;

        &.${classes.hasIndicator} {
            min-width: var(${tokens.activeIndicatorSize});
            min-height: var(${tokens.activeIndicatorSize});
        }

        &:not(.${classes.hasIndicator}) {
            width: var(${tokens.activeBulletSize});
            min-height: var(${tokens.activeBulletSize});
        }

        &.${classes.inactive}, &:not(.${classes.active}) {
            &:before,
            &:after {
                content: '';
                display: block;
                width: calc((var(${tokens.activeIndicatorSize}) - var(${tokens.indicatorSize})) / 2);
                height: var(${tokens.dividerThickness});
                background: var(${tokens.dividerColor});
            }

            &:not(.${classes.hasIndicator}) {
                &:before,
                &:after {
                    width: calc((var(${tokens.activeBulletSize}) - var(${tokens.bulletSize})) / 2);
                }
            }

            &.${classes.verticalOrientation} {
                flex-direction: column;

                &:before,
                &:after {
                    width: var(${tokens.dividerThickness});
                    height: calc((var(${tokens.activeIndicatorSize}) - var(${tokens.indicatorSize})) / 2);
                    margin: 0 auto;
                    align-self: auto;
                }

                &:not(.${classes.hasIndicator}) {
                    &:before,
                    &:after {
                        height: calc((var(${tokens.activeBulletSize}) - var(${tokens.bulletSize})) / 2);
                    }
                }

                &:after {
                    margin: 0 auto;
                }
            }

            &.isFirst {
                &:before {
                    background: transparent;
                }
            }

            &.isLast {
                &:after {
                    background: transparent;
                }
            }
        }

        &.${classes.inactive} {
            &:after,
            &:before {
                background: var(${tokens.inactiveIndicatorBackground});
            }
        }

        &.isPrevInactive {
            &:before {
                background: var(${tokens.inactiveIndicatorBackground});
            }
        }

        &.isNextInactive {
            &:after {
                background: var(${tokens.inactiveIndicatorBackground});
            }
        }

        &.${classes.disabled} {
            &:before,
            &:after {
                background: var(${tokens.inactiveIndicatorBackground});
                opacity: 1;
            }
        }

        &.${classes.transparentDivider} {
            &:before,
            &:after {
                background: transparent;
            }
        }
    }

    &:not(.${classes.simple}):not(.${classes.verticalOrientation}) {
        &.isNextActive {
            ${BulletIndicatorWrapper} {
                width: calc(100% - (var(${tokens.activeIndicatorSize}) - var(${tokens.indicatorSize})) / 2);
            }
        }

        &.${classes.active} {
            ${BulletIndicatorWrapper} {
                margin-left: calc((var(${tokens.activeIndicatorSize}) - var(${tokens.indicatorSize})) / -2);
                width: calc(100% + (var(${tokens.activeIndicatorSize}) - var(${tokens.indicatorSize})) / 2);
            }
        }
    }

    &.${classes.hovered} {
        &:not(.${classes.active}) {
            ${StepItemTitle} {
                cursor: pointer;
                color: var(${tokens.completedTitleColorHover});
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

    &.${classes.disabled} {
        cursor: default;
        opacity: var(${tokens.disabledOpacity});
    }
`;
