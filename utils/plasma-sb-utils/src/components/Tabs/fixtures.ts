import type { CSSProperties } from 'react';

export const orientations = ['horizontal', 'vertical'];
export const clips = ['none', 'scroll', 'showAll'];
export const headerClips = ['none', 'scroll'];
export const contentLeftOptions = ['none', 'icon'];
export const contentRightOptions = ['none', 'counter', 'icon'];
export const dividerAligns = ['left', 'right'];
export const labels = ['Label', 'Middle label', 'Disabled', 'Very long label'];

const isHeaderSize = (size: string) => /^h[1-6]$/.test(size);

export const splitSizes = (sizes: string[]) => ({
    regularSizes: sizes.filter((size) => !isHeaderSize(size)),
    headerSizes: sizes.filter(isHeaderSize),
});

export const getIconSizeStyle = (size: string): CSSProperties => {
    const sizeCustomValue = () => {
        switch (size) {
            case 'h1':
                return '3.5rem';
            case 'h2':
                return '2.25rem';
            case 'h3':
                return '1.875rem';
            case 'h4':
                return '1.625rem';
            case 'xs':
                return '1rem';
            default:
                return '1.5rem';
        }
    };

    return { '--icon-size': sizeCustomValue() } as CSSProperties;
};
