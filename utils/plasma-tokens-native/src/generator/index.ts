import { commentWithVersion } from '../utils';

import * as f from './formatters';

export const colorIosSwiftCustomFormatter = commentWithVersion(f.colorIosSwiftCustomFormatter);
export const colorReactNativeCustomFormatter = commentWithVersion(f.colorReactNativeCustomFormatter);
export const colorKotlinCustomFormatter = commentWithVersion(f.colorKotlinCustomFormatter);
export const colorXMLCustomFormatter = commentWithVersion(f.colorXMLCustomFormatter);
export const typoIosSwiftCustomFormatter = commentWithVersion(f.typoIosSwiftCustomFormatter);
export const typoReactNativeCustomFormatter = commentWithVersion(f.typoReactNativeCustomFormatter);
export const typoKotlinCustomFormatter = commentWithVersion(f.typoKotlinCustomFormatter);
export const shadowReactNativeCustomFormatter = commentWithVersion(f.shadowReactNativeCustomFormatter);
export const borderRadiusReactNativeCustomFormatter = commentWithVersion(f.borderRadiusReactNativeCustomFormatter);
export const spacingReactNativeCustomFormatter = commentWithVersion(f.spacingReactNativeCustomFormatter);

export {
    gradientSwiftTransformer,
    gradientKotlinTransformer,
    gradientReactNativeTransformer,
    gradientXMLTransformer,
} from './transformers';
