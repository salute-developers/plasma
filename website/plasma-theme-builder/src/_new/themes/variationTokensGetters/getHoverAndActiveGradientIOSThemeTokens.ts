import { GradientToken } from '../../tokens';
import { PlatformsVariations } from '../../types';

export const getHoverAndActiveGradientIOSThemeTokens = (
    token: GradientToken,
): PlatformsVariations['gradient']['ios'] | undefined => {
    // TODO: Добавить генерацию токенов для градиентов
    return {
        [`${token.getName()}-hover`]: token.getValue('ios'),
        [`${token.getName()}-active`]: token.getValue('ios'),
    };
};
