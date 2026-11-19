import type { ComponentProps, ReactElement, Ref } from 'react';
import { component, mergeConfig, wheelConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { WheelProps as CoreWheelProps, WheelValue } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Wheel.config';

const WheelComponent = component(mergeConfig(wheelConfig, config));
type Variations = keyof typeof config.variations;

export type WheelProps<Value extends WheelValue<Value> = WheelValue> = Omit<CoreWheelProps<Value>, Variations> &
    Pick<ComponentProps<typeof WheelComponent>, Variations>;

export const Wheel = WheelComponent as <Value extends WheelValue<Value>>(
    props: WheelProps<Value> & { ref?: Ref<HTMLDivElement> },
) => ReactElement | null;
