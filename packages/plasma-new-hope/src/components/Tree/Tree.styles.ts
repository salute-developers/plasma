import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { IconDisclosureRightCentered, IconFolder } from '../_Icon';

import { treeTokens as tokens } from './Tree.tokens';

export const base = css`
    .rc-tree .rc-tree-treenode {
        display: flex;
        align-items: center;
        min-height: var(${tokens.itemHeight});
    }

    .rc-tree .rc-tree-treenode .rc-tree-node-content-wrapper {
        display: flex;
        align-items: center;
        height: auto;
    }

    .rc-tree .rc-tree-treenode span.rc-tree-switcher {
        width: auto;
        height: auto;
        margin-right: 0;
        line-height: 0;
        vertical-align: 0;
        background: transparent;
    }

    .rc-tree .rc-tree-treenode span.rc-tree-iconEle {
        width: auto;
        height: auto;
        margin-right: 0;
        vertical-align: 0;
        background: transparent;
    }

    .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_open {
        transform: rotate(90deg);
    }

    .rc-tree .rc-tree-treenode span.rc-tree-checkbox {
        display: none;
    }

    .rc-tree-title {
        color: var(${tokens.color});
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    .rc-tree.tree-inverted .rc-tree-treenode {
        flex-direction: row-reverse;
    }

    .rc-tree.tree-inverted .rc-tree-treenode .rc-tree-indent-unit {
        display: none;
    }
`;

export const IconArrowWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.arrowColor});

    &:hover {
        color: var(${tokens.arrowColorHover});
    }

    &:active {
        color: var(${tokens.arrowColorActive});
    }
`;

export const StyledArrow = styled(IconDisclosureRightCentered)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;
`;

export const IconFolderWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.arrowColor});
    margin: var(${tokens.iconFolderMargin});
`;

export const StyledFolder = styled(IconFolder)``;
