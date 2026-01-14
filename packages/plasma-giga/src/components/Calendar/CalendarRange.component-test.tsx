/* eslint-disable newline-per-chained-call */
import React, { useCallback, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { CalendarDoubleRange as CalendarDoubleRangeB2C, CalendarBaseRange as CalendarBaseRangeB2C } from './Calendar';

const StandardTypoStyle = createGlobalStyle(standardTypo);

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

describe('plasma-giga: CalendarRange', () => {
    const CalendarBaseRange = getComponent('CalendarBaseRange') as typeof CalendarBaseRangeB2C;
    const CalendarDoubleRange = getComponent('CalendarDoubleRange') as typeof CalendarDoubleRangeB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo = (args) => {
        const { min, max, displayDouble, baseValue, size = 's', type = 'Days', locale = 'ru' } = args;
        const [values, setValue] = useState<[Date, Date?]>(baseValue);

        const handleOnChange = useCallback((newValue: [Date, Date?]) => {
            setValue(newValue);
        }, []);

        const getCalendarComponent = (rest) => {
            return displayDouble ? (
                <CalendarDoubleRange
                    {...rest}
                    size={size}
                    value={values}
                    min={min}
                    max={max}
                    type={type}
                    locale={locale}
                    onChangeValue={handleOnChange}
                />
            ) : (
                <CalendarBaseRange
                    {...rest}
                    size={size}
                    value={values}
                    min={min}
                    max={max}
                    type={type}
                    locale={locale}
                    onChangeValue={handleOnChange}
                />
            );
        };

        const calendarMap = {
            Days: getCalendarComponent({ type: 'Days', eventList: events, disabledList: disabledDays }),
            Months: getCalendarComponent({ type: 'Months' }),
            Quarters: getCalendarComponent({ type: 'Quarters' }),
            Years: getCalendarComponent({ type: 'Years' }),
        };

        return <CypressTestDecoratorWithTypo>{calendarMap[type]}</CypressTestDecoratorWithTypo>;
    };

    it('default', () => {
        mount(
            <>
                <Demo baseValue={[new Date(1999, 6, 7), new Date(1999, 6, 19)]} type="Days" />
                <PadMe />
                <Demo baseValue={[new Date(1999, 4, 1), new Date(1999, 6, 1)]} type="Months" />
                <PadMe />
                <Demo baseValue={[new Date(1999, 0, 1), new Date(1999, 6, 1)]} type="Quarters" />
                <PadMe />
                <Demo baseValue={[new Date(1999, 0, 1), new Date(2001, 0, 1)]} type="Years" />
            </>,
        );

        cy.viewport(500, 1134);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('default: double calendar', () => {
        mount(
            <>
                <Demo displayDouble baseValue={[new Date(1999, 6, 7), new Date(1999, 6, 19)]} type="Days" />
                <PadMe />
                <Demo displayDouble baseValue={[new Date(1999, 4, 1), new Date(1999, 6, 1)]} type="Months" />
                <PadMe />
                <Demo displayDouble baseValue={[new Date(1999, 0, 1), new Date(1999, 6, 1)]} type="Quarters" />
                <PadMe />
                <Demo displayDouble baseValue={[new Date(1999, 0, 1), new Date(2001, 0, 1)]} type="Years" />
            </>,
        );

        cy.viewport(1200, 1134);

        cy.matchImageSnapshot();
    });

    it('range with init values as undefined', () => {
        mount(<Demo baseValue={[undefined, undefined]} />);

        cy.get('body').find('[aria-selected="true"]').should('not.be.exist');
    });

    it('range in progress', () => {
        mount(<Demo baseValue={[new Date(1999, 5, 6)]} />);

        cy.get('[data-day="25"]').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('range in progress with disabled', () => {
        mount(<Demo baseValue={[new Date(1999, 6, 16)]} />);

        cy.get('[data-month-index="6"][data-day="22"]').first().trigger('mouseover');
        cy.get('[data-month-index="6"][data-day="28"]').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('locale: en', () => {
        mount(
            <>
                <Demo baseValue={[new Date(1999, 6, 7), new Date(1999, 6, 19)]} locale="en" type="Days" />
                <PadMe />
                <Demo baseValue={[new Date(1999, 4, 1), new Date(1999, 6, 1)]} locale="en" type="Months" />
            </>,
        );

        cy.viewport(500, 570);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });
});
