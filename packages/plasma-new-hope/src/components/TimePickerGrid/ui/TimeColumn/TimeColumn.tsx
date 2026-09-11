import React from 'react';
import cls from 'classnames';

import { classes } from '../../TimePickerGrid.tokens';

import {
    StyledTimeColumn,
    StyledTimeItem,
    StyledEmpty,
    CustomScrollbar,
    ScrollbarTrack,
    ScrollbarThumb,
    StyledRoot,
} from './TimeColumn.styles';
import { TimeColumnProps, TimeColumnType } from './TimeColumn.types';

export const renderTimeColumn = ({
    values,
    disabledValues,
    dropdownHeight,
    column,
    activeTime,
    currentColumn,
    handleTimeItemClick,
    handleTimeItemKeyDown,
    createScrollbarDragHandler,
    setScrollbar,
    columnRef,
    scrollbarState,
    scrollbarRef,
    thumbRef,
    timeoutRef,
    timeItemRefs,
}: TimeColumnProps) => {
    const isMeridiemColumn = column === 'meridiem';

    const isSameValue = (candidate: string | number | null | undefined, value: string) =>
        isMeridiemColumn ? String(candidate) === value : parseInt(String(candidate), 10) === parseInt(value, 10);

    const isValueDisabled = (value: string) =>
        Boolean(disabledValues?.some((disabledValue) => isSameValue(disabledValue, value)));

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, columnType: TimeColumnType, value: string) => {
        handleTimeItemKeyDown(e, columnType, value);
    };

    const handleClick = (value: string, columnType: TimeColumnType) => {
        if (!isValueDisabled(value)) {
            handleTimeItemClick(value, columnType);
        }
    };

    const minDisableIndex = () => {
        if (!disabledValues || disabledValues.length === 0) {
            return 0;
        }

        for (let i = 0; i < values.length; i++) {
            if (!isValueDisabled(values[i])) {
                return i;
            }
        }

        return 0;
    };

    const isColumnActive = currentColumn === column;
    const minAvailableIndex = minDisableIndex();

    return (
        <StyledRoot>
            <StyledTimeColumn
                key={column}
                ref={columnRef}
                height={dropdownHeight}
                className={classes.timeColumn}
                tabIndex={-1}
            >
                {values.map((value, index) => {
                    const isDisabled = isValueDisabled(value);
                    const isActive = isSameValue(activeTime[column], value);

                    const getTabIndex = () => {
                        if (isDisabled) return -1;

                        if (isColumnActive && isActive) {
                            return 0;
                        }
                        if (index === minAvailableIndex) {
                            return 0;
                        }

                        return -1;
                    };

                    const tabIndex = getTabIndex();

                    return (
                        <StyledTimeItem
                            key={column + value}
                            ref={(el) => {
                                timeItemRefs.current[`${column}-${value}`] = el;
                            }}
                            className={cls({
                                [classes.timeItemActive]: isActive,
                                [classes.itemDisabled]: isDisabled,
                            })}
                            onClick={() => handleClick(value, column)}
                            onKeyDown={(e) => handleKeyDown(e, column, value)}
                            aria-disabled={isDisabled}
                            tabIndex={tabIndex}
                            data-value={value}
                            data-column={column}
                            data-active={isActive}
                        >
                            {value}
                        </StyledTimeItem>
                    );
                })}
                <StyledEmpty />
            </StyledTimeColumn>

            {!isMeridiemColumn && (
                <CustomScrollbar
                    ref={scrollbarRef}
                    className={cls({
                        [classes.scrollbarVisible]: scrollbarState?.isVisible,
                    })}
                    tabIndex={-1}
                >
                    <ScrollbarTrack>
                        <ScrollbarThumb
                            ref={thumbRef}
                            style={{
                                height: `${scrollbarState?.thumbHeight}px`,
                                top: `${scrollbarState?.thumbPosition}px`,
                            }}
                            onMouseDown={
                                columnRef && setScrollbar && timeoutRef
                                    ? createScrollbarDragHandler(columnRef, setScrollbar, timeoutRef)
                                    : undefined
                            }
                            tabIndex={-1}
                        />
                    </ScrollbarTrack>
                </CustomScrollbar>
            )}
        </StyledRoot>
    );
};
