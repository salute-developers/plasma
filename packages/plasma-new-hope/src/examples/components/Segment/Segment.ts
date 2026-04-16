import { segmentItemConfig, segmentGroupConfig, segmentIconItemConfig } from '../../../components/Segment';
import { component, mergeConfig } from '../../../engines';

import { config as groupConfig } from './SegmentGroup.config';
import { config as itemConfig } from './SegmentItem.config';
import { config as iconItemConfig } from './SegmentIconItem.config';

const mergedSegmentGroupConfig = mergeConfig(segmentGroupConfig, groupConfig);
const mergedSegmentItemConfig = mergeConfig(segmentItemConfig, itemConfig);
const mergedSegmentIconItemConfig = mergeConfig(segmentIconItemConfig, iconItemConfig);

export const SegmentGroup = component(mergedSegmentGroupConfig);
export const SegmentItem = component(mergedSegmentItemConfig);
export const SegmentIconItem = component(mergedSegmentIconItemConfig);
