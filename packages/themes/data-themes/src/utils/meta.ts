import { MetaGrouped, ThemeMeta } from '../types';

export const getMetaGrouped = (meta: ThemeMeta) => {
    const metaWithEnabledTokens = {
        ...meta,
        tokens: meta.tokens.filter((token) => token.enabled),
    };

    const metaGrouped = metaWithEnabledTokens.tokens.reduce((acc, token) => {
        return {
            ...acc,
            [token.type]: [...(acc[token.type] || []), token],
        };
    }, {} as MetaGrouped);

    return metaGrouped;
};
