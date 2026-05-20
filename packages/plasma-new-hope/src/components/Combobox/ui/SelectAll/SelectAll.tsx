import React, { FC } from 'react';

import { Wrapper as ItemWrapper } from '../Inner/ui/Item/Item.styles';
import { IconWrapper, StyledCell, StyledCheckbox, StyledCheckboxWrapper } from '../ItemView/ItemView.styles';
import type { SelectAllProps, ComboboxProps } from '../../Combobox.types';

import { Divider, Wrapper, DividerWrapper } from './SelectAll.styles';

export const SelectAll: FC<{
    variant: ComboboxProps['variant'];
    selectAllOptions: SelectAllProps;
}> = ({ variant, selectAllOptions }) => (
    <Wrapper variant={variant} onClick={selectAllOptions?.onClick} sticky={selectAllOptions?.sticky}>
        <ItemWrapper variant={variant}>
            <IconWrapper variant={variant} withMargin>
                <StyledCheckboxWrapper onClick={(e) => e.preventDefault()}>
                    <StyledCheckbox
                        checked={selectAllOptions?.checked}
                        indeterminate={selectAllOptions?.indeterminate}
                        appearance="default"
                    />
                </StyledCheckboxWrapper>
            </IconWrapper>

            <StyledCell title={selectAllOptions?.label || 'Выбрать всё'} />
        </ItemWrapper>

        <DividerWrapper>
            <Divider variant={variant} />
        </DividerWrapper>
    </Wrapper>
);
