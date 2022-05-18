import React from 'react';

import { GalleryCommon, GalleryComponent, GalleryProps } from './Gallery@common';
import { MultiGallerySberPortal } from './MultiGallery/MultiGallery@sberportal';
import { SingleGallerySberPortal } from './SingleGallery/SingleGallery@sberportal';
import { GalleryControl } from './types';

const platformComponents = {
    SingleGallery: SingleGallerySberPortal,
    MultiGallery: MultiGallerySberPortal,
};

export const GallerySberPortal = React.forwardRef<GalleryControl, GalleryProps>((props, ref) => (
    <GalleryCommon {...props} ref={ref} platformComponents={platformComponents} />
)) as GalleryComponent;
