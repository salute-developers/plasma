import {
    iconButtonConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './IconButton.config';
import { config as outlineConfig } from './IconButton.outline.config';

const mergedConfigDefault = mergeConfig(iconButtonConfig, config);
const IconButtonDefault = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(iconButtonConfig, outlineConfig);
const IconButtonOutline = component(mergedConfigOutline);

type OutlineIconButtonProps = typeof IconButtonDefault;

/**
 * Кнопка с иконкой.
 */
export const IconButton = createConditionalComponent(IconButtonDefault, [
    {
        conditions: { prop: 'appearance', value: 'outline' },
        component: IconButtonOutline as OutlineIconButtonProps,
    },
]);
