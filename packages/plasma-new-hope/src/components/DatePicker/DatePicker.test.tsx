import React, { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { DatePicker, DatePickerRange } from 'src/examples/components/DatePicker/DatePicker';

const getInput = (name = 'Дата') => page.getByRole('textbox', { name });
const getFirstInput = () => page.getByRole('textbox').nth(0);
const getSecondInput = () => page.getByRole('textbox').nth(1);
const getNextMonthButton = () => page.getByRole('button', { name: 'Следующий месяц' }).first();
const queryCalendar = () => document.querySelector('[data-floating-ui-portal] [role="grid"]');
const queryPopover = () => document.querySelector<HTMLElement>('[data-floating-ui-portal] > div');

const getElement = <T extends Element = HTMLElement>(selector: string, index = 0) => {
    const element = document.querySelectorAll<T>(selector)[index];

    if (!element) {
        throw new Error(`Element not found: ${selector} [${index}]`);
    }

    return element;
};

const getDay = (day: number, monthIndex: number) =>
    page.elementLocator(getElement(`[data-floating-ui-portal] [data-day="${day}"][data-month-index="${monthIndex}"]`));

const getPeriodButton = () => page.elementLocator(getElement('#id-grid-label'));

const getHintTarget = () => page.elementLocator(getElement('.popover-target:has([data-testid="hint-icon"])'));

const clickInputWrapper = (index = 0) =>
    userEvent.click(getElement('.input-wrapper', index), { position: { x: 8, y: 8 } });

const clickOutside = () => userEvent.click(document.body, { position: { x: 900, y: 700 } });

const commitArgs = (value: string, originalDate?: Date) => [
    value,
    expect.objectContaining({
        error: false,
        success: true,
        originalDate,
        isoDate: originalDate ? originalDate.toISOString() : '',
    }),
];

const helperLink = (onClick: (event: React.MouseEvent) => void) => (
    <a href="#instructions" onClick={onClick}>
        Instructions
    </a>
);

const quarterNames = ['Первый квартал', 'Второй квартал', 'Третий квартал', 'Четвертый квартал'];

describe('DatePicker', () => {
    describe('onToggle', () => {
        it('is called with true on field click and with false on outside click', async () => {
            const onToggle = vi.fn();
            await render(<DatePicker label="Дата" onToggle={onToggle} />);

            await getInput().click();
            expect(onToggle).toHaveBeenCalledTimes(1);
            expect(onToggle).toHaveBeenLastCalledWith(true, expect.anything());
            await expect.poll(queryCalendar).not.toBeNull();

            await clickOutside();
            expect(onToggle).toHaveBeenCalledTimes(2);
            expect(onToggle).toHaveBeenLastCalledWith(false, expect.anything());
            await expect.poll(queryCalendar).toBeNull();
        });

        it('is called with false on Escape', async () => {
            const onToggle = vi.fn();
            await render(<DatePicker label="Дата" onToggle={onToggle} />);

            await getInput().click();
            await userEvent.keyboard('{Escape}');

            expect(onToggle).toHaveBeenLastCalledWith(false, expect.anything());
            await expect.poll(queryCalendar).toBeNull();
        });

        it('is called with false after a day is picked when closeAfterDateSelect is set', async () => {
            const onToggle = vi.fn();
            await render(
                <DatePicker
                    label="Дата"
                    defaultDate={new Date(2023, 5, 14)}
                    closeAfterDateSelect
                    onToggle={onToggle}
                />,
            );

            await getInput().click();
            await getDay(16, 5).click();

            expect(onToggle).toHaveBeenLastCalledWith(false, undefined);
            await expect.poll(queryCalendar).toBeNull();
        });

        it('keeps the calendar open after a day is picked without closeAfterDateSelect', async () => {
            const onToggle = vi.fn();
            await render(
                <DatePicker
                    label="Дата"
                    defaultDate={new Date(2023, 5, 14)}
                    closeAfterDateSelect={false}
                    onToggle={onToggle}
                />,
            );

            await getInput().click();
            await getDay(16, 5).click();

            expect(onToggle).toHaveBeenCalledTimes(1);
            expect(queryCalendar()).not.toBeNull();
        });

        it.each([
            ['disabled', { disabled: true }],
            ['readOnly', { readOnly: true }],
        ])('is not called when %s', async (_, props) => {
            const onToggle = vi.fn();
            await render(<DatePicker label="Дата" onToggle={onToggle} {...props} />);

            await getInput().click({ force: true });

            expect(onToggle).not.toHaveBeenCalled();
            expect(queryCalendar()).toBeNull();
        });
    });

    describe('click targets', () => {
        it.each([
            ['outer', 'hover'],
            ['outer', 'click'],
            ['inner', 'hover'],
            ['inner', 'click'],
        ] as const)('labelPlacement=%s, hintTrigger=%s', async (labelPlacement, hintTrigger) => {
            const onToggle = vi.fn();
            const onLinkClick = vi.fn((event: React.MouseEvent) => event.preventDefault());

            await render(
                <DatePicker
                    label="Дата"
                    labelPlacement={labelPlacement}
                    titleCaption="Title caption"
                    leftHelper={helperLink(onLinkClick)}
                    hintText="Date hint"
                    hintTrigger={hintTrigger}
                    hintTargetPlacement={labelPlacement}
                    hintTargetIcon={<span data-testid="hint-icon">?</span>}
                    onToggle={onToggle}
                />,
            );

            await page.getByText('Title caption').click();
            await page.getByRole('link', { name: 'Instructions' }).click();
            expect(onLinkClick).toHaveBeenCalledTimes(1);

            await getHintTarget().click();
            if (hintTrigger === 'hover') {
                await page.getByText('Title caption').hover();
                await getHintTarget().hover();
            }
            await expect.element(page.getByText('Date hint')).toBeVisible();
            await page.getByText('Date hint').click();

            expect(onToggle).not.toHaveBeenCalled();
            expect(queryCalendar()).toBeNull();

            await page.getByText('Дата', { exact: true }).click({ force: labelPlacement === 'inner' });
            await expect.element(getInput()).toHaveFocus();
            await expect.poll(queryCalendar).not.toBeNull();
            expect(onToggle).toHaveBeenCalledTimes(1);

            await userEvent.keyboard('{Escape}');
            onToggle.mockClear();
            await clickInputWrapper();

            await expect.poll(queryCalendar).not.toBeNull();
            await expect.element(getInput()).toHaveFocus();
            expect(onToggle).toHaveBeenCalledTimes(1);
        });
    });

    describe('onChangeValue', () => {
        it('passes the typed string, date and ISO when the date is complete', async () => {
            const onChangeValue = vi.fn();
            await render(<DatePicker label="Дата" onChangeValue={onChangeValue} />);

            await getInput().fill('14.06.2023');

            const date = new Date(2023, 5, 14);
            expect(onChangeValue).toHaveBeenLastCalledWith(
                expect.objectContaining({ type: 'change' }),
                '14.06.2023',
                date,
                date.toISOString(),
            );
        });

        it('passes the string without a date while the date is incomplete', async () => {
            const onChangeValue = vi.fn();
            await render(<DatePicker label="Дата" onChangeValue={onChangeValue} />);

            await getInput().fill('14.06');

            expect(onChangeValue).toHaveBeenLastCalledWith(expect.anything(), '14.06', undefined, '');
        });

        it('is called with a null event when a day is picked in the calendar', async () => {
            const onChangeValue = vi.fn();
            await render(<DatePicker label="Дата" defaultDate={new Date(2023, 5, 14)} onChangeValue={onChangeValue} />);

            await getInput().click();
            await getDay(16, 5).click();

            const date = new Date(2023, 5, 16);
            expect(onChangeValue).toHaveBeenLastCalledWith(null, '16.06.2023', date, date.toISOString());
            await expect.element(getInput()).toHaveValue('16.06.2023');
        });

        it('normalizes a shortcut date by max when includeEdgeDates is false', async () => {
            const onChangeValue = vi.fn();
            const max = new Date(2026, 7, 22);

            await render(
                <DatePicker
                    label="Дата"
                    defaultDate={new Date(2026, 7, 20)}
                    max={max}
                    includeEdgeDates={false}
                    dateShortcuts={[{ value: max, label: 'Верхняя граница' }]}
                    onChangeValue={onChangeValue}
                />,
            );

            await getInput().click();
            await page.getByText('Верхняя граница').click();

            await expect.element(getInput()).toHaveValue('21.08.2026');
            expect(onChangeValue).toHaveBeenLastCalledWith(
                null,
                '21.08.2026',
                new Date(2026, 7, 21),
                expect.any(String),
            );
        });
    });

    describe('onCommitDate', () => {
        it('is called when the date is complete', async () => {
            const onCommitDate = vi.fn();
            await render(<DatePicker label="Дата" onCommitDate={onCommitDate} />);

            await getInput().fill('14.06.2023');

            expect(onCommitDate).toHaveBeenLastCalledWith(...commitArgs('14.06.2023', new Date(2023, 5, 14)));
        });

        it('is not called while the date is incomplete', async () => {
            const onCommitDate = vi.fn();
            await render(<DatePicker label="Дата" onCommitDate={onCommitDate} />);

            await getInput().fill('14.06');

            expect(onCommitDate).not.toHaveBeenCalled();
        });

        it('is called on Enter', async () => {
            const onCommitDate = vi.fn();
            await render(<DatePicker label="Дата" defaultDate={new Date(2023, 5, 14)} onCommitDate={onCommitDate} />);

            await getInput().click();
            await userEvent.keyboard('{Enter}');

            expect(onCommitDate).toHaveBeenLastCalledWith(...commitArgs('14.06.2023', new Date(2023, 5, 14)));
        });

        it('is called with an empty value on Enter in a cleared field', async () => {
            const onCommitDate = vi.fn();
            await render(<DatePicker label="Дата" defaultDate={new Date(2023, 5, 14)} onCommitDate={onCommitDate} />);

            await getInput().clear();
            await userEvent.keyboard('{Enter}');

            expect(onCommitDate).toHaveBeenLastCalledWith(...commitArgs('', undefined));
        });

        it('is called when a day is picked in the calendar', async () => {
            const onCommitDate = vi.fn();
            await render(<DatePicker label="Дата" defaultDate={new Date(2023, 5, 14)} onCommitDate={onCommitDate} />);

            await getInput().click();
            await getDay(16, 5).click();

            expect(onCommitDate).toHaveBeenLastCalledWith(...commitArgs('16.06.2023', new Date(2023, 5, 16)));
        });

        it('passes the quarter name from quarterNames in dateInfo', async () => {
            const onCommitDate = vi.fn();

            await render(
                <DatePicker
                    label="Дата"
                    type="Quarters"
                    quarterNames={quarterNames}
                    renderFromDate={new Date(2023, 0, 1)}
                    onCommitDate={onCommitDate}
                />,
            );

            await getInput().click();
            await Promise.all(
                quarterNames.map((name) => expect.element(page.getByRole('gridcell', { name })).toBeVisible()),
            );

            await getInput().fill('14.06.2023');

            expect(onCommitDate).toHaveBeenLastCalledWith(
                '14.06.2023',
                expect.objectContaining({ dateInfo: expect.objectContaining({ name: 'Второй квартал' }) }),
            );
        });

        it('restores the last valid date on blur and reports it', async () => {
            const onCommitDate = vi.fn();
            const onChangeValue = vi.fn();

            await render(
                <DatePicker
                    label="Дата"
                    defaultDate={new Date(2023, 5, 14)}
                    onCommitDate={onCommitDate}
                    onChangeValue={onChangeValue}
                />,
            );

            await getInput().fill('14.06');
            await clickOutside();

            const date = new Date(2023, 5, 14);
            await expect.element(getInput()).toHaveValue('14.06.2023');
            expect(onChangeValue).toHaveBeenLastCalledWith(
                expect.objectContaining({ type: 'blur' }),
                '14.06.2023',
                date,
                date.toISOString(),
            );
            expect(onCommitDate).toHaveBeenLastCalledWith(...commitArgs('14.06.2023', date));
        });

        it('keeps the invalid value on blur when preserveInvalidOnBlur is set', async () => {
            const onCommitDate = vi.fn();

            await render(
                <DatePicker
                    label="Дата"
                    defaultDate={new Date(2023, 5, 14)}
                    preserveInvalidOnBlur
                    onCommitDate={onCommitDate}
                />,
            );

            await getInput().fill('14.06');
            await clickOutside();

            await expect.element(getInput()).toHaveValue('14.06');
            expect(onCommitDate).not.toHaveBeenCalled();
        });
    });

    describe('onChange (deprecated)', () => {
        it('passes the value, date, ISO and name on input', async () => {
            const onChange = vi.fn();
            await render(<DatePicker label="Дата" name="birthday" onChange={onChange} />);

            await getInput().fill('14.06.2023');

            const date = new Date(2023, 5, 14);
            expect(onChange).toHaveBeenLastCalledWith({
                target: { value: '14.06.2023', originalDate: date, isoDate: date.toISOString(), name: 'birthday' },
            });
        });

        it('is called when a day is picked in the calendar', async () => {
            const onChange = vi.fn();
            await render(
                <DatePicker label="Дата" name="birthday" defaultDate={new Date(2023, 5, 14)} onChange={onChange} />,
            );

            await getInput().click();
            await getDay(16, 5).click();

            expect(onChange).toHaveBeenLastCalledWith({
                target: expect.objectContaining({ value: '16.06.2023', name: 'birthday' }),
            });
        });
    });

    describe('onChangeVisibleDate', () => {
        it('passes the first day of the displayed month on navigation', async () => {
            const onChangeVisibleDate = vi.fn();
            await render(
                <DatePicker
                    label="Дата"
                    defaultDate={new Date(2023, 5, 14)}
                    onChangeVisibleDate={onChangeVisibleDate}
                />,
            );

            await getInput().click();
            await getNextMonthButton().click();

            expect(onChangeVisibleDate).toHaveBeenLastCalledWith(new Date(2023, 6));
        });
    });

    describe('onFocus, onBlur', () => {
        it('are passed to the input', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            await render(<DatePicker label="Дата" onFocus={onFocus} onBlur={onBlur} />);

            await getInput().click();
            expect(onFocus).toHaveBeenCalledTimes(1);
            expect(onBlur).not.toHaveBeenCalled();

            await userEvent.tab();
            expect(onBlur).toHaveBeenCalledTimes(1);
        });
    });

    describe('input mask', () => {
        it('inserts delimiters while typing when maskWithFormat is set', async () => {
            await render(<DatePicker label="Дата" format="MM/DD/YYYY" maskWithFormat />);

            await getInput().click();
            await userEvent.keyboard('06');
            await expect.element(getInput()).toHaveValue('06/');

            await userEvent.keyboard('14');
            await expect.element(getInput()).toHaveValue('06/14/');

            await userEvent.keyboard('{Backspace}');
            await expect.element(getInput()).toHaveValue('06/1');
        });
    });

    describe('calendar navigation', () => {
        it('selects a year in the years view', async () => {
            await render(<DatePicker label="Дата" defaultDate={new Date(2023, 5, 14)} />);

            await getInput().click();
            await getPeriodButton().click();
            await getPeriodButton().click();
            await page.getByLabelText('2024', { exact: true }).click();

            await expect.element(getPeriodButton()).toHaveTextContent('2024');
        });

        it('switches years by arrows in the months view', async () => {
            await render(<DatePicker label="Дата" defaultDate={new Date(2023, 5, 14)} />);

            await getInput().click();
            await getPeriodButton().click();
            await page.getByRole('button', { name: 'Предыдущий год' }).click();
            await page.getByRole('button', { name: 'Следующий год' }).click();

            await expect.element(getPeriodButton()).toHaveTextContent('2023');
        });
    });

    describe('controlled value', () => {
        const ControlledDemo = ({ resetValue }: { resetValue: '' | null }) => {
            const [date, setDate] = useState<string | Date | null | undefined>();

            return (
                <>
                    <button type="button" onClick={() => setDate(resetValue)}>
                        Reset
                    </button>
                    <DatePicker
                        label="Дата"
                        value={date}
                        min={new Date(2024, 1, 1)}
                        max={new Date(2024, 11, 29)}
                        format="MM/DD/YYYY"
                        maskWithFormat
                    />
                </>
            );
        };

        it.each(['', null] as const)('stays cleared after reset to %j and blur', async (resetValue) => {
            await render(<ControlledDemo resetValue={resetValue} />);

            await getInput().click();
            await userEvent.keyboard('06142024');
            await expect.element(getInput()).toHaveValue('06/14/2024');

            await page.getByRole('button', { name: 'Reset' }).click();
            await expect.element(getInput()).toHaveValue('');

            await getInput().click();
            await clickOutside();
            await expect.element(getInput()).toHaveValue('');
        });
    });
});

