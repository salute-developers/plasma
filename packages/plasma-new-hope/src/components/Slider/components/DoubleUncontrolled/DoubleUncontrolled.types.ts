import { DoubleSliderProps } from '../index';

export type DoubleUncontrolledProps = Omit<DoubleSliderProps, 'value'> & {
    value?: number[];
};
