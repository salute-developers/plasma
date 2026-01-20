import { imageConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(imageConfig);
const ImageComponent = component(mergedConfig);

/**
 * Компонент Image.
 */
export const Image = ImageComponent;
