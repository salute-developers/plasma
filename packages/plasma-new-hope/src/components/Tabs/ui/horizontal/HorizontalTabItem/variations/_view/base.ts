import { css } from 'styled-components';
import { applyHover } from 'src/mixins';

import { classes, tokens } from '../../../../../tokens';
import { TabItemValue } from '../../HorizontalTabItem.styles';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    margin-left: var(${tokens.itemMarginLeftFilled}, var(${tokens.itemMarginLeft}));

    ${applyHover(`
        &:hover {
            color: var(${tokens.itemColorHover});
            background-color: var(${tokens.itemBackgroundColorHover});

            ${TabItemValue} {
                color: var(${tokens.itemValueColorHover});
            }
        }
    `)}

    &:active {
        color: var(${tokens.itemColorActive});

        ${TabItemValue} {
            color: var(${tokens.itemValueColorActive});
        }
    }

    &.${classes.tabItemAnimated} {
        transition: var(${tokens.itemBackgroundTransition});
    }

    &.${classes.selectedTabsItem} {
        color: var(${tokens.itemSelectedColor});
        cursor: var(${tokens.itemCursor});

        ${applyHover(`
            &:hover {
                color: var(${tokens.itemSelectedColorHover});
                background-color: var(${tokens.itemSelectedBackgroundColorHover});

                &::after {
                    background: var(${tokens.itemSelectedDividerColorHover});
                }
            }
        `)}

        ${TabItemValue} {
            color: var(${tokens.itemSelectedValueColorHover});

            ${applyHover(`
                &:hover {
                    color: var(${tokens.itemSelectedValueColorHover});
                }
            `)}
        }
    }
`;
