import React, { forwardRef } from 'react';
import { Select as SelectHope } from '@salutejs/plasma-hope';
import type { SelectProps, SelectRefElement } from '@salutejs/plasma-hope';

const SelectBase = SelectHope({ design: 'web' });

/**
 * Выпадающий список для использования в формах.
 * Поддерживает выбор одного или нескольких значений.
 */
export const Select = forwardRef<SelectRefElement, SelectProps>((props, ref) => {
    return <SelectBase {...props} ref={ref} />;
});
