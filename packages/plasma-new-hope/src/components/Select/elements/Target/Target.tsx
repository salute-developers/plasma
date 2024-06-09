import React from 'react';

import type { TargetProps } from './Target.types';
import { Button } from './elements/Button/Button';
import { Textfield } from './elements/Textfield/Textfield';

export const Target: React.FC<TargetProps> = ({
    value,
    multiselect,
    isTargetAmount,
    target,
    opened,
    valueToItemMap,
    onChipClick,
    label,
    placeholder,
    onKeyDown,
    focusedChipIndex,
    labelPlacement,
    size,
    contentLeft,
    disabled,
    renderValue,
    focusedPath,
    focusedToValueMap,
}) => {
    return target === 'button' ? (
        <Button
            opened={opened}
            value={value}
            isTargetAmount={isTargetAmount}
            multiselect={multiselect}
            valueToItemMap={valueToItemMap}
            onKeyDown={onKeyDown}
            label={label}
            size={size}
            disabled={disabled}
            renderValue={renderValue}
            focusedPath={focusedPath}
            focusedToValueMap={focusedToValueMap}
        />
    ) : (
        <Textfield
            opened={opened}
            value={value}
            isTargetAmount={isTargetAmount}
            multiselect={multiselect}
            valueToItemMap={valueToItemMap}
            onChipClick={onChipClick}
            label={label}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            focusedChipIndex={focusedChipIndex}
            labelPlacement={labelPlacement}
            size={size}
            contentLeft={contentLeft}
            disabled={disabled}
            renderValue={renderValue}
            focusedPath={focusedPath}
            focusedToValueMap={focusedToValueMap}
        />
    );
};
