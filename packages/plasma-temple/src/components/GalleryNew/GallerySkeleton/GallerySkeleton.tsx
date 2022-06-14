import React from 'react';

import { DeviceComponent } from '../../DeviceComponent/DeviceComponent';

import { GallerySkeletonMobile } from './GallerySkeleton@mobile';
import { GallerySkeletonSberBox } from './GallerySkeleton@sberbox';
import { GallerySkeletonSberPortal } from './GallerySkeleton@sberportal';
import { GallerySkeletonProps } from './types';

/**
 * Компонент для отображения скелетона галереи
 */
export const GallerySkeleton: React.FC<GallerySkeletonProps> = (props) => (
    <DeviceComponent
        sberbox={GallerySkeletonSberBox}
        sberportal={GallerySkeletonSberPortal}
        mobile={GallerySkeletonMobile}
        props={props}
    />
);
