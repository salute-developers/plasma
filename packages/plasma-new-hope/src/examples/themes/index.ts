/* eslint-disable camelcase */
import plasma_b2c from './plasma_b2c.module.css';
import plasma_web from './plasma_web.module.css';
import sds_engineer from './sds_engineer.module.css';

export type ThemeType = { light: string; dark: string };

export const themes: Record<string, ThemeType> = {
    plasma_b2c,
    plasma_web,
    sds_engineer,
};
