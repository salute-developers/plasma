import React, { forwardRef } from 'react';

import { sizeToIconSize, getItemId, getRemovedElement } from '../../../../utils';
import { classes } from '../../../../Select.tokens';

import { IconArrowWrapper, StyledArrow, StyledTextField } from './Textfield.styles';
import { TextfieldProps } from './Textfield.types';

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
    (
        {
            inputWrapperRef,
            opened,
            multiselect,
            value,
            label,
            labelPlacement,
            keepPlaceholder,
            placeholder,
            onKeyDown,
            size,
            view,
            contentLeft,
            helperText,
            treeId,
            activeDescendantItemValue,
            disabled,
            isTargetAmount,
            valueToItemMap,
            renderValue,
            onChange,
            labelToItemMap,
            chipView,
            requiredProps,
            chipType,
            hintProps,
        },
        ref,
    ) => {
        const withArrowInverse = opened ? classes.arrowInverse : undefined;

        const getValue = () => {
            if (multiselect || !value) {
                return '';
            }

            if (renderValue) {
                return renderValue(valueToItemMap.get(value.toString())!);
            }

            return valueToItemMap.get(value.toString())?.label || '';
        };

        const getChips = (): string[] => {
            if (multiselect && Array.isArray(value)) {
                if (value.length === 0) return [];

                if (isTargetAmount) {
                    return [`Выбрано ${value.length}`];
                }

                const renderValueMapper =
                    renderValue && ((stringValue: string | number) => renderValue(valueToItemMap.get(stringValue)!));
                const valueToItemMapper = (stringValue: string | number) => valueToItemMap.get(stringValue)!.label;

                return value.map(renderValueMapper || valueToItemMapper);
            }

            return [];
        };

        // Обработчик чипов
        const handleChipsChange = (chipLabels: any[]) => {
            if (!Array.isArray(value)) return;

            // TODO: #1564
            // Из лейблов чипов получаем value у item и далее прокидываем его в onChange.
            if (renderValue && !isTargetAmount) {
                const resultValues = [...value];

                value.forEach((_, index) => {
                    const labelAfterRenderValue = renderValue(
                        labelToItemMap.get(valueToItemMap.get(value[index])!.label)!,
                    );

                    if (!chipLabels.includes(labelAfterRenderValue)) {
                        resultValues.splice(index, 1);
                    }
                });

                const removedItemValue = getRemovedElement(value, resultValues, isTargetAmount);

                onChange(resultValues, removedItemValue ? valueToItemMap.get(removedItemValue) : null);
            } else {
                const newValues = chipLabels.map((chipLabel) => labelToItemMap.get(chipLabel)!.value);
                const removedItemValue = getRemovedElement(value, newValues, isTargetAmount);

                onChange(newValues, removedItemValue ? valueToItemMap.get(removedItemValue) : null);
            }
        };

        return (
            <StyledTextField
                ref={ref}
                inputWrapperRef={inputWrapperRef}
                readOnly
                value={getValue()}
                size={size}
                view={view}
                labelPlacement={labelPlacement}
                disabled={disabled}
                label={label}
                keepPlaceholder={keepPlaceholder}
                placeholder={value instanceof Array && value.length ? '' : placeholder}
                contentLeft={contentLeft as React.ReactElement}
                contentRight={
                    <IconArrowWrapper disabled={Boolean(disabled)}>
                        <StyledArrow color="inherit" size={sizeToIconSize(size)} className={withArrowInverse} />
                    </IconArrowWrapper>
                }
                onKeyDown={onKeyDown}
                leftHelper={helperText}
                role="combobox"
                aria-autocomplete="list"
                aria-controls={`${treeId}_tree_level_1`}
                aria-expanded={opened}
                aria-activedescendant={activeDescendantItemValue ? getItemId(treeId, activeDescendantItemValue) : ''}
                {...(multiselect
                    ? {
                          enumerationType: 'chip',
                          chips: getChips(),
                          onChangeChips: handleChipsChange,
                          chipType,
                          chipView,
                      }
                    : { enumerationType: 'plain' })}
                onEnterDisabled // Пропс для отключения обработчика Enter внутри Textfield
                opened={opened}
                // TODO: #1547
                _forceChipManipulationWithReadonly
                {...requiredProps}
                {...hintProps}
            />
        );
    },
);
