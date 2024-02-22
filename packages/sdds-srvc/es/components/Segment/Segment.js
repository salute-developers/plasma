import { segmentItemConfig, segmentGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config as configSegmentItem } from './SegmentItem.config';
import { config as configSegmentGroup } from './SegmentGroup.config';

/**
 * Провайдер контекста для группы сегментов и хук для доступа к контексту.
 */
export { SegmentProvider, useSegment } from '@salutejs/plasma-new-hope/styled-components';
var mergedSegmentItemConfig = /*#__PURE__*/mergeConfig(segmentItemConfig, configSegmentItem);
var mergedSegmentGroupConfig = /*#__PURE__*/mergeConfig(segmentGroupConfig, configSegmentGroup);

/**
 * Компонент группы сегментов.
 */
export var SegmentGroup = /*#__PURE__*/component(mergedSegmentGroupConfig);
/**
 * Компонент сегмента.
 */
export var SegmentItem = /*#__PURE__*/component(mergedSegmentItemConfig);