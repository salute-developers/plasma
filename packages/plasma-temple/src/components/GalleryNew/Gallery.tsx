import React from 'react';

import { DeviceComponent } from '../DeviceComponent/DeviceComponent';

import { GalleryComponent, GalleryProps } from './Gallery@common';
import { GalleryMobile } from './Gallery@mobile';
import { GallerySberBox } from './Gallery@sberbox';
import { GallerySberPortal } from './Gallery@sberportal';
import { GalleryControl } from './types';

/**
 * Компонент Галереи
 */
export const Gallery = React.forwardRef<GalleryControl, GalleryProps>((props, ref) => (
    <DeviceComponent
        sberbox={GallerySberBox}
        sberportal={GallerySberPortal}
        mobile={GalleryMobile}
        props={props}
        innerRef={ref}
    />
)) as GalleryComponent;
