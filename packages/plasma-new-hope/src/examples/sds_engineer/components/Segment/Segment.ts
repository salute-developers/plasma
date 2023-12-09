import { segmentItemConfig, segmentGroupConfig } from '../../../../components/Segment';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Segment.config';

const mergedSegmentGroupConfig = mergeConfig(segmentGroupConfig, config);
const mergedSegmentItemConfig = mergeConfig(segmentItemConfig);

export const SegmentGroup = component(mergedSegmentGroupConfig);
export const SegmentItem = component(mergedSegmentItemConfig);
