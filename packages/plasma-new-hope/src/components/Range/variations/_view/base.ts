import { css } from '@linaria/core';
import { informationWrapperClasses } from 'src/components/InformationWrapper';
import { textFieldTokens } from 'src/components/TextField';

import { classes, tokens } from '../../Range.tokens';
import { StyledDivider, ContentWrapper, StyledInput, StyledContentLeft } from '../../Range.styles';

export const base = css`
    ${ContentWrapper} {
        background-color: var(${tokens.background});
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColor});

        &.${classes.rangeError} {
            background-color: var(${tokens.backgroundError});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorError});
            
            ${StyledInput} {
                ${textFieldTokens.color}: var(${tokens.textFieldColorError}, var(${tokens.textFieldColor}));
            }
        }

        &.${classes.rangeSuccess} {
            background-color: var(${tokens.backgroundSuccess});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorSuccess});
            
            ${StyledInput} {
                ${textFieldTokens.color}: var(${tokens.textFieldColorSuccess}, var(${tokens.textFieldColor}));
            }
        }

        &:before {
            box-shadow: var(${tokens.shadow});
        }
    }

    &.${classes.clear} {
        .${classes.rangeSuccess} {
            ${StyledContentLeft} {
                color: var(${tokens.contentSlotColorSuccess});

                &:hover {
                    color: var(${tokens.contentSlotColorSuccessHover});
                }

                &:active {
                    color: var(${tokens.contentSlotColorSuccessActive});
                }
            }

            ${ContentWrapper}:before {
                background: var(${tokens.textFieldDividerColorSuccess});
            }

            ${StyledInput} {
                ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColorSuccess});
                ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorSuccessHover});
                ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorSuccessActive});
                
                ${textFieldTokens.dividerColor}: transparent;
                ${textFieldTokens.dividerColorHover}: transparent;
                ${textFieldTokens.dividerColorFocus}: transparent;
            }
        }

        ${StyledInput}.${classes.rangeValueSuccess} {
            ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColorSuccess});
            ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorSuccessHover});
            ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorSuccessActive});
            
            ${textFieldTokens.dividerColor}: var(${tokens.textFieldDividerColorSuccess});
            ${textFieldTokens.dividerColorHover}: var(${tokens.textFieldDividerColorSuccess});
            ${textFieldTokens.dividerColorFocus}: var(${tokens.textFieldDividerColorSuccess});
        }

        .${classes.rangeError} {
            ${StyledContentLeft} {
                color: var(${tokens.contentSlotColorError});

                &:hover {
                    color: var(${tokens.contentSlotColorErrorHover});
                }

                &:active {
                    color: var(${tokens.contentSlotColorErrorActive});
                }
            }

            ${ContentWrapper}:before {
                background: var(${tokens.textFieldDividerColorError});
            }
            
            ${StyledInput} {
                ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColorError});
                ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorErrorHover});
                ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorErrorActive});
                
                ${textFieldTokens.dividerColor}: transparent;
                ${textFieldTokens.dividerColorHover}: transparent;
                ${textFieldTokens.dividerColorFocus}: transparent;
            }
        }
            
        ${StyledInput}.${classes.rangeValueError} {
            ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColorError});
            ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorErrorHover});
            ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorErrorActive});

            ${textFieldTokens.dividerColor}: var(${tokens.textFieldDividerColorError});
            ${textFieldTokens.dividerColorHover}: var(${tokens.textFieldDividerColorError});
            ${textFieldTokens.dividerColorFocus}: var(${tokens.textFieldDividerColorError});
        }
    }

    ${StyledDivider} {
        color: var(${tokens.dividerColor});
    }

    .${classes.rangeSuccess}, .${classes.rangeValueSuccess} {
        .${informationWrapperClasses.leftHelper} {
            color: var(${tokens.leftHelperColorSuccess});
        }
    }

    .${classes.rangeError}, .${classes.rangeValueError} {
        .${informationWrapperClasses.leftHelper} {
            color: var(${tokens.leftHelperColorError});
        }
    }
`;
