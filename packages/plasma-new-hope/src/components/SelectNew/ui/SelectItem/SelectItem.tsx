import React, { useEffect, useRef, FC } from 'react';

import { classes } from '../../SelectNew.tokens';
import { cx } from '../../../../utils';
import { IconDisclosureRight } from '../../../_Icon';
import { Checkbox as CheckboxWeb } from '../../../../examples/plasma_web/components/Checkbox/Checkbox';

import { StyledContentLeft, StyledContentRight, StyledText, Wrapper, DisclosureIconWrapper } from './SelectItem.styles';

export const SelectItem: FC<any> = ({ item, path, focusedPath, currentLevel, index, checked, setChecked }) => {
    const { value, label, disabled, isDisabled, contentLeft, contentRight } = item;

    const ref = useRef<HTMLLIElement | null>(null);

    const isDisabledClassName = disabled || isDisabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

    const oldChecked = { ...checked };

    useEffect(() => {
        if (focusedClass && ref?.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focusedClass]);

    const updateAncestors = (node: any) => {
        if (!node.parent) return;

        const { parent } = node;
        const siblings = parent.items;
        const siblingsLength = siblings.length;
        let checkedFromAllSiblings = 0;
        let isParentIndeterminate = false;

        siblings.forEach((sib) => {
            if (oldChecked[sib.value] === 'indeterminate') {
                isParentIndeterminate = true;
                return;
            }

            if (oldChecked[sib.value]) {
                checkedFromAllSiblings += 1;
            }
        });

        if (isParentIndeterminate || (checkedFromAllSiblings > 0 && checkedFromAllSiblings < siblingsLength)) {
            oldChecked[parent.value] = 'indeterminate';
        } else if (checkedFromAllSiblings === 0) {
            oldChecked[parent.value] = false;
        } else {
            oldChecked[parent.value] = true;
        }

        updateAncestors(parent);
    };

    const updateDescendants = (node: any, isChecked: boolean) => {
        if (!node.items) return;

        node.items.forEach((item) => {
            oldChecked[item.value] = isChecked;

            if (item.items) {
                updateDescendants(item, isChecked);
            }
        });
    };

    const handleChange = (e) => {
        e.stopPropagation();

        if (!oldChecked[item.value]) {
            oldChecked[item.value] = true;
            updateDescendants(item, true);
        } else {
            oldChecked[item.value] = false;
            updateDescendants(item, false);
        }

        setChecked(oldChecked);

        updateAncestors(item);
    };

    return (
        <Wrapper className={cx(isDisabledClassName, focusedClass, activeClass)} id={value.toString()} ref={ref}>
            <CheckboxWeb
                checked={Boolean(checked[item.value])}
                indeterminate={checked[item.value] === 'indeterminate'}
                onChange={handleChange}
            />

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
