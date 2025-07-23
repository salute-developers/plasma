import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyEllipsis } from '../../mixins';
import { IconDisclosureRightCentered, IconFolder } from '../_Icon';

import { TreeProps } from './Tree.types';
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

export const StyledFolder = styled(IconFolder)``;

export const TitleWrapper = styled.div<{
    fullWidthItemSelection: boolean;
    arrowPlacement: TreeProps['arrowPlacement'];
}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${({ arrowPlacement, fullWidthItemSelection }) =>
        arrowPlacement === 'left' && !fullWidthItemSelection ? `var(${tokens.iconFolderMargin})` : 0};

    ${applyEllipsis()};
`;

export const Title = styled.span`
    margin: var(${tokens.iconFolderMargin});

    ${applyEllipsis()};
`;

export const ContentRight = styled.div`
    line-height: 0;
`;

export const base = css`
    .rc-tree {
        margin: 0;
        border: 1px solid transparent;
    }
    .rc-tree-focused:not(.rc-tree-active-focused) {
        border-color: cyan;
    }
    .rc-tree .rc-tree-treenode {
        margin: 0;
        padding: 0;
        line-height: 24px;
        white-space: nowrap;
        list-style: none;
        outline: 0;
    }
    .rc-tree .rc-tree-treenode .draggable {
        color: #333;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        /* Required to make elements draggable in old WebKit */
    }
    .rc-tree .rc-tree-treenode.dragging {
        background: rgba(100, 100, 255, 0.1);
    }
    .rc-tree .rc-tree-treenode.drop-container > .draggable::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: inset 0 0 0 2px red;
        content: '';
    }
    .rc-tree .rc-tree-treenode.drop-container ~ .rc-tree-treenode {
        border-left: 2px solid chocolate;
    }
    .rc-tree .rc-tree-treenode.drop-target {
        background-color: yellowgreen;
    }
    .rc-tree .rc-tree-treenode.drop-target ~ .rc-tree-treenode {
        border-left: none;
    }
    .rc-tree .rc-tree-treenode.filter-node > .rc-tree-node-content-wrapper {
        color: #a60000 !important;
        font-weight: bold !important;
    }
    .rc-tree .rc-tree-treenode ul {
        margin: 0;
        padding: 0 0 0 18px;
    }
    .rc-tree .rc-tree-treenode .rc-tree-node-content-wrapper {
        position: relative;
        display: inline-block;
        height: 24px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        vertical-align: top;
        cursor: pointer;
        color: var(${tokens.color});
    }
    .rc-tree .rc-tree-treenode span.rc-tree-switcher,
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox,
    .rc-tree .rc-tree-treenode span.rc-tree-iconEle {
        cursor: pointer;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-icon__customize,
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox.rc-tree-icon__customize,
    .rc-tree .rc-tree-treenode span.rc-tree-iconEle.rc-tree-icon__customize {
        background-image: none;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-icon_loading {
        margin-right: 2px;
        vertical-align: top;
        background: url('data:image/gif;base64,R0lGODlhEAAQAKIGAMLY8YSx5HOm4Mjc88/g9Ofw+v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAGACwAAAAAEAAQAAADMGi6RbUwGjKIXCAA016PgRBElAVlG/RdLOO0X9nK61W39qvqiwz5Ls/rRqrggsdkAgAh+QQFCgAGACwCAAAABwAFAAADD2hqELAmiFBIYY4MAutdCQAh+QQFCgAGACwGAAAABwAFAAADD1hU1kaDOKMYCGAGEeYFCQAh+QQFCgAGACwKAAIABQAHAAADEFhUZjSkKdZqBQG0IELDQAIAIfkEBQoABgAsCgAGAAUABwAAAxBoVlRKgyjmlAIBqCDCzUoCACH5BAUKAAYALAYACgAHAAUAAAMPaGpFtYYMAgJgLogA610JACH5BAUKAAYALAIACgAHAAUAAAMPCAHWFiI4o1ghZZJB5i0JACH5BAUKAAYALAAABgAFAAcAAAMQCAFmIaEp1motpDQySMNFAgA7')
        no-repeat scroll 0 0 transparent;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher-noop {
        flex: none;
    }
    .rc-tree.${classes.treeInverted} .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher-noop {
        display: none;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_open {
        background-position: -93px -56px;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_close {
        background-position: -75px -56px;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox {
        width: 13px;
        height: 13px;
        margin: 0 3px;
        background-position: 0 0;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox-checked {
        background-position: -14px 0;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox-indeterminate {
        background-position: -14px -28px;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox-disabled {
        background-position: 0 -56px;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox.rc-tree-checkbox-checked.rc-tree-checkbox-disabled {
        background-position: -14px -56px;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox.rc-tree-checkbox-indeterminate.rc-tree-checkbox-disabled {
        position: relative;
        background: #ccc;
        border-radius: 3px;
    }
    .rc-tree .rc-tree-treenode span.rc-tree-checkbox.rc-tree-checkbox-indeterminate.rc-tree-checkbox-disabled::after {
        position: absolute;
        top: 5px;
        left: 3px;
        width: 5px;
        height: 0;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        -webkit-transform: scale(1);
        transform: scale(1);
        content: ' ';
    }
    .rc-tree:not(.rc-tree-show-line) .rc-tree-treenode .rc-tree-switcher-noop {
        background: none;
    }
    .rc-tree.rc-tree-show-line .rc-tree-treenode:not(:last-child) > ul {
        background: url('data:image/gif;base64,R0lGODlhCQACAIAAAMzMzP///yH5BAEAAAEALAAAAAAJAAIAAAIEjI9pUAA7') 0 0
        repeat-y;
    }
    .rc-tree.rc-tree-show-line .rc-tree-treenode:not(:last-child) > .rc-tree-switcher-noop {
        background-position: -56px -18px;
    }
    .rc-tree.rc-tree-show-line .rc-tree-treenode:last-child > .rc-tree-switcher-noop {
        background-position: -56px -36px;
    }
    .rc-tree-child-tree {
        display: none;
    }
    .rc-tree-child-tree-open {
        display: block;
    }
    .rc-tree-treenode-disabled > span:not(.rc-tree-switcher),
    .rc-tree-treenode-disabled > a,
    .rc-tree-treenode-disabled > a span {
        color: #767676;
        cursor: not-allowed;
    }
    .rc-tree-treenode-active {
        background: rgba(0, 0, 0, 0.1);
    }
    .rc-tree-node-selected {
        background-color: #ffe6b0;
        box-shadow: 0 0 0 1px #ffb951;
        opacity: 0.8;
    }
    .rc-tree-icon__open {
        margin-right: 0;
        vertical-align: top;
        background-position: -110px -16px;
    }
    .rc-tree-icon__close {
        margin-right: 0;
        vertical-align: top;
        background-position: -110px 0;
    }
    .rc-tree-icon__docu {
        margin-right: 0;
        vertical-align: top;
        background-position: -110px -32px;
    }
    .rc-tree-icon__customize {
        display: block;
        line-height: 0;
        color: var(${tokens.iconFolderColor});
        margin: var(${tokens.iconFolderMargin});
    }
    .rc-tree-title {
        display: inline-block;
        width: 100%;
    }
    .rc-tree-indent {
        display: inline-flex;
        height: 0;
        vertical-align: bottom;
    }
    .rc-tree-indent-unit {
        display: inline-block;
        width: 16px;
    }
    .rc-tree-draggable-icon {
        display: inline-flex;
        justify-content: center;
        width: 16px;
    }

    .rc-tree, .rc-tree-list {
        border: none !important;
    }

    .rc-tree .rc-tree-list-holder {
        overflow: hidden auto;
    }

    .rc-tree .rc-tree-treenode {
        position: relative;
        z-index: 0;
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
        top: var(${tokens.itemTop});
        bottom: var(${tokens.itemBottom});
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

    .rc-tree .rc-tree-treenode.${classes.closestParentHasSelectedChildren}:not(.rc-tree-treenode-disabled)::before {
        background: var(${tokens.itemBackgroundColorClosestParentHasSelectedChildren});
    }

    .rc-tree .rc-tree-treenode.${classes.parentHasSelectedChildren}:not(.rc-tree-treenode-disabled)::before {
        background: var(${tokens.itemBackgroundColorParentHasSelectedChildren});
    }

    .rc-tree .rc-tree-treenode.rc-tree-treenode-selected:not(.rc-tree-treenode-disabled)::before {
        background: var(${tokens.itemBackgroundColorSelected});
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
        min-width: max-content;
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
        margin: var(${tokens.switcherMarginInverted});
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
        flex: none;
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

    .rc-tree .rc-tree-treenode.rc-tree-treenode-disabled span.rc-tree-checkbox::before {
        border: 0.125rem solid var(${tokens.itemDisabledBorderColor});
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
    }

    .rc-tree.${classes.treeInverted} .rc-tree-treenode span.rc-tree-switcher {
        order: 1;
    }

    .rc-tree.${classes.treeInverted} .rc-tree-treenode::before {
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

    .rc-tree .rc-tree-treenode.rc-tree-treenode-disabled .rc-tree-title {
        color: var(${tokens.itemDisabledColor});
    }

    .rc-tree-node-selected .rc-tree-icon__customize {
        color: var(${tokens.colorSelected});
    }

    .rc-tree .rc-tree-treenode.rc-tree-treenode-disabled .rc-tree-icon__customize {
        color: var(${tokens.itemDisabledColor});;
    }

    .rc-tree-indent-unit {
        width: var(${tokens.itemIndent});
    }
`;
