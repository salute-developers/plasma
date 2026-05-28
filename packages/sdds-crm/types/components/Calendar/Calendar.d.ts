import { CalendarStateType } from '@salutejs/plasma-new-hope/styled-components';
import type { CalendarBaseProps, CalendarDoubleProps } from '@salutejs/plasma-new-hope/styled-components';

import type { FC } from 'react';

export declare const CalendarBase: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').Calendar &
        import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').CalendarConfigProps &
        import('react').RefAttributes<HTMLDivElement>
>;
export declare const CalendarDouble: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').Calendar &
        import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').CalendarConfigProps &
        import('react').RefAttributes<HTMLDivElement>
>;
export declare const CalendarBaseRange: ({
    value,
    min,
    max,
    disabledList,
    eventList,
    eventMonthList,
    disabledMonthList,
    eventYearList,
    disabledYearList,
    onChangeValue,
    onChangeStartOfRange,
    ...rest
}: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').CalendarRange<
    CalendarBaseProps
>) => import('react').ReactElement<CalendarBaseProps, string | import('react').JSXElementConstructor<any>>;
export declare const CalendarDoubleRange: ({
    value,
    min,
    max,
    disabledList,
    eventList,
    eventMonthList,
    disabledMonthList,
    eventYearList,
    disabledYearList,
    onChangeValue,
    onChangeStartOfRange,
    ...rest
}: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').CalendarRange<
    CalendarDoubleProps
>) => import('react').ReactElement<CalendarDoubleProps, string | import('react').JSXElementConstructor<any>>;
export declare const Calendar: FC<import('@salutejs/plasma-new-hope/styled-components').CalendarProps>;
export type { CalendarStateType };
