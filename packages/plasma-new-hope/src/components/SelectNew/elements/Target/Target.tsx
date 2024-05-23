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
}) => {
    return target === 'button' ? (
        <Button
            opened={opened}
            value={value}
            isTargetAmount={isTargetAmount}
            multiselect={multiselect}
            valueToItemMap={valueToItemMap}
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
        />
    );
};
