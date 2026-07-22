import { bottomSheetConfig } from '../../../components/BottomSheet';
import { component, mergeConfig } from '../../../engines';

import { config } from './BottomSheet.config';

export { bottomSheetClasses } from '../../../components/BottomSheet';

const mergedConfig = mergeConfig(bottomSheetConfig, config);

export const BottomSheet = component(mergedConfig);
