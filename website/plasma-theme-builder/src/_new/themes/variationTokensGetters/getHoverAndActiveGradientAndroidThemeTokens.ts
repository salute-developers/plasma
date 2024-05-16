import { GradientToken } from '../../tokens';
import { PlatformsVariations } from '../../types';

export const getHoverAndActiveGradientAndroidThemeTokens = (
    token: GradientToken,
): PlatformsVariations['gradient']['android'] | undefined => {
    // TODO: Добавить генерацию токенов для градиентов
    return {
        [`${token.getName()}-hover`]: token.getValue('android'),
        [`${token.getName()}-active`]: token.getValue('android'),
    };
};
