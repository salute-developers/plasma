import styled from 'styled-components';

import { StyledCalendarContent } from '../../../components/DatePicker/DatePickerBase.styles';
import { ShortcutsWrapper } from '../../../components/DateTimePicker/ui/DateShortcut/DateShortcutList.styles';
import { StyledSeparator } from '../../../components/DateTimePicker/ui/Popover/Popover.styles';
import { paginationClasses } from '../../../components/Pagination';
import { classes as tableClasses, tableTokens } from '../../../components/Table/Table.tokens';
import { Card } from '../../components/Card/Card';

export const Panel = styled(Card).attrs({
    backgroundType: 'solid',
    orientation: 'vertical',
    size: 'l',
    role: 'region',
})`
    width: 100%;
    min-width: 0;
    margin-top: 24px;
    z-index: auto;

    && {
        padding: 24px;

        @media (max-width: 600px) {
            padding: 16px;
        }
    }

    > button {
        align-self: flex-start;
    }
`;

export const StatCard = styled(Card).attrs({
    backgroundType: 'solid',
    orientation: 'vertical',
    size: 'm',
})`
    min-width: 0;

    && {
        padding: 20px;
    }

    && p {
        margin: 12px 0 0;
    }
`;

export const Page = styled.main`
    --metrics-border: var(--outline-solid-primary, #dce1e8);
    --metrics-muted: var(--text-secondary, #667085);
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    padding: 32px 24px;
    color: var(--text-primary);

    .header,
    .source-row,
    .presets,
    .pager,
    .loading {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
    }
    .header {
        justify-content: space-between;
        align-items: start;
    }
    .header h1 {
        margin: 8px 0;
    }
    h2 {
        margin: 0 0 8px;
    }
    p {
        margin: 8px 0;
    }
    .muted {
        color: var(--metrics-muted);
    }
    .source-row > .field {
        flex: 1;
        min-width: 280px;
        max-width: 390px;
    }
    .source-meta {
        flex: 1;
        min-width: 220px;
    }
    .period-row {
        max-width: 420px;
        margin-bottom: 24px;
    }
    @media (max-width: 420px) {
        .period-row ${StyledCalendarContent} {
            flex-direction: column;
        }
        .period-row ${ShortcutsWrapper} {
            height: auto;
            width: 100%;

            ${StyledSeparator} {
                display: none;
            }
            ul {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
    }
    .filter-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px 16px;
    }
    .field {
        min-width: 0;
    }
    .presets {
        margin-top: 16px;
        gap: 8px;
    }
    .notice {
        margin-top: 16px;
        padding: 16px;
        border-radius: 12px;
        background: var(--surface-transparent-secondary);
    }
    .error {
        color: var(--text-negative);
    }
    .loading {
        margin-top: 16px;
    }
    .stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
        margin-top: 24px;
    }
    fieldset {
        margin: 24px 0 0;
        padding: 0;
        border: 0;
    }
    legend {
        padding: 0;
        margin-bottom: 16px;
    }
    .packages {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
    }
    .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border-radius: 50%;
    }
    .chart {
        width: 100%;
        height: auto;
        min-width: 640px;
        display: block;
    }
    .chart text {
        fill: var(--metrics-muted);
        font: 12px system-ui, sans-serif;
    }
    .chart .grid {
        stroke: var(--metrics-border);
        stroke-width: 1;
    }
    .chart circle:hover {
        r: 6;
        stroke: var(--surface-solid-primary);
        stroke-width: 2;
    }
    .scroll {
        overflow-x: auto;
    }
    .empty {
        padding: 64px 24px;
        text-align: center;
        color: var(--metrics-muted);
    }
    .metrics-table {
        ${tableTokens.borderColor}: var(--metrics-border);
        width: 100%;
        max-width: 100%;

        .${tableClasses.scrollableContainer} {
            max-width: 100%;
        }
    }
    .pager {
        width: 100%;
        justify-content: end;
        margin-top: 16px;

        > .${paginationClasses.wrapper} {
            max-width: 100%;
        }
    }
    @media (max-width: 420px) {
        .pager .${paginationClasses.paginationPageButton}:not(.${paginationClasses.paginationPageButtonActive}),
        .pager .${paginationClasses.buttonDisabled} {
            display: none;
        }
    }
    footer {
        margin: 24px 0;
    }
    @media (max-width: 1000px) {
        .filter-grid,
        .packages {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (max-width: 600px) {
        padding: 16px 0;
        .source-row > .field {
            min-width: 0;
            flex-basis: 100%;
        }
        .filter-grid {
            grid-template-columns: minmax(0, 1fr);
        }
        .stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .packages {
            grid-template-columns: minmax(0, 1fr);
        }
    }
`;
