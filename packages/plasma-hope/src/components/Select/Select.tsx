import React, { forwardRef, ReactElement, RefAttributes } from 'react';
import styled from 'styled-components';

import type { DropdownListCssProperties } from '../Dropdown';
import { applyDropdownListCssProperties } from '../Dropdown';

import { SelectView } from './SelectView';
import { withSingleSelect } from './withSingleSelect';
import { withMultiSelect } from './withMultiSelect';
import type { SelectViewProps } from './SelectView';
import type { SelectRefElement } from './SelectButton';
import type { Design } from './types';

export type SelectProps<T = any> = (
    | {
          /**
           * Выбор нескольких значений.
           */
          multiselect?: false;
          /**
           * Разделитель выбранных значений.
           */
          separator?: never;
      }
    | {
          /**
           * Выбор нескольких значений.
           */
          multiselect?: true;
          /**
           * Разделитель выбранных значений.
           */
          separator?: string;
      }
) & {
    /**
     * Значение control.
     */
    value: T;
    /**
     * Обработчик изменения значения.
     */
    onChange?: (value: T) => void;
} & Omit<SelectViewProps, 'onItemClick' | 'value' | 'label' | 'multiselect'> &
    DropdownListCssProperties;

const StyledSelectView = styled(SelectView)`
    ${applyDropdownListCssProperties};
`;

const SingleSelect = withSingleSelect(StyledSelectView);
const MultiSelect = withMultiSelect(StyledSelectView);

export const Select = ({ design }: Design) =>
    forwardRef<SelectRefElement, SelectProps>((props, ref) => {
        if (props.multiselect) {
            return <MultiSelect design={design} ref={ref} {...props} />;
        }
        return <SingleSelect design={design} ref={ref} {...props} />;
    }) as <T>(props: SelectProps<T> & RefAttributes<SelectRefElement>) => ReactElement;
