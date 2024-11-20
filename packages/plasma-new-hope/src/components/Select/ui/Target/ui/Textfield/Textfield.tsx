import React, { forwardRef } from 'react';

import { sizeToIconSize, getItemId } from '../../../../utils';
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
            placeholder,
            onKeyDown,
            labelPlacement,
            size,
            view,
            handleClickArrow,
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
        },
        ref,
    ) => {
        const withArrowInverse = opened ? classes.arrowInverse : undefined;

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

                onChange(resultValues);
            } else {
                onChange(chipLabels.map((chipLabel) => labelToItemMap.get(chipLabel)!.value));
            }
        };

        return (
            <StyledTextField
                ref={ref}
                inputWrapperRef={inputWrapperRef}
                readOnly
                value={multiselect ? undefined : valueToItemMap.get(value.toString())?.label || ''}
                size={size}
                view={view}
                chipView={chipView}
                labelPlacement={labelPlacement}
                disabled={disabled}
                label={label}
                placeholder={value instanceof Array && value.length ? '' : placeholder}
                contentLeft={contentLeft as React.ReactElement}
                contentRight={
                    <IconArrowWrapper disabled={Boolean(disabled)} onClick={handleClickArrow}>
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
                      }
                    : { enumerationType: 'plain' })}
                onEnterDisabled // Пропс для отключения обработчика Enter внутри Textfield
                opened={opened}
                // TODO: #1547
                _forceChipManipulationWithReadonly
                {...requiredProps}
            />
        );
    },
);
