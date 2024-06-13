import { sectionToFormulaMap } from '../../../utils';
import { TokenType } from '../../types';

export const getHoverAndActiveMetaTokens = (data: TokenType) => {
    const [mode, category, subcategory, name] = data.name.split('.');

    if (!sectionToFormulaMap[category]) {
        return [];
    }

    const hover = [mode, category, subcategory, `${name}-hover`];
    const active = [mode, category, subcategory, `${name}-active`];

    return [
        {
            ...data,
            name: hover.join('.'),
            tags: hover,
            displayName: `${data.displayName}Hover`,
        },
        {
            ...data,
            name: active.join('.'),
            tags: active,
            displayName: `${data.displayName}Active`,
        },
    ];
};
