import {
    sdds_finai_default__light,
    sdds_finai_default__dark,
    sdds_finai_beta_core__light,
    sdds_finai_beta_core__dark,
    sdds_finai_high_contrast__light,
    sdds_finai_high_contrast__dark,
} from '@sddsjs/sdds_finai';

export const SDDS_FINAI_LIGHT_THEME = 'sdds-finai:light';
export const SDDS_FINAI_DARK_THEME = 'sdds-finai:dark';
export const DEFAULT_TENANT = 'default';

const themes: Record<string, Record<string, TemplateStringsArray>> = {
    default: {
        [SDDS_FINAI_LIGHT_THEME]: sdds_finai_default__light,
        [SDDS_FINAI_DARK_THEME]: sdds_finai_default__dark,
    },
    beta_core: {
        [SDDS_FINAI_LIGHT_THEME]: sdds_finai_beta_core__light,
        [SDDS_FINAI_DARK_THEME]: sdds_finai_beta_core__dark,
    },
    high_contrast: {
        [SDDS_FINAI_LIGHT_THEME]: sdds_finai_high_contrast__light,
        [SDDS_FINAI_DARK_THEME]: sdds_finai_high_contrast__dark,
    },
};

export const getTheme = (theme: string, tenant = DEFAULT_TENANT) =>
    (themes[tenant] || themes[DEFAULT_TENANT])[theme] || themes[DEFAULT_TENANT][SDDS_FINAI_LIGHT_THEME];
