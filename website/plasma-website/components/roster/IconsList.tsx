import React, { useMemo, useContext, useRef, useState, useEffect } from 'react';
import type { FC, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { applyNoSelect, H4 } from '@salutejs/plasma-b2c';

import { Context, setWizardItem, setIconColor, setIconSize, initColorState } from '../../store';
import { iconsList } from '../../utils';
import { multipleMediaQuery } from '../../mixins';

import { IconGroupHeading } from './IconGroupHeading';
import { IconHoverDetails, StyledIconHoverDetails } from './IconHoverDetails';
import { IconExtendedInfo } from './IconExtendedInfo';
import { AbstractIcon } from './AbstractIcon';
import { Grid } from './Grid';

export interface IconsListProps {
    pageRef: RefObject<HTMLDivElement>;
    searchQuery?: string;
    activeGroup?: string;
    showDeprecated?: boolean;
    /**
     * Item click handler
     */
    onItemClick?: React.HTMLAttributes<HTMLElement>['onClick'];
}

const getGridCellPosition = (grid: HTMLDivElement, index: number) => {
    if (!grid) {
        return 1;
    }

    const gridContainerStyle = window.getComputedStyle(grid);

    const columns = gridContainerStyle.getPropertyValue('grid-template-columns').split(' ').length;

    const currentRow = Math.floor(index / columns);
    const offset = index % columns;

    return offset === 0 ? index / currentRow : offset;
};

const StyledGridWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 2.5rem;
    }
`;

const StyledIconList = styled.div``;

const StyledEmptySearch = styled(H4)`
    font-size: 3rem;
    line-height: 3.25rem;
    color: rgba(255, 255, 255, 0.96);

    ${multipleMediaQuery(['M'])(css`
        font-size: 2rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        font-size: 1.25rem;
        max-width: calc(100% - 1rem);
    `)}
`;

const StyledCell = styled.div`
    position: relative;
