import React from 'react';

import './IconGallery.css';

export interface IconGalleryProps {
    category: string;
    icons: string[];
    size: 16 | 24 | 36;
}

const columnsCount = 10;

export const IconGallery = ({ category, icons, size }: IconGalleryProps) => {
    const rows = Array.from({ length: Math.ceil(icons.length / columnsCount) }, (_, rowIndex) =>
        icons.slice(rowIndex * columnsCount, (rowIndex + 1) * columnsCount),
    );

    return (
        <div className="icon-gallery">
            <table aria-label={category} className="icon-gallery__table">
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((iconName) => (
                                <td key={iconName}>
                                    <img
                                        alt=""
                                        height={size}
                                        loading="lazy"
                                        src={`./svg/${size}/${encodeURIComponent(iconName)}.svg`}
                                        width={size}
                                    />
                                    <span className="icon-gallery__name">{iconName}</span>
                                </td>
                            ))}
                            {Array.from({ length: columnsCount - row.length }, (_, emptyCellIndex) => (
                                <td aria-hidden="true" key={`empty-${emptyCellIndex}`} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
