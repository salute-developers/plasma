import React, { Children, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { getPlacements } from '../Dropdown/utils';
import { useDidMountEffect, useForceUpdate } from '../../hooks';

import { base as targetCSS } from './variations/_target/base';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { SelectTarget } from './ui';
import { getChildren, getNewSelected, getValues } from './utils';
import { classes } from './Select.tokens';
import { StyledNativeSelect, StyledPopover, StyledRoot, StyledSelect } from './Select.styles';
import type { SelectPrimitiveValue, SelectProps } from './Select.types';
import { useKeyNavigation } from './hooks';

/**
 * Выпадающий список без внешнего контроля видимости.
 */
export const selectRoot = (Root: RootProps<HTMLSelectElement, SelectProps>) =>
    forwardRef<HTMLSelectElement, SelectProps>(
        (
            {
                name,
                form,
                readOnly,
                disabled,
                label,
                id,
                children,
                role,
                target,
                view,
                size,
                frame,
                usePortal,
                enumerationType = 'comma',
                opened = false,
                placement = 'bottom',
                onToggle,
                ...rest
            },
            outerRootRef,
        ) => {
            const forceUpdate = useForceUpdate();
            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const { valueType = 'single', value } = rest;
            const offset = [0, 4] as [number, number];

            const [ref, setRef] = useState<HTMLSelectElement | null>(null);
            const rootRef = useRef<HTMLSelectElement | null>(null);
            const handleRef = useForkRef<HTMLSelectElement>(rootRef, outerRootRef);

            const targetRef = useRef<HTMLButtonElement>(null);
            const chipsRefs = useRef<Array<HTMLButtonElement>>([]);
            const selectRef = useRef<HTMLDivElement>(null);
            const itemsRefs = useRef<Array<HTMLDivElement>>([]);
            const controlledRefs = { targetRef, chipsRefs, selectRef, itemsRefs };

            const [innerOpened, setOpened] = useState(opened);

            // INFO: нужно высчитывать для корректной работы портала
            const dynamicTargetWidth = targetRef.current?.offsetWidth;
            const withNativeSelectVisible = valueType === 'native' ? classes.nativeSelectVisible : undefined;

            // INFO: Из-за того, что классы передаются через ref,
            // состояние пропсов после изменения view, size, target
            // всегда предыдущее, поэтому нужно делать форс-ререндер
            useDidMountEffect(() => {
                forceUpdate();
            }, [view, size, target]);

            useEffect(() => {
                if (disabled || readOnly) {
                    return;
                }

                setOpened(opened);
            }, [opened, disabled, readOnly]);

            const onInnerToggle = useCallback(
                (openValue: boolean, event: React.SyntheticEvent | Event) => {
                    if (disabled || readOnly) {
                        return;
                    }

                    if (onToggle) {
                        onToggle(openValue, event);
                        return;
                    }

                    setOpened(openValue);
                },
                [disabled, readOnly, onToggle],
            );

            const updateValue = useCallback(
                (item: HTMLElement, event: React.SyntheticEvent | Event) => {
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
                },
                [rest.value, rest.valueType, rest.onChangeValue, onToggle, onInnerToggle],
            );

            const onClickChildrenItem = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    // INFO: Для корректной работы компонента Popper
                    event.stopPropagation();

                    const item = event.currentTarget as HTMLElement;

                    updateValue(item, event);
                },
                [updateValue],
            );

            const onNativeSelectChange = useCallback(
                (event: React.ChangeEvent<HTMLSelectElement>) => {
                    if (rest.valueType === 'multiple') {
                        return;
                    }

                    const { value: newValue } = event.target;
                    const newSelected = getNewSelected(rest.value, newValue, 'native');

                    rest.onChangeValue?.(newSelected);
                },
                [rest.value, rest.valueType, rest.onChangeValue],
            );

            const onChangeChipValue = useCallback(
                (newValue?: Array<SelectPrimitiveValue>) => {
                    if (rest.valueType !== 'multiple') {
                        return;
                    }

                    rest.onChangeValue?.(newValue);
                },
                [rest.valueType],
            );

            const { onKeyDownTarget, onKeyDownSelect } = useKeyNavigation({
                controlledRefs,
                opened: innerOpened,
                enumerationType,
                valueType,
                value,
                updateOpened: onInnerToggle,
                updateValue,
            });

            const childrenArray = useMemo(() => Children.toArray(children), [children]) as React.ReactElement[];

            const childrenMemo = useMemo(
                () => getChildren(childrenArray, { onClick: onClickChildrenItem, childrenRefs: itemsRefs }, value),
                [childrenArray, value, innerOpened],
            );

            const values = useMemo(() => getValues(childrenArray, value), [childrenArray, value]);

            return (
                <StyledRoot ref={selectRef}>
                    <StyledNativeSelect
                        aria-invalid="false"
                        aria-hidden="true"
                        aria-readonly={readOnly}
                        tabIndex={valueType === 'native' ? 0 : -1}
                        form={form}
                        name={name}
                        ref={handleRef}
                        value={`${value}`}
                        disabled={disabled || readOnly}
                        onChange={onNativeSelectChange}
                        className={cx(ref?.classList.toString(), withNativeSelectVisible)}
                    >
                        {valueType === 'native' && childrenMemo}
                    </StyledNativeSelect>
                    <StyledPopover
                        role={role}
                        isOpen={innerOpened}
                        onToggle={onInnerToggle}
                        target={
                            <SelectTarget
                                tabIndex={valueType === 'native' ? -1 : 0}
                                opened={innerOpened}
                                target={target}
                                values={values}
                                label={label}
                                enumerationType={enumerationType}
                                readOnly={readOnly}
                                disabled={disabled}
                                size={size}
                                ref={targetRef}
                                chipsRefs={chipsRefs}
                                id={innerId}
                                onChange={onChangeChipValue}
                                onKeyDown={onKeyDownTarget}
                            />
                        }
                        className={cx(ref?.classList.toString())} // INFO: Прокидываем стили для Popover
                        id={innerId}
                        offset={offset}
                        frame={frame}
                        placement={getPlacements(placement)}
                        trigger="click"
                        usePortal={usePortal}
                        selectWidth={dynamicTargetWidth}
                        isFocusTrapped={false}
                        preventOverflow={false}
                        closeOnEsc={false}
                        closeOnOverlayClick
                    >
                        <Root ref={setRef} target={target} view={view} size={size} {...rest}>
                            {valueType !== 'native' && (
                                <StyledSelect onKeyDown={onKeyDownSelect}>{childrenMemo}</StyledSelect>
                            )}
                        </Root>
                    </StyledPopover>
                </StyledRoot>
            );
        },
    );

export const selectConfig = {
    name: 'Select',
    tag: 'div',
    layout: selectRoot,
    base: '',
    variations: {
        target: {
            css: targetCSS,
        },
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
