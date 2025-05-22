import React, { FC } from 'react';

import {
    IconWrapper,
    StyledCell,
    StyledCheckbox,
    StyledCheckboxWrapper,
    StyledWrapper,
    Wrapper as ItemWrapper,
} from '../Inner/ui/Item/Item.styles';
import type { SelectAllProps, ComboboxProps } from '../../Combobox.types';

import { Divider, Wrapper, DividerWrapper } from './SelectAll.styles';

export const SelectAll: FC<{
    variant: ComboboxProps['variant'];
    selectAllOptions: SelectAllProps;
}> = ({ variant, selectAllOptions }) => (
    <Wrapper variant={variant} onClick={selectAllOptions?.onClick} sticky={selectAllOptions?.sticky}>
        <ItemWrapper variant={variant}>
            <IconWrapper variant={variant}>
                <StyledCheckboxWrapper onClick={(e) => e.preventDefault()}>
                    <StyledCheckbox
                        checked={selectAllOptions?.checked}
                        indeterminate={selectAllOptions?.indeterminate}
                        appearance="default"
                    />
                </StyledCheckboxWrapper>
            </IconWrapper>

            <StyledWrapper>
                <StyledCell
                    // TODO: #1548
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    title={<span>{selectAllOptions?.label || 'Выбрать всё'}</span>}
                />
            </StyledWrapper>
        </ItemWrapper>

        <DividerWrapper>
            <Divider variant={variant} />
        </DividerWrapper>
    </Wrapper>
);
