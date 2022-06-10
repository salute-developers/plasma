import React from 'react';

import { CalendarDouble } from './CalendarDouble';
import { CalendarBase } from './CalendarBase';
import type { CalendarBaseProps } from './CalendarBase';
import type { CalendarDoubleProps } from './CalendarDouble';

export type CalendarProps =
    | ({
          isDouble?: false;
      } & CalendarBaseProps)
    | ({
          isDouble?: true;
      } & CalendarDoubleProps);

/**
 * Компонент календаря.
 */
export const Calendar: React.FC<CalendarProps> = ({ isDouble = false, ...rest }) => {
    return isDouble ? <CalendarDouble {...rest} /> : <CalendarBase {...rest} />;
};
