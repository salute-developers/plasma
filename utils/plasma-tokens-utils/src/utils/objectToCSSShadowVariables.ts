import type { DataObject, Shadow } from '../types';

import { join, getCSSVariableName, getBoxShadow } from './other';

export const objectToCSSShadowVariables = (obj: DataObject, withKebabCase?: boolean) => {
    const withPrefixDesign = false;

    return Object.keys(obj)
        .filter((key) => key !== 'modes' && key !== 'comment')
        .reduce((vars, key) => {
            const name = join(key);
            const value = (obj[key] as unknown) as Array<Shadow>;

            vars[getCSSVariableName(name, withPrefixDesign, withKebabCase)] = getBoxShadow(value).join(', ');

            return vars;
        }, {} as Record<string, string | number>);
};
