import { segmentItemConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './SegmentItem.config';

const mergedSegmentItemConfig = mergeConfig(segmentItemConfig, config);

/**
 * Компонент сегмента.
 */
export const SegmentItem = component(mergedSegmentItemConfig);
