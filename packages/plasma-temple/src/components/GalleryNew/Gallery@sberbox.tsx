import React from 'react';

import { GalleryCommon, GalleryComponent, GalleryProps } from './Gallery@common';
import { MultiGallerySberBox } from './MultiGallery/MultiGallery@sberbox';
import { SingleGallerySberBox } from './SingleGallery/SingleGallery@sberbox';
import { GalleryControl } from './types';

const platformComponents = {
    SingleGallery: SingleGallerySberBox,
    MultiGallery: MultiGallerySberBox,
};

export const GallerySberBox = React.forwardRef<GalleryControl, GalleryProps>((props, ref) => (
    <GalleryCommon {...props} ref={ref} platformComponents={platformComponents} />
)) as GalleryComponent;
