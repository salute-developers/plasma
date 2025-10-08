import { styled } from '@linaria/react';
import { timePickerGridConfig, timePickerGridTokens } from 'src/components/TimePickerGrid';
import { component, mergeConfig } from 'src/engines';

import { tokens } from '../../DateTimePicker.tokens';

const mergedTimePickerGrid = mergeConfig(timePickerGridConfig);
const TimePickerGrid = component(mergedTimePickerGrid);

export const StyledTimeGrid = styled(TimePickerGrid)<{
    columns: number;
    innerWidth?: string | number;
    innerHeight?: string | number;
}>`
    flex-shrink: 2;

    /* NOTE: 
     * проверяем на наличие кастомной ширины; 
     * если есть -  устанавливаем ширину в 100%, 
     * если нет - устанавливаем значение токена 
     * (ширина одной колонки умноженная на количество, плюс отступы между колонок) 
     */
    ${timePickerGridTokens.timePickerGridWidth}: ${({ innerWidth, columns }) =>
    innerWidth && innerWidth !== '0'
        ? '100%'
        : `calc(var(${tokens.timePickerColumnWidth}) * ${columns} + var(${tokens.timePickerColumnGap}) * ${
              columns - 1
          })`};

    /* NOTE: 
     * проверяем на наличие кастомной высоты; 
     * если есть -  устанавливаем высоту равную высоте контейнера минус отступы контейнера, 
     * если нет - устанавливаем значение токена
     */
    ${timePickerGridTokens.columnHeight}: ${({ innerHeight }) =>
    innerHeight && innerHeight !== '0'
        ? `calc(${innerHeight} - var(${tokens.popoverVerticalPadding}))`
        : `var(${tokens.timePickerColumnHeight})`};

    ${timePickerGridTokens.itemHeight}: var(${tokens.timePickerItemHeight});
    ${timePickerGridTokens.itemBorderRadius}: var(${tokens.timePickerItemBorderRadius});
    ${timePickerGridTokens.itemPadding}: var(${tokens.timePickerItemPadding});
    ${timePickerGridTokens.itemBackgroundHover}: var(${tokens.timePickerItemBackgroundHover});
    ${timePickerGridTokens.itemBackgroundActive}: var(${tokens.timePickerItemBackgroundActive});

    ${timePickerGridTokens.itemFontFamily}: var(${tokens.timePickerItemFontFamily});
    ${timePickerGridTokens.itemFontSize}: var(${tokens.timePickerItemFontSize});
    ${timePickerGridTokens.itemFontStyle}: var(${tokens.timePickerItemFontStyle});
    ${timePickerGridTokens.itemFontWeight}: var(${tokens.timePickerItemFontWeight});
    ${timePickerGridTokens.itemLetterSpacing}: var(${tokens.timePickerItemLetterSpacing});
    ${timePickerGridTokens.itemLineHeight}: var(${tokens.timePickerItemLineHeight});

    ${timePickerGridTokens.scrollbarWidth}: var(${tokens.timePickerScrollbarWidth});
    ${timePickerGridTokens.scrollbarColor}: var(${tokens.timePickerScrollbarColor});
    ${timePickerGridTokens.scrollbarTrackColor}: var(${tokens.timePickerScrollbarTrackColor});
    ${timePickerGridTokens.scrollbarMargin}: var(${tokens.timePickerScrollbarMargin});

    ${timePickerGridTokens.disabledOpacity}: var(${tokens.disabledOpacity});
`;
