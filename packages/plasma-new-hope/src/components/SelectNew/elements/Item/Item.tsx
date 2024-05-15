import React, { useEffect, useRef, FC } from 'react';

import { classes } from '../../SelectNew.tokens';
import { cx } from '../../../../utils';
import { IconDisclosureRight, IconDone } from '../../../_Icon';

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

export const Item: FC<any> = ({
    item,
    path,
    focusedPath,
    currentLevel,
    index,
    checked,
    setChecked,
    multiselect,
    size,
}) => {
    const { value, label, disabled, isDisabled, contentLeft, contentRight } = item;
    const ref = useRef<HTMLLIElement | null>(null);

    const isDisabledClassName = disabled || isDisabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

    const oldChecked = new Map(checked);

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
            if (oldChecked.get(sib.value) === 'indeterminate') {
                isParentIndeterminate = true;
                return;
            }

            if (oldChecked.get(sib.value)) {
                checkedFromAllSiblings += 1;
            }
        });

        if (isParentIndeterminate || (checkedFromAllSiblings > 0 && checkedFromAllSiblings < siblingsLength)) {
            oldChecked.set(parent.value, 'indeterminate');
        } else if (checkedFromAllSiblings === 0) {
            oldChecked.set(parent.value, false);
        } else {
            oldChecked.set(parent.value, true);
        }

        updateAncestors(parent);
    };

    const updateDescendants = (node: any, isChecked: boolean) => {
        if (!node.items) return;

        node.items.forEach((item) => {
            oldChecked.set(item.value, isChecked);

            if (item.items) {
                updateDescendants(item, isChecked);
            }
        });
    };

    const handleChange = (e) => {
        e.stopPropagation();

        if (!oldChecked.get(item.value)) {
            oldChecked.set(item.value, true);
            updateDescendants(item, true);
        } else {
            oldChecked.set(item.value, false);
            updateDescendants(item, false);
        }
        updateAncestors(item);

        setChecked(oldChecked);
    };

    const updateSingleAncestors = (node: any, type) => {
        if (!node.parent) return;

        const { parent } = node;

        oldChecked.set(parent.value, type);

        updateSingleAncestors(parent, type);
    };

    const handleClick = (e) => {
        if (multiselect && !item.items) {
            handleChange(e);
        }

        if (item.items || multiselect) {
            return;
        }

        e.stopPropagation();

        const isCurrentChecked = oldChecked.get(item.value);

        oldChecked.forEach((_, key) => {
            oldChecked.set(key, false);
        });

        if (!isCurrentChecked) {
            oldChecked.set(item.value, 'done');
            updateSingleAncestors(item, 'dot');
        }

        setChecked(oldChecked);
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
                        onChange={handleChange}
                    />
                )}

                {!multiselect && checked.get(item.value) && checked.get(item.value) === 'dot' && (
                    <StyledIndicator size="s" view="default" />
                )}

                {!multiselect && checked.get(item.value) && checked.get(item.value) === 'done' && (
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
