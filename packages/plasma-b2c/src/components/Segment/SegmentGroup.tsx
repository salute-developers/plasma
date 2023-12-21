import { segmentGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './SegmentGroup.config';

const mergedSegmentGroupConfig = mergeConfig(segmentGroupConfig, config);

/**
 * Компонент группы сегментов.
 */
export const SegmentGroup = component(mergedSegmentGroupConfig);
