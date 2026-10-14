import type { SpinnerInnerProps, SpinnerProps } from '../Spinner.types';

export const sizeFormatting = (size: number | string, deviceScale = 1): string => {
    const scalingPixelBasis = 16;

    if (typeof size === 'number' || (!size.endsWith('rem') && !size.endsWith('px'))) {
        return `${Number(size) / (scalingPixelBasis * deviceScale)}rem`;
    }

    return size;
};

// TODO: удалить после обновления API компонента
export const getFallbackProps = (props: SpinnerProps, initialInnerProps: SpinnerInnerProps) => {
    const { size } = props;
    const color = props.color || initialInnerProps.color;

    if (typeof size === 'number' || (size && !Number.isNaN(parseInt(size, 10)))) {
        const wrapperSize = sizeFormatting(size);
        return {
            wrapperWidth: wrapperSize,
            wrapperHeight: wrapperSize,
            svgWidth: size,
            svgHeight: size,
            color,
        };
    }

    return {
        ...initialInnerProps,
        color,
    };
};
