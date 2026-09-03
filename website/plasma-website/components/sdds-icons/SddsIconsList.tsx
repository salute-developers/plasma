import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import styled, { css } from 'styled-components';
import { applyNoSelect } from '@salutejs/plasma-b2c';
import * as SddsIcons16 from '@salutejs/sdds-icons/16';
import * as SddsIcons24 from '@salutejs/sdds-icons/24';
import * as SddsIcons36 from '@salutejs/sdds-icons/36';

import { Context, initColorState, setIconColor, setIconSize, setWizardItem } from '../../store';
import { Grid } from '../roster/Grid';
import { IconExtendedInfo } from '../roster/IconExtendedInfo';
import { IconGroupHeading } from '../roster/IconGroupHeading';
import { IconHoverDetails, StyledIconHoverDetails } from '../roster/IconHoverDetails';

export type SddsIconManifestItem = {
    aliases: string[];
    category: string;
    name: string;
    sizes: Array<16 | 24 | 36>;
};

type SddsIconsListProps = {
    icons: SddsIconManifestItem[];
    pageRef: RefObject<HTMLDivElement>;
};

type IconComponent = typeof SddsIcons24.AddFill;
type IconSize = 16 | 24 | 36;

const iconComponents: Record<IconSize, Record<string, IconComponent>> = {
    16: SddsIcons16 as Record<string, IconComponent>,
    24: SddsIcons24 as Record<string, IconComponent>,
    36: SddsIcons36 as Record<string, IconComponent>,
};

const categoryOrder = new Map(
    [
        'Navigation & Movement',
        'Actions & Feedback',
        'People & Communication',
        'Commerce & Finance',
        'Files & Data',
        'Devices & Tech',
        'Media & Brand',
        'World & Lifestyle',
        'Others',
        'Emoji',
    ].map((category, index) => [category, index]),
);

const getGridCellPosition = (grid: HTMLDivElement, index: number) => {
    const columns = window.getComputedStyle(grid).getPropertyValue('grid-template-columns').split(' ').length;
    const offset = index % columns;

    return offset || columns;
};

const getCodeSources = (name: string, size: '16' | '24' | '36') => ({
    importCode: `import { ${name} } from '@salutejs/sdds-icons/${size}';`,
    codeSnippet: `<${name} />`,
});

const StyledIconList = styled.div``;

const StyledGridWrapper = styled.section`
    /* stylelint-disable property-no-unknown */
    content-visibility: auto;
    contain-intrinsic-size: auto 20rem;
    /* stylelint-enable property-no-unknown */

    &:not(:last-child) {
        margin-bottom: 2.5rem;
    }
`;

const StyledCell = styled.div`
    position: relative;
`;

const StyledIcon = styled.div<{ isActive?: boolean; hasOpacity?: boolean }>`
    ${applyNoSelect};

    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    box-sizing: border-box;

    color: rgba(255, 255, 255, 0.96);
    background-color: transparent;

    cursor: pointer;
    transition: var(--box-shadow-transition), var(--opacity-transition), var(--color-transition);

    &::before {
        content: '';
        position: absolute;
        width: 3.75rem;
        height: inherit;
        border-radius: 50%;

        transition: var(--box-shadow-transition), var(--color-transition);
    }

    &:hover {
        opacity: 1;

        &::before {
            box-shadow: 0 0 0 0.063rem rgba(255, 255, 255, 0.28);
        }

        & + ${StyledIconHoverDetails} {
            display: flex;
        }
    }

    ${({ isActive }) =>
        isActive &&
        css`
            &::before,
            &:hover::before {
                box-shadow: 0 0 0 0.063rem rgba(255, 255, 255, 1);
            }
        `}

    ${({ isActive, hasOpacity }) =>
        !isActive &&
        hasOpacity &&
        css`
            opacity: 28%;
        `}
`;

