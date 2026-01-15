import React, { CSSProperties } from 'react';
import cls from 'classnames';

import type { DateShortcutItemBase } from '../../DateTimePicker.types';
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

type DateShortcutProps<T = Date> = {
    items: (DateShortcutItemBase & { value: T })[];
    setShortcutDate: (externalDate: T) => void;
    dateShortcutsWidth?: CSSProperties['width'];
    dateShortcutsPlacement?: 'left' | 'right';
    calendarContainerHeight?: number | string;
    className?: string;
    style?: CSSProperties;
};

export const DateShortcutList = <T extends Date | [Date?, Date?]>({
    items,
    calendarContainerHeight,
    dateShortcutsPlacement,
    dateShortcutsWidth,
    setShortcutDate,
    ...rest
}: DateShortcutProps<T>) => {
    return (
        <ShortcutsWrapper
            innerHeight={calendarContainerHeight}
            dateShortcutsPlacement={dateShortcutsPlacement}
            {...rest}
        >
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
