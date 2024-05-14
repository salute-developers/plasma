import React, { useEffect, useRef, FC } from 'react';

import { classes } from '../../SelectNew.tokens';
import { cx } from '../../../../utils';
import { IconDisclosureRight } from '../../../_Icon';
import { Checkbox as CheckboxWeb } from '../../../../examples/plasma_web/components/Checkbox/Checkbox';

import { StyledContentLeft, StyledContentRight, StyledText, Wrapper, DisclosureIconWrapper } from './SelectItem.styles';

export const SelectItem: FC<any> = ({ item, path, focusedPath, currentLevel, index, data, setData }) => {
    const { value, label, disabled, isDisabled, contentLeft, contentRight } = item;

    const ref = useRef<HTMLLIElement | null>(null);

    const isDisabledClassName = disabled || isDisabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

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
        // console.log('node', node);
        if (!node.parent) return;

        const { parent } = node;
        const siblings = parent.items;
        const siblingsLength = siblings.length;
        let checkedFromAllSiblings = 0;
        let isParentIndeterminate = false;

        siblings.forEach((sib) => {
            // console.log('sib', sib);

            if (sib.indeterminate) {
                isParentIndeterminate = true;
                return;
            }

            if (sib.checked) {
                checkedFromAllSiblings += 1;
            }
        });

        console.log(isParentIndeterminate, checkedFromAllSiblings, siblingsLength);

        if (isParentIndeterminate || (checkedFromAllSiblings > 0 && checkedFromAllSiblings < siblingsLength)) {
            console.log('1', parent);
            // parent.checked = false;
            // parent.indeterminate = true;
            // parent.RANDOM = 'STRING';
            node.parent = null;
            console.log('parent', parent);
        } else if (checkedFromAllSiblings === 0) {
            console.log('2');
            parent.checked = false;
            parent.indeterminate = false;
        } else {
            console.log('3');
            parent.checked = true;
            parent.indeterminate = false;
        }

        // updateAncestors(parent);
    };

    const updateDescendants = (node: any, isChecked: boolean) => {
        if (!node.items) return;

        node.items.forEach((item) => {
            item.checked = isChecked;
            item.indeterminate = false;

            if (item.items) {
                updateDescendants(item, isChecked);
            }
        });
    };

    const onClick = () => {
        // console.log('onclick item', item);
        if (!item.checked || item.indeterminate) {
            item.checked = true;
            updateDescendants(item, true);
        } else {
            item.checked = false;
            updateDescendants(item, false);
        }

        updateAncestors(item);

        setData([...data]);
    };

    return (
        <Wrapper className={cx(isDisabledClassName, focusedClass, activeClass)} id={value.toString()} ref={ref}>
            <CheckboxWeb checked={item.checked} indeterminate={item.indeterminate} onChange={onClick} />

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
