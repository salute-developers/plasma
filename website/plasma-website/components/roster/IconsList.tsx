import React, { useMemo, useContext, useRef, useState, useEffect } from 'react';
import type { FC, MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import { Headline4, applyNoSelect } from '@salutejs/plasma-b2c';
import { IconRoot } from '@salutejs/plasma-icons';
import { secondary } from '@salutejs/plasma-tokens-b2c';

import { Context, setWizardItem, setIconColor, setIconSize, initColorState, initSizeState } from '../../store';
import { iconsList } from '../../utils';

import { IconGroupHeading } from './IconGroupHeading';
import { IconHoverDetails } from './IconHoverDetails';
import { IconExtendedInfo } from './IconExtendedInfo';
import { AnimationSlideUp } from './AnimationSlideUp';
import { Grid } from './Grid';

export interface IconsListProps {
    searchQuery?: string;
    /**
     * Item click handler
     */
    onItemClick?: React.HTMLAttributes<HTMLElement>['onClick'];
}

const size = 's';

const getGridCellPosition = (grid: any, index: number) => {
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
        margin-bottom: 3.5rem;
    }
`;

const StyledIconList = styled.div`
    margin-top: 4rem;
`;

const StyledHeadline4 = styled(Headline4).attrs(() => ({ as: 'h4', mt: '8x', mb: '6x' }))`
    color: ${secondary};
`;

const StyledCell = styled.div`
    position: relative;
`;

const StyledIconHoverDetails = styled.div`
    position: absolute;
    z-index: 2;
    top: -4.25rem;
    left: 0.625rem;
    display: none;
    flex-direction: column;
    padding: 0.75rem;
    border-radius: 1rem;

    font-size: 0.75rem;
    line-height: 0.875rem;

    background-color: rgba(23, 23, 23, 1);

    ${AnimationSlideUp};
`;

const StyledIcon = styled.div<{ isActive?: boolean; hasOpacity?: boolean }>`
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
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.28);
        }

        & + ${StyledIconHoverDetails} {
            display: flex;
        }
    }

    ${({ isActive }) =>
        isActive &&
        css`
            &::before {
                box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
            }

            &:hover {
                &::before {
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
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

export const IconsList: FC<IconsListProps> = ({ searchQuery, onItemClick }) => {
    const { state, dispatch } = useContext(Context);
    const [offset, setOffset] = useState(0);
    const [cellIndex, setCellIndex] = useState(1);
    const [currentGridRowLabel, setCurrentGridRowLabel] = useState('');
    const [currentGridIndex, setCurrentGridIndex] = useState(0);
    const gridRefs = useRef<HTMLDivElement[]>([]);

    const items = useMemo(() => {
        if (!searchQuery) {
            return iconsList;
        }

        const regExp = new RegExp(searchQuery.toLocaleLowerCase().replace(/\W/g, ''));

        return iconsList
            .map((group) => ({
                ...group,
                items: group.items.filter((item) => {
                    return item.name.toLocaleLowerCase().search(regExp) !== -1;
                }),
            }))
            .filter((group) => {
                return group.items.length;
            });
    }, [searchQuery]);

    useEffect(() => {
        // INFO: Определить смещение для grid cell после фильтра поиска
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

        dispatch(setIconSize(initSizeState));

        setCurrentGridRowLabel('');
    };

    const handleRefInit = (el: HTMLDivElement, indexGroup: number) => {
        gridRefs.current[indexGroup] = el;
    };

    if (!items.length) {
        return <StyledHeadline4>Nothing found</StyledHeadline4>;
    }

    return (
        <StyledIconList>
            {items.map((group, indexGroup) => (
                <StyledGridWrapper key={group.iconGroup.subtitle}>
                    <IconGroupHeading
                        title={group.iconGroup.title}
                        subtitle={group.iconGroup.subtitle}
                        count={group.items.length}
                    />
                    <Grid ref={(el) => el && handleRefInit(el, indexGroup)}>
                        {group.items.map(({ name, component: Component, groupName, version }, index) => (
                            <StyledCell key={name}>
                                <StyledIcon
                                    key={name}
                                    hasOpacity={groupName === currentGridRowLabel && name !== state.wizardItemName}
                                    isActive={name === state.wizardItemName}
                                    onClick={(event) => {
                                        event.stopPropagation();

                                        onItemClick?.(event);

                                        dispatch(setWizardItem('icon', name));

                                        setCurrentGridRowLabel(group.iconGroup.subtitle);

                                        dispatch(setIconColor(initColorState));

                                        dispatch(setIconSize(initSizeState));

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
                                    {version === 'legacy' ? (
                                        <IconRoot
                                            icon={Component}
                                            size={name === state.wizardItemName ? state.size.value : size}
                                            color={name === state.wizardItemName ? state.color.value : 'inherit'}
                                        />
                                    ) : (
                                        <Component
                                            size={name === state.wizardItemName ? state.size.value : size}
                                            color={name === state.wizardItemName ? state.color.value : 'inherit'}
                                        />
                                    )}
                                </StyledIcon>
                                <StyledIconHoverDetails>
                                    <IconHoverDetails name={name} sizes={{ 36: false, 24: true, 16: false }} />
                                </StyledIconHoverDetails>
                                {name === state.wizardItemName && (
                                    <IconExtendedInfo onClose={handleCloseExtendInfo} offset={offset} />
                                )}
                            </StyledCell>
                        ))}
                    </Grid>
                </StyledGridWrapper>
            ))}
        </StyledIconList>
    );
};
