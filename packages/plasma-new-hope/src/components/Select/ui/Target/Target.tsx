import React from 'react';

import type { TargetProps } from './Target.types';
import { Button, Textfield } from './ui';

export const Target: React.FC<TargetProps> = ({
    value,
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
    selectProps,
    separator,
}) => {
    return selectProps.target === 'button-like' ? (
        <Button
            opened={opened}
            value={value}
            valueToItemMap={valueToItemMap}
            onKeyDown={onKeyDown}
            label={label}
            size={size}
            disabled={disabled}
            renderValue={renderValue}
            focusedPath={focusedPath}
            focusedToValueMap={focusedToValueMap}
            selectProps={selectProps}
            separator={separator}
        />
    ) : (
        <Textfield
            opened={opened}
            value={value}
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
            selectProps={selectProps}
        />
    );
};
