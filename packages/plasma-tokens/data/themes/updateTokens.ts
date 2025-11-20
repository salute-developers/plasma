/**
 * NOTE:
 * to run file use command
 * ```
 * npx ts-node --project "../../tsconfig.json" updateTokens.ts
 * ```
 */

import fs from 'fs';

import { sectionToFormulaMap } from '../../../../website/plasma-theme-builder/src/utils/themes';
import { getStateToken } from '../../../../website/plasma-theme-builder/src/utils/tokens';

// const a = fs.readFileSync('./asd/plasma_web_backup.json', { encoding: 'utf-8' });
// const a = fs.readFileSync('./asd/plasma_b2c_backup.json', { encoding: 'utf-8' });
const a = fs.readFileSync('./sdds_finai.json', { encoding: 'utf-8' });
// const a = fs.readFileSync('./asd/default_backup.json', { encoding: 'utf-8' });
// const a = fs.readFileSync('./asd/sdds_cs_backup.json', { encoding: 'utf-8' });

const b = JSON.parse(a);

const c = Object.entries(b).reduce((acc, [key, value]) => {
    if (key === 'dark' || key !== 'light') {
        return {
            ...acc,
        };
    }

    // key - light, dark
    const cc = Object.entries(acc[key]).reduce((acc2, [key2, value2]) => {
        if (key2 !== 'data') {
            return acc2;
        }

        // key2 - text, outline, surface
        const ccc = Object.entries(acc2[key2]).reduce((acc3, [key3, value3]) => {
            // if (key3 === 'onDark' || key3 === 'inverse') {
            //     return acc3;
            // }

            // key3 - default, onDark, onLight, inverse
            const cccc = Object.entries(acc3[key3]).reduce((acc4, [key4, value4]) => {
                const a = (value4 as any).value;

                const mode = key;
                const section = key2;
                const sectionName = sectionToFormulaMap[section];

                const token = {
                    ...acc4[key4],
                    value: a,
                };

                if (!sectionName) {
                    return {
                        ...acc4,
                    };
                }

                if (key4 === 'dataSpring') {
                    console.log('token', token);
                    console.log('key3', key3);
                    console.log('key4', key4);
                    console.log('a', a);
                    console.log('****************');
                }

                const getDefaultStateToken = getStateToken(sectionName, mode, token);

                // const getBrightnessTokens = [
                //     'surfaceSolidCard',
                //     'surfaceSolidPrimary',
                //     'textPrimary',
                //     'backgroundPrimary',
                //     'surfaceTransparentCard',
                // ];

                // const isBrightness = getBrightnessTokens.find((n) => n === key4);

                if (key4.endsWith('Hover') || key4.endsWith('Active') || key4.endsWith('Brightness')) {
                    return {
                        ...acc4,
                    };
                }

                return {
                    ...acc4,
                    [`${key4}Hover`]: getDefaultStateToken('hover'),
                    [`${key4}Active`]: getDefaultStateToken('active'),
                    // ...(isBrightness ? { [`${key4}Brightness`]: getDefaultStateToken('brightness') } : {}),
                };
            }, acc3[key3]);

            return {
                ...acc3,
                [key3]: cccc,
            };
        }, acc2[key2]);

        return {
            ...acc2,
            [key2]: ccc,
        };
    }, acc[key]);

    return {
        ...acc,
        [key]: cc,
    };
}, b);

// fs.writeFileSync('./plasma_web.json', JSON.stringify(c, undefined, 4) + '\n');
// fs.writeFileSync('./plasma_b2c.json', JSON.stringify(c, undefined, 4) + '\n');
fs.writeFileSync('./sdds_finai.json', JSON.stringify(c, undefined, 4) + '\n');
