import React, { Children, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { getPlacements } from '../Dropdown/utils';

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
                enumerationType = 'comma',
                isOpen = false,
                placement = 'bottom',
                offset = [0, 4],
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
            const handleRef = useForkRef<HTMLSelectElement>(rootRef, outerRootRef);

            const [innerIsOpen, setInnerIsOpen] = useState(isOpen);

            const withNativeSelectVisible = selectType === 'native' ? classes.nativeSelectVisible : undefined;

            // INFO: Из-за того, что классы передаются через ref,
            // состояние пропсов после изменения view, size, target
            // всегда предыдущее, поэтому нужно делать форс-ререндер
            const [, forceRender] = useState(0);
            useEffect(() => {
                forceRender((prevValue) => ++prevValue);
            }, [view, size, target]);

            useEffect(() => {
                if (disabled || readOnly) {
                    return;
                }

                setInnerIsOpen(isOpen);
            }, [isOpen, disabled, readOnly]);

            const onInnerToggle = useCallback(
                (openValue: boolean, event: React.SyntheticEvent | Event) => {
                    if (disabled || readOnly) {
                        return;
                    }

                    if (onToggle) {
                        onToggle(openValue, event);
                        return;
                    }

                    setInnerIsOpen(openValue);
                },
                [disabled, readOnly, onToggle],
            );

            const updateValue = useCallback(
                (item: HTMLElement, event: React.SyntheticEvent | Event) => {
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

                    onInnerToggle?.(false, event);
                },
                [rest.value, rest.selectType, rest.onChangeValue, onToggle, onInnerToggle],
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

            const targetRef = useRef<HTMLButtonElement>(null);
            const chipsRefs = useRef<Array<HTMLButtonElement>>([]);
            const selectRef = useRef<HTMLDivElement>(null);
            const itemsRefs = useRef<Array<HTMLDivElement>>([]);

            const controlledRefs = { targetRef, chipsRefs, selectRef, itemsRefs };

            const { onKeyDownTarget, onKeyDownSelect } = useKeyNavigation({
                controlledRefs,
                isOpen: innerIsOpen,
                enumerationType,
                selectType,
                value,
                updateIsOpen: onInnerToggle,
                updateValue,
            });

            const childrenMemo = useMemo(
                () => getChildren(childrenArray, { onClick: onClickChildrenItem, childrenRefs: itemsRefs }, value),
                [childrenArray, value, innerIsOpen],
            );

            const values = useMemo(() => getValues(childrenArray, value), [childrenArray, value]);

            return (
                <StyledRoot ref={selectRef}>
                    <StyledNativeSelect
                        aria-invalid="false"
                        aria-hidden="true"
                        aria-readonly={readOnly}
                        tabIndex={selectType === 'native' ? 0 : -1}
                        form={form}
                        name={name}
                        ref={handleRef}
                        value={`${value}`}
                        disabled={disabled || readOnly}
                        onChange={onNativeSelectChange}
                        className={cx(ref?.classList.toString(), withNativeSelectVisible)}
                    >
                        {selectType === 'native' && childrenMemo}
                    </StyledNativeSelect>
                    <StyledPopover
                        role={role}
                        isOpen={innerIsOpen}
                        onToggle={onInnerToggle}
                        target={
                            <SelectTarget
                                tabIndex={selectType === 'native' ? -1 : 0}
                                isOpen={innerIsOpen}
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
                                onChipClick={onChipClick}
                                onChangeValue={onChangeChipValue}
                                onKeyDown={onKeyDownTarget}
                            />
                        }
                        className={cx(ref?.classList.toString())} // INFO: Прокидываем стили для Popover
                        id={innerId}
                        offset={offset}
                        frame={frame}
                        placement={getPlacements(placement)}
                        trigger="click"
                        usePortal={false}
                        isFocusTrapped={false}
                        preventOverflow={false}
                        closeOnEsc={false}
                        closeOnOverlayClick
                    >
                        <Root ref={setRef} target={target} view={view} size={size} {...rest}>
                            {selectType !== 'native' && (
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
