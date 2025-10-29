import type { HTMLAttributes, ReactNode, MutableRefObject } from 'react';

import type { DateStructureProps, EventDay } from '../../Calendar.types';

export interface DateStructureItemProps extends DateStructureProps, HTMLAttributes<HTMLDivElement> {
    day?: number | string;
    year?: number;
    monthIndex?: number;
    sideInRange?: 'left' | 'right';
    eventList?: EventDay[];
    isFocused?: boolean;
    disabledArrowKey?: string;
    disabledMonths?: string;
    onTriggerEventTooltip?: (structureRef?: MutableRefObject<HTMLDivElement | null>, events?: ReactNode[]) => void;
}
