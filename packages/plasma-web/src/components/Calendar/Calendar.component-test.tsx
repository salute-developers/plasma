/* eslint-disable newline-per-chained-call */
import React, { useCallback, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { CalendarDouble as CalendarDoubleB2C, CalendarBase as CalendarBaseB2C } from './Calendar';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const baseDate = new Date(1999, 6, 7);
const minBaseDate = new Date(1970, 1, 1);

const events = [
    {
        date: new Date('1999-07-09'),
        color: 'red',
    },
    {
        date: new Date('1999-07-09'),
        color: 'red',
    },
    {
        date: new Date('1999-07-10'),
        color: 'red',
    },
    {
        date: new Date('1999-07-11'),
        color: 'red',
    },
    {
        date: new Date('1999-07-12'),
        color: 'red',
    },
    {
        date: new Date('1999-07-12'),
        color: 'red',
    },
];
const disabledDays = [...new Array(5)].map((_, day) => ({
    date: new Date(1999, 6, 23 + day),
}));
const monthEvents = [
    {
        date: new Date('1999-06-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-06-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-06-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-07-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-07-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-08-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-08-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-08-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-09-01'),
        color: 'purple',
    },
    {
        date: new Date('1999-09-01'),
        color: 'purple',
    },
];
const quarterEvents = [
    {
        date: new Date('1999-06-01'),
        color: 'green',
    },
    {
        date: new Date('1999-06-01'),
        color: 'green',
    },
    {
        date: new Date('1999-06-01'),
        color: 'green',
    },
    {
        date: new Date('1999-07-01'),
        color: 'green',
    },
    {
        date: new Date('1999-07-01'),
        color: 'green',
    },
    {
        date: new Date('1999-07-01'),
        color: 'green',
    },
];
const yearEvents = [
    {
        date: new Date('1999-01-01'),
        color: 'blue',
    },
    {
        date: new Date('1999-01-01'),
        color: 'blue',
    },
    {
        date: new Date('1999-01-01'),
        color: 'blue',
    },
];

const dateFormatter = new Intl.DateTimeFormat('ru', {
    month: 'long',
});

const getMonth = (date) => {
    const [first, ...currentMonth] = dateFormatter.format(date);

    return first.toUpperCase().concat(...currentMonth);
};

const checkFocusedDay = (day: string) => cy.focused().should('have.attr', 'data-day', day);
const checkFocusedMonth = (monthIndex: string) => cy.focused().should('have.attr', 'data-month-index', monthIndex);

describe('plasma-web: Calendar', () => {
    const CalendarBase = getComponent('CalendarBase') as typeof CalendarBaseB2C;
    const CalendarDouble = getComponent('CalendarDouble') as typeof CalendarDoubleB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo = (args) => {
        const { min, max, includeEdgeDates, displayDouble, baseValue, size = 's', type = 'Days' } = args;
        const [value, setValue] = useState(baseValue);

        const handleOnChange = useCallback((newValue: Date) => {
            setValue(newValue);
        }, []);

        const getCalendarComponent = (rest) => {
            return displayDouble ? (
                <CalendarDouble
                    {...rest}
                    size={size}
                    value={value}
                    min={min}
                    max={max}
                    includeEdgeDates={includeEdgeDates}
                    type={type}
                    onChangeValue={handleOnChange}
                />
            ) : (
                <CalendarBase
                    {...rest}
                    size={size}
                    value={value}
                    min={min}
                    max={max}
                    includeEdgeDates={includeEdgeDates}
                    type={type}
                    onChangeValue={handleOnChange}
                />
            );
        };

        const calendarMap = {
            Days: getCalendarComponent({ type: 'Days', eventList: events, disabledList: disabledDays }),
            Months: getCalendarComponent({ type: 'Months', eventMonthList: monthEvents }),
            Quarters: getCalendarComponent({ type: 'Quarters', eventQuarterList: quarterEvents }),
            Years: getCalendarComponent({ type: 'Years', eventYearList: yearEvents }),
        };

        return <CypressTestDecoratorWithTypo>{calendarMap[type]}</CypressTestDecoratorWithTypo>;
    };

    it('default', () => {
        mount(
            <>
                <Demo baseValue={baseDate} type="Days" />
                <PadMe />
                <Demo baseValue={baseDate} type="Months" />
                <PadMe />
                <Demo baseValue={baseDate} type="Quarters" />
                <PadMe />
                <Demo baseValue={baseDate} type="Years" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('default: double calendar', () => {
        mount(
            <>
                <Demo baseValue={baseDate} type="Days" displayDouble />
                <PadMe />
                <Demo baseValue={baseDate} type="Months" displayDouble />
                <PadMe />
                <Demo baseValue={baseDate} type="Quarters" displayDouble />
                <PadMe />
                <Demo baseValue={baseDate} type="Years" displayDouble />
            </>,
        );

        cy.viewport(1200, 500);

        cy.matchImageSnapshot();
    });

    it('size', () => {
        mount(
            <>
                <Demo baseValue={baseDate} size="l" />
                <PadMe />
                <Demo baseValue={baseDate} size="m" />
                <PadMe />
                <Demo baseValue={baseDate} size="s" />
                <PadMe />
                <Demo baseValue={baseDate} size="xs" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('value as undefined', () => {
        mount(<Demo />);

        cy.get('body').find('[aria-selected="true"]').should('not.be.exist');
    });

    it('days: prev month', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('button').eq(1).click();

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('days: next month', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('button').eq(2).click();

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('months: prev year', () => {
        mount(<Demo baseValue={baseDate} type="Months" />);

        cy.get('button').eq(1).click();

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('months: next year', () => {
        mount(<Demo baseValue={baseDate} type="Months" />);

        cy.get('button').eq(2).click();

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('quartes: prev year', () => {
        mount(<Demo baseValue={baseDate} type="Quarters" />);

        cy.get('button').eq(1).click();

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('quartes: next year', () => {
        mount(<Demo baseValue={baseDate} type="Quarters" />);

        cy.get('button').eq(2).click();

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('min and max', () => {
        mount(
            <>
                <Demo baseValue={baseDate} min={new Date(1999, 6, 3)} max={new Date(1999, 6, 15)} />
                <PadMe />
                <Demo baseValue={baseDate} type="Months" min={new Date(1999, 4, 1)} max={new Date(1999, 10, 1)} />
                <PadMe />
                <Demo baseValue={baseDate} type="Quarters" min={new Date(1999, 3, 1)} max={new Date(1999, 9, 1)} />
                <PadMe />
                <Demo baseValue={baseDate} type="Years" min={new Date(1993, 0, 1)} max={new Date(2002, 0, 1)} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('min and max: double', () => {
        mount(
            <>
                <Demo baseValue={baseDate} min={new Date(1999, 6, 3)} max={new Date(1999, 6, 15)} displayDouble />
                <PadMe />
                <Demo
                    baseValue={baseDate}
                    type="Months"
                    min={new Date(1999, 4, 1)}
                    max={new Date(1999, 10, 1)}
                    displayDouble
                />
                <PadMe />
                <Demo
                    baseValue={baseDate}
                    type="Quarters"
                    min={new Date(1999, 3, 1)}
                    max={new Date(1999, 9, 1)}
                    displayDouble
                />
                <PadMe />
                <Demo
                    baseValue={baseDate}
                    type="Years"
                    min={new Date(1993, 0, 1)}
                    max={new Date(2002, 0, 1)}
                    displayDouble
                />
            </>,
        );

        cy.matchImageSnapshot();
    });
});

describe('plasma-web: Calendar keyboard navigation', () => {
    const CalendarBase = getComponent('CalendarBase') as typeof CalendarBaseB2C;
    const CalendarDouble = getComponent('CalendarDouble') as typeof CalendarDoubleB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo = (args) => {
        const { min, max, baseValue, displayDouble, disabledList, size = 's', type = 'Days' } = args;
        const [value, setValue] = useState(baseValue);

        const disabledDates = disabledList?.length ? disabledList : disabledDays;

        const handleOnChange = useCallback((newValue: Date) => {
            setValue(newValue);
        }, []);

        const getCalendarComponent = (rest) => {
            return displayDouble ? (
                <CalendarDouble
                    {...rest}
                    size={size}
                    value={value}
                    min={min}
                    max={max}
                    type={type}
                    onChangeValue={handleOnChange}
                />
            ) : (
                <CalendarBase
                    {...rest}
                    size={size}
                    value={value}
                    min={min}
                    max={max}
                    type={type}
                    onChangeValue={handleOnChange}
                />
            );
        };

        const calendarMap = {
            Days: getCalendarComponent({ type: 'Days', eventList: events, disabledList: disabledDates }),
            Months: getCalendarComponent({ type: 'Months', eventMonthList: monthEvents }),
            Quarters: getCalendarComponent({ type: 'Quarters', eventQuarterList: quarterEvents }),
            Years: getCalendarComponent({ type: 'Years', eventYearList: yearEvents }),
        };

        return <CypressTestDecoratorWithTypo>{calendarMap[type]}</CypressTestDecoratorWithTypo>;
    };

    beforeEach(() => {
        cy.viewport(700, 500);
    });

    it('set value with `Enter` and `Space`', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('body').type('{rightarrow}{enter}{rightarrow} ');

        cy.matchImageSnapshot();
    });

    it('navigate with `Down`, `Left`, `Up`, `Right` arrows', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('body')
            .type('{downarrow}')
            .type('{leftarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{uparrow}');

        cy.matchImageSnapshot();
    });

    it('navigate with `Home` and `End`', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('body').type('{downarrow}').type('{end}');
        checkFocusedDay('18');
        checkFocusedMonth('6');

        cy.get('body').type('{home}');
        checkFocusedDay('12');
        checkFocusedMonth('6');

        cy.get('body').type('{end}').type('{uparrow}').type('{uparrow}').type('{home}');
        checkFocusedDay('1');
        checkFocusedMonth('6');
    });

    it('navigate with `PageUp` and `PageDown`', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('body').type('{pageup}');
        checkFocusedDay('9');
        checkFocusedMonth('5');

        cy.get('body').type('{downarrow}').type('{pagedown}');
        checkFocusedDay('14');
        checkFocusedMonth('6');
    });

    it('navigate with Shift + `PageUp` and `PageDown`', () => {
        mount(<Demo baseValue={minBaseDate} />);

        cy.get('body').type('{shift}{pageup}');
        cy.get('body')
            .find('[data-day="2"][data-month-index="1"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'data-year', minBaseDate.getFullYear() - 1);

        cy.get('[id="id-grid-label"] span')
            .first()
            .contains(`${getMonth(minBaseDate)}`);
        cy.get('[id="id-grid-label"] span')
            .last()
            .contains(`${minBaseDate.getFullYear() - 1}`);

        cy.get('body').type('{shift}{pagedown}'.repeat(2));
        cy.get('body')
            .find('[data-day="7"][data-month-index="1"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'data-year', minBaseDate.getFullYear() + 1);

        cy.get('[id="id-grid-label"] span')
            .first()
            .contains(`${getMonth(minBaseDate)}`);
        cy.get('[id="id-grid-label"] span')
            .last()
            .contains(`${minBaseDate.getFullYear() + 1}`);
    });

    it('navigate with arrow abroad bounds', () => {
        mount(<Demo baseValue={minBaseDate} />);

        cy.get('body').type('{leftarrow}');
        checkFocusedDay('31');
        checkFocusedMonth('0');

        cy.get('body').type('{uparrow}').type('{uparrow}').type('{uparrow}').type('{uparrow}').type('{uparrow}');
        checkFocusedDay('27');
        checkFocusedMonth('11');

        cy.get('body')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('0');

        cy.get('body').type('{uparrow}');
        checkFocusedDay('25');
        checkFocusedMonth('11');

        cy.get('body').type('{downarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('0');

        cy.get('body').type('{leftarrow}').type('{downarrow}');
        checkFocusedDay('7');
        checkFocusedMonth('0');

        cy.get('body')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('1');

        cy.get('body').type('{downarrow}').type('{downarrow}').type('{downarrow}').type('{downarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('2');
    });

    it('double: navigate with arrow abroad bounds', () => {
        mount(<Demo baseValue={minBaseDate} displayDouble />);

        cy.get('body').type('{leftarrow}');
        checkFocusedDay('31');
        checkFocusedMonth('0');

        cy.get('body')
            .type('{uparrow}')
            .type('{uparrow}')
            .type('{uparrow}')
            .type('{uparrow}')
            .type('{uparrow}')
            .type('{uparrow}');
        checkFocusedDay('27');
        checkFocusedMonth('11');

        cy.get('body')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('0');

        cy.get('body').type('{uparrow}');
        checkFocusedDay('25');
        checkFocusedMonth('11');

        cy.get('body').type('{downarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('0');

        cy.get('body').type('{leftarrow}').type('{downarrow}');
        checkFocusedDay('7');
        checkFocusedMonth('0');

        cy.get('body')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('1');

        cy.get('body').type('{downarrow}').type('{downarrow}').type('{downarrow}').type('{downarrow}');
        checkFocusedDay('1');
        checkFocusedMonth('2');
    });

    it('processing aria-disabled as disabled attr', () => {
        mount(<Demo baseValue={baseDate} />);

        cy.get('body').type('{downArrow}'.repeat(2)).type('{end}');

        cy.get('body')
            .find('[data-day="25"][data-month-index="6"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'aria-disabled', 'true');
    });

    describe('navigate with pressed Shift and skipped disabled date', () => {
        const shiftLeftArrow = '{shift}{leftArrow}';
        const shiftRightArrow = '{shift}{rightArrow}';
        const shiftDownArrow = '{shift}{downArrow}';
        const shiftUpArrow = '{shift}{upArrow}';

        it('Arrow Left or Right in current month', () => {
            const disabledDays = [
                {
                    date: new Date(1970, 1, 4),
                },
                {
                    date: new Date(1970, 1, 5),
                },
            ];

            mount(<Demo disabledList={disabledDays} baseValue={minBaseDate} />);

            const start = '[data-day="3"][data-month-index="1"]';

            cy.get('body').find(start).type(shiftRightArrow);
            checkFocusedDay('6');
            checkFocusedMonth('1');

            cy.focused().type(shiftLeftArrow);
            checkFocusedDay('3');
            checkFocusedMonth('1');
        });

        it('Arrow Up or Down in current month', () => {
            const disabledDays = [
                {
                    date: new Date(1970, 1, 11),
                },
                {
                    date: new Date(1970, 1, 12),
                },
            ];

            mount(<Demo disabledList={disabledDays} baseValue={minBaseDate} />);

            const start = '[data-day="4"][data-month-index="1"]';

            cy.get('body').find(start).type(shiftDownArrow);
            checkFocusedDay('13');
            checkFocusedMonth('1');

            cy.get('body').find('[data-day="19"][data-month-index="1"]').type(shiftUpArrow);
            checkFocusedDay('10');
            checkFocusedMonth('1');
        });

        it('Arrow Left or Right between months', () => {
            const disabledDays = [
                {
                    date: new Date(1970, 1, 28),
                },
                {
                    date: new Date(1970, 2, 1),
                },
            ];

            mount(<Demo disabledList={disabledDays} baseValue={minBaseDate} />);

            const start = '[data-day="27"][data-month-index="1"]';

            cy.get('body').find(start).type(shiftRightArrow);
            checkFocusedDay('2');
            checkFocusedMonth('2');

            cy.focused().type(shiftLeftArrow);
            checkFocusedDay('27');
            checkFocusedMonth('1');
        });

        it('Arrow Left or Right when entire one month disabled', () => {
            const may = [
                {
                    date: new Date(1970, 4, 1),
                },
            ];

            const april = [
                ...[...new Array(30)].map((_, day) => ({
                    date: new Date(1970, 3, 1 + day),
                })),
            ];

            mount(<Demo disabledList={[...may, ...april]} baseValue={new Date(1970, 2, 1)} />);

            cy.get('body').find('[data-day="31"][data-month-index="2"]').type(shiftRightArrow);
            checkFocusedDay('2');
            checkFocusedMonth('4');

            cy.focused().type(shiftLeftArrow);

            checkFocusedDay('31');
            checkFocusedMonth('2');
        });

        it('Arrow Left or Right when entire few months disabled', () => {
            const march = [...new Array(31)].map((_, day) => ({
                date: new Date(1970, 2, 1 + day),
                color: '',
            }));

            const april = [...new Array(31)].map((_, day) => ({
                date: new Date(1970, 3, 1 + day),
                color: '',
            }));

            const may = [
                {
                    date: new Date(1970, 4, 1),
                    color: '',
                },
            ];

            mount(<Demo baseValue={minBaseDate} disabledList={[...march, ...april, ...may]} />);

            const start = '[data-day="28"][data-month-index="1"]';

            cy.get('body').find(start).type(shiftRightArrow);
            checkFocusedDay('2');
            checkFocusedMonth('4');

            cy.focused().type(shiftLeftArrow);

            checkFocusedDay('28');
            checkFocusedMonth('1');
        });

        it("Can't jump to dates outside of min max dates", () => {
            mount(<Demo baseValue={new Date(1970, 1, 28)} min={new Date(1970, 0, 31)} max={new Date(1970, 2, 1)} />);

            cy.get('body').find('[data-day="1"][data-month-index="1"]').type('leftArrow');
            checkFocusedDay('1');

            cy.get('body').find('[data-day="1"][data-month-index="1"]').type(shiftLeftArrow);
            checkFocusedDay('1');

            cy.get('body').find('[data-day="28"][data-month-index="1"]').type('rightArrow');
            checkFocusedDay('28');

            cy.get('body').find('[data-day="28"][data-month-index="1"]').type(shiftRightArrow);
            checkFocusedDay('28');

            cy.get('body').find('[data-day="5"][data-month-index="1"]').type('upArrow');
            checkFocusedDay('5');

            cy.get('body').find('[data-day="5"][data-month-index="1"]').type(shiftUpArrow);
            checkFocusedDay('5');

            cy.get('body').find('[data-day="25"][data-month-index="1"]').type('downArrow');
            checkFocusedDay('25');

            cy.get('body').find('[data-day="25"][data-month-index="1"]').type(shiftDownArrow);
            checkFocusedDay('25');
        });

        it("Can't jump to dates outside of min max dates in current month", () => {
            mount(<Demo baseValue={new Date(1970, 1, 14)} min={new Date(1970, 1, 10)} max={new Date(1970, 1, 15)} />);

            cy.get('body').find('[data-day="14"][data-month-index="1"]').type('rightArrow');
            checkFocusedDay('14');

            cy.get('body').find('[data-day="14"][data-month-index="1"]').type(shiftRightArrow);
            checkFocusedDay('14');

            cy.get('body').find('[data-day="11"][data-month-index="1"]').type('leftArrow');
            checkFocusedDay('11');

            cy.get('body').find('[data-day="11"][data-month-index="1"]').type(shiftLeftArrow);
            checkFocusedDay('11');

            cy.get('body').find('[data-day="12"][data-month-index="1"]').type('upArrow');
            checkFocusedDay('12');

            cy.get('body').find('[data-day="12"][data-month-index="1"]').type(shiftUpArrow);
            checkFocusedDay('12');

            cy.get('body').find('[data-day="12"][data-month-index="1"]').type('downArrow');
            checkFocusedDay('12');

            cy.get('body').find('[data-day="12"][data-month-index="1"]').type(shiftDownArrow);
            checkFocusedDay('12');
        });

        it("Can't jump from the disabled day to the day of month that is outside min", () => {
            const disabledList = [...new Array(8)].map((_, day) => ({
                date: new Date(1970, 4, 1 + day),
            }));

            mount(<Demo baseValue={new Date(1970, 4, 1)} min={new Date(1970, 3, 31)} disabledList={disabledList} />);

            cy.get('body').find('[data-day="9"][data-month-index="4"]').first().type(shiftLeftArrow);
            checkFocusedDay('9');

            cy.focused().type(shiftUpArrow);
            checkFocusedDay('9');
        });

        it("Can't jump through disabled entire month in month that is outside min", () => {
            const disabledList = [...new Array(28)].map((_, day) => ({
                date: new Date(1970, 1, 1 + day),
            }));

            mount(<Demo baseValue={new Date(1970, 2, 1)} min={new Date(1970, 0, 31)} disabledList={disabledList} />);

            cy.get('body').find('[data-day="1"][data-month-index="2"]').type(shiftLeftArrow);
            checkFocusedDay('1');
            cy.focused().type(shiftUpArrow);
            checkFocusedDay('1');
        });

        it("Can't jump from the disabled day to the day of month that is outside max", () => {
            const disabledList = [...new Array(8)].map((_, day) => ({
                date: new Date(1970, 4, 24 + day),
            }));

            mount(<Demo baseValue={new Date(1970, 4, 1)} max={new Date(1970, 5, 1)} disabledList={disabledList} />);

            cy.get('body').find('[data-day="23"][data-month-index="4"]').type(shiftRightArrow);
            checkFocusedDay('23');
            cy.focused().type(shiftDownArrow);
            checkFocusedDay('23');
        });

        it("Can't jump through disabled entire month in month that is outside max", () => {
            const disabledList = [...new Array(30)].map((_, day) => ({
                date: new Date(1970, 5, 1 + day),
            }));

            mount(<Demo baseValue={new Date(1970, 4, 1)} max={new Date(1970, 6, 1)} disabledList={disabledList} />);

            cy.get('body').find('[data-day="31"][data-month-index="4"]').type(shiftRightArrow);
            checkFocusedDay('31');
            cy.focused().type(shiftDownArrow);
            checkFocusedDay('31');
        });
    });

    describe('double: navigate with pressed Shift', () => {
        const shiftDownArrow = '{shift}{downArrow}';
        const shiftUpArrow = '{shift}{upArrow}';

        it('arrow up with min', () => {
            const june = [...new Array(6)].map((_, day) => ({
                date: new Date(2022, 5, 1 + day),
            }));

            mount(
                <Demo displayDouble disabledList={june} baseValue={new Date(2022, 5, 1)} min={new Date(2022, 4, 31)} />,
            );

            const start = '[data-day="10"][data-month-index="5"]';

            cy.get('body').find(start).type(shiftUpArrow);

            checkFocusedDay('10');
            checkFocusedMonth('5');
        });

        it('arrow down with max', () => {
            const june = [...new Array(6)].map((_, day) => ({
                date: new Date(2022, 5, 24 + day),
            }));

            mount(
                <Demo displayDouble disabledList={june} baseValue={new Date(2022, 5, 1)} max={new Date(2022, 6, 1)} />,
            );

            const start = '[data-day="17"][data-month-index="5"]';

            cy.get('body').find(start).type(shiftDownArrow);

            checkFocusedDay('17');
            checkFocusedMonth('5');
        });
    });
});
