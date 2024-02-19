import { useMemo } from 'react';

import type { SpinnerInnerProps, SpinnerProps } from '../Spinner.types';
import { getFallbackProps, sizeFormatting } from '../utils';

export const useInnerProps = (props: SpinnerProps, initialInnerProps: SpinnerInnerProps) => {
    return useMemo(() => {
        const { width, height } = props;

        if (!width || !height) {
            return getFallbackProps(props, initialInnerProps);
        }

        const innerProps = {
            wrapperWidth: sizeFormatting(width),
            wrapperHeight: sizeFormatting(height),
            svgWidth: height,
            svgHeight: width,
            color: initialInnerProps.color,
        };

        return getFallbackProps(props, innerProps);
    }, [props.width, props.height, props.view, props.size]);
};
