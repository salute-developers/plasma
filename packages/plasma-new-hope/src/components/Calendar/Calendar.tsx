import React from 'react';

import type { CalendarProps, ComponentVariation } from './Calendar.types';

/**
 * Компонент календаря с диапазоном.
 */
export const boundCalendar: (args: ComponentVariation) => React.FC<CalendarProps> = ({
    base: CalendarBase,
    double: CalendarDouble,
    baseRange: CalendarBaseRange,
    doubleRange: CalendarDoubleRange,
}) => (rest) => {
    if (!rest.isRange && !rest.isDouble) {
        return <CalendarBase {...rest} />;
    }

    if (!rest.isRange && rest.isDouble) {
        return <CalendarDouble {...rest} />;
    }

    if (rest.isRange && !rest.isDouble) {
        return <CalendarBaseRange {...rest} />;
    }

    if (rest.isRange && rest.isDouble) {
        return <CalendarDoubleRange {...rest} />;
    }

    return null;
};