describe('DatePickerRange', () => {
    describe('onToggle', () => {
        it.each([false, true])(
            'is called with true on fields click and with false on outside click (isCalendarPositionedByInput=%s)',
            async (isCalendarPositionedByInput) => {
                const onToggle = vi.fn();
                await render(
                    <DatePickerRange isCalendarPositionedByInput={isCalendarPositionedByInput} onToggle={onToggle} />,
                );

                await getFirstInput().click();
                expect(onToggle).toHaveBeenLastCalledWith(true, expect.anything());
                await expect.poll(queryCalendar).not.toBeNull();

                await getSecondInput().click();
                expect(onToggle).toHaveBeenLastCalledWith(true, expect.anything());

                await clickOutside();
                expect(onToggle).toHaveBeenLastCalledWith(false, expect.anything());
                await expect.poll(queryCalendar).toBeNull();
            },
        );

        it('is called with false on Escape', async () => {
            const onToggle = vi.fn();
            await render(<DatePickerRange onToggle={onToggle} />);

            await getFirstInput().click();
            await userEvent.keyboard('{Escape}');

            expect(onToggle).toHaveBeenLastCalledWith(false, expect.anything());
        });
    });

    describe('click targets', () => {
        it.each([
            { isDoubleCalendar: false, isCalendarPositionedByInput: false },
            { isDoubleCalendar: false, isCalendarPositionedByInput: true },
            { isDoubleCalendar: true, isCalendarPositionedByInput: false },
        ])('%o', async (calendarProps) => {
            const onToggle = vi.fn();
            const onLinkClick = vi.fn((event: React.MouseEvent) => event.preventDefault());

            await render(
                <DatePickerRange
                    {...calendarProps}
                    label="Range label"
                    titleCaption="Range title caption"
                    leftHelper={helperLink(onLinkClick)}
                    dividerVariant="icon"
                    dividerIcon={<span data-testid="range-divider">–</span>}
                    hintText="Range hint"
                    hintTargetIcon={<span data-testid="hint-icon">?</span>}
                    contentRight={
                        <button type="button" aria-label="Open calendar">
                            +
                        </button>
                    }
                    onToggle={onToggle}
                />,
            );

            await page.getByText('Range title caption').click();
            await page.getByRole('link', { name: 'Instructions' }).click();
            expect(onLinkClick).toHaveBeenCalledTimes(1);
            await page.getByTestId('range-divider').click();
            await getHintTarget().click();
            await page.getByText('Range title caption').hover();
            await getHintTarget().hover();
            await expect.element(page.getByText('Range hint')).toBeVisible();
            await page.getByText('Range hint').click();

            expect(onToggle).not.toHaveBeenCalled();
            expect(queryCalendar()).toBeNull();

            await page.getByText('Range label', { exact: true }).click();
            await expect.element(getFirstInput()).toHaveFocus();
            await expect.poll(queryCalendar).not.toBeNull();
            expect(onToggle).toHaveBeenCalledTimes(1);

            onToggle.mockClear();
            await getSecondInput().click();
            await expect.element(getSecondInput()).toHaveFocus();
            expect(onToggle).toHaveBeenCalledTimes(1);
            expect(onToggle).toHaveBeenLastCalledWith(true, expect.anything());

            onToggle.mockClear();
            await page.getByLabelText('Open calendar').click();
            await expect.element(getFirstInput()).toHaveFocus();
            expect(onToggle).toHaveBeenCalledTimes(1);
            expect(onToggle).toHaveBeenLastCalledWith(true, expect.anything());

            await userEvent.keyboard('{Escape}');
            onToggle.mockClear();
            await clickInputWrapper(1);

            await expect.element(getSecondInput()).toHaveFocus();
            await expect.poll(queryCalendar).not.toBeNull();
            expect(onToggle).toHaveBeenCalledTimes(1);
        });
    });

    describe('onChangeFirstValue, onChangeSecondValue', () => {
        it('are called on input in the corresponding field', async () => {
            const onChangeFirstValue = vi.fn();
            const onChangeSecondValue = vi.fn();
            await render(
                <DatePickerRange onChangeFirstValue={onChangeFirstValue} onChangeSecondValue={onChangeSecondValue} />,
            );

            await getFirstInput().fill('14.06.2023');
            const first = new Date(2023, 5, 14);
            expect(onChangeFirstValue).toHaveBeenLastCalledWith(
                expect.objectContaining({ type: 'change' }),
                '14.06.2023',
                first,
                first.toISOString(),
            );
            expect(onChangeSecondValue).not.toHaveBeenCalled();

            await getSecondInput().fill('17.06.2023');
            const second = new Date(2023, 5, 17);
            expect(onChangeSecondValue).toHaveBeenLastCalledWith(
                expect.objectContaining({ type: 'change' }),
                '17.06.2023',
                second,
                second.toISOString(),
            );
        });

        it('are called when a range is picked in the calendar', async () => {
            const onChangeFirstValue = vi.fn();
            const onChangeSecondValue = vi.fn();
            await render(
                <DatePickerRange
                    renderFromDate={new Date(2023, 5, 1)}
                    onChangeFirstValue={onChangeFirstValue}
                    onChangeSecondValue={onChangeSecondValue}
                />,
            );

            await getFirstInput().click();
            await getDay(5, 5).click();
            await getDay(17, 5).click();

            expect(onChangeFirstValue).toHaveBeenLastCalledWith(
                null,
                '05.06.2023',
                new Date(2023, 5, 5),
                expect.any(String),
            );
            expect(onChangeSecondValue).toHaveBeenLastCalledWith(
                null,
                '17.06.2023',
                new Date(2023, 5, 17),
                expect.any(String),
            );
        });
    });

    describe('onCommitFirstDate, onCommitSecondDate', () => {
        it('are called when the date in the field is complete', async () => {
            const onCommitFirstDate = vi.fn();
            const onCommitSecondDate = vi.fn();
            await render(
                <DatePickerRange onCommitFirstDate={onCommitFirstDate} onCommitSecondDate={onCommitSecondDate} />,
            );

            await getFirstInput().fill('14.06.2023');
            expect(onCommitFirstDate).toHaveBeenLastCalledWith(...commitArgs('14.06.2023', new Date(2023, 5, 14)));
            expect(onCommitSecondDate).not.toHaveBeenCalled();

            await getSecondInput().fill('17.06.2023');
            expect(onCommitSecondDate).toHaveBeenLastCalledWith(...commitArgs('17.06.2023', new Date(2023, 5, 17)));
        });

        it('pass the quarter name from quarterNames in dateInfo', async () => {
            const onCommitFirstDate = vi.fn();

            await render(
                <DatePickerRange
                    type="Quarters"
                    quarterNames={quarterNames}
                    renderFromDate={new Date(2023, 0, 1)}
                    onCommitFirstDate={onCommitFirstDate}
                />,
            );

            await getFirstInput().click();
            await Promise.all(
                quarterNames.map((name) => expect.element(page.getByRole('gridcell', { name })).toBeVisible()),
            );

            await getFirstInput().fill('14.06.2023');

            expect(onCommitFirstDate).toHaveBeenLastCalledWith(
                '14.06.2023',
                expect.objectContaining({ dateInfo: expect.objectContaining({ name: 'Второй квартал' }) }),
            );
        });
    });

    describe('onChange (deprecated)', () => {
        it('is called with name on input', async () => {
            const onChange = vi.fn();
            await render(<DatePickerRange name="period" onChange={onChange} />);

            await getFirstInput().fill('14.06.2023');

            expect(onChange).toHaveBeenCalledWith({ target: expect.objectContaining({ name: 'period' }) });
        });
    });

    describe('onChangeVisibleDate', () => {
        it('passes the first day of the displayed month on navigation', async () => {
            const onChangeVisibleDate = vi.fn();
            await render(
                <DatePickerRange renderFromDate={new Date(2023, 5, 1)} onChangeVisibleDate={onChangeVisibleDate} />,
            );

            await getFirstInput().click();
            await getNextMonthButton().click();

            expect(onChangeVisibleDate).toHaveBeenLastCalledWith(new Date(2023, 6));
        });
    });

    describe('onFocus/onBlur of fields', () => {
        it('are called for each field separately', async () => {
            const onFocusFirstTextfield = vi.fn();
            const onFocusSecondTextfield = vi.fn();
            const onBlurFirstTextfield = vi.fn();
            const onBlurSecondTextfield = vi.fn();

            await render(
                <DatePickerRange
                    onFocusFirstTextfield={onFocusFirstTextfield}
                    onFocusSecondTextfield={onFocusSecondTextfield}
                    onBlurFirstTextfield={onBlurFirstTextfield}
                    onBlurSecondTextfield={onBlurSecondTextfield}
                />,
            );

            await getFirstInput().click();
            expect(onFocusFirstTextfield).toHaveBeenCalledTimes(1);

            await getSecondInput().click();
            expect(onBlurFirstTextfield).toHaveBeenCalledTimes(1);
            expect(onFocusSecondTextfield).toHaveBeenCalledTimes(1);

            await clickOutside();
            expect(onBlurSecondTextfield).toHaveBeenCalledTimes(1);
        });
    });

    describe('range selection', () => {
        it('changes only the second date', async () => {
            await render(<DatePickerRange renderFromDate={new Date(2023, 5, 1)} />);

            await getFirstInput().click();
            await userEvent.keyboard('14.06.2023{Enter}');
            await getDay(17, 5).click();
            await getSecondInput().click();
            await getDay(27, 5).click();

            await expect.element(getFirstInput()).toHaveValue('14.06.2023');
            await expect.element(getSecondInput()).toHaveValue('27.06.2023');
        });

        it('fills the second date first on an empty calendar and moves focus to the first field', async () => {
            await render(<DatePickerRange renderFromDate={new Date(2023, 5, 1)} />);

            await getSecondInput().click();
            await getDay(17, 5).click();

            await expect.element(getSecondInput()).toHaveValue('17.06.2023');
            await expect.element(getFirstInput()).toHaveValue('');
            await expect.element(getFirstInput()).toHaveFocus();
        });

        it('completes the range when the first date is picked after the second', async () => {
            await render(<DatePickerRange renderFromDate={new Date(2023, 5, 1)} />);

            await getSecondInput().click();
            await getDay(17, 5).click();
            await getFirstInput().click();
            await getDay(5, 5).click();

            await expect.element(getFirstInput()).toHaveValue('05.06.2023');
            await expect.element(getSecondInput()).toHaveValue('17.06.2023');
        });

        it('swaps dates when the picked second date is before the first one', async () => {
            await render(<DatePickerRange defaultFirstDate={new Date(2023, 5, 17)} />);

            await getSecondInput().click();
            await getDay(5, 5).click();

            await expect.element(getFirstInput()).toHaveValue('05.06.2023');
            await expect.element(getSecondInput()).toHaveValue('17.06.2023');
        });

        it('keeps the min day with a time component available when includeEdgeDates is set', async () => {
            await render(
                <DatePickerRange
                    renderFromDate={new Date(2023, 5, 1)}
                    min={new Date(2023, 5, 10, 15, 30, 0)}
                    includeEdgeDates
                />,
            );

            await getFirstInput().click();

            await expect.element(getDay(10, 5)).not.toHaveAttribute('aria-disabled', 'true');
            await expect.element(getDay(9, 5)).toHaveAttribute('aria-disabled', 'true');
        });
    });

    describe('popover position', () => {
        it('is placed at the input bottom when leftHelper is set', async () => {
            await render(
                <DatePickerRange
                    leftHelper="Подсказка к полю"
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                    placement="bottom"
                    disableFlip
                />,
            );

            await getFirstInput().click();
            await expect.poll(queryPopover).not.toBeNull();

            const inputBottom = getElement('.input-wrapper').getBoundingClientRect().bottom;
            await expect.poll(() => queryPopover()?.getBoundingClientRect().top).toBeCloseTo(inputBottom, 0);
        });

        it('follows the active input when isCalendarPositionedByInput is set', async () => {
            await render(
                <DatePickerRange
                    isCalendarPositionedByInput
                    contentRight={
                        <button type="button" aria-label="Open calendar">
                            +
                        </button>
                    }
                    calendarContainerWidth="20rem"
                    placement="bottom-start"
                    disableFlip
                />,
            );

            const firstLeft = getElement('.text-field-group-item', 0).getBoundingClientRect().left;
            const secondLeft = getElement('.text-field-group-item', 1).getBoundingClientRect().left;
            const popoverLeft = () => queryPopover()?.getBoundingClientRect().left;

            await getFirstInput().click();
            await expect.poll(popoverLeft).toBeCloseTo(firstLeft, 0);

            await getSecondInput().click();
            await expect.poll(popoverLeft).toBeCloseTo(secondLeft, 0);

            await page.getByLabelText('Open calendar').click();
            await expect.element(getFirstInput()).toHaveFocus();
            await expect.poll(popoverLeft).toBeCloseTo(firstLeft, 0);
        });
    });

    describe('controlled value', () => {
        const ControlledDemo = ({ resetValue }: { resetValue: '' | null }) => {
            const [date, setDate] = useState<[Date | string | null, Date | string | null] | undefined>();

            return (
                <>
                    <button type="button" onClick={() => setDate([resetValue, resetValue])}>
                        Reset
                    </button>
                    <DatePickerRange
                        value={date}
                        min={new Date(2024, 1, 1)}
                        max={new Date(2024, 11, 29)}
                        format="MM/DD/YYYY"
                        maskWithFormat
                    />
                </>
            );
        };

        it.each(['', null] as const)('stays cleared after reset to %j and blur', async (resetValue) => {
            await render(<ControlledDemo resetValue={resetValue} />);

            await getFirstInput().click();
            await userEvent.keyboard('06142024');
            await getSecondInput().click();
            await userEvent.keyboard('10252024');
            await expect.element(getFirstInput()).toHaveValue('06/14/2024');
            await expect.element(getSecondInput()).toHaveValue('10/25/2024');

            await page.getByRole('button', { name: 'Reset' }).click();
            await expect.element(getFirstInput()).toHaveValue('');
            await expect.element(getSecondInput()).toHaveValue('');

            await getFirstInput().click();
            await clickOutside();
            await expect.element(getFirstInput()).toHaveValue('');
            await expect.element(getSecondInput()).toHaveValue('');
        });
    });
});
