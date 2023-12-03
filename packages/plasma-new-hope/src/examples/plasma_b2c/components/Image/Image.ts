import { imageConfig } from '../../../../components/Image';
import { component, mergeConfig } from '../../../../engines';

export type { ImageProps, Ratio } from '../../../../components/Image';

const mergedConfig = mergeConfig(imageConfig);

export const Image = component(mergedConfig);
