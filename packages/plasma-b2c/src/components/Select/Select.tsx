import React, { forwardRef } from 'react';
import type { SelectProps, SelectRefElement } from '@salutejs/plasma-hope';
import { Select as SelectHope } from '@salutejs/plasma-hope';

// TODO: Удалить Select из hope с внедрением компонента SelectNested в new-hope

const SelectBase = SelectHope({ design: 'b2c' });

/**
 * Выпадающий список для использования в формах.
 * Поддерживает выбор одного или нескольких значений.
 */
export const Select = forwardRef<SelectRefElement, SelectProps>((props, ref) => {
    return <SelectBase {...props} ref={ref} />;
});
