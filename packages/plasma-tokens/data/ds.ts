import type { TokenData, TColor } from '@salutejs/plasma-tokens-utils';

import {
    mapDesignToBaseColors,
    mapDesignToTypography,
    filterTypoStyles,
    humanizeColor,
    compose,
    normalizeFontNames,
    removeTypoUnnecessary,
    convertPixelsToRems,
    normalizeFontStyle,
    normalizeFontWeight,
    normalizeLetterSpace,
    FullColorsList,
    alphenColor,
    OverlayTokens,
} from '@salutejs/plasma-tokens-utils';

import { DesignLanguage } from './legacyThemes';
import type { Typography as TypographySet, Typograph as TypographyData } from './legacyThemes';

import { general } from '@salutejs/plasma-colors';

const ds = new DesignLanguage();

// because diez/ds needs document =(
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('jsdom-global')();

/* ============================================ */
/* =                 COLORS                   = */
/* ============================================ */

export const baseColors = mapDesignToBaseColors(ds);

/* ======================================== */
/* =                THEMES                = */
/* =  Modes:( dark/light & sber/eva/joy/b2e ) = */
/* ======================================== */

export type ThemeTokens = { [key in keyof typeof FullColorsList]: TokenData<TColor> };
type BaseTheme = Omit<
    ThemeTokens,
    'accent' | 'gradient' | 'gradientDevice' | 'voicePhraseGradient' | 'buttonAccent' | 'buttonFocused'
>;

general.gray['900'] = '#232323'; // TODO: https://github.com/salute-developers/plasma/issues/508

