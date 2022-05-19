export const getGalleryName = (index: number) => `gallery-${index}`;

export const getGalleryCardName = (galleryIndex: number, cardIndex: number) => `gallery-${galleryIndex}-${cardIndex}`;

export const getGallerySelector = (index: number) => `[data-name="${getGalleryName(index)}"]`;

export const getGalleryCardSelector = (galleryIndex: number, cardIndex: number) =>
    `[data-name="${getGalleryCardName(galleryIndex, cardIndex)}"]`;
