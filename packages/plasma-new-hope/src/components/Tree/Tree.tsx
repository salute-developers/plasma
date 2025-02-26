import React, { forwardRef } from 'react';
import Tree from 'rc-tree';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { TreeProps } from './Tree.types';
import { IconArrowWrapper, StyledArrow, base, StyledFolder, IconFolderWrapper } from './Tree.styles';
import { sizeToIconSize } from './utils';
import { classes } from './Tree.tokens';

/**
 * Многоуровневый раскрывающийся список в виде дерева.
 */
export const treeRoot = (Root: RootProps<HTMLDivElement, TreeProps>) =>
    forwardRef<HTMLDivElement, TreeProps>(
        (
            {
                items,
                arrowPlacement = 'left',
                virtual = false,
                height,
                size,
                view,
                fullWidthItemSelection = false,
                multiple = false,
                defaultExpandAll = false,
                checkable = false,
                defaultCheckedKeys,
                defaultExpandedKeys,
                defaultSelectedKeys,
                className,
                onTreeSelect,
                onTreeCheck,
                onTreeExpand,
                hasIcon = false,
                icon,
                renderTitle,
            },
            ref,
        ) => {
            const invertedClass = arrowPlacement === 'right' ? classes.treeInverted : undefined;
            const itemFilledClass = fullWidthItemSelection ? classes.treeItemFilled : undefined;

            return (
                <Root view={view} size={size} ref={ref} items={items}>
                    <Tree
                        height={height}
                        virtual={virtual}
                        multiple={multiple}
                        checkable={checkable}
                        className={cx(className, invertedClass, itemFilledClass)}
                        defaultExpandAll={defaultExpandAll}
                        style={{ border: '1px solid #000' }}
                        treeData={items}
                        defaultCheckedKeys={defaultCheckedKeys}
                        defaultExpandedKeys={defaultExpandedKeys}
                        defaultSelectedKeys={defaultSelectedKeys}
                        onSelect={onTreeSelect}
                        onCheck={onTreeCheck}
                        onExpand={onTreeExpand}
                        switcherIcon={(node) => {
                            if (node.isLeaf) {
                                return null;
                            }

                            return (
                                <IconArrowWrapper>
                                    <StyledArrow size={sizeToIconSize(size)} color="inherit" className="arrow" />
                                </IconArrowWrapper>
                            );
                        }}
                        icon={
                            hasIcon &&
                            (icon || (
                                <IconFolderWrapper>
                                    <StyledFolder size={sizeToIconSize(size)} color="inherit" />
                                </IconFolderWrapper>
                            ))
                        }
                        titleRender={renderTitle}
                    />
                </Root>
            );
        },
    );

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
