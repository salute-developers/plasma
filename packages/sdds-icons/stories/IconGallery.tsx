import React from 'react';
import * as Icons16 from '@salutejs/sdds-icons/16';
import * as Icons24 from '@salutejs/sdds-icons/24';
import * as Icons36 from '@salutejs/sdds-icons/36';

import './IconGallery.css';

type IconSize = 16 | 24 | 36;
type IconComponent = typeof Icons16.AddFill;
type IconSet = Record<string, IconComponent>;

export interface IconGalleryProps {
    category: string;
    icons: string[];
    size: IconSize;
}

const columnsCount = 10;
const iconsBySize: Record<IconSize, IconSet> = {
    16: Icons16 as IconSet,
    24: Icons24 as IconSet,
    36: Icons36 as IconSet,
};

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
                            {row.map((iconName) => {
                                const Icon = iconsBySize[size][iconName];

                                return (
                                    <td key={iconName}>
                                        <Icon
                                            aria-hidden="true"
                                            className="icon-gallery__icon"
                                            focusable="false"
                                            height={size}
                                            width={size}
                                        />
                                        <span className="icon-gallery__name">{iconName}</span>
                                    </td>
                                );
                            })}
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
