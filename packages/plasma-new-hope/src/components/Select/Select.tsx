import React, { Children, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { safeUseId, useFocusTrap, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { getPlacements } from '../Dropdown/utils';

import { base as targetCSS } from './variations/_target/base';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { SelectTarget } from './ui';
import { getNewSelected, getValues, updatePropsRecursively } from './utils';
import { classes } from './Select.tokens';
import { StyledNativeSelect, StyledPopover, StyledRoot, StyledSelect } from './Select.styles';
import type { SelectPrimitiveValue, SelectProps } from './Select.types';

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
                enumerationType = 'comma',
                isFocusTrapped = true,
                isOpen = false,
                placement = 'auto',
                trigger = 'click',
                offset = [0, 4],
                preventOverflow = false,
                closeOnOverlayClick = true,
                closeOnEsc = false,
                onToggle,
                ...rest
            },
            outerRootRef,
        ) => {
            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const { selectType = 'single', value } = rest;

            const [ref, setRef] = useState<HTMLSelectElement | null>(null);
            const rootRef = useRef<HTMLSelectElement | null>(null);
            const selectRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLSelectElement>(rootRef, outerRootRef);

            const trapRef = useFocusTrap(isOpen && isFocusTrapped);
            const selectForkRef = useForkRef<HTMLDivElement>(selectRef, trapRef);

            const [innerIsOpen, setInnerIsOpen] = useState(isOpen);

            const withNativeSelectVisible = selectType === 'native' ? classes.nativeSelectVisible : undefined;

            useEffect(() => {
                if (disabled || readOnly) {
                    return;
                }

                setInnerIsOpen(isOpen);
            }, [isOpen, disabled, readOnly]);

            const onInnerToggle = useCallback(
                (openValue: boolean) => {
                    if (disabled || readOnly) {
                        return;
                    }

                    setInnerIsOpen(openValue);
                },
                [disabled, readOnly],
            );

            const onClickChildrenItem = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    // INFO: Для корректной работы компонента Popper
                    event.stopPropagation();

                    const item = event.currentTarget as HTMLElement;
                    const {
                        dataset: { value: newValue },
                    } = item;

                    if (rest.selectType === 'multiple') {
                        const newSelected = getNewSelected(rest.value, newValue, rest.selectType);
                        rest.onChangeValue?.(newSelected);

                        return;
                    }

                    const newSelected = getNewSelected(rest.value, newValue, 'single');

                    rest.onChangeValue?.(newSelected);

                    if (onToggle) {
                        onToggle?.(false, event);
                        return;
                    }

                    onInnerToggle?.(false);
                },
                [rest.value, rest.selectType, rest.onChangeValue, onToggle, onInnerToggle],
            );

            const onNativeSelectChange = useCallback(
                (event: React.ChangeEvent<HTMLSelectElement>) => {
                    if (rest.selectType === 'multiple') {
                        return;
                    }

                    const { value: newValue } = event.target;
                    const newSelected = getNewSelected(rest.value, newValue, 'native');

                    rest.onChangeValue?.(newSelected);
                },
                [rest.value, rest.selectType, rest.onChangeValue],
            );

            const onChangeChipValue = useCallback(
                (newValue?: Array<SelectPrimitiveValue>) => {
                    if (rest.selectType !== 'multiple') {
                        return;
                    }

                    rest.onChangeValue?.(newValue);
                },
                [rest.selectType],
            );

            const onChipClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
            }, []);

            const childrenArray = useMemo(() => Children.toArray(children), [children]) as React.ReactElement[];

            const childrenMemo = useMemo(
                () => updatePropsRecursively(childrenArray, { onClick: onClickChildrenItem }, value),
                [childrenArray, value, innerIsOpen],
            );

            const values = useMemo(() => getValues(childrenArray, value), [childrenArray, value]);

            return (
                <StyledRoot ref={selectRef}>
                    <StyledNativeSelect
                        aria-invalid="false"
                        aria-hidden="true"
                        aria-readonly={readOnly}
                        tabIndex={-1}
                        form={form}
                        name={name}
                        ref={handleRef}
                        value={`${value}`}
                        disabled={disabled || readOnly}
                        onChange={onNativeSelectChange}
                        className={withNativeSelectVisible}
                    >
                        {selectType === 'native' && childrenMemo}
                    </StyledNativeSelect>
                    <StyledPopover
                        role={role}
                        isFocusTrapped={isFocusTrapped}
                        isOpen={innerIsOpen}
                        usePortal={false}
                        onToggle={onToggle || onInnerToggle}
                        id={innerId}
                        className={cx(ref?.classList.toString())} // INFO: Прокидываем стили для Popover
                        ref={selectForkRef}
                        target={
                            <SelectTarget
                                isOpen={innerIsOpen}
                                target={target}
                                values={values}
                                label={label}
                                enumerationType={enumerationType}
                                readOnly={readOnly}
                                disabled={disabled}
                                id={innerId}
                                size={size}
                                onChipClick={onChipClick}
                                onChangeValue={onChangeChipValue}
                            />
                        }
                        offset={offset}
                        preventOverflow={preventOverflow}
                        placement={getPlacements(placement)}
                        trigger={trigger}
                        closeOnOverlayClick={closeOnOverlayClick}
                        closeOnEsc={closeOnEsc}
                        frame={frame}
                    >
                        <Root ref={setRef} target={target} view={view} size={size} {...rest}>
                            {selectType !== 'native' && <StyledSelect>{childrenMemo}</StyledSelect>}
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
