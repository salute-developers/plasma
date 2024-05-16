import React, { useEffect, useRef, FC, useContext } from 'react';

import { classes } from '../../../../SelectNew.tokens';
import { cx } from '../../../../../../utils';
import { IconDisclosureRight, IconDone } from '../../../../../_Icon';
import { useTreeControls } from '../../../../hooks/useTreeControls';
import { Context } from '../../../../SelectNew';

import {
    StyledContentLeft,
    StyledContentRight,
    StyledText,
    Wrapper,
    DisclosureIconWrapper,
    StyledCheckbox,
    IconWrapper,
    StyledIndicator,
} from './Item.styles';

const sizeToIconSize = (size: string) => {
    if (size === 'xs') return 'xs';

    return 's';
};

export const Item: FC<any> = ({ item, path, currentLevel, index }) => {
    const { value, label, disabled, isDisabled, contentLeft, contentRight } = item;
    const ref = useRef<HTMLLIElement | null>(null);

    const { focusedPath, checked, setChecked, multiselect, size, setValues, valueToItemMap } = useContext(Context);

    const isDisabledClassName = disabled || isDisabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

    // Создаем копию, чтобы в нее вносить изменения и в конце сеттить финальный вариант
    const checkedCopy = new Map(checked);

    const { updateAncestors, updateDescendants, updateSingleAncestors } = useTreeControls(item, checkedCopy);

    useEffect(() => {
        if (focusedClass && ref?.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focusedClass]);

    const handleCheckboxChange = (e: any) => {
        e.stopPropagation();

        if (!checkedCopy.get(item.value)) {
            checkedCopy.set(item.value, true);
            updateDescendants(item, true);
        } else {
            checkedCopy.set(item.value, false);
            updateDescendants(item, false);
        }
        updateAncestors(item);

        setChecked(checkedCopy);

        const newValues = [];

        valueToItemMap.forEach((value, key) => {
            if (checkedCopy.get(key)) {
                newValues.push(value);
            }
        });

        setValues(newValues);
    };

    const handleClick = (e: any) => {
        if (multiselect && !item.items) {
            handleCheckboxChange(e);
        }

        if (item.items || multiselect) {
            return;
        }

        e.stopPropagation();

        const isCurrentChecked = checkedCopy.get(item.value);

        checkedCopy.forEach((_, key) => {
            checkedCopy.set(key, false);
        });

        if (!isCurrentChecked) {
            checkedCopy.set(item.value, 'done');
            updateSingleAncestors(item, 'dot');
        }

        setChecked(checkedCopy);
    };

    return (
        <Wrapper
            className={cx(isDisabledClassName, focusedClass, activeClass)}
            id={value.toString()}
            ref={ref}
            onClick={handleClick}
        >
            <IconWrapper>
                {multiselect && (
                    <StyledCheckbox
                        checked={Boolean(checked.get(item.value))}
                        indeterminate={checked.get(item.value) === 'indeterminate'}
                        onChange={handleCheckboxChange}
                    />
                )}

                {!multiselect && checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                {!multiselect && checked.get(item.value) === 'done' && (
                    <IconDone size={sizeToIconSize(size)} color="inherit" />
                )}
            </IconWrapper>

            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}

            <StyledText>{label}</StyledText>

            {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}

            {item.items && (
                <DisclosureIconWrapper>
                    <IconDisclosureRight size="xs" color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