const darkTheme: BaseTheme & OverlayTokens = {
    ...baseColors,

    text: {
        value: humanizeColor(ds.theme.dark_primary.color),
        comment: FullColorsList.text,
    },

    primary: {
        value: humanizeColor(ds.theme.dark_primary.color),
        comment: FullColorsList.primary,
    },
    secondary: {
        value: humanizeColor(ds.theme.dark_secondary.color),
        comment: FullColorsList.secondary,
    },
    tertiary: {
        value: humanizeColor(ds.theme.dark_tertiary.color),
        comment: FullColorsList.tertiary,
    },

    paragraph: {
        value: humanizeColor(ds.theme.dark_paragraph.color),
        comment: FullColorsList.paragraph,
    },
    inverse: {
        value: humanizeColor(ds.theme.dark_inverse.color),
        comment: FullColorsList.inverse,
    },

    background: {
        value: humanizeColor(ds.theme.dark_bg.color),
        comment: FullColorsList.background,
    },
    backgroundPrimary: {
        value: humanizeColor(ds.theme.dark_bg_primary.color),
        comment: FullColorsList.backgroundPrimary,
    },
    backgroundSecondary: {
        value: humanizeColor(ds.theme.dark_bg_secondary.color),
        comment: FullColorsList.backgroundSecondary,
    },
    backgroundTertiary: {
        value: humanizeColor(ds.theme.dark_bg_tertiary.color),
        comment: FullColorsList.backgroundTertiary,
    },

    success: {
        value: humanizeColor(ds.theme.dark_success.color),
        comment: FullColorsList.success,
    },
    warning: {
        value: humanizeColor(ds.theme.dark_warning.color),
        comment: FullColorsList.warning,
    },
    critical: {
        value: humanizeColor(ds.theme.dark_critical.color),
        comment: FullColorsList.critical,
    },

    surfaceLiquid01: {
        value: humanizeColor(ds.theme.dark_surface_Liquid01.color),
        comment: FullColorsList.surfaceLiquid01,
    },
    surfaceLiquid02: {
        value: humanizeColor(ds.theme.dark_surface_Liquid02.color),
        comment: FullColorsList.surfaceLiquid02,
    },
    surfaceLiquid03: {
        value: humanizeColor(ds.theme.dark_surface_Liquid03.color),
        comment: FullColorsList.surfaceLiquid03,
    },
    surfaceSolid01: {
        value: humanizeColor(ds.theme.dark_surface_solid01.color),
        comment: FullColorsList.surfaceSolid01,
    },
    surfaceSolid02: {
        value: humanizeColor(ds.theme.dark_surface_solid02.color),
        comment: FullColorsList.surfaceSolid02,
    },
    surfaceSolid03: {
        value: humanizeColor(ds.theme.dark_surface_solid03.color),
        comment: FullColorsList.surfaceSolid03,
    },
    surfaceCard: {
        value: humanizeColor(ds.theme.dark_surface_card.color),
        comment: FullColorsList.surfaceCard,
    },

    buttonPrimary: {
        value: humanizeColor(ds.theme.dark_button_primary.color),
        comment: FullColorsList.buttonPrimary,
    },
    buttonSecondary: {
        value: humanizeColor(ds.theme.dark_button_secondary.color),
        comment: FullColorsList.buttonSecondary,
    },
    buttonSuccess: {
        value: humanizeColor(ds.theme.dark_button_success.color),
        comment: FullColorsList.buttonSuccess,
    },
    buttonWarning: {
        value: humanizeColor(ds.theme.dark_button_warning.color),
        comment: FullColorsList.buttonWarning,
    },
    buttonCritical: {
        value: humanizeColor(ds.theme.dark_button_critical.color),
        comment: FullColorsList.buttonCritical,
    },
    buttonChecked: {
        value: humanizeColor(ds.theme.dark_button_checked.color),
        comment: FullColorsList.buttonChecked,
    },

    skeletonGradient: {
        value: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.09) 0%,
            rgba(255, 255, 255, 0.08) 6.25%,
            rgba(255, 255, 255, 0.05) 12.5%,
            rgba(255, 255, 255, 0.01) 25%,
            rgba(255, 255, 255, 0.05) 37.5%,
            rgba(255, 255, 255, 0.08) 43.75%,
            rgba(255, 255, 255, 0.09) 50%,
            rgba(255, 255, 255, 0.08) 56.25%,
            rgba(255, 255, 255, 0.05) 62.5%,
            rgba(255, 255, 255, 0.01) 75%,
            rgba(255, 255, 255, 0.05) 87.5%,
            rgba(255, 255, 255, 0.08) 93.75%,
            rgba(255, 255, 255, 0.09) 100%
        )`,
    },
    skeletonGradientLighter: {
        value: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.36) 0%,
            rgba(255, 255, 255, 0.32) 6.25%,
            rgba(255, 255, 255, 0.20) 12.5%,
            rgba(255, 255, 255, 0.04) 25%,
            rgba(255, 255, 255, 0.20) 37.5%,
            rgba(255, 255, 255, 0.32) 43.75%,
            rgba(255, 255, 255, 0.36) 50%,
            rgba(255, 255, 255, 0.08) 56.25%,
            rgba(255, 255, 255, 0.20) 62.5%,
            rgba(255, 255, 255, 0.04) 75%,
            rgba(255, 255, 255, 0.20) 87.5%,
            rgba(255, 255, 255, 0.32) 93.75%,
            rgba(255, 255, 255, 0.36) 100%
        )`,
    },

    speechBubbleSent: {
        value: humanizeColor(ds.theme.dark_speech_bubble_sent.color),
        comment: FullColorsList.speechBubbleSent,
    },
    speechBubbleReceived: {
        value: humanizeColor(ds.theme.dark_speech_bubble_received.color),
        comment: FullColorsList.speechBubbleReceived,
    },

    overlay: {
        value: humanizeColor(ds.theme.dark_overlay.color),
        comment: FullColorsList.overlay,
    },
    overlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    overlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    overlayBlur: {
        value: alphenColor(general.gray['950'], -0.72),
    },

    darkOverlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    darkOverlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    darkOverlayBlur: {
        value: alphenColor(general.gray['950'], -0.72),
    },

    lightOverlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    lightOverlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    lightOverlayBlur: {
        value: alphenColor(general.gray['950'], -0.72),
    },

    inverseOverlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    inverseOverlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    inverseOverlayBlur: {
        value: alphenColor(general.gray['950'], -0.72),
    },
};

