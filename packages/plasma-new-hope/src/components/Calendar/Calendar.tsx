import React from 'react';

import type { CalendarProps, ComponentVariation } from './Calendar.types';

import 'focus-visible';

/**
 * Компонент календаря с диапазоном.
 */
export const boundCalendar: (args: ComponentVariation) => React.FC<CalendarProps> = ({
    base: CalendarBase,
    double: CalendarDouble,
    baseRange: CalendarBaseRange,
    doubleRange: CalendarDoubleRange,
}) => ({ isRange, ...rest }) => {
    if (!isRange && !rest.isDouble) {
        return <CalendarBase {...rest} />;
    }

    if (!isRange && rest.isDouble) {
        return <CalendarDouble {...rest} />;
    }

    if (isRange && !rest.isDouble) {
        return <CalendarBaseRange {...rest} />;
    }

    if (isRange && rest.isDouble) {
        return <CalendarDoubleRange {...rest} />;
    }

    return null;
};
