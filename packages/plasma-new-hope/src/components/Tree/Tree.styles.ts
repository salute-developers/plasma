import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyEllipsis } from '../../mixins';
import { IconDisclosureRightCentered, IconFolder } from '../_Icon';

import { treeTokens as tokens, classes } from './Tree.tokens';

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

export const base = css`
    .rc-tree .rc-tree-treenode {
        position: relative;
        display: flex;
        align-items: center;
        min-height: var(${tokens.itemHeight});
        padding: 0 var(${tokens.itemPadding});
    }

    .rc-tree .rc-tree-treenode::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0.25rem;
        bottom: 0.25rem;
        left: calc(var(${tokens.itemPadding}) + var(${tokens.switcherSize}));
        right: 0;
        background: transparent;
        border-radius: 12px;
    }

    .rc-tree.${classes.treeItemFilled} .rc-tree-treenode::before {
        inset: 0;
        border-radius: 0;
    }

    .rc-tree .rc-tree-treenode.rc-tree-treenode-selected::before {
        background: var(${tokens.itemBackgroundColor}) !important;
    }

    .rc-tree .rc-tree-treenode:hover::before {
        background: var(${tokens.itemBackgroundColorHover});
    }

    .rc-tree .rc-tree-treenode:active::before {
        background: var(${tokens.itemBackgroundColorActive});
    }

    .rc-tree .rc-tree-treenode .rc-tree-node-content-wrapper {
        display: flex;
        align-items: center;
        align-self: stretch;
        height: auto;
        flex: 1;

        // Лайфхак для корректного обрезания текста
        width: 1px;
    }

    .rc-tree .rc-tree-treenode span.rc-tree-switcher {
        width: var(${tokens.switcherSize});
        height: var(${tokens.switcherSize});
        margin: var(${tokens.switcherMargin});
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

    .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_open .arrow {
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

        ${applyEllipsis()}
    }

    .rc-tree.tree-inverted .rc-tree-treenode {
        flex-direction: row-reverse;
    }

    .rc-tree.tree-inverted .rc-tree-treenode .rc-tree-indent-unit {
        display: none;
    }

    .rc-tree-node-selected {
        opacity: 1;
        box-shadow: none;
        background: none;
    }

    .rc-tree-node-selected .rc-tree-title {
        color: var(${tokens.colorSelected});
    }

    .rc-tree-node-selected ${IconFolderWrapper} {
        color: var(${tokens.colorSelected});
    }

    .rc-tree-indent-unit {
        width: var(${tokens.itemIndent});
    }
`;