const lightTheme: BaseTheme & OverlayTokens = {
    ...baseColors,

    text: {
        value: humanizeColor(ds.theme.light_primary.color),
        comment: FullColorsList.text,
    },

    primary: {
        value: humanizeColor(ds.theme.light_primary.color),
        comment: FullColorsList.primary,
    },
    secondary: {
        value: humanizeColor(ds.theme.light_secondary.color),
        comment: FullColorsList.secondary,
    },
    tertiary: {
        value: humanizeColor(ds.theme.light_tertiary.color),
        comment: FullColorsList.tertiary,
    },

    paragraph: {
        value: humanizeColor(ds.theme.light_paragraph.color),
        comment: FullColorsList.paragraph,
    },
    inverse: {
        value: humanizeColor(ds.theme.light_inverse.color),
        comment: FullColorsList.inverse,
    },

    background: {
        value: humanizeColor(ds.theme.light_bg.color),
        comment: FullColorsList.background,
    },
    backgroundPrimary: {
        value: humanizeColor(ds.theme.light_bg_primary.color),
        comment: FullColorsList.backgroundPrimary,
    },
    backgroundSecondary: {
        value: humanizeColor(ds.theme.light_bg_secondary.color),
        comment: FullColorsList.backgroundSecondary,
    },
    backgroundTertiary: {
        value: humanizeColor(ds.theme.light_bg_tertiary.color),
        comment: FullColorsList.backgroundTertiary,
    },

    success: {
        value: humanizeColor(ds.theme.light_success.color),
        comment: FullColorsList.success,
    },
    warning: {
        value: humanizeColor(ds.theme.light_warning.color),
        comment: FullColorsList.warning,
    },
    critical: {
        value: humanizeColor(ds.theme.light_critical.color),
        comment: FullColorsList.critical,
    },

    surfaceLiquid01: {
        value: humanizeColor(ds.theme.light_surface_Liquid01.color),
        comment: FullColorsList.surfaceLiquid01,
    },
    surfaceLiquid02: {
        value: humanizeColor(ds.theme.light_surface_Liquid02.color),
        comment: FullColorsList.surfaceLiquid02,
    },
    surfaceLiquid03: {
        value: humanizeColor(ds.theme.light_surface_Liquid03.color),
        comment: FullColorsList.surfaceLiquid03,
    },
    surfaceSolid01: {
        value: humanizeColor(ds.theme.light_surface_solid01.color),
        comment: FullColorsList.surfaceSolid01,
    },
    surfaceSolid02: {
        value: humanizeColor(ds.theme.light_surface_solid02.color),
        comment: FullColorsList.surfaceSolid02,
    },
    surfaceSolid03: {
        value: humanizeColor(ds.theme.light_surface_solid03.color),
        comment: FullColorsList.surfaceSolid03,
    },
    surfaceCard: {
        value: humanizeColor(ds.theme.light_surface_card.color),
        comment: FullColorsList.surfaceCard,
    },

    buttonPrimary: {
        value: humanizeColor(ds.theme.light_button_primary.color),
        comment: FullColorsList.buttonPrimary,
    },
    buttonSecondary: {
        value: humanizeColor(ds.theme.light_button_secondary.color),
        comment: FullColorsList.buttonSecondary,
    },
    buttonSuccess: {
        value: humanizeColor(ds.theme.light_button_success.color),
        comment: FullColorsList.buttonSuccess,
    },
    buttonWarning: {
        value: humanizeColor(ds.theme.light_button_warning.color),
        comment: FullColorsList.buttonWarning,
    },
    buttonCritical: {
        value: humanizeColor(ds.theme.light_button_critical.color),
        comment: FullColorsList.buttonCritical,
    },
    buttonChecked: {
        value: humanizeColor(ds.theme.light_button_checked.color),
        comment: FullColorsList.buttonChecked,
    },

    skeletonGradient: {
        value: `linear-gradient(
            90deg,
            rgba(8, 8, 8, 0.09) 0%,
            rgba(8, 8, 8, 0.08) 6.25%,
            rgba(8, 8, 8, 0.05) 12.5%,
            rgba(8, 8, 8, 0.01) 25%,
            rgba(8, 8, 8, 0.05) 37.5%,
            rgba(8, 8, 8, 0.08) 43.75%,
            rgba(8, 8, 8, 0.09) 50%,
            rgba(8, 8, 8, 0.08) 56.25%,
            rgba(8, 8, 8, 0.05) 62.5%,
            rgba(8, 8, 8, 0.01) 75%,
            rgba(8, 8, 8, 0.05) 87.5%,
            rgba(8, 8, 8, 0.08) 93.75%,
            rgba(8, 8, 8, 0.09) 100%
        )`,
    },
    skeletonGradientLighter: {
        value: `linear-gradient(
            90deg,
            rgba(8, 8, 8, 0.36) 0%,
            rgba(8, 8, 8, 0.32) 6.25%,
            rgba(8, 8, 8, 0.20) 12.5%,
            rgba(8, 8, 8, 0.04) 25%,
            rgba(8, 8, 8, 0.20) 37.5%,
            rgba(8, 8, 8, 0.32) 43.75%,
            rgba(8, 8, 8, 0.36) 50%,
            rgba(8, 8, 8, 0.08) 56.25%,
            rgba(8, 8, 8, 0.20) 62.5%,
            rgba(8, 8, 8, 0.04) 75%,
            rgba(8, 8, 8, 0.20) 87.5%,
            rgba(8, 8, 8, 0.32) 93.75%,
            rgba(8, 8, 8, 0.36) 100%
        )`,
    },

    speechBubbleSent: {
        value: humanizeColor(ds.theme.light_speech_bubble_sent.color),
        comment: FullColorsList.speechBubbleSent,
    },
    speechBubbleReceived: {
        value: humanizeColor(ds.theme.light_speech_bubble_received.color),
        comment: FullColorsList.speechBubbleReceived,
    },

    overlay: {
        value: humanizeColor(ds.theme.light_overlay.color),
        comment: FullColorsList.overlay,
    },
    overlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    overlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    overlayBlur: {
        value: alphenColor(general.gray['900'], -0.8),
    },

    darkOverlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    darkOverlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    darkOverlayBlur: {
        value: alphenColor(general.gray['900'], -0.8),
    },

    lightOverlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    lightOverlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    lightOverlayBlur: {
        value: alphenColor(general.gray['900'], -0.8),
    },

    inverseOverlaySoft: {
        value: alphenColor(baseColors.black.value, -0.44),
    },
    inverseOverlayHard: {
        value: alphenColor(baseColors.black.value, -0.1),
    },
    inverseOverlayBlur: {
        value: alphenColor(general.gray['900'], -0.8),
    },
};

