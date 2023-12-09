import { segmentItemConfig } from '../../../../components/Segment';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Segment.config';

const mergedConfig = mergeConfig(segmentItemConfig, config);

export const SegmentItem = component(mergedConfig);
