import styled, { css } from 'styled-components';
import { component, mergeConfig } from 'src/engines';
import { addFocus } from 'src/mixins';

import { classes, tokens } from '../../Steps.tokens';
import { spinnerConfig, spinnerTokens } from '../../../Spinner';

const mergedConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedConfig);

export const SpinnerStyled = styled(Spinner)<{ hasIndicator?: boolean }>`
    ${spinnerTokens.size}: ${({ hasIndicator }) =>
    hasIndicator ? `var(${tokens.activeIndicatorSize})` : `var(${tokens.activeBulletSize})`};
    ${spinnerTokens.color}: var(${tokens.loaderSpinnerColor}, var(${tokens.activeIndicatorColor}));
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
    box-sizing: content-box;
    flex: 0;
    width: 100%;

    &.${classes.hasIndicator} {
        min-height: var(${tokens.activeIndicatorSize});
    }

    &:not(.${classes.hasIndicator}) {
        min-height: var(${tokens.activeBulletSize});
    }

    &:not(.${classes.simple}).${classes.verticalOrientation} {
        padding-right: var(${tokens.verticalContentPaddingLeft});
    }

    &.${classes.verticalOrientation} {
        flex-direction: column;
        align-items: center;

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

export const BulletSlot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    .${classes.hasIndicator} & {
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

    border: var(${tokens.dividerThickness}) solid var(${tokens.completedIndicatorBorder}, transparent);

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
        outlineOffset: '0.125rem',
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
            outlineOffset: '0.25rem',
            outlineSize: '0.0625rem',
            outlineRadius: '50%',
            outlineColor: `var(${tokens.focusColor})`,
        })}
    }

    &.${classes.inactive} {
        color: var(${tokens.inactiveIndicatorColor});
        background: var(${tokens.inactiveIndicatorBackground});
        border: none;
    }
`;

export const Bullet = styled(BulletIndicator)`
    width: var(${tokens.bulletSize});
    height: var(${tokens.bulletSize});

    border: var(${tokens.dividerThickness}) solid
        var(${tokens.completedBulletBorder}, var(${tokens.completedIndicatorBorder}, transparent));
    background: var(${tokens.completedBulletBackground}, var(${tokens.completedIndicatorBackground}));

    &.${classes.active} {
        width: var(${tokens.activeBulletSize});
        height: var(${tokens.activeBulletSize});

        border: var(${tokens.dividerThickness})
            var(${tokens.bulletActiveIndicatorBorder}, var(${tokens.activeIndicatorBorder}));

        background: var(${tokens.bulletActiveBackground}, var(${tokens.activeIndicatorBackground}));
    }

    &.${classes.inactive} {
        color: var(${tokens.inactiveIndicatorColor});
        background: var(${tokens.inactiveIndicatorBackground});
        border: none;
    }
`;

export const StepItemDivider = styled.div`
    flex: 1;

    width: 100%;
    height: var(${tokens.dividerThickness});

    background: var(${tokens.dividerColor});

    &.${classes.nextActive} {
        background: var(${tokens.dividerGradientColor}, var(${tokens.dividerColor}));
    }

    .${classes.centered} &.${classes.nextActive} {
        background: var(${tokens.dividerGradientColor}, var(${tokens.dividerColor}));
        background-size: 200% 100%;
        background-position: 0% 0%;
    }

    &.${classes.prevCompleted} {
        background: var(${tokens.dividerGradientColor}, var(${tokens.dividerColor}));
        background-size: 200% 100%;
        background-position: 100% 0%;
    }

    &.${classes.verticalOrientation} {
        width: var(${tokens.dividerThickness});

        background: var(${tokens.dividerColor});

        &.${classes.nextActive} {
            background: var(${tokens.dividerVerticalGradientColor}, var(${tokens.dividerColor}));
        }
    }

    &.${classes.inactive} {
        background: var(${tokens.inactiveIndicatorBackground});
    }

    &.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }

    &.${classes.transparentDivider} {
        background: transparent;
        opacity: 0;
    }
`;

