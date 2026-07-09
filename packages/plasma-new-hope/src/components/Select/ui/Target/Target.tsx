import React, { forwardRef } from 'react';
import type { Ref } from 'react';
import { useForkRef } from 'src/hooks';

import type { TargetProps } from './Target.types';
import { Button, Textfield, RenderTarget } from './ui';

export const Target = forwardRef<HTMLButtonElement, TargetProps>(
    (
        {
            target,
            renderTarget,
            value,
            opened,
            valueToItemMap,
            label,
            placeholder,
            onKeyDown,
            labelPlacement,
            size,
            view,
            contentLeft,
            contentRight,
            disabled,
            readOnly,
            renderValue,
            inputWrapperRef,
            multiselect,
            helperText,
            treeId,
            activeDescendantItemValue,
            isTargetAmount,
            handleChange,
            chipView,
            chipType,
            chipClickArea,
            keepPlaceholder,
            requiredProps,
            hintProps,
        },
        ref,
    ) => {
        const buttonRef = useForkRef<HTMLElement>(ref as Ref<HTMLElement>, inputWrapperRef);

        if (renderTarget) {
            return (
                <RenderTarget
                    inputWrapperRef={inputWrapperRef}
                    multiselect={multiselect}
                    value={value}
                    opened={opened}
                    renderTarget={renderTarget}
                    valueToItemMap={valueToItemMap}
                />
            );
        }

        return target === 'button-like' ? (
            <Button
                ref={buttonRef as Ref<HTMLButtonElement>}
                opened={opened}
                value={value}
                valueToItemMap={valueToItemMap}
                onKeyDown={onKeyDown}
                label={label}
                size={size}
                disabled={disabled || readOnly}
                renderValue={renderValue}
                treeId={treeId}
                activeDescendantItemValue={activeDescendantItemValue}
                multiselect={multiselect}
                isTargetAmount={isTargetAmount}
            />
        ) : (
            <Textfield
                ref={ref as Ref<HTMLInputElement>}
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
                contentLeft={contentLeft}
                contentRight={contentRight}
                helperText={helperText}
                treeId={treeId}
                activeDescendantItemValue={activeDescendantItemValue}
                disabled={disabled}
                readOnly={readOnly}
                isTargetAmount={isTargetAmount}
                valueToItemMap={valueToItemMap}
                renderValue={renderValue}
                handleChange={handleChange}
                chipView={chipView}
                chipType={chipType}
                chipClickArea={chipClickArea}
                keepPlaceholder={keepPlaceholder}
                requiredProps={requiredProps}
                hintProps={hintProps}
            />
        );
    },
);
