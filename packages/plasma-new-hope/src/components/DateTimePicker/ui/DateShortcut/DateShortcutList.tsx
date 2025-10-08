import React, { CSSProperties } from 'react';
import cls from 'classnames';

import type { DateShortcutItem } from '../../DateTimePicker.types';
import { classes } from '../../DateTimePicker.tokens';
import { StyledSeparator } from '../Popover/Popover.styles';

import {
    ShortcutItem,
    ShortcutList,
    ShortcutsWrapper,
    ShortcutTitle,
    ShortcutTitleWrapper,
    StyledCell,
} from './DateShortcutList.styles';

type DateShortcutProps = {
    items: DateShortcutItem[];
    setShortcutDate: (externalDate: Date) => void;
    dateShortcutsWidth?: CSSProperties['width'];
    dateShortcutsPlacement?: 'left' | 'right';
    calendarContainerHeight?: number | string;
};

export const DateShortcutList = ({
    items,
    calendarContainerHeight,
    dateShortcutsPlacement,
    dateShortcutsWidth,
    setShortcutDate,
}: DateShortcutProps) => {
    return (
        <ShortcutsWrapper innerHeight={calendarContainerHeight} dateShortcutsPlacement={dateShortcutsPlacement}>
            <StyledSeparator />

            <ShortcutList width={dateShortcutsWidth}>
                {items.map((item) => (
                    <ShortcutItem
                        className={cls({ [classes.shortcutItemDisabled]: item.disabled })}
                        onClick={() => setShortcutDate(item.value)}
                    >
                        <StyledCell contentLeft={item.contentLeft} contentRight={item.contentRight} stretching="filled">
                            <ShortcutTitleWrapper>
                                <ShortcutTitle>{item.label}</ShortcutTitle>
                            </ShortcutTitleWrapper>
                        </StyledCell>
                    </ShortcutItem>
                ))}
            </ShortcutList>
        </ShortcutsWrapper>
    );
};
