import React from 'react';

import type { SelectTargetProps } from './Target.types';
import { Button } from './elements/Button/Button';
import { Textfield } from './elements/Textfield/Textfield';

export const classes = {
    selectTarget: 'select-target',
    selectTargeText: 'select-target-text',
    selectTargetLabel: 'select-target-label',
    selectTargetArrow: 'select-target-arrow',
    arrowInverse: 'arrow-inverse',
    selectItemIsSelected: 'select-item-is-selected',
    selectItemIsDisabled: 'select-item-is-disabled',
    nativeSelectVisible: 'native-select-visible',
    hasNoFocus: 'has-no-focus',
    hasChips: 'has-chips',
    innerLabelUp: 'inner-label-up',
};

export const Target: React.FC<SelectTargetProps> = ({
    value,
    multiselect,
    targetView,
    target,
    label,
    opened,
    readOnly,
    disabled,
    size,
    id,
    onChange,
    onKeyDown,
    valueToItemMap,
    onChipClick,
    ...rest
}) => {
    return target === 'button' ? (
        <Button
            opened={opened}
            value={value}
            targetView={targetView}
            multiselect={multiselect}
            valueToItemMap={valueToItemMap}
        />
    ) : (
        <Textfield
            opened={opened}
            value={value}
            targetView={targetView}
            multiselect={multiselect}
            valueToItemMap={valueToItemMap}
            onChipClick={onChipClick}
        />
    );
};
