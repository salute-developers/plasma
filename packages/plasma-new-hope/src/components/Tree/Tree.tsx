import React, { forwardRef } from 'react';
import Tree from 'rc-tree';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { TreeProps } from './Tree.types';
import { IconArrowWrapper, StyledArrow, base, StyledFolder, TitleWrapper, Title, ContentRight } from './Tree.styles';
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
                virtual = true,
                height,
                itemHeight,
                size,
                view,
                fullWidthItemSelection = false,
                multiple = false,
                defaultExpandAll = false,
                checkable = false,
                checkedKeys,
                expandedKeys,
                selectedKeys,
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
                        itemHeight={itemHeight}
                        virtual={virtual}
                        multiple={multiple}
                        checkable={checkable}
                        className={cx(className, invertedClass, itemFilledClass)}
                        defaultExpandAll={defaultExpandAll}
                        style={{ border: '1px solid #000' }}
                        treeData={items}
                        {...(checkedKeys !== undefined ? { checkedKeys } : {})}
                        {...(expandedKeys !== undefined ? { expandedKeys } : {})}
                        {...(selectedKeys !== undefined ? { selectedKeys } : {})}
                        defaultCheckedKeys={defaultCheckedKeys}
                        defaultExpandedKeys={defaultExpandedKeys}
                        defaultSelectedKeys={defaultSelectedKeys}
                        onSelect={onTreeSelect}
                        // Тайп кастинг для упрощения API
                        onCheck={onTreeCheck as any}
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
                        icon={hasIcon && (icon || <StyledFolder size={sizeToIconSize(size)} color="inherit" />)}
                        titleRender={(item) => (
                            <TitleWrapper
                                fullWidthItemSelection={fullWidthItemSelection}
                                arrowPlacement={arrowPlacement}
                            >
                                <Title>
                                    {/* eslint-disable-next-line no-nested-ternary */}
                                    {renderTitle
                                        ? renderTitle(item)
                                        : typeof item.title === 'function'
                                        ? item.title(item)
                                        : item.title}
                                </Title>

                                {item.contentRight && <ContentRight>{item.contentRight}</ContentRight>}
                            </TitleWrapper>
                        )}
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
