import React, { forwardRef, ReactElement, RefAttributes } from 'react';
import styled from 'styled-components';
import { applyDropdownListCssProperties } from '@salutejs/plasma-hope';
import type { SelectProps, SelectRefElement } from '@salutejs/plasma-hope';

import { SelectView } from './SelectView';
import { withSingleSelect } from './withSingleSelect';
import { withMultiSelect } from './withMultiSelect';

const StyledSelectView = styled(SelectView)`
    ${applyDropdownListCssProperties};
`;

const SingleSelect = withSingleSelect(StyledSelectView);
const MultiSelect = withMultiSelect(StyledSelectView);

/**
 * Выпадающий список для использования в формах.
 * Поддерживает выбор одного или нескольких значений.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Select = forwardRef<SelectRefElement, SelectProps>(function Select(props, ref) {
    if (props.multiselect) {
        return <MultiSelect ref={ref} {...props} />;
    }
    return <SingleSelect ref={ref} {...props} />;
}) as <T>(props: SelectProps<T> & RefAttributes<SelectRefElement>) => ReactElement;
