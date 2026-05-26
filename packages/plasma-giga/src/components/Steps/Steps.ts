import type { FC } from 'react';
import {
    stepsConfig as rawStepsConfig,
    stepItemConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import type { StepItemExtendedProps } from '@salutejs/plasma-new-hope';

import { config as itemConfig } from './StepItem.config';
import { config } from './Steps.config';

const mergedItemConfig = mergeConfig(stepItemConfig, itemConfig);
const StepItem = component(mergedItemConfig);

const stepsConfig = rawStepsConfig(StepItem as FC<StepItemExtendedProps>);

const mergedConfig = mergeConfig(stepsConfig, config);
const StepsComponent = component(mergedConfig);

export const Steps = StepsComponent;
