import type { FC } from 'react';
import { CalendarStateType } from '@salutejs/plasma-new-hope/styled-components';
import type { CalendarBaseProps, CalendarDoubleProps } from '@salutejs/plasma-new-hope/styled-components';
export declare const CalendarBase: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types").Calendar & import("@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types").CalendarConfigProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CalendarDouble: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types").Calendar & import("@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types").CalendarConfigProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CalendarBaseRange: ({ value, min, max, disabledList, eventList, eventMonthList, disabledMonthList, eventYearList, disabledYearList, onChangeValue, onChangeStartOfRange, ...rest }: import("@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types").CalendarRange<CalendarBaseProps>) => import("react").ReactElement<CalendarBaseProps, string | import("react").JSXElementConstructor<any>>;
export declare const CalendarDoubleRange: ({ value, min, max, disabledList, eventList, eventMonthList, disabledMonthList, eventYearList, disabledYearList, onChangeValue, onChangeStartOfRange, ...rest }: import("@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types").CalendarRange<CalendarDoubleProps>) => import("react").ReactElement<CalendarDoubleProps, string | import("react").JSXElementConstructor<any>>;
export declare const Calendar: FC<import("@salutejs/plasma-new-hope/styled-components").CalendarProps>;
export type { CalendarStateType };
