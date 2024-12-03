import React, { forwardRef } from 'react';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

import { RootProps } from '../../engines';

import type { TreeProps } from './Tree.types';
import { IconArrowWrapper, StyledArrow, base, StyledFolder, IconFolderWrapper } from './Tree.styles';
import { sizeToIconSize } from './utils';
import { classes } from './Tree.tokens';

const treeData: any[] = [
    {
        title: 'Parent 1',
        key: '0-0',
        // checkable: false,
        children: [
            {
                title: 'Parent 1-0',
                key: '0-0-0',
                // disabled: true,
                children: [
                    {
                        title: 'Leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'Leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'Parent 1-1',
                key: '0-0-1',
                children: [{ title: 'Leaf', key: '0-0-1-0' }],
            },
        ],
    },
];

/**
 * Многоуровневый раскрывающийся список в виде дерева.
 */
export const treeRoot = (Root: RootProps<any, any>) =>
    forwardRef<HTMLDivElement, TreeProps>(({ inverted, size, view }, ref) => {
        return (
            <Root view={view} size={size} ref={ref}>
                <Tree
                    checkable
                    className={inverted ? classes.treeInverted : undefined}
                    // checkStrictly
                    defaultExpandAll
                    style={{ border: '1px solid #000' }}
                    treeData={treeData}
                    // defaultCheckedKeys={['0-0-1']}
                    // defaultExpandedKeys={['0-0-1']}
                    // defaultSelectedKeys={['0-0-1', '0-0-0-0']}
                    // defaultExpandParent={false}
                    onSelect={(selectedKeys, info) => {
                        console.log('selected', selectedKeys, info);
                    }}
                    switcherIcon={(node) => {
                        if (node.isLeaf) {
                            return null;
                        }

                        return (
                            <IconArrowWrapper>
                                <StyledArrow size={sizeToIconSize(size)} color="inherit" />
                            </IconArrowWrapper>
                        );
                    }}
                    icon={
                        <IconFolderWrapper>
                            <StyledFolder size={sizeToIconSize(size)} color="inherit" />
                        </IconFolderWrapper>
                    }
                />
            </Root>
        );
    });

export const treeConfig = {
    name: 'Tree',
    tag: 'div',
    layout: treeRoot,
    base,
    variations: {},
    defaults: {
        view: 'default',
        size: 'm',
    },
};
