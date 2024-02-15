import {
    bodyConfig,
    dsplConfig,
    headingConfig,
    textConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import {
    configL as bodyConfigLCustom,
    configM as bodyConfigMCustom,
    configS as bodyConfigSCustom,
    configXS as bodyConfigXSCustom,
    configXXS as bodyConfigXXSCustom,
} from './Body.config';
import {
    configL as dsplConfigLCustom,
    configM as dsplConfigMCustom,
    configS as dsplConfigSCustom,
} from './Dspl.config';
import {
    configH1 as headingConfigH1Custom,
    configH2 as headingConfigH2Custom,
    configH3 as headingConfigH3Custom,
    configH4 as headingConfigH4Custom,
    configH5 as headingConfigH5Custom,
} from './Heading.config';
import {
    configL as textConfigLCustom,
    configM as textConfigMCustom,
    configS as textConfigSCustom,
    configXS as textConfigXSCustom,
} from './Text.config';

const bodyMConfig = mergeConfig(bodyConfig, bodyConfigMCustom);
const BodyMComponent = component(bodyMConfig);

const bodyLConfig = mergeConfig(bodyConfig, bodyConfigLCustom);
const BodyLComponent = component(bodyLConfig);

const bodySConfig = mergeConfig(bodyConfig, bodyConfigSCustom);
const BodySComponent = component(bodySConfig);

const bodyXSConfig = mergeConfig(bodyConfig, bodyConfigXSCustom);
const BodyXSComponent = component(bodyXSConfig);

const bodyXXSConfig = mergeConfig(bodyConfig, bodyConfigXXSCustom);
const BodyXXSComponent = component(bodyXXSConfig);

const dsplMConfig = mergeConfig(dsplConfig, dsplConfigMCustom);
const DsplMComponent = component(dsplMConfig);

const dsplLConfig = mergeConfig(dsplConfig, dsplConfigLCustom);
const DsplLComponent = component(dsplLConfig);

const dsplSConfig = mergeConfig(dsplConfig, dsplConfigSCustom);
const DsplSComponent = component(dsplSConfig);

const heading1Config = mergeConfig(headingConfig, headingConfigH1Custom);
const Heading1Component = component(heading1Config);

const heading2Config = mergeConfig(headingConfig, headingConfigH2Custom);
const Heading2Component = component(heading2Config);

const heading3Config = mergeConfig(headingConfig, headingConfigH3Custom);
const Heading3Component = component(heading3Config);

const heading4Config = mergeConfig(headingConfig, headingConfigH4Custom);
const Heading4Component = component(heading4Config);

const heading5Config = mergeConfig(headingConfig, headingConfigH5Custom);
const Heading5Component = component(heading5Config);

const textMConfig = mergeConfig(textConfig, textConfigMCustom);
const TextMComponent = component(textMConfig);

const textLConfig = mergeConfig(textConfig, textConfigLCustom);
const TextLComponent = component(textLConfig);

const textSConfig = mergeConfig(textConfig, textConfigSCustom);
const TextSComponent = component(textSConfig);

const textXSConfig = mergeConfig(textConfig, textConfigXSCustom);
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
