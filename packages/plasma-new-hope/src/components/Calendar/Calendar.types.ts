import type { CalendarBaseProps } from './CalendarBase/CalendarBase';
import type { CalendarDoubleProps } from './CalendarDouble/CalendarDouble';
import type { CalendarRange } from './shared/types';

type BaseProps = {
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
} & CalendarBaseProps;

type BaseRangeProps = {
    /**
     * Режим отображения: двойной или одинарный.
     */
    isDouble?: false;
    /**
     * Режим выбора: диапазон или одинарный.
     */
    isRange: true;
} & CalendarRange<CalendarBaseProps>;

type DoubleProps = {
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
} & CalendarDoubleProps;

type DoubleRangeProps = {
    /**
     * Режим отображения: двойной или одинарный.
     */
    isDouble?: true;
    /**
     * Режим выбора: диапазон или одинарный.
     */
    isRange: true;
} & CalendarRange<CalendarDoubleProps>;

export type ComponentVariation = {
    base: React.FC<CalendarBaseProps>;
    baseRange: React.FC<CalendarRange<CalendarBaseProps>>;
    double: React.FC<CalendarDoubleProps>;
    doubleRange: React.FC<CalendarRange<CalendarDoubleProps>>;
};

export type CalendarProps = BaseProps | BaseRangeProps | DoubleProps | DoubleRangeProps;
