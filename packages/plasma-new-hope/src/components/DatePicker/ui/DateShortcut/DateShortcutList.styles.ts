import { styled } from '@linaria/react';
import { DateShortcutList } from 'src/components/DateTimePicker/ui';
import { dateTimePickerTokens } from 'src/components/DateTimePicker';

import { tokens } from '../../DatePicker.tokens';

export const StyledShortcutList = styled(DateShortcutList)`
    ${dateTimePickerTokens.popoverGap}: var(${tokens.popoverGap});
    ${dateTimePickerTokens.popoverSeparatorBackground}: var(${tokens.popoverSeparatorBackground});
    ${dateTimePickerTokens.popoverVerticalPadding}: var(${tokens.popoverVerticalPadding});
    ${dateTimePickerTokens.calendarHeight}: var(${tokens.calendarHeight});

    ${dateTimePickerTokens.shortcutPadding}: var(${tokens.shortcutPadding});
    ${dateTimePickerTokens.shortcutBorderRadius}: var(${tokens.shortcutBorderRadius});
    ${dateTimePickerTokens.shortcutBackgroundHover}: var(${tokens.shortcutBackgroundHover});

    ${dateTimePickerTokens.disabledOpacity}: var(${tokens.disabledOpacity});
    ${dateTimePickerTokens.outlineFocusColor}: var(${tokens.outlineFocusColor});

    ${dateTimePickerTokens.shortcutBorderRadius}: var(${tokens.shortcutBorderRadius});
    ${dateTimePickerTokens.shortcutColor}: var(${tokens.shortcutColor});
    ${dateTimePickerTokens.shortcutPadding}: var(${tokens.shortcutPadding});
    ${dateTimePickerTokens.shortcutPaddingContent}: var(${tokens.shortcutPaddingContent});
    ${dateTimePickerTokens.shortcutPaddingLeftContent}: var(${tokens.shortcutPaddingLeftContent});
    ${dateTimePickerTokens.shortcutPaddingRightContent}: var(${tokens.shortcutPaddingRightContent});
    ${dateTimePickerTokens.shortcutGap}: var(${tokens.shortcutGap});
    ${dateTimePickerTokens.shortcutFontFamily}: var(${tokens.shortcutFontFamily});
    ${dateTimePickerTokens.shortcutFontSize}: var(${tokens.shortcutFontSize});
    ${dateTimePickerTokens.shortcutFontStyle}: var(${tokens.shortcutFontStyle});
    ${dateTimePickerTokens.shortcutFontWeight}: var(${tokens.shortcutFontWeight});
    ${dateTimePickerTokens.shortcutLetterSpacing}: var(${tokens.shortcutLetterSpacing});
    ${dateTimePickerTokens.shortcutLineHeight}: var(${tokens.shortcutLineHeight});
`;
