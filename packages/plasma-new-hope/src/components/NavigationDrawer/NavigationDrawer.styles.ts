import { css } from '@linaria/core';

import { classes, tokens } from './NavigationDrawer.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    height: 100%;

    .${classes.navigationDrawerSidebar} {
        width: 100%;

        height: calc(100% - 34px);
        display: flex;
        flex-direction: column;
        padding: 20px 12px 12px 12px;
        gap: 10px;
        min-width: 250px;
        max-width: 250px;
        box-shadow: var(${tokens.boxShadow});

        &.${classes.navigationDrawerSidebarClosed} {
            min-width: 40px;
            max-width: 40px;
        }

        .${classes.navigationDrawerMenuItemIcon} {
            width: var(${tokens.iconSize});
            height: var(${tokens.iconSize});
        }

        .${classes.navigationDrawerSection} {
            display: flex;
            flex-direction: column;

            .${classes.navigationDrawerSectionHeader} {
                color: var(${tokens.sectionColor});
                font-size: 14px;

                svg {
                    color: var(${tokens.sectionColor});
                }
            }

            .${classes.navigationDrawerMenuItem} {
                display: flex;
                gap: 12px;
                align-items: center;
            }
        }

        .${classes.navigationDrawerDivider} {
            height: 1px;
            background: var(${tokens.dividerColor});
            margin-bottom: 8px;
        }
    }

    .${classes.navigationDrawerContent} {
        width: 100%;
        height: 100%;
    }
`;
