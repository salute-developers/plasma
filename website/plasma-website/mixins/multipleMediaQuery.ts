import { FlattenSimpleInterpolation } from 'styled-components';
import { Breakpoint, mediaQuery } from '@salutejs/plasma-b2c';

export const multipleMediaQuery = (sizes: Array<Breakpoint>) => (func: FlattenSimpleInterpolation | string) =>
    sizes.map((size) => mediaQuery(size)(func));
