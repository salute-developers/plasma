import React, { forwardRef } from 'react';

import { sizeToIconSize, getItemId, getRemovedElement } from '../../../../utils';
import { classes } from '../../../../Select.tokens';

import { IconArrowWrapper, StyledArrow, StyledTextField, StyledLeftHelper } from './Textfield.styles';
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
            readOnly,
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
            if (multiselect || Array.isArray(value) || !value) {
                return '';
            }

            if (renderValue) {
                return renderValue(valueToItemMap.get(value.toString()) || { value, label: value.toString() });
            }

            return valueToItemMap.get(value.toString())?.label || value.toString();
        };

        const getChips = (): string[] => {
            if (multiselect && Array.isArray(value)) {
                if (value.length === 0) return [];

                if (isTargetAmount) {
                    return [`Выбрано ${value.length}`];
                }

                const renderValueMapper =
                    renderValue &&
                    ((stringValue: string | number) =>
                        renderValue(
                            valueToItemMap.get(stringValue) || { value: stringValue, label: stringValue.toString() },
                        ));
                const valueToItemMapper = (stringValue: string | number) =>
                    valueToItemMap.get(stringValue)?.label || stringValue.toString();

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
                    const stringValue = value[index];
                    const label = valueToItemMap.get(stringValue)?.label;

                    const labelAfterRenderValue = renderValue(
                        label
                            ? labelToItemMap.get(label)!
                            : {
                                  value: stringValue,
                                  label: stringValue.toString(),
                              },
                    );

                    if (!chipLabels.includes(labelAfterRenderValue)) {
                        resultValues.splice(index, 1);
                    }
                });

                const removedItemValue = getRemovedElement(value, resultValues, isTargetAmount);

                onChange(
                    resultValues,
                    removedItemValue
                        ? valueToItemMap.get(removedItemValue) || {
                              value: removedItemValue,
                              label: removedItemValue.toString(),
                          }
                        : null,
                );
            } else {
                const newValues = chipLabels.map((chipLabel) => {
                    return labelToItemMap.get(chipLabel)?.value || chipLabel;
                });

                const removedItemValue = getRemovedElement(value, newValues, isTargetAmount);
                const item = removedItemValue
                    ? valueToItemMap.get(removedItemValue) || {
                          value: removedItemValue,
                          label: removedItemValue.toString(),
                      }
                    : null;

                onChange(newValues, item);
            }
        };

        const helperTextStopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
        };

        return (
            <StyledTextField
                ref={ref}
                inputWrapperRef={inputWrapperRef}
                readOnly
                className={readOnly ? classes.readOnly : undefined}
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
                    <IconArrowWrapper disabled={disabled} readOnly={readOnly}>
                        <StyledArrow color="inherit" size={sizeToIconSize(size)} className={withArrowInverse} />
                    </IconArrowWrapper>
                }
                onKeyDown={onKeyDown}
                leftHelper={
                    helperText && <StyledLeftHelper onClick={helperTextStopPropagation}>{helperText}</StyledLeftHelper>
                }
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
                _onEnterDisabled // Пропс для отключения обработчика Enter внутри Textfield
                opened={opened}
                // TODO: #1547
                _forceChipManipulationWithReadonly={!readOnly}
                {...requiredProps}
                {...hintProps}
            />
        );
    },
);
