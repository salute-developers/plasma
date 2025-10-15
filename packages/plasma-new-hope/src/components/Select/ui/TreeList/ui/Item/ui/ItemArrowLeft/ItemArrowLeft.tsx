import React, { useContext } from 'react';
import type { FC } from 'react';
import { sizeToIconSize } from 'src/components/Select/utils';
import { Context } from 'src/components/Select/Select.context';
import { classes } from 'src/components/Select/Select.tokens';

import {
    DisclosureIconWrapper,
    IconWrapper,
    StyledArrowLeft,
    StyledCell,
    StyledCheckbox,
    StyledCheckboxWrapper,
    StyledIconDone,
    StyledIndicator,
    StyledText,
    StyledWrapper,
    Wrapper,
    Offset,
} from '../../Item.styles';
import { ItemArrowProps } from '../../Item.types';

export const ItemArrowLeft: FC<ItemArrowProps> = ({ item, index, onClick, onChange, isCurrentLevelOpened }) => {
    const { label, disabled, isDisabled, contentLeft, contentRight } = item;

    const isLeaf = !item?.items;

    const {
        checked,
        multiselect,
        size,
        variant,
        renderItem,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _checkboxAppearance,
        focusedPath,
        valueToPathMap,
    } = useContext(Context);

    const itemDisabled = Boolean(disabled || isDisabled);

    const currentItemDepth = (valueToPathMap.get(item.value.toString())?.length || 0) - 1;

    const withArrowInverse = isCurrentLevelOpened ? classes.arrowInverse : undefined;

    const focusedClass =
        currentItemDepth === focusedPath.length - 1 && index === focusedPath?.[currentItemDepth]
            ? classes.dropdownItemIsFocused
            : undefined;

    return (
        <Wrapper className={focusedClass} onClick={onClick} variant={variant} role="treeitem">
            <Offset depth={currentItemDepth} />

            <DisclosureIconWrapper visibility={isLeaf ? 'hidden' : 'visible'}>
                <StyledArrowLeft size={sizeToIconSize(size, variant)} color="inherit" className={withArrowInverse} />
            </DisclosureIconWrapper>

            {multiselect && (
                <IconWrapper variant={variant}>
                    <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                        <StyledCheckbox
                            disabled={itemDisabled}
                            checked={Boolean(checked.get(item.value))}
                            indeterminate={checked.get(item.value) === 'indeterminate'}
                            onChange={onChange}
                            appearance={_checkboxAppearance ?? 'default'}
                        />
                    </StyledCheckboxWrapper>
                </IconWrapper>
            )}

            {renderItem ? (
                <StyledText>{renderItem(item)}</StyledText>
            ) : (
                <StyledWrapper disabled={itemDisabled}>
                    <StyledCell
                        contentLeft={contentLeft}
                        contentRight={contentRight}
                        // TODO: #1548
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        title={<span>{label}</span>}
                    />
                </StyledWrapper>
            )}

            {!multiselect && (
                <IconWrapper variant={variant}>
                    {checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                    {checked.get(item.value) === 'done' && (
                        <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                    )}
                </IconWrapper>
            )}
        </Wrapper>
    );
};
