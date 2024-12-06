import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyEllipsis } from '../../mixins';
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

    .rc-tree-treenode-selected {
        background: red;
    }

    .rc-tree-node-selected {
        opacity: 1;
        box-shadow: none;
        background: none;
    }

    .rc-tree-indent-unit {
        width: 32px;
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
