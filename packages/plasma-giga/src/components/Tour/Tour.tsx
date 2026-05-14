import { tourConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import React from 'react';

import { config } from './Tour.config';

const mergedConfig = mergeConfig(tourConfig, config);
const TourBase = component(mergedConfig);

const Tour = React.forwardRef<React.ElementRef<typeof TourBase>, React.ComponentPropsWithoutRef<typeof TourBase>>(
    (props, ref) => {
        return <TourBase tailWidth={36} tailHeight={18} ref={ref} {...props} />;
    },
);

export { Tour };
