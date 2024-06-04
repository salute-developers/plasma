import React, { forwardRef, useState, useReducer, useMemo, createContext, useEffect } from 'react';

import { RootProps } from '../../engines';
import { isEmpty } from '../../utils';
import { useOutsideClick } from '../../hooks';

import { useKeyNavigation } from './hooks/useKeyboardNavigation';
import { initialItemsTransform, updateAncestors, updateDescendants, updateSingleAncestors, getView } from './utils';
import { Inner } from './elements/Inner/Inner';
import { SelectNotFoundContent } from './elements/SelectNotFoundContent/SelectNotFoundContent';
import { Target } from './elements/Target/Target';
import { InfiniteLoader } from './elements/InfiniteLoader/InfiniteLoader';
import { pathReducer, focusedPathReducer, focusedChipIndexReducer } from './reducers';
import { usePathMaps } from './hooks/usePathMaps';
import { StyledPopover, Ul, base, OuterLabel, HelperText } from './SelectNew.styles';
import type { SelectNewProps, ItemContext } from './SelectNew.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { ItemOptionTransformed } from './elements/Inner/elements/Item/Item.types';

export const Context = createContext<ItemContext>({} as ItemContext);

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectNewRoot = (Root: RootProps<HTMLButtonElement, SelectNewProps>) =>
    forwardRef<HTMLButtonElement, SelectNewProps>((props, ref) => {
        const {
            value,
            onChange,
            target = 'textfield',
            multiselect = false,
            separator,
            items,
            label,
            labelPlacement = 'outer',
            placeholder,
            helperText,
            isTargetAmount = false,
            disabled = false,
            view,
            size,
            isOpen,
            listOverflow,
            listHeight,
            status,
            contentLeft,
            onScrollBottom,
            isInfiniteLoading,
            notFoundContent,
            chipView,
            variant = 'normal',
            ...rest
        } = props;

        useEffect(() => {
            console.log('value changed');
        }, [value]);

        const transformedItems = useMemo(() => initialItemsTransform(items), [items]);

        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap] = usePathMaps(
            transformedItems,
            value,
            multiselect,
        );

        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [focusedChipIndex, dispatchFocusedChipIndex] = useReducer(focusedChipIndexReducer, null);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const targetRef = useOutsideClick(() => {
            dispatchFocusedChipIndex({ type: 'reset' });
        });

        const handleToggle = (opened: boolean) => {
            if (opened) {
                dispatchPath({ type: 'opened_first_level' });
            } else {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
                dispatchFocusedChipIndex({ type: 'reset' });
            }
        };

        const handleCheckboxChange = (item: ItemOptionTransformed) => {
            const checkedCopy = new Map(checked);

            if (!checkedCopy.get(item.value.toString())) {
                checkedCopy.set(item.value.toString(), true);
                updateDescendants(item, checkedCopy, true);
            } else {
                checkedCopy.set(item.value.toString(), false);
                updateDescendants(item, checkedCopy, false);
            }

            updateAncestors(item, checkedCopy);

            const newValues: Array<string> = [];

            valueToItemMap.forEach((item, key) => {
                if (checkedCopy.get(key)) {
                    newValues.push(item.value.toString());
                }
            });

            onChange(newValues as any);

            setChecked(checkedCopy);
        };

        const handleItemClick = (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => {
            if (isEmpty(item.items)) {
                if (multiselect) {
                    handleCheckboxChange(item);
                } else {
                    e.stopPropagation();

                    const checkedCopy = new Map(checked);

                    const isCurrentChecked = checkedCopy.get(item.value);

                    checkedCopy.forEach((_, key) => {
                        checkedCopy.set(key, false);
                    });

                    if (!isCurrentChecked) {
                        checkedCopy.set(item.value, 'done');
                        updateSingleAncestors(item, checkedCopy, 'dot');
                    }

                    onChange((isCurrentChecked ? '' : item.value) as any);

                    setChecked(checkedCopy);
                }
            }
        };

        const handleChipClick = (currentValue: string) => {
            handleCheckboxChange(valueToItemMap.get(currentValue)!);
        };

        const handlePressDown = (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => {
            if (isEmpty(item.items)) {
                handleItemClick(item, e);
            } else if (multiselect) {
                handleCheckboxChange(item);
            }
        };

        const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
            if (!onScrollBottom) return;

            const { target } = e;

            if (
                (target as HTMLElement).scrollHeight - (target as HTMLElement).scrollTop ===
                (target as HTMLElement).clientHeight
            ) {
                onScrollBottom(e);
            }
        };

        const { onKeyDown } = useKeyNavigation({
            focusedPath,
            dispatchFocusedPath,
            path,
            dispatchPath,
            pathMap,
            focusedToValueMap,
            handleToggle,
            handlePressDown,
            focusedChipIndex,
            dispatchFocusedChipIndex,
            value,
            valueToItemMap,
            multiselect,
            isTargetAmount,
        });

        const isCurrentListOpen = Boolean(path[0]);

        return (
            <Root
                ref={ref}
                size={size}
                view={getView(view, status)}
                chipView={chipView}
                items={items}
                {...(rest as any)}
            >
                {label && labelPlacement === 'outer' && target !== 'button' && <OuterLabel>{label}</OuterLabel>}

                <Context.Provider
                    value={{
                        focusedPath,
                        checked,
                        multiselect,
                        size,
                        handleCheckboxChange,
                        handleItemClick,
                        variant,
                    }}
                >
                    <StyledPopover
                        ref={targetRef}
                        isOpen={isCurrentListOpen}
                        usePortal={false}
                        placement="bottom-start"
                        onToggle={handleToggle}
                        trigger="click"
                        isFocusTrapped={false}
                        frame="document"
                        target={
                            <Target
                                opened={isCurrentListOpen}
                                target={target}
                                value={value}
                                isTargetAmount={isTargetAmount}
                                multiselect={multiselect}
                                valueToItemMap={valueToItemMap}
                                onChipClick={handleChipClick}
                                label={label}
                                placeholder={placeholder}
                                onKeyDown={onKeyDown}
                                focusedChipIndex={focusedChipIndex}
                                labelPlacement={labelPlacement}
                                size={size}
                                contentLeft={contentLeft}
                                disabled={disabled}
                            />
                        }
                        preventOverflow={false}
                        closeOnOverlayClick
                    >
                        {isEmpty(items) ? (
                            notFoundContent || <SelectNotFoundContent description="Доделать" />
                        ) : (
                            <Ul
                                role="tree"
                                id="tree_level_1"
                                listHeight={listHeight}
                                listOverflow={listOverflow}
                                onScroll={handleScroll}
                            >
                                {transformedItems.map((item, index) => (
                                    <Inner
                                        key={`${index}/0`}
                                        item={item}
                                        currentLevel={0}
                                        path={path}
                                        dispatchPath={dispatchPath}
                                        index={index}
                                    />
                                ))}

                                {!isInfiniteLoading && <InfiniteLoader variant={variant} />}
                            </Ul>
                        )}
                    </StyledPopover>
                </Context.Provider>

                {helperText && <HelperText>{helperText}</HelperText>}
            </Root>
        );
    });

export const selectNewConfig = {
    name: 'SelectNew',
    tag: 'div',
    layout: selectNewRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
