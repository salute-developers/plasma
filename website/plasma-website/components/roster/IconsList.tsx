import React, { useMemo, useContext, useRef, useState, useEffect } from 'react';
import type { FC, MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import { Headline4, applyNoSelect } from '@salutejs/plasma-b2c';
import { IconRoot } from '@salutejs/plasma-icons';
import { secondary } from '@salutejs/plasma-tokens-b2c';

import { Context, setWizardItem, setIconColor, initColorState } from '../../store';
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

const getGridCellPosition = (ref: MutableRefObject<null>, index: number) => {
    if (!ref || !ref?.current) {
        return 1;
    }

    const gridContainer = ref?.current;

    if (!gridContainer) {
        return 1;
    }

    const gridContainerStyle = window.getComputedStyle(gridContainer);

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

const StyledIcon = styled.div<{ isActive?: boolean; color?: string; hasOpacity?: boolean }>`
    ${applyNoSelect};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.125rem;
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;

    background-color: transparent;

    box-sizing: border-box;
    cursor: pointer;

    transition: box-shadow 120ms ease-in, opacity 120ms ease-in, color 120ms ease-in;

    &:hover {
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.28);
        opacity: 1;

        & + ${StyledIconHoverDetails} {
            display: flex;
        }
    }

    ${({ isActive, color = 'inherit' }) =>
        isActive &&
        css`
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
            color: ${color};

            &:hover {
                box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
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
    const [currentGridRow, setCurrentGridRow] = useState('');
    const gridRef = useRef(null);

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
                const currentIndex = group.items.findIndex(({ name }) => name === state.wizardItemName);

                if (currentIndex !== -1) {
                    setOffset(getGridCellPosition(gridRef, currentIndex + 1));
                }

                return group.items.length;
            });
    }, [searchQuery, offset]);

    useEffect(() => {
        const container = gridRef?.current;

        const observer = new window.ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === container) {
                    setOffset(getGridCellPosition(gridRef, cellIndex));
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
    }, [cellIndex, items]);

    const handleCloseExtendInfo = () => {
        dispatch(setWizardItem('icon', ''));

        dispatch(setIconColor(initColorState));

        setCurrentGridRow('');
    };

    if (!items.length) {
        return <StyledHeadline4>Nothing found</StyledHeadline4>;
    }

    return (
        <StyledIconList>
            {items.map((group) => (
                <StyledGridWrapper key={group.iconGroup.subtitle}>
                    <IconGroupHeading
                        title={group.iconGroup.title}
                        subtitle={group.iconGroup.subtitle}
                        count={group.items.length}
                    />
                    <Grid ref={gridRef}>
                        {group.items.map(({ name, component: Component, groupName }, index) => (
                            <StyledCell key={name}>
                                <StyledIcon
                                    key={name}
                                    hasOpacity={groupName === currentGridRow && name !== state.wizardItemName}
                                    isActive={name === state.wizardItemName}
                                    onClick={(event) => {
                                        event.stopPropagation();

                                        onItemClick?.(event);

                                        dispatch(setWizardItem('icon', name));

                                        setCurrentGridRow(group.iconGroup.subtitle);

                                        dispatch(setIconColor(initColorState));

                                        const currentIndex = index + 1;

                                        setCellIndex(currentIndex);

                                        setOffset(getGridCellPosition(gridRef, currentIndex));

                                        // Info: Close by double click
                                        if (name === state.wizardItemName) {
                                            handleCloseExtendInfo();
                                        }
                                    }}
                                    color={state.color?.value}
                                >
                                    <IconRoot size={size} icon={Component} color="inherit" />
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
