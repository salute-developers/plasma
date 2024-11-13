import React, { forwardRef } from 'react';
import type { MutableRefObject } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import type { TargetProps } from './Target.types';
import { Button, Textfield } from './ui';

export const Target = forwardRef<HTMLButtonElement, TargetProps>(
    (
        {
            value,
            target,
            opened,
            valueToItemMap,
            label,
            placeholder,
            onKeyDown,
            labelPlacement,
            size,
            contentLeft,
            disabled,
            renderValue,
            selectProps,
            inputWrapperRef,
            multiselect,
            view,
            handleClickArrow,
            helperText,
            treeId,
            activeDescendantItemValue,
            isTargetAmount,
            onChange,
            labelToItemMap,
            chipView,
            separator,
        },
        ref,
    ) => {
        const buttonRef = useForkRef(ref, inputWrapperRef as any);

        if (selectProps.renderTarget) {
            return (
                <div ref={inputWrapperRef as any}>
                    {selectProps.renderTarget(
                        Array.isArray(value)
                            ? value.map((value) => valueToItemMap.get(value)!)
                            : valueToItemMap.get(value)!,
                    )}
                </div>
            );
        }

        return target === 'button-like' ? (
            <Button
                ref={buttonRef}
                opened={opened}
                value={value}
                valueToItemMap={valueToItemMap}
                onKeyDown={onKeyDown}
                label={label}
                size={size}
                disabled={disabled}
                renderValue={renderValue}
                selectProps={selectProps}
                separator={separator}
                treeId={treeId}
                activeDescendantItemValue={activeDescendantItemValue}
            />
        ) : (
            <Textfield
                ref={ref as MutableRefObject<HTMLInputElement>}
                inputWrapperRef={inputWrapperRef}
                opened={opened}
                multiselect={multiselect}
                value={value}
                label={label}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                labelPlacement={labelPlacement}
                size={size}
                view={view}
                handleClickArrow={handleClickArrow}
                contentLeft={contentLeft}
                helperText={helperText}
                treeId={treeId}
                activeDescendantItemValue={activeDescendantItemValue}
                disabled={disabled}
                isTargetAmount={isTargetAmount}
                valueToItemMap={valueToItemMap}
                renderValue={renderValue}
                onChange={onChange}
                labelToItemMap={labelToItemMap}
                chipView={chipView}
            />
        );
    },
);
