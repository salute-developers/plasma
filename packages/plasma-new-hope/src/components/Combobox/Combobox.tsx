import React, { Children, forwardRef, useEffect, useRef, useState } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { getPlacements } from '../Dropdown/utils';
import { getChildren, getNewSelected, getValues } from '../Select/utils';
import { useKeyNavigation } from '../Select/hooks';
import { useDidMountEffect, useForceUpdate } from '../../hooks';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { ComboboxTarget } from './ui';
import { ComboboxItemNotFound, StyledPopover, StyledRoot, StyledCombobox, StyledNativeSelect } from './Combobox.styles';
import type { ComboboxPrimitiveValue, ComboboxProps } from './Combobox.types';

/**
 * Выпадающий список без внешнего контроля видимости.
 */
export const comboboxRoot = (Root: RootProps<HTMLInputElement, ComboboxProps>) =>
    forwardRef<HTMLInputElement, ComboboxProps>(
        (
            {
                name,
                form,
                readOnly,
                disabled,
                label,
                placeholder,
                id,
                children,
                role,
                view,
                size,
                frame,
                usePortal,
                negativeResultContent = 'Элементы не найдены',
                enumerationType = 'comma',
                opened = false,
                placement = 'bottom',
                onToggle,
                onKeyDown,
                filterFunction,
                ...rest
            },
            outerRootRef,
        ) => {
            const forceUpdate = useForceUpdate();
            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const { valueType = 'single', value } = rest;
            const offset = [0, 4] as [number, number];

            const [ref, setRef] = useState<HTMLInputElement | null>(null);

            const targetRef = useRef<HTMLInputElement>(null);
            const chipsRefs = useRef<Array<HTMLButtonElement>>([]);
            const comboboxRef = useRef<HTMLDivElement>(null);
            const itemsRefs = useRef<Array<HTMLDivElement>>([]);
            const inputRef = useRef<HTMLInputElement>(null);
            const handleRef = useForkRef<HTMLInputElement>(targetRef, outerRootRef);
            const controlledRefs = { targetRef, chipsRefs, selectRef: comboboxRef, itemsRefs, inputRef };

            const [innerOpened, setInnerOpened] = useState(opened);
            const [search, setSearch] = useState<string | undefined>('');
            const [filterValue, setFilterValue] = useState(search);

            // INFO: нужно высчитывать для корректной работы портала
            const dynamicTargetWidth = targetRef.current?.offsetWidth;

            // INFO: Из-за того, что классы передаются через ref,
            // состояние пропсов после изменения view, size
            // всегда предыдущее, поэтому нужно делать форс-ререндер
            useDidMountEffect(() => {
                forceUpdate();
            }, [view, size]);

            useEffect(() => {
                if (disabled || readOnly) {
                    return;
                }

                setInnerOpened(opened);
            }, [opened, disabled, readOnly]);

            useEffect(() => {
                // INFO: Для кейсов, когда значение выбрано и нужно вывести весь список
                if (opened) {
                    setFilterValue('');
                }
            }, []);

            const onInnerToggle = (openValue: boolean, event: React.SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                // INFO: Для кейсов, когда значение выбрано и нужно вывести весь список
                if (!innerOpened) {
                    setFilterValue('');
                }

                if (onToggle) {
                    onToggle(openValue, event);

                    return;
                }

                setInnerOpened(openValue);
            };

            const closedWithoutChanges = useRef(true);

            const updateValue = (item: HTMLElement, event: React.SyntheticEvent | Event) => {
                const {
                    dataset: { value: newValue },
                } = item;

                if (rest.valueType === 'multiple') {
                    const newSelected = getNewSelected(rest.value, newValue, rest.valueType);
                    rest.onChangeValue?.(newSelected);

                    return;
                }

                const newSelected = getNewSelected(rest.value, newValue, 'single');

                rest.onChangeValue?.(newSelected);

                onInnerToggle?.(false, event);

                closedWithoutChanges.current = false;
            };

            const onClickChildrenItem = (event: React.MouseEvent<HTMLDivElement>) => {
                // INFO: Для корректной работы компонента Popper
                event.stopPropagation();

                const item = event.currentTarget as HTMLElement;

                updateValue(item, event);
            };

            const onChangeChipValue = (newValue?: Array<ComboboxPrimitiveValue>) => {
                if (rest.valueType !== 'multiple') {
                    return;
                }

                rest.onChangeValue?.(newValue);
            };

            const { onKeyDownTarget, onKeyDownSelect } = useKeyNavigation({
                controlledRefs,
                opened: innerOpened,
                enumerationType,
                valueType,
                componentType: 'combobox',
                value,
                search: filterValue,
                updateOpened: onInnerToggle,
                updateValue,
            });

            const childrenArray = Children.toArray(children) as React.ReactElement[];

            const childrenMemo = getChildren(
                childrenArray,
                { onClick: onClickChildrenItem, childrenRefs: itemsRefs },
                value,
                filterValue,
                filterFunction,
            ).filter(Boolean);

            const values = getValues(childrenArray, value);

            const onSearch = (newSearch?: string, newOpened?: boolean) => {
                setSearch(newSearch);
                setFilterValue(newSearch);
                setInnerOpened(newOpened ?? true);
            };

            const onKeyDownHandle = (event: React.KeyboardEvent<HTMLInputElement>) => {
                onKeyDown?.(event);
                onKeyDownTarget(event);
            };

            return (
                <StyledRoot ref={comboboxRef}>
                    <StyledNativeSelect
                        aria-invalid="false"
                        aria-hidden="true"
                        aria-readonly={readOnly}
                        tabIndex={-1}
                        form={form}
                        name={name}
                        value={`${value}`}
                        disabled={disabled || readOnly}
                    />
                    <StyledPopover
                        role={role}
                        isOpen={innerOpened}
                        onToggle={onInnerToggle}
                        target={
                            <ComboboxTarget
                                opened={innerOpened}
                                values={values}
                                label={label}
                                placeholder={placeholder}
                                search={search}
                                enumerationType={enumerationType}
                                valueType={valueType}
                                readOnly={readOnly}
                                disabled={disabled}
                                size={size}
                                closedWithoutChanges={closedWithoutChanges}
                                ref={handleRef}
                                chipsRefs={chipsRefs}
                                inputRef={inputRef}
                                id={innerId}
                                onChange={onChangeChipValue}
                                onSearch={onSearch}
                                onKeyDown={onKeyDownHandle}
                                {...rest}
                            />
                        }
                        className={cx(ref?.classList.toString())} // INFO: Прокидываем стили для Popover
                        id={innerId}
                        offset={offset}
                        placement={getPlacements(placement)}
                        usePortal={usePortal}
                        selectWidth={dynamicTargetWidth}
                        frame={frame}
                        trigger="click"
                        isFocusTrapped={false}
                        preventOverflow={false}
                        closeOnEsc={false}
                        closeOnOverlayClick
                    >
                        <Root ref={setRef} view={view} size={size}>
                            <StyledCombobox onKeyDown={onKeyDownSelect}>
                                {childrenMemo.length ? (
                                    childrenMemo
                                ) : (
                                    <ComboboxItemNotFound>{negativeResultContent}</ComboboxItemNotFound>
                                )}
                            </StyledCombobox>
                        </Root>
                    </StyledPopover>
                </StyledRoot>
            );
        },
    );

export const comboboxConfig = {
    name: 'Combobox',
    tag: 'div',
    layout: comboboxRoot,
    base: '',
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