export const StepItemCenteredDivider = styled.div`
    flex: 1;

    width: 100%;
    height: var(${tokens.dividerThickness});

    background: var(${tokens.dividerColor});

    .${classes.centered} &.${classes.nextActive} {
        background: var(${tokens.dividerGradientColor}, var(${tokens.dividerColor}));
        background-size: 200% 100%;
        background-position: 0% 0%;
    }

    &.${classes.prevCompleted} {
        background: var(${tokens.dividerGradientColor}, var(${tokens.dividerColor}));
        background-size: 200% 100%;
        background-position: 100% 0%;
    }

    &.${classes.verticalOrientation} {
        width: var(${tokens.dividerThickness});
    }

    &.${classes.inactive} {
        background: var(${tokens.inactiveIndicatorBackground});
    }

    &.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }

    &.${classes.transparentDivider} {
        background: transparent;
        opacity: 0;
    }
`;

export const StepItemContentWrapper = styled.div`
    &.${classes.noTitle} {
        ${StepItemContent} {
            padding-top: 0;
        }
    }

    &.${classes.verticalOrientation} {
        width: 100%;

        ${StepItemTitle} {
            padding-right: 0;
        }

        ${StepItemContent} {
            padding-top: var(${tokens.contentVerticalPadding});
            padding-bottom: var(${tokens.contentVerticalPadding});
            padding-right: 0;
        }
    }

    &.${classes.verticalOrientation}.${classes.noTitle} {
        ${StepItemContent} {
            padding-top: 0;
        }
    }
`;

export const base = css`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    color: var(${tokens.activeIndicatorColor});

    &.${classes.verticalOrientation}.${classes.verticalLastItem} {
        flex: 0 0 auto;
    }

    &.${classes.verticalOrientation} {
        flex-direction: row;
        align-items: stretch;

        &.${classes.hasIndicator} {
            ${BulletIndicator}.${classes.active},
            ${SpinnerStyled} {
                margin-top: calc((var(${tokens.indicatorSize}) - var(${tokens.activeIndicatorSize})) / 2);
            }

            
            & ${StepItemDivider}.${classes.nextActive} {
                flex: unset;
                height: calc(100% - (var(${tokens.activeIndicatorSize}) - var(${tokens.indicatorSize})) / 2 - var(${tokens.indicatorSize}));
            }

            & ${StepItemTitle} {
                padding-top: calc((var(${tokens.indicatorSize}) - var(${tokens.titleLineHeight})) / 2);
            }
        }

        &:not(.${classes.hasIndicator}) {
            ${Bullet}.${classes.active},
            ${SpinnerStyled} {
                margin-top: calc((var(${tokens.bulletSize}) - var(${tokens.activeBulletSize})) / 2);
            }

            
            & ${StepItemDivider}.${classes.nextActive} {
                flex: unset;
                height: calc(100% - (var(${tokens.activeBulletSize}) - var(${tokens.bulletSize})) / 2 - var(${tokens.bulletSize}));
            }

            & ${StepItemTitle} {
                padding-top: 0;
                margin-top: calc((var(${tokens.bulletSize}) - var(${tokens.titleLineHeight})) / 2);
            }
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

    &:not(.${classes.simple}):not(.${classes.verticalOrientation}) {
        &:not(.${classes.centered}).isNextActive {
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
            > ${StepItemContentWrapper} > ${StepItemTitle} {
                cursor: pointer;
                color: var(${tokens.completedTitleColorHover});
            }

            > ${BulletIndicatorWrapper} ${BulletIndicator} {
                color: var(${tokens.completedIndicatorColorHover});
                background: var(${tokens.completedIndicatorBackgroundHover});

                border: var(${tokens.dividerThickness}) solid var(${tokens.completedIndicatorBorderHover}, transparent);
            }

            > ${BulletIndicatorWrapper} ${Bullet} {
                color: var(${tokens.completedBulletBackground}, var(${tokens.completedIndicatorColorHover}));
                background: var(
                    ${tokens.completedBulletBackgroundHover},
                    var(${tokens.completedIndicatorBackgroundHover})
                );

                border: var(${tokens.dividerThickness}) solid var(${tokens.completedBulletBorderHover}, transparent);
            }
        }

        &.${classes.inactive} {
            > ${StepItemContentWrapper} > ${StepItemTitle} {
                color: var(${tokens.inactiveTitleColorHover});
            }

            > ${BulletIndicatorWrapper} ${BulletIndicator},
            > ${BulletIndicatorWrapper} ${Bullet} {
                color: var(${tokens.inactiveIndicatorColorHover});
                background: var(${tokens.inactiveIndicatorBackgroundHover});
                border: none;
            }
        }

        > ${BulletIndicatorWrapper} {
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
        cursor: not-allowed;
        opacity: var(${tokens.disabledOpacity});

        ${BulletIndicator},
        ${Bullet} {
            cursor: not-allowed;
        }
    }
`;
