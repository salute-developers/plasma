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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, columnType: TimeColumnType, value: string) => {
        handleTimeItemKeyDown(e, columnType, value);
    };

    const handleClick = (value: string, columnType: TimeColumnType) => {
        const isDisabled = disabledValues?.some(
            (disabledValue) => parseInt(disabledValue.toString(), 10) === parseInt(value, 10),
        );

        if (!isDisabled) {
            handleTimeItemClick(value, columnType);
        }
    };

    const minDisableIndex = () => {
        if (!disabledValues || disabledValues.length === 0) {
            return 0;
        }

        const disabledNumbers = disabledValues.map((val) => parseInt(val.toString(), 10));

        for (let i = 0; i < values.length; i++) {
            const currentValue = parseInt(values[i], 10);
            if (!disabledNumbers.includes(currentValue)) {
                return i;
            }
        }

        return 0;
    };

    const isColumnActive = activeTime.currentColumn === column;
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
                    const isDisabled = disabledValues?.some((disabledValue) => disabledValue === index);
                    const isActive = activeTime[column] === parseInt(value, 10);

                    const getTabIndex = () => {
                        if (isDisabled) return -1;

                        const isValueActive = activeTime[column] === parseInt(value, 10);

                        if (isColumnActive && isValueActive) {
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
        </StyledRoot>
    );
};
