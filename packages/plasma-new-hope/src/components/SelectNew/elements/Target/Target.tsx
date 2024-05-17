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
        { values, targetView, target, label, opened, readOnly, disabled, size, id, onChange, onKeyDown, ...rest },
        ref,
    ) => {
        const hasLabel = label && target === 'textfield';
        const textContent = values.map(({ label }) => label).join(', ');
        const contentRef = useRef<HTMLDivElement>(null);

        const withArrowInverse = opened ? arrowInverse : undefined;
        const withInnerLabelUp = hasLabel ? innerLabelUp : undefined;
        const withHasChips = target === 'textfield' ? hasChips : undefined;

        const withNoFocus = target === 'textfield' ? hasNoFocus : undefined;

        const isLabelVisible = hasLabel;

        const onChipClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
        };

        const onChipClear = (value: any, text: any) => {
            const newValue = values
                ?.filter(([itemValue, itemText]) => !(itemValue === value && itemText === text))
                .map(([itemValue]) => itemValue);

            onChange?.(newValue);
        };

        return target === 'button' ? (
            <Button opened={opened} values={values} targetView={targetView} />
        ) : (
            <Textfield opened={opened} values={values} targetView={targetView} />
        );
    },
);
