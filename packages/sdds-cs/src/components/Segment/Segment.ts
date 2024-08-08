import {
    segmentItemConfig,
    segmentGroupConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as configSegmentItem } from './SegmentItem.config';
import { config as configSegmentGroup } from './SegmentGroup.config';

/**
 * Провайдер контекста для группы сегментов и хук для доступа к контексту.
 */
export { SegmentProvider, useSegment } from '@salutejs/plasma-new-hope/styled-components';

const mergedSegmentItemConfig = mergeConfig(segmentItemConfig, configSegmentItem);
const mergedSegmentGroupConfig = mergeConfig(segmentGroupConfig, configSegmentGroup);

/**
 * Компонент группы сегментов.
 */
export const SegmentGroup = component(mergedSegmentGroupConfig);
/**
 * Компонент сегмента.
 */
export const SegmentItem = component(mergedSegmentItemConfig);
