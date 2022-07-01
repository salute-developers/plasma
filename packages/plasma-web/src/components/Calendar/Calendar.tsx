import React from 'react';

import { CalendarDouble } from './CalendarDouble';
import { CalendarBase } from './CalendarBase';
import { withRange } from './withRange';
import type { CalendarBaseProps } from './CalendarBase';
import type { CalendarDoubleProps } from './CalendarDouble';
import { CalendarRange } from './types';

export type CalendarProps =
    | ({
          /**
           * Режим отображения: двойной или одинарный.
           */
          isDouble?: false;
          /**
           * Режим выбора: диапазон или одинарный.
           */
          isRange?: false;
          /**
           * Выбранное значение.
           */
          value: Date;
      } & CalendarBaseProps)
    | ({
          /**
           * Режим отображения: двойной или одинарный.
           */
          isDouble?: false;
          /**
           * Режим выбора: диапазон или одинарный.
           */
          isRange: true;
      } & CalendarRange<CalendarBaseProps>)
    | ({
          /**
           * Режим отображения: двойной или одинарный.
           */
          isDouble?: true;
          /**
           * Режим выбора: диапазон или одинарный.
           */
          isRange?: false;
          /**
           * Выбранное значение.
           */
          value: Date;
      } & CalendarDoubleProps)
    | ({
          /**
           * Режим отображения: двойной или одинарный.
           */
          isDouble?: true;
          /**
           * Режим выбора: диапазон или одинарный.
           */
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
