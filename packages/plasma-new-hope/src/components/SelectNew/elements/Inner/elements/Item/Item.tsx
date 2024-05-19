import React, { useEffect, useRef, FC, useContext } from 'react';

import { classes } from '../../../../SelectNew.tokens';
import { cx, isEmpty } from '../../../../../../utils';
import { IconDisclosureRight, IconDone } from '../../../../../_Icon';
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

    const { focusedPath, checked, multiselect, size, handleCheckboxChange, handleItemClick } = useContext(Context);

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

    const handleChange = (e) => {
        handleCheckboxChange(e, item);
    };

    const handleClick = (e) => {
        handleItemClick(e, item);
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

                {!multiselect && checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                {!multiselect && checked.get(item.value) === 'done' && (
                    <IconDone size={sizeToIconSize(size)} color="inherit" />
                )}
            </IconWrapper>

            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}

            <StyledText>{label}</StyledText>

            {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}

            {!isEmpty(item.items) && (
                <DisclosureIconWrapper>
                    <IconDisclosureRight size="xs" color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
