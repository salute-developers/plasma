import { transparent } from '../../constants';
import { TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Фон поверхности/контрола без заливки',
    onDark: 'Фон поверхности/контрола без заливки на темном фоне',
    onLight: 'Фон поверхности/контрола без заливки на светлом фоне',
    inverse: 'Инвертированный фон поверхности/контрола без заливки',
};

export const getSurfaceClearTokens = () => {
    return {
        dark: {
            default: {
                value: transparent,
                comment: comment.default,
            },
            onDark: {
                value: transparent,
                comment: comment.onDark,
            },
            onLight: {
                value: transparent,
                comment: comment.onLight,
            },
            inverse: {
                value: transparent,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: transparent,
                comment: comment.default,
            },
            onDark: {
                value: transparent,
                comment: comment.onDark,
            },
            onLight: {
                value: transparent,
                comment: comment.onLight,
            },
            inverse: {
                value: transparent,
                comment: comment.inverse,
            },
        },
    };
};
