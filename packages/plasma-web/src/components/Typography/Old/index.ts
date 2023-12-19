import {
    bodyConfig,
    buttonTypographyConfig,
    captionConfig as captionDefaultConfig,
    displayConfig,
    footnoteConfig,
    headlineConfig,
    paragraphConfig,
    underlineConfig as underlineDefaultConfig,
    subtitleConfig as subtitleDefaultConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as bodyConfigCustom, defaults as bodyDefaults } from './Body.config';
import { config as buttonConfigCustom, defaults as buttonDefaults } from './Button.config';
import { config as captionConfigCustom } from './Caption.config';
import { config as displayConfigCustom, defaults as displayDefaults } from './Display.config';
import { config as footnoteConfigCustom, defaults as footnoteDefaults } from './Footnote.config';
import { config as headlineConfigCustom, defaults as headlineDefaults } from './Headline.config';
import { config as paragraphConfigCustom, defaults as paragraphDefaults } from './Paragraph.config';
import { config as underlineConfigCustom } from './Underline.config';
import { config as subtitleConfigCustom } from './Subtitle.config';

const body1Config = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.body1 });
const Body1Component = component(body1Config);

const body2Config = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.body2 });
const Body2Component = component(body2Config);

const body3Config = mergeConfig(bodyConfig, { ...bodyConfigCustom, defaults: bodyDefaults.body3 });
const Body3Component = component(body3Config);

const button1Config = mergeConfig(buttonTypographyConfig, { ...buttonConfigCustom, defaults: buttonDefaults.button1 });
const Button1Component = component(button1Config);

const button2Config = mergeConfig(buttonTypographyConfig, { ...buttonConfigCustom, defaults: buttonDefaults.button2 });
const Button2Component = component(button2Config);

const captionConfig = mergeConfig(captionDefaultConfig, captionConfigCustom);
const CaptionComponent = component(captionConfig);

const display1Config = mergeConfig(displayConfig, { ...displayConfigCustom, defaults: displayDefaults.display1 });
const Display1Component = component(display1Config);

const display2Config = mergeConfig(displayConfig, { ...displayConfigCustom, defaults: displayDefaults.display2 });
const Display2Component = component(display2Config);

const display3Config = mergeConfig(displayConfig, { ...displayConfigCustom, defaults: displayDefaults.display3 });
const Display3Component = component(display3Config);

const footnote1Config = mergeConfig(footnoteConfig, { ...footnoteConfigCustom, defaults: footnoteDefaults.footnote1 });
const Footnote1Component = component(footnote1Config);

const footnote2Config = mergeConfig(footnoteConfig, { ...footnoteConfigCustom, defaults: footnoteDefaults.footnote2 });
const Footnote2Component = component(footnote2Config);

const headline1Config = mergeConfig(headlineConfig, { ...headlineConfigCustom, defaults: headlineDefaults.headline1 });
const Headline1Component = component(headline1Config);

const headline2Config = mergeConfig(headlineConfig, { ...headlineConfigCustom, defaults: headlineDefaults.headline2 });
const Headline2Component = component(headline2Config);

const headline3Config = mergeConfig(headlineConfig, { ...headlineConfigCustom, defaults: headlineDefaults.headline3 });
const Headline3Component = component(headline3Config);

const headline4Config = mergeConfig(headlineConfig, { ...headlineConfigCustom, defaults: headlineDefaults.headline4 });
const Headline4Component = component(headline4Config);

const headline5Config = mergeConfig(headlineConfig, { ...headlineConfigCustom, defaults: headlineDefaults.headline5 });
const Headline5Component = component(headline5Config);

const underlineConfig = mergeConfig(underlineDefaultConfig, underlineConfigCustom);
const UnderlineComponent = component(underlineConfig);

const subtitleConfig = mergeConfig(subtitleDefaultConfig, subtitleConfigCustom);
const SubtitleComponent = component(subtitleConfig);

const paragraph1Config = mergeConfig(paragraphConfig, {
    ...paragraphConfigCustom,
    defaults: paragraphDefaults.paragraph1,
});
const Paragraph1Component = component(paragraph1Config);

const paragraph2Config = mergeConfig(paragraphConfig, {
    ...paragraphConfigCustom,
    defaults: paragraphDefaults.paragraph2,
});
const Paragraph2Component = component(paragraph2Config);

export const Body1 = Body1Component;
export const Body2 = Body2Component;
export const Body3 = Body3Component;

export const Button1 = Button1Component;
export const Button2 = Button2Component;

export const Caption = CaptionComponent;

export const Display1 = Display1Component;
export const Display2 = Display2Component;
export const Display3 = Display3Component;

export const Footnote1 = Footnote1Component;
export const Footnote2 = Footnote2Component;

export const Headline1 = Headline1Component;
export const Headline2 = Headline2Component;
export const Headline3 = Headline3Component;
export const Headline4 = Headline4Component;
export const Headline5 = Headline5Component;

export const P1 = Paragraph1Component;
export const P2 = Paragraph2Component;

export const Underline = UnderlineComponent;

export const Subtitle = SubtitleComponent;
