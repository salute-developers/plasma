import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { SegmentGroup, SegmentItem, SegmentProvider } from '@salutejs/plasma-b2c';

import { Context, setIconGridSize, setIconSize } from '../../store';
import { iconStyleOptions, isIconStyle } from '../../utils/iconStyle';
import type { IconStyle } from '../../utils/iconStyle';
import { listSizes } from '../../utils/listSizes';
import { Badge } from '../Badge';

type IconCollection = 'plasma' | 'sdds';

type IconsToolbarProps = {
    activeCollection: IconCollection;
    iconStyle: IconStyle;
    onIconStyleChange: (iconStyle: IconStyle) => void;
};

const collectionRoutes: Record<IconCollection, string> = {
    plasma: '/icons/',
    sdds: '/sdds-icons/',
};

const segmentGroupStyle = { flexShrink: 0 };

const StyledToolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
`;

const StyledFilters = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-left: auto;
`;

export const IconsToolbar = ({ activeCollection, iconStyle, onIconStyleChange }: IconsToolbarProps) => {
    const router = useRouter();
    const { state, dispatch } = useContext(Context);
    const availableIconStyles = iconStyleOptions.filter(
        ({ value }) => activeCollection === 'sdds' || value !== 'outlineBold',
    );

    const handleCollectionChange = (collection: string) => {
        if (collection === activeCollection || !(collection in collectionRoutes)) {
            return;
        }

        router.push(collectionRoutes[collection as IconCollection]);
    };

    const handleSizeChange = (label: string) => {
        const size = listSizes.find((item) => item.label === label);

        if (!size) {
            return;
        }

        dispatch(setIconGridSize(size));
        dispatch(setIconSize(size));
    };

    const handleIconStyleChange = (value: string) => {
        if (isIconStyle(value)) {
            onIconStyleChange(value);
        }
    };

    return (
        <StyledToolbar>
            <SegmentProvider
                onChangeSelected={handleCollectionChange}
                selected={[activeCollection]}
                singleSelectedRequired
            >
                <SegmentGroup
                    aria-label="Набор иконок"
                    clip={false}
                    hasBackground
                    size="xs"
                    style={segmentGroupStyle}
                    view="filled"
                >
                    <SegmentItem
                        contentRight={<Badge text="new" />}
                        label="SDDS Icons"
                        size="xs"
                        value="sdds"
                        view="secondary"
                    />
                    <SegmentItem label="Plasma Icons" size="xs" value="plasma" view="secondary" />
                </SegmentGroup>
            </SegmentProvider>

            <StyledFilters>
                <SegmentProvider onChangeSelected={handleIconStyleChange} selected={[iconStyle]} singleSelectedRequired>
                    <SegmentGroup
                        aria-label="Начертание иконок"
                        clip={false}
                        hasBackground
                        size="xs"
                        style={segmentGroupStyle}
                        view="filled"
                    >
                        {availableIconStyles.map(({ label, value }) => (
                            <SegmentItem key={value} label={label} size="xs" value={value} view="secondary" />
                        ))}
                    </SegmentGroup>
                </SegmentProvider>

                <SegmentProvider
                    onChangeSelected={handleSizeChange}
                    selected={[state.gridItemsSize.label]}
                    singleSelectedRequired
                >
                    <SegmentGroup
                        aria-label="Размер иконок"
                        clip={false}
                        hasBackground
                        size="xs"
                        style={segmentGroupStyle}
                        view="filled"
                    >
                        {listSizes.map(({ label }) => (
                            <SegmentItem key={label} label={label} size="xs" value={label} view="secondary" />
                        ))}
                    </SegmentGroup>
                </SegmentProvider>
            </StyledFilters>
        </StyledToolbar>
    );
};
