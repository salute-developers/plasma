import { bottomSheetConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './BottomSheet.config';

const mergedConfig = mergeConfig(bottomSheetConfig, config);

/**
 * Шторка с заголовком, изображением и кнопками, выезжающая снизу экрана.
 */
export const BottomSheet = component(mergedConfig);
