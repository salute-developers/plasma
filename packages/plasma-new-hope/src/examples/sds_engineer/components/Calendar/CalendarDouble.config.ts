import { css } from '@linaria/core';

import { tokens } from '../../../../components/Calendar/shared/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.calendarBackgroundColor}: transparent;
                ${tokens.calendarSelectedItemBackground}: var(--plasma-colors-primary);
                ${tokens.calendarSelectedItemColor}: var(--plasma-colors-background-primary);
                ${tokens.calendarSelectableItemBackgroundHover}: var(--plasma-colors-surface-liquid02);
                ${tokens.calendarCurrentItemBorderColor}: var(--plasma-colors-primary);
                ${tokens.calendarCurrentItemBackgroundHover}: transparent;
                ${tokens.calendarCurrentItemColorHover}: var(--plasma-colors-primary);
                ${tokens.calendarCurrentItemChildBackgroundHover}: var(--plasma-colors-surface-liquid02);
                ${tokens.calendarActiveItemBackground}: var(--plasma-colors-primary);
                ${tokens.calendarActiveItemColor}: var(--plasma-colors-surface-solid03);
                ${tokens.calendarHoveredItemBackground}: var(--plasma-colors-accent);
                ${tokens.calendarHoveredItemColor}: var(--plasma-colors-background-primary);
                ${tokens.calendarSeparatorBackground}: var(--plasma-colors-surface-liquid02);
                ${tokens.calendarRangeBackground}: var(--plasma-colors-surface-liquid02);
                ${tokens.calendarOutlineFocusColor}: var(--plasma-colors-button-focused);
                ${tokens.calendarContentPrimaryColor}: var(--plasma-colors-primary);
                ${tokens.calendarContentSecondaryColor}: var(--plasma-colors-secondary);
            `,
        },
        size: {
            m: css`
                ${tokens.calendarItemBorderRadius}: 0.5rem;
            `,
        },
    },
};
