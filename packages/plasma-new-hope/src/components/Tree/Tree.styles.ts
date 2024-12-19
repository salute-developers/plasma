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
    .rc-tree, .rc-tree-list {
        border: none !important;
    }

    .rc-tree .rc-tree-treenode {
        position: relative;
        display: flex;
        align-items: center;
        min-height: var(${tokens.itemHeight});
        padding: 0;
    }

    .rc-tree.${classes.treeItemFilled} .rc-tree-treenode {
        padding: 0 var(${tokens.itemPadding}) !important;
    }

    .rc-tree.${classes.treeInverted}:not(${classes.treeItemFilled}) .rc-tree-treenode {
        padding: 0 var(${tokens.itemPaddingTight});
    }

    .rc-tree .rc-tree-treenode::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0.25rem;
        bottom: 0.25rem;
        left: var(${tokens.switcherSize});
        right: 0;
        background: transparent;
        border-radius: var(${tokens.itemBorderRadius});
    }

    .rc-tree .rc-tree-treenode.rc-tree-treenode-disabled {
        opacity: var(${tokens.itemDisabledOpacity});
    }

    .rc-tree.${classes.treeItemFilled} .rc-tree-treenode::before {
        inset: 0;
        border-radius: 0;
    }

    .rc-tree .rc-tree-treenode.rc-tree-treenode-selected::before {
        background: var(${tokens.itemBackgroundColor}) !important;
    }

    .rc-tree .rc-tree-treenode:not(.rc-tree-treenode-disabled):hover::before {
        background: var(${tokens.itemBackgroundColorHover});
    }

    .rc-tree .rc-tree-treenode:not(.rc-tree-treenode-disabled):active::before {
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

    .rc-tree.${classes.treeInverted} .rc-tree-treenode span.rc-tree-switcher {
        margin: 0;
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

    .rc-tree.${classes.treeInverted} .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_close .arrow {
        transform: rotate(90deg);
    }

    .rc-tree.${classes.treeInverted} .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_open .arrow {
        transform: rotate(0);
    }

    .rc-tree .rc-tree-treenode span.rc-tree-checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        vertical-align: 0;
        width: var(${tokens.checkboxSize});
        height: var(${tokens.checkboxSize});
        margin: var(${tokens.checkboxMargin});
        background-image: none;
    }

    .rc-tree .rc-tree-treenode span.rc-tree-checkbox::before {
        content: '';
        display: block;
        width: var(${tokens.checkboxInnerSize});
        height: var(${tokens.checkboxInnerSize});
        border: 0.125rem solid var(${tokens.checkboxBorderColor});
        border-radius: var(${tokens.checkboxBorderRadius});
        box-sizing: border-box;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .rc-tree .rc-tree-treenode span.rc-tree-checkbox-checked::before {
        background-color: var(${tokens.checkboxBackgroundColor});
        border-color: var(${tokens.checkboxBackgroundColor});
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none'%3E%3Cpath fill='white' d='m5.70711,8.15582c-0.39053,-0.39052 -1.02369,-0.39052 -1.41422,0c-0.39052,0.39053 -0.39052,1.02369 0,1.41422l3.70666,3.70666l6.71095,-6.70248c0.3908,-0.39027 0.3912,-1.02344 0.0009,-1.41421c-0.3903,-0.39077 -1.02344,-0.39117 -1.41421,-0.00089l-5.29674,5.29004l-2.29334,-2.29334z' /%3E%3C/svg%3E");
    }

    .rc-tree .rc-tree-treenode span.rc-tree-checkbox.rc-tree-checkbox-indeterminate::before {
        background-color: var(${tokens.checkboxBackgroundColor});
        border-color: var(${tokens.checkboxBackgroundColor});
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z' fill='white'/%3E%3C/svg%3E");
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

    .rc-tree.tree-inverted .rc-tree-treenode span.rc-tree-switcher {
        order: 1;
    }

    .rc-tree.tree-inverted .rc-tree-treenode::before {
        left: 0;
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