const darkSber: ThemeTokens = {
    ...darkTheme,
    accent: {
        value: humanizeColor(ds.theme.dark_sber.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.dark_button_sber.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.dark_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.dark_bg_sber,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.dark_device_sber,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.dark_voice_phrase_sber.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const darkEva: ThemeTokens = {
    ...darkTheme,
    accent: {
        value: humanizeColor(ds.theme.dark_eva.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.dark_button_eva.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.dark_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.dark_bg_eva,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.dark_device_eva,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.dark_voice_phrase_eva.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const darkJoy: ThemeTokens = {
    ...darkTheme,
    accent: {
        value: humanizeColor(ds.theme.dark_joy.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.dark_button_joy.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.dark_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.dark_bg_joy,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.dark_device_eva,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.dark_voice_phrase_joy.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const darkBrand: ThemeTokens = {
    ...darkTheme,
    accent: {
        value: humanizeColor(ds.theme.dark_brand.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.dark_button_brand.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.dark_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.dark_bg_brand,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.dark_device_brand,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.dark_voice_phrase_brand.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const darkB2E: ThemeTokens = {
    ...darkTheme,
    accent: {
        value: humanizeColor(ds.theme.dark_b2e.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.dark_button_b2e.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.dark_focus_b2e.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.dark_bg_b2e,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.dark_device_b2e,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.dark_voice_phrase_b2e.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const lightSber: ThemeTokens = {
    ...lightTheme,
    accent: {
        value: humanizeColor(ds.theme.light_sber.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.light_button_sber.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.light_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.light_bg_sber,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.light_device_sber,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.light_voice_phrase_sber.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const lightEva: ThemeTokens = {
    ...lightTheme,
    accent: {
        value: humanizeColor(ds.theme.light_eva.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.light_button_eva.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.light_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.light_bg_eva,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.light_device_eva,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.light_voice_phrase_eva.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const lightJoy: ThemeTokens = {
    ...lightTheme,
    accent: {
        value: humanizeColor(ds.theme.light_joy.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.light_button_joy.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.light_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    // background: lToRgba(ds.gradients.light_bg_joy.linearGradient),
    gradient: {
        value: ds.gradients.light_bg_joy,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.light_device_joy,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.light_voice_phrase_joy.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const lightBrand: ThemeTokens = {
    ...lightTheme,
    accent: {
        value: humanizeColor(ds.theme.light_brand.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.light_button_brand.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.light_primary.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.light_bg_brand,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.light_device_brand,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.light_voice_phrase_brand.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};
const lightB2E: ThemeTokens = {
    ...lightTheme,
    accent: {
        value: humanizeColor(ds.theme.light_b2e.color),
        comment: FullColorsList.accent,
    },
    buttonAccent: {
        value: humanizeColor(ds.theme.light_button_b2e.color),
        comment: FullColorsList.buttonAccent,
    },
    buttonFocused: {
        value: humanizeColor(ds.theme.light_focus_b2e.color),
        comment: FullColorsList.buttonFocused,
    },
    // TODO: export from figma is broken (#135)
    gradient: {
        value: ds.gradients.light_bg_b2e,
        comment: FullColorsList.gradient,
    },
    gradientDevice: {
        value: ds.gradients.light_device_b2e,
        comment: FullColorsList.gradient,
    },
    voicePhraseGradient: {
        value: ds.gradients.light_voice_phrase_b2e.linearGradient,
        comment: FullColorsList.voicePhraseGradient,
    },
};

export const colorThemes = {
    salutejs_sber__dark: darkSber,
    salutejs_eva__dark: darkEva,
    salutejs_joy__dark: darkJoy,
    salutejs_brand__dark: darkBrand,
    salutejs_B2E__dark: darkB2E,
    salutejs_sber__light: lightSber,
    salutejs_eva__light: lightEva,
    salutejs_joy__light: lightJoy,
    salutejs_brand__light: lightBrand,
    salutejs_B2E__light: lightB2E,
};

export type SimpleTokens = {
    [key in keyof ThemeTokens]: ThemeTokens[key]['value'];
};

/* ======================================== */
/* =         TYPOGRAPHY & FONTS           = */
/* ======================================== */

export type TypographyTypes = keyof TypographySet;

// right to left: first we transform "LetterSpace" only then we scale "fontSize"
const normalizeTypographyStyle = compose(
    convertPixelsToRems,
    normalizeFontNames,
    removeTypoUnnecessary,
    // scaleTypograpyForDevices,
    normalizeFontStyle,
    normalizeFontWeight,
    normalizeLetterSpace,
);

export const typoSystem = mapDesignToTypography<TypographyTypes, TypographyData>(ds, normalizeTypographyStyle);
export const typo = {
    sberPortal: { theme: filterTypoStyles(typoSystem.typoStyles), scale: 2 },
    sberBox: { theme: filterTypoStyles(typoSystem.typoStyles), scale: 2 },
    mobile: { theme: filterTypoStyles(typoSystem.typoStyles), scale: 1 },
};