`;

const StyledIcon = styled.div<{ isDeprecated: boolean; isActive?: boolean; hasOpacity?: boolean }>`
    ${applyNoSelect};

    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    background-color: transparent;

    box-sizing: border-box;
    cursor: pointer;
    transition: var(--box-shadow-transition), var(--opacity-transition), var(--color-transition);

    &::before {
        content: '';
        position: absolute;
        height: inherit;
        width: 3.75rem;
        border-radius: 50%;

        transition: var(--box-shadow-transition), var(--opacity-transition), var(--color-transition);
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

    ${({ isDeprecated }) =>
        isDeprecated &&
        css`
            &::after {
                content: '';
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: var(--text-negative);
            }
        `}

    ${({ isActive }) =>
        isActive &&
        css`
            &::before {
                box-shadow: 0 0 0 0.063rem rgba(255, 255, 255, 1);
            }

            &:hover {
                &::before {
                    box-shadow: 0 0 0 0.063rem rgba(255, 255, 255, 1);
                }
            }
        `}

    ${({ isActive, hasOpacity }) =>
        !isActive &&
        hasOpacity &&
        css`
            opacity: 28%;
        `}
`;

export const IconsList: FC<IconsListProps> = ({ searchQuery, activeGroup, showDeprecated, onItemClick, pageRef }) => {
    const { state, dispatch } = useContext(Context);
    const [offset, setOffset] = useState(0);
    const [cellIndex, setCellIndex] = useState(1);
    const [currentGridRowLabel, setCurrentGridRowLabel] = useState('');
    const [currentGridIndex, setCurrentGridIndex] = useState(0);
    const groupRefs = useRef<Record<string, HTMLDivElement>>({});
    const gridRefs = useRef<HTMLDivElement[]>([]);

    const items = useMemo(() => {
        let filteredIconsList = iconsList;

        if (!showDeprecated) {
            filteredIconsList = iconsList.filter((group) => !group.items.every((item) => item.isDeprecated));
        }

        if (!searchQuery) {
            const processedGroups = filteredIconsList.map((group) => ({
                ...group,
                items: [...group.items]
                    .filter((item) => showDeprecated || !item.isDeprecated) // Фильтруем deprecated иконки
                    .sort((a, b) => {
                        if (!a.isDeprecated && b.isDeprecated) return -1;
                        if (a.isDeprecated && !b.isDeprecated) return 1;
                        return 0;
                    }),
            }));

            return processedGroups.sort((a, b) => {
                const aAllDeprecated = a.items.every((item) => item.isDeprecated);
                const bAllDeprecated = b.items.every((item) => item.isDeprecated);
                if (!aAllDeprecated && bAllDeprecated) return -1;
                if (aAllDeprecated && !bAllDeprecated) return 1;
                return 0;
            });
        }

        const regExp = new RegExp(searchQuery.toLocaleLowerCase().replace(/[^\w\u0400-\u04FF]/g, ''));

        let filteredGroups = filteredIconsList
            .map((group) => ({
                ...group,
                items: group.items
                    .filter(({ name, isDeprecated }) => {
                        if (!showDeprecated && isDeprecated) {
                            return false;
                        }
                        return name.toLocaleLowerCase().search(regExp) !== -1;
                    })
                    .sort((a, b) => {
                        if (!a.isDeprecated && b.isDeprecated) return -1;
                        if (a.isDeprecated && !b.isDeprecated) return 1;
                        return 0;
                    }),
            }))
            .filter((group) => {
                return group.items.length;
            });

        filteredGroups = filteredGroups.sort((a, b) => {
            const aAllDeprecated = a.items.every((item) => item.isDeprecated);
            const bAllDeprecated = b.items.every((item) => item.isDeprecated);
            if (!aAllDeprecated && bAllDeprecated) return -1;
            if (aAllDeprecated && !bAllDeprecated) return 1;
            return 0;
        });

        return filteredGroups;
    }, [searchQuery, showDeprecated]);

    useEffect(() => {
        items.forEach((group, gridIndex) => {
            const currentCellIndex = group.items.findIndex(({ name }) => name === state.wizardItemName);

            if (currentCellIndex === -1) {
                return;
            }

            setOffset(getGridCellPosition(gridRefs.current[gridIndex], currentCellIndex + 1));
        });
    }, [items, offset]);

    useEffect(() => {
        const container = gridRefs.current[currentGridIndex];

        const observer = new window.ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === container) {
                    setOffset(getGridCellPosition(container, cellIndex));
                }
            }
        });

        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                observer.unobserve(container);
            }
        };
    }, [cellIndex, items, currentGridIndex, gridRefs.current]);

    const handleCloseExtendInfo = () => {
        dispatch(setWizardItem('icon', ''));

        dispatch(setIconColor(initColorState));

        dispatch(setIconSize({ ...state.gridItemsSize }));

        setCurrentGridRowLabel('');
    };

    const handleRefInit = (el: HTMLDivElement, indexGroup: number) => {
        gridRefs.current[indexGroup] = el;
    };

    const handleGroupRefInit = (el: HTMLDivElement, subcategory: string) => {
        groupRefs.current[subcategory] = el;
    };

    useEffect(() => {
        if (activeGroup && groupRefs.current?.[activeGroup]) {
            setTimeout(() => groupRefs.current?.[activeGroup].scrollIntoView());
        }
    }, [activeGroup, groupRefs.current]);

    if (!items.length) {
        return (
            <StyledEmptySearch bold={false}>У нас нет иконки с таким именем, а по тегам пока не ищем</StyledEmptySearch>
        );
    }

    return (
        <StyledIconList>
            {items.map((group, indexGroup) => (
                <StyledGridWrapper key={group.iconGroup.subtitle}>
                    <IconGroupHeading
                        ref={(el) => el && handleGroupRefInit(el, group.iconGroup.subtitle)}
                        title={group.iconGroup.title}
                        subtitle={group.iconGroup.subtitle}
                        count={group.items.length}
                    />
                    <Grid ref={(el) => el && handleRefInit(el, indexGroup)}>
                        {group.items.map(({ name, component, groupName, isDeprecated = false }, index) => (
                            <StyledCell key={name}>
                                <StyledIcon
                                    hasOpacity={groupName === currentGridRowLabel && name !== state.wizardItemName}
                                    isActive={name === state.wizardItemName}
                                    isDeprecated={isDeprecated}
                                    onClick={(event) => {
                                        event.stopPropagation();

                                        onItemClick?.(event);

                                        dispatch(setWizardItem('icon', name));

                                        setCurrentGridRowLabel(group.iconGroup.subtitle);

                                        dispatch(setIconColor(initColorState));

                                        dispatch(setIconSize({ ...state.gridItemsSize }));

                                        const currentIndex = index + 1;

                                        setCellIndex(currentIndex);

                                        setCurrentGridIndex(indexGroup);

                                        setOffset(getGridCellPosition(gridRefs.current[indexGroup], currentIndex));

                                        // Info: Close by double click
                                        if (name === state.wizardItemName) {
                                            handleCloseExtendInfo();
                                        }
                                    }}
                                >
                                    <AbstractIcon isDeprecated={isDeprecated} component={component} name={name} />
                                </StyledIcon>
                                <IconHoverDetails
                                    pageRef={pageRef}
                                    name={name}
                                    sizes={{ 36: true, 24: true, 16: true }}
                                />
                                {name === state.wizardItemName && (
                                    <IconExtendedInfo
                                        onClose={handleCloseExtendInfo}
                                        isDeprecated={isDeprecated}
                                        offset={offset}
                                    />
                                )}
                            </StyledCell>
                        ))}
                    </Grid>
                </StyledGridWrapper>
            ))}
        </StyledIconList>
    );
};
