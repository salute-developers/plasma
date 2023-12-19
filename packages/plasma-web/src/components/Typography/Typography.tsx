import {
    bodyConfig,
    dsplConfig,
    headingConfig,
    textConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as bodyConfigCustom, defaults as bodyDefaults } from './Body.config';
import { config as dsplConfigCustom, defaults as dsplDefaults } from './Dspl.config';
import { config as headingConfigCustom, defaults as headingDefaults } from './Heading.config';
import { config as textConfigCustom, defaults as textDefaults } from './Text.config';

const bodyMConfig = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.m });
const BodyMComponent = component(bodyMConfig);

const bodyLConfig = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.l });
const BodyLComponent = component(bodyLConfig);

const bodySConfig = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.s });
const BodySComponent = component(bodySConfig);

const bodyXSConfig = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.xs });
const BodyXSComponent = component(bodyXSConfig);

const bodyXXSConfig = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.xxs });
const BodyXXSComponent = component(bodyXXSConfig);

const dsplMConfig = mergeConfig(dsplConfig, { ...dsplConfigCustom, defaults: dsplDefaults.m });
const DsplMComponent = component(dsplMConfig);

const dsplLConfig = mergeConfig(dsplConfig, { ...dsplConfigCustom, defaults: dsplDefaults.l });
const DsplLComponent = component(dsplLConfig);

const dsplSConfig = mergeConfig(dsplConfig, { ...dsplConfigCustom, defaults: dsplDefaults.s });
const DsplSComponent = component(dsplSConfig);

const heading1Config = mergeConfig(headingConfig, { ...headingConfigCustom, defaults: headingDefaults.h1 });
const Heading1Component = component(heading1Config);

const heading2Config = mergeConfig(headingConfig, { ...headingConfigCustom, defaults: headingDefaults.h2 });
const Heading2Component = component(heading2Config);

const heading3Config = mergeConfig(headingConfig, { ...headingConfigCustom, defaults: headingDefaults.h3 });
const Heading3Component = component(heading3Config);

const heading4Config = mergeConfig(headingConfig, { ...headingConfigCustom, defaults: headingDefaults.h4 });
const Heading4Component = component(heading4Config);

const heading5Config = mergeConfig(headingConfig, { ...headingConfigCustom, defaults: headingDefaults.h5 });
const Heading5Component = component(heading5Config);

const textMConfig = mergeConfig(textConfig, { ...textConfigCustom, defaults: textDefaults.m });
const TextMComponent = component(textMConfig);

const textLConfig = mergeConfig(textConfig, { ...textConfigCustom, defaults: textDefaults.l });
const TextLComponent = component(textLConfig);

const textSConfig = mergeConfig(textConfig, { ...textConfigCustom, defaults: textDefaults.s });
const TextSComponent = component(textSConfig);

const textXSConfig = mergeConfig(textConfig, { ...textConfigCustom, defaults: textDefaults.xs });
const TextXSComponent = component(textXSConfig);

export const BodyM = BodyMComponent;
export const BodyL = BodyLComponent;
export const BodyS = BodySComponent;
export const BodyXS = BodyXSComponent;
export const BodyXXS = BodyXXSComponent;

export const DsplM = DsplMComponent;
export const DsplL = DsplLComponent;
export const DsplS = DsplSComponent;

export const H1 = Heading1Component;
export const H2 = Heading2Component;
export const H3 = Heading3Component;
export const H4 = Heading4Component;
export const H5 = Heading5Component;

export const TextM = TextMComponent;
export const TextL = TextLComponent;
export const TextS = TextSComponent;
export const TextXS = TextXSComponent;
