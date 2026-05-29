import React from 'react';

import { sizeToIconSize, mapCheckedVariants } from '../../utils';
import { classes } from '../../Combobox.tokens';
import type { ComboboxProps, ItemOptionTransformed } from '../../Combobox.types';
import type { CheckedType } from '../../hooks';

import {
    StyledText,
    StyledCheckbox,
    IconWrapper,
    StyledIndicator,
    StyledCheckboxWrapper,
    StyledCell,
    StyledIconDone,
} from './ItemView.styles';

type ItemSelectionIconProps = {
    checked: CheckedType;
    disabled?: boolean;
    multiple: ComboboxProps['multiple'];
    size: ComboboxProps['size'];
    variant: ComboboxProps['variant'];
    renderSelectionIcon: ComboboxProps['renderSelectionIcon'];
    checkboxAppearance?: string;
    withMargin?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ItemSelectionIcon: React.FC<ItemSelectionIconProps> = ({
    checked,
    disabled,
    multiple,
    size,
    variant,
    renderSelectionIcon,
    checkboxAppearance,
    withMargin,
    onChange,
}) => (
    <IconWrapper variant={variant} withMargin={withMargin}>
        {renderSelectionIcon ? (
            renderSelectionIcon(mapCheckedVariants(checked, multiple))
        ) : (
            <>
                {multiple && (
                    <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                        <StyledCheckbox
                            disabled={disabled}
                            checked={Boolean(checked)}
                            indeterminate={checked === 'indeterminate'}
                            onChange={onChange}
                            appearance={checkboxAppearance ?? 'default'}
                        />
                    </StyledCheckboxWrapper>
                )}
                {!multiple && checked === 'dot' && <StyledIndicator size="s" view="default" />}
                {!multiple && checked === 'done' && (
                    <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                )}
            </>
        )}
    </IconWrapper>
);

type ItemContentProps = {
    item: ItemOptionTransformed;
    renderItem: ComboboxProps['renderItem'];
    singleLine: ComboboxProps['singleLine'];
};

export const ItemContent: React.FC<ItemContentProps> = ({ item, renderItem, singleLine }) => {
    const { label, contentLeft, contentRight } = item;

    if (renderItem) {
        return <StyledText>{renderItem(item)}</StyledText>;
    }

    return (
        <StyledCell
            contentLeft={contentLeft}
            contentRight={contentRight}
            title={label}
            className={singleLine ? classes.singleLineMode : ''}
        />
    );
};
