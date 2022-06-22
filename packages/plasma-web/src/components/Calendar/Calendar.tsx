import React from 'react';

import { CalendarDouble } from './CalendarDouble';
import { CalendarBase } from './CalendarBase';
import { withRange } from './withRange';
import type { CalendarBaseProps } from './CalendarBase';
import type { CalendarDoubleProps } from './CalendarDouble';
import { CalendarRange } from './types';

export type CalendarProps =
    | ({
          isDouble?: false;
          isRange?: false;
          value: Date;
      } & CalendarBaseProps)
    | ({
          isDouble?: false;
          isRange: true;
      } & CalendarRange<CalendarBaseProps>)
    | ({
          isDouble?: true;
          isRange?: false;
          value: Date;
      } & CalendarDoubleProps)
    | ({
          isDouble?: true;
          isRange: true;
      } & CalendarRange<CalendarDoubleProps>);

/**
 * Компонент календаря с диапазоном.
 */
export const CalendarBaseRange = withRange<CalendarBaseProps>(CalendarBase);

/**
 * Компонент двойного календаря c диапазоном.
 */
export const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble);

/**
 * Компонент календаря.
 */
export const Calendar: React.FC<CalendarProps> = ({ ...rest }) => {
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
