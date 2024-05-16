import { GradientToken } from '../../tokens';
import { PlatformsVariations } from '../../types';

export const getHoverAndActiveGradientWebThemeTokens = (
    token: GradientToken,
): PlatformsVariations['gradient']['web'] | undefined => {
    // TODO: Добавить генерацию токенов для градиентов
    return {
        [`${token.getName()}-hover`]: token.getValue('web'),
        [`${token.getName()}-active`]: token.getValue('web'),
    };
};
