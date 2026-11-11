import type { ComponentProps, ReactElement, Ref } from 'react';

import { component, mergeConfig } from '../../../engines';
import { wheelConfig } from '../../../components/Wheel';
import type { WheelProps, WheelValue } from '../../../components/Wheel';

import { config } from './Wheel.config';

const WheelComponent = component(mergeConfig(wheelConfig, config));
type Variations = keyof typeof config.variations;
type Props<Value extends WheelValue<Value>> = Omit<WheelProps<Value>, Variations> &
    Pick<ComponentProps<typeof WheelComponent>, Variations>;

export const Wheel = WheelComponent as <Value extends WheelValue<Value>>(
    props: Props<Value> & { ref?: Ref<HTMLDivElement> },
) => ReactElement | null;
