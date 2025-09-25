import React from 'react';
import cls from 'classnames';

import { classes } from '../../TimePicker.tokens';

import {
    StyledTimeColumn,
    StyledTimeItem,
    StyledEmpty,
    CustomScrollbar,
    ScrollbarTrack,
    ScrollbarThumb,
    StyledRoot,
} from './TimeColumn.styles';
import { TimeColumnProps } from './TimeColumn.types';

export const renderTimeColumn = ({
    values,
    dropdownHeight,
    column,
    columnRef,
    scrollbarState,
    setScrollbar,
    scrollbarRef,
    thumbRef,
    timeoutRef,
    timeItemRefs,
    activeTime,
    handleTimeItemClick,
    handleTimeItemKeyDown,
    createScrollbarDragHandler,
}: TimeColumnProps) => (
    <StyledRoot>
        <StyledTimeColumn key={column} ref={columnRef} height={dropdownHeight} className={classes.timeColumn}>
            {values.map((value, index) => (
                <StyledTimeItem
                    key={value}
                    ref={(el) => {
                        timeItemRefs.current[`${column}-${value}`] = el;
                    }}
                    className={cls({
                        [classes.timeItemActive]: activeTime[column] === index,
                    })}
                    onClick={() => handleTimeItemClick(value, column)}
                    onKeyDown={(e) => handleTimeItemKeyDown(e, column, value)}
                >
                    {value}
                </StyledTimeItem>
            ))}
            <StyledEmpty />
        </StyledTimeColumn>

        <CustomScrollbar
            ref={scrollbarRef}
            className={cls({
                [classes.scrollbarVisible]: scrollbarState.isVisible,
            })}
        >
            <ScrollbarTrack>
                <ScrollbarThumb
                    ref={thumbRef}
                    style={{
                        height: `${scrollbarState.thumbHeight}px`,
                        top: `${scrollbarState.thumbPosition}px`,
                    }}
                    onMouseDown={createScrollbarDragHandler(columnRef, setScrollbar, timeoutRef)}
                />
            </ScrollbarTrack>
        </CustomScrollbar>
    </StyledRoot>
);
