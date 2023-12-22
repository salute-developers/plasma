import { segmentItemConfig, segmentGroupConfig } from '../../../../components/Segment';
import { component, mergeConfig } from '../../../../engines';

import { config as groupConfig } from './SegmentGroup.config';
import { config as itemConfig } from './SegmentItem.config';

const mergedSegmentGroupConfig = mergeConfig(segmentGroupConfig, groupConfig);
const mergedSegmentItemConfig = mergeConfig(segmentItemConfig, itemConfig);

export const SegmentGroup = component(mergedSegmentGroupConfig);
export const SegmentItem = component(mergedSegmentItemConfig);
