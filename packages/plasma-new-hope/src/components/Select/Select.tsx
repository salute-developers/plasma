import React, { forwardRef, useMemo, useRef, ForwardedRef } from 'react';
import { RootProps } from 'src/engines';
import { isEmpty, safeUseId } from 'src/utils';
import { useOutsideClick } from 'src/hooks';

import { useKeyNavigation, useCheckedState, usePathMaps, useValue, useListState } from './hooks';
import { Inner, Target, VirtualList, SelectAll, TreeList } from './ui';
import { Ul, base, ListWrapper, StyledEmptyState } from './Select.styles';
import { classes } from './Select.tokens';
import type { SelectProps } from './Select.types';
import { FloatingPopover } from './FloatingPopover';
import { SelectNative } from './ui/SelectNative/SelectNative';
import { Context } from './Select.context';
import { initialItemsTransform, getItemByFocused, hasOuterValue } from './utils';

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectRoot = (Root: RootProps<HTMLDivElement, Omit<SelectProps, 'items'>>) =>
    forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
        const {
            // Config
            size,
            view,
            chipView,
            hintSize,
            hintView,

            // Target
            target = 'textfield-like',
            contentLeft,
            contentRight,
            placeholder,
            helperText,
            chipType = 'default',
            chipClickArea = 'full',
            required,
            requiredPlacement = 'right',
            optional,
            optionalText,
            hasRequiredIndicator = false,
            hintText,
            hintTrigger,
            hintTargetIcon,
            hintTargetPlacement = 'outer',
            hintPlacement,
            hintHasArrow,
            hintOffset = [0, 8],
            hintWidth,
            hintContentLeft,
            label,
            labelPlacement,
            keepPlaceholder,

            // IsMultiselect
            multiselect,
            value: outerValue,
            onChange: outerOnChange,
            isTargetAmount,
            renderTarget,
            selectAllOptions,
            name,
            defaultValue,

            // Private
            _offset,
            _checkboxAppearance,

            // Basic
            items,
            treeView = false,
            arrowPlacement = 'left',
            placement = 'bottom',
            disabled = false,
            readOnly = false,
            variant = 'normal',
            zIndex,
            listMaxHeight,
            listWidth,
            portal,
            renderValue,
            renderItem,
            renderSelectionIcon,
            closeAfterSelect: outerCloseAfterSelect,
            beforeList,
            afterList,
            virtual = false,
            onScroll,
            onToggle,
            mode = 'default',
            flip,
            shift,
            singleLine,
            emptyStateDescription,

            // Rest
            ...rest
        } = props;

        // Deep copy массива items с добавлением parent-ноды родителя.
        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        // Создаем структуры для быстрой работы с деревом.
        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap, valueToPathMap] = usePathMaps(
            transformedItems,
        );

        /**
         * Refs
         */
        const floatingPopoverRef = useRef<HTMLDivElement>(null);
        const treeId = safeUseId();
        const listWrapperRef = useRef<HTMLDivElement>(null);
        const rootRef = useRef<HTMLDivElement>(null);
        const closeAfterSelect = outerCloseAfterSelect ?? !multiselect;

        /**
         * Hooks
         */
        const nativeMode = Boolean(name && !hasOuterValue(outerValue));

        const { value, handleChange } = useValue({
            outerValue,
            outerOnChange,
            defaultValue,
            multiselect,
            nativeMode,
        });

        const requiredProps =
            target === 'button-like'
                ? undefined
                : {
                      required,
                      requiredPlacement,
                      hasRequiredIndicator,
                      optional,
                      optionalText,
                  };

        const hintProps =
            target === 'button-like' || !hintText
                ? undefined
                : {
                      hintText,
                      hintTrigger,
                      hintView,
                      hintSize,
                      hintTargetIcon,
                      hintTargetPlacement,
                      hintPlacement,
                      hintOffset,
                      hintWidth,
                      hintHasArrow,
                      hintContentLeft,
                  };

        const {
            path,
            treePath,
            focusedPath,
            dispatchPath,
            dispatchTreePath,
            dispatchFocusedPath,
            handleListToggle,
            resetListState,
            isListOpened,
        } = useListState({
            disabled,
            readOnly,
            onToggle,
            multiselect,
            rootRef,
        });

        const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value.toString() || '';

        const { checked, handleCheckboxChange, handleItemClick, handlePressDown } = useCheckedState({
            multiselect,
            mode,
            value,
            valueToCheckedMap,
            valueToItemMap,
            closeAfterSelect,
            handleChange,
            resetListState,
        });

        const { onKeyDown } = useKeyNavigation({
            focusedPath,
            dispatchFocusedPath,
            path,
            dispatchPath,
            pathMap,
            focusedToValueMap,
            handleListToggle,
            handlePressDown,
            treePath,
            dispatchTreePath,
            treeView,
            valueToPathMap,
            items: transformedItems,
            readOnly,
        });

        /**
         * Effects
         */
        /* Логика работы при клике за пределами выпадающего списка */
        useOutsideClick(() => {
            if (!isListOpened) {
                return;
            }

            handleListToggle(false);
        }, [floatingPopoverRef, listWrapperRef]);

        return (
            <Root
                view={view}
                size={size}
                labelPlacement={labelPlacement}
                chipView={chipView}
                disabled={disabled}
                readOnly={readOnly}
                hintView={hintView}
                hintSize={hintSize}
                ref={rootRef}
                {...rest}
            >
                {nativeMode && (
                    <SelectNative
                        items={valueToItemMap}
                        name={name}
                        value={value}
                        multiselect={multiselect}
                        handleChange={handleChange}
                        outerOnChange={outerOnChange as any}
                        ref={ref as ForwardedRef<HTMLSelectElement>}
                    />
                )}

                <Context.Provider
                    value={{
                        focusedPath,
                        checked,
                        multiselect,
                        size,
                        handleCheckboxChange,
                        handleItemClick,
                        variant,
                        renderItem,
                        renderSelectionIcon,
                        treeId,
                        _checkboxAppearance,
                        treePath,
                        dispatchTreePath,
                        arrowPlacement,
                        valueToPathMap,
                        singleLine,
                    }}
                >
                    <FloatingPopover
                        ref={floatingPopoverRef}
                        opened={isListOpened}
                        onToggle={handleListToggle}
                        placement={placement}
                        portal={portal}
                        listWidth={listWidth}
                        offset={_offset}
                        target={(referenceRef) => (
                            <Target
                                ref={name ? null : ref}
                                target={target}
                                renderTarget={renderTarget}
                                value={value}
                                opened={isListOpened}
                                valueToItemMap={valueToItemMap}
                                label={label}
                                placeholder={placeholder}
                                onKeyDown={onKeyDown}
                                labelPlacement={labelPlacement}
                                size={size}
                                view={view}
                                keepPlaceholder={keepPlaceholder}
                                contentLeft={contentLeft}
                                contentRight={contentRight}
                                disabled={disabled}
                                readOnly={readOnly}
                                renderValue={renderValue}
                                inputWrapperRef={referenceRef}
                                multiselect={multiselect}
                                helperText={helperText}
                                treeId={treeId}
                                activeDescendantItemValue={activeDescendantItemValue}
                                isTargetAmount={isTargetAmount}
                                handleChange={handleChange}
                                chipView={chipView}
                                chipType={chipType}
                                chipClickArea={chipClickArea}
                                requiredProps={requiredProps}
                                hintProps={hintProps}
                            />
                        )}
                        zIndex={zIndex}
                        isInner={false}
                        shift={shift}
                        flip={flip}
                    >
                        <Root
                            view={view}
                            size={size}
                            labelPlacement={labelPlacement}
                            chipView={chipView}
                            disabled={disabled}
                            readOnly={readOnly}
                            style={rest.style}
                            className={rest.className}
                        >
                            {treeView ? (
                                <TreeList
                                    items={items}
                                    listMaxHeight={listMaxHeight}
                                    onScroll={virtual ? undefined : onScroll}
                                    virtual={virtual}
                                    beforeList={beforeList}
                                    afterList={afterList}
                                    emptyStateDescription={emptyStateDescription}
                                />
                            ) : (
                                <ListWrapper ref={listWrapperRef} listWidth={listWidth}>
                                    <Ul
                                        role="tree"
                                        id={`${treeId}_tree_level_1`}
                                        aria-multiselectable={Boolean(multiselect)}
                                        listMaxHeight={listMaxHeight}
                                        onScroll={virtual ? undefined : onScroll}
                                        virtual={virtual}
                                    >
                                        {beforeList}

                                        {multiselect && selectAllOptions && (
                                            <SelectAll selectAllOptions={selectAllOptions} variant={variant} />
                                        )}

                                        {isEmpty(transformedItems) ? (
                                            <StyledEmptyState
                                                className={classes.emptyStateWrapper}
                                                description={emptyStateDescription || 'Ничего не найдено'}
                                            />
                                        ) : (
                                            <>
                                                {virtual ? (
                                                    <VirtualList
                                                        items={transformedItems}
                                                        listMaxHeight={listMaxHeight}
                                                        onScroll={onScroll}
                                                    />
                                                ) : (
                                                    transformedItems.map((item, index) => (
                                                        <Inner
                                                            key={`${index}/0`}
                                                            item={item}
                                                            currentLevel={0}
                                                            path={path}
                                                            dispatchPath={dispatchPath}
                                                            index={index}
                                                            listWidth={listWidth}
                                                            portal={listWrapperRef}
                                                            shift={shift}
                                                            flip={flip}
                                                        />
                                                    ))
                                                )}
                                            </>
                                        )}

                                        {afterList}
                                    </Ul>
                                </ListWrapper>
                            )}
                        </Root>
                    </FloatingPopover>
                </Context.Provider>
            </Root>
        );
    });

export const selectConfig = {
    name: 'Select',
    tag: 'div',
    layout: selectRoot,
    base,
    variations: {},
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'default',
        hintView: 'default',
        hintSize: 'm',
    },
};
