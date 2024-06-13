import { getHoverAndActiveMetaTokens } from './getHoverAndActiveMetaTokens';
import { ExtraMetaTokensGetters } from '../createMetaTokens';

export const extraMetaTokenGetters: ExtraMetaTokensGetters = {
    color: getHoverAndActiveMetaTokens,
    gradient: getHoverAndActiveMetaTokens,
};
