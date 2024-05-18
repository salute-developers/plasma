import React, { forwardRef, useRef } from 'react';

import { cx } from '../../../../utils';

import { Chip } from './elements/Chip/Chip';
import { StyledArrow, StyledChips, StyledChipsWrapper, StyledLabel, StyledText } from './Target.styles';
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

const {
    hasNoFocus,
    hasChips,
    innerLabelUp,
    arrowInverse,
    selectTarget,
    selectTargetArrow,
    selectTargeText,
    selectTargetLabel,
} = classes;

export const Target = forwardRef<HTMLButtonElement, SelectTargetProps>(
    (
        {
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
            ...rest
        },
        ref,
    ) => {
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
            />
        );
    },
);
