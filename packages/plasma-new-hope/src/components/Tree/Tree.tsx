import React, { forwardRef, useState, useMemo } from 'react';
import type { Key } from 'react';
import Tree from 'rc-tree';
import { RootPropsOmitDraggable } from 'src/engines';
import cls from 'classnames';

import type { TreeProps, SelectInfo } from './Tree.types';
import {
    IconArrowWrapper,
    StyledArrow,
    base,
    StyledFolder,
    TitleWrapper,
    Title,
    ContentRight,
    Line,
} from './Tree.styles';
import { sizeToIconSize, traverseTree } from './utils';
import { classes } from './Tree.tokens';

/**
 * Многоуровневый раскрывающийся список в виде дерева.
 */
export const treeRoot = (Root: RootPropsOmitDraggable<HTMLDivElement, TreeProps>) =>
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
                variant,
                fullWidthItemSelection = false,
                multiple = false,
                defaultExpandAll = false,
                autoExpandParent = false,
                checkable = false,
                selectedKeys: outerSelectedKeys,
                checkedKeys,
                expandedKeys,
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
                singleLine = true,
                mode = 'default',
                draggable = false,
                onDragStart,
                onDragEnter,
                onDragOver,
                onDragLeave,
                onDragEnd,
                onDrop,
                allowDrop,
            },
            ref,
        ) => {
            const [selected, setSelected] = useState<React.Key[]>(defaultSelectedKeys || []);

            const selectedKeys = outerSelectedKeys ?? selected;

            const isRadioMode = mode === 'radio' && !multiple;

            const handleSelect = (updatedSelectedKeys: Key[], info: SelectInfo) => {
                if (!multiple && isRadioMode && updatedSelectedKeys.length === 0) {
                    return;
                }

                setSelected(updatedSelectedKeys);

                if (onTreeSelect) {
                    onTreeSelect(updatedSelectedKeys, info);
                }
            };

            const invertedClass = arrowPlacement === 'right' ? classes.treeInverted : undefined;
            const itemFilledClass = fullWidthItemSelection ? classes.treeItemFilled : undefined;
            const radioModeClass = isRadioMode ? classes.treeRadioMode : undefined;
            const tightVariantClass = variant === 'tight' ? classes.treeTightVariant : undefined;

            // Проходимся по дереву и устанавливаем соответствующие классы для узлов дерева,
            // чтобы соблюсти иерархию вложенности в UI.
            const treeData = useMemo(() => traverseTree(items, selectedKeys), [items, selectedKeys]);

            return (
                <Root view={view} size={size} variant={variant} ref={ref} items={items}>
                    <Tree
                        height={height}
                        itemHeight={itemHeight}
                        virtual={virtual}
                        multiple={multiple}
                        checkable={checkable}
                        className={cls(className, invertedClass, itemFilledClass, radioModeClass, tightVariantClass)}
                        defaultExpandAll={defaultExpandAll}
                        autoExpandParent={autoExpandParent}
                        style={{ border: '1px solid #000' }}
                        treeData={treeData}
                        selectedKeys={selectedKeys}
                        {...(checkedKeys !== undefined ? { checkedKeys } : {})}
                        {...(expandedKeys !== undefined ? { expandedKeys } : {})}
                        defaultCheckedKeys={defaultCheckedKeys}
                        defaultExpandedKeys={defaultExpandedKeys}
                        onSelect={handleSelect}
                        // Тайп кастинг для упрощения API
                        onCheck={onTreeCheck as any}
                        onExpand={onTreeExpand}
                        switcherIcon={(node) => {
                            if (node.isLeaf) {
                                return null;
                            }

                            return (
                                <IconArrowWrapper>
                                    <StyledArrow
                                        size={sizeToIconSize(size, variant)}
                                        color="inherit"
                                        className="arrow"
                                    />
                                </IconArrowWrapper>
                            );
                        }}
                        icon={
                            hasIcon && (icon || <StyledFolder size={sizeToIconSize(size, variant)} color="inherit" />)
                        }
                        titleRender={(item) => (
                            <TitleWrapper
                                fullWidthItemSelection={fullWidthItemSelection}
                                arrowPlacement={arrowPlacement}
                                singleLine={singleLine}
                            >
                                <Title singleLine={singleLine}>
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
                        draggable={draggable}
                        onDragStart={onDragStart}
                        onDragEnter={onDragEnter}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDragEnd={onDragEnd}
                        onDrop={onDrop}
                        allowDrop={allowDrop}
                        dropIndicatorRender={(props) => {
                            const offset = 0;
                            const { dropPosition, dropLevelOffset, indent } = props;
                            const left = -dropLevelOffset * indent + offset;

                            const style: React.CSSProperties = {};

                            if (dropPosition === 0) {
                                style.left = indent + offset;
                            }

                            return <Line style={style} left={left} dropPosition={dropPosition} variant={variant} />;
                        }}
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