export const SddsIconsList = ({ icons, pageRef }: SddsIconsListProps) => {
    const { state, dispatch } = useContext(Context);
    const [cellIndex, setCellIndex] = useState(1);
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentGridIndex, setCurrentGridIndex] = useState(0);
    const [offset, setOffset] = useState(1);
    const gridRefs = useRef<HTMLDivElement[]>([]);

    const groups = useMemo(() => {
        const iconsByCategory = new Map<string, SddsIconManifestItem[]>();

        icons.forEach((icon) => {
            const categoryIcons = iconsByCategory.get(icon.category) || [];

            categoryIcons.push(icon);
            iconsByCategory.set(icon.category, categoryIcons);
        });

        return Array.from(iconsByCategory, ([category, categoryIcons]) => ({
            category,
            icons: categoryIcons,
        })).sort(
            (firstGroup, secondGroup) =>
                (categoryOrder.get(firstGroup.category) ?? Number.MAX_SAFE_INTEGER) -
                (categoryOrder.get(secondGroup.category) ?? Number.MAX_SAFE_INTEGER),
        );
    }, [icons]);

    const handleCloseExtendedInfo = () => {
        dispatch(setWizardItem('icon', ''));
        dispatch(setIconColor(initColorState));
        dispatch(setIconSize({ ...state.gridItemsSize }));
        setCurrentCategory('');
    };

    useEffect(() => {
        const container = gridRefs.current[currentGridIndex];

        if (!container || !state.wizardItemName) {
            return undefined;
        }

        const observer = new window.ResizeObserver(() => {
            setOffset(getGridCellPosition(container, cellIndex));
        });

        observer.observe(container);

        return () => observer.unobserve(container);
    }, [cellIndex, currentGridIndex, state.wizardItemName]);

    return (
        <StyledIconList>
            {groups.map(({ category, icons: categoryIcons }, indexGroup) => (
                <StyledGridWrapper key={category}>
                    <IconGroupHeading count={categoryIcons.length} subtitle="" title={category} />
                    <Grid
                        ref={(element) => {
                            if (element) {
                                gridRefs.current[indexGroup] = element;
                            }
                        }}
                    >
                        {categoryIcons.map(({ name, sizes }, index) => {
                            const isActive = name === state.wizardItemName;
                            const renderSize = Number(
                                isActive ? state.size.label : state.gridItemsSize.label,
                            ) as IconSize;
                            const Icon = iconComponents[renderSize][name];

                            if (!Icon) {
                                return null;
                            }

                            return (
                                <StyledCell key={name}>
                                    <StyledIcon
                                        hasOpacity={category === currentCategory && !isActive}
                                        isActive={isActive}
                                        onClick={(event) => {
                                            event.stopPropagation();

                                            dispatch(setWizardItem('icon', name));
                                            dispatch(setIconColor(initColorState));
                                            dispatch(setIconSize({ ...state.gridItemsSize }));
                                            setCurrentCategory(category);
                                            setCellIndex(index + 1);
                                            setCurrentGridIndex(indexGroup);
                                            setOffset(getGridCellPosition(gridRefs.current[indexGroup], index + 1));

                                            if (isActive) {
                                                handleCloseExtendedInfo();
                                            }
                                        }}
                                    >
                                        <Icon
                                            aria-hidden
                                            color={isActive ? state.color.value : 'inherit'}
                                            focusable="false"
                                        />
                                    </StyledIcon>
                                    <IconHoverDetails
                                        name={name}
                                        pageRef={pageRef}
                                        sizes={{
                                            16: sizes.includes(16),
                                            24: sizes.includes(24),
                                            36: sizes.includes(36),
                                        }}
                                    />
                                    {isActive && (
                                        <IconExtendedInfo
                                            getCodeSources={getCodeSources}
                                            isDeprecated={false}
                                            offset={offset}
                                            onClose={handleCloseExtendedInfo}
                                        />
                                    )}
                                </StyledCell>
                            );
                        })}
                    </Grid>
                </StyledGridWrapper>
            ))}
        </StyledIconList>
    );
};
