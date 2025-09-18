import React, { forwardRef } from 'react';

import { sizeToIconSize, getItemId } from '../../../../utils';
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

        const getChips = (): { value: string | number; label: string; disabled: boolean }[] => {
            if (multiselect && Array.isArray(value)) {
                if (value.length === 0) return [];

                if (isTargetAmount) {
                    return [
                        {
                            value: '_removeAll',
                            label: `Выбрано ${value.length}`,
                            disabled: value.every((val) => valueToItemMap?.get(val)?.disabled),
                        },
                    ];
                }

                return value.map((value) => {
                    const currentLabel = renderValue
                        ? renderValue(valueToItemMap.get(value) || { value, label: value.toString() })
                        : valueToItemMap.get(value)?.label || value.toString();

                    return {
                        value,
                        label: currentLabel,
                        disabled: valueToItemMap.get(value)?.disabled || false,
                    };
                });
            }

            return [];
        };

        // Обработчик чипов
        const handleChipClick = (chip: { value: string; label: string; disabled: boolean }) => {
            if (!Array.isArray(value)) return;

            if (isTargetAmount) {
                // При закрытии чипа в режиме isTargetAmount в value оставляем только disabled-элементы
                onChange(value.filter((val) => valueToItemMap?.get(val)?.disabled));
            } else {
                onChange(
                    value.filter((val) => val !== chip.value),
                    valueToItemMap.get(chip.value) || null,
                );
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
                          _chips: getChips(),
                          _onChipClick: handleChipClick,
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
