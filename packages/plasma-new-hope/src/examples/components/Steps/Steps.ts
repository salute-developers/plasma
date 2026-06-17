import type { FC } from 'react';

import type { StepItemExtendedProps } from '../../../components/Steps';
import { stepsConfig as rawStepsConfig, stepItemConfig } from '../../../components/Steps';
import { component, mergeConfig } from '../../../engines';

import { config } from './Steps.config';
import { config as itemConfig } from './StepItem.config';

const mergedItemConfig = mergeConfig(stepItemConfig, itemConfig);
const StepItem = component(mergedItemConfig);

const stepsConfig = rawStepsConfig(StepItem as FC<StepItemExtendedProps>);

const mergedConfig = mergeConfig(stepsConfig, config);

const Steps = component(mergedConfig);

export { Steps, mergedConfig };
