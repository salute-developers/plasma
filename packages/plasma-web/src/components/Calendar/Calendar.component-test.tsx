import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const date = new Date(1970, 1, 1);

const events = [
    {
        date: new Date(2021, 5, 6),
    },
    {
        date: new Date(2021, 5, 10),
        color: 'red',
    },
    {
        date: new Date(2021, 5, 10),
        color: 'green',
    },
    {
        date: new Date(2021, 5, 10),
        color: 'blue',
    },
];

describe('plasma-web: Calendar', () => {
    const Calendar = getComponent('Calendar');
    const Button = getComponent('Button');

    // TODO: Перетащить подключение StandardTypoStyle в @salutejs/plasma-cy-utils
    // после переезда на новую типографику для @salutejs/plasma-web - https://github.com/salute-developers/plasma/issues/69
    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo() {
        const [value, setValue] = React.useState(date);
        const handleOnChange = React.useCallback((newValue: Date) => {
            setValue(newValue);
        }, []);

        return (
            <>
                <Button onClick={() => setValue(new Date(2005, 5, 5))}>Set date</Button>
                <Calendar value={value} onChangeValue={handleOnChange} />
            </>
        );
    }

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
                <PadMe />
                <Calendar value={date} type="Months" onChangeValue={() => {}} />
                <PadMe />
                <Calendar value={date} type="Years" onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('set value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('prev month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('next month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });

    it('prev year', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('next year', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });

    it('prev range years', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('div > div > div > div').first().click();

        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('next range years', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('div > div > div > div').first().click();

        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });

    it('event list', () => {
        const eventsRange = [...new Array(10)].map((_, day) => ({
            date: new Date(2021, 5, 15 + day),
            color: 'purple',
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar
                    value={new Date(2021, 5, 6)}
                    eventList={[...events, ...eventsRange]}
                    onChangeValue={() => {}}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled days', () => {
        const disabledDays = [...new Array(5)].map((_, day) => ({
            date: new Date(2021, 5, 11 + day),
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={new Date(2021, 5, 6)} disabledList={disabledDays} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('min and max', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar
                    value={new Date(2021, 5, 6)}
                    min={new Date(2021, 5, 4)}
                    max={new Date(2021, 5, 15)}
                    onChangeValue={() => {}}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('range', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isRange value={[new Date(2021, 5, 6), new Date(2021, 5, 15)]} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('range in progress', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isRange value={[new Date(2021, 5, 6)]} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div:nth-child(5) > div:nth-child(5)').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('range in progress with disabled', () => {
        const disabledDays = [...new Array(5)].map((_, day) => ({
            date: new Date(2021, 5, 11 + day),
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isRange disabledList={disabledDays} value={[new Date(2021, 5, 6)]} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div:nth-child(3) > div:nth-child(4)').first().trigger('mouseover');
        cy.get('div:nth-child(5) > div:nth-child(5)').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});

describe('plasma-web: CalendarDouble', () => {
    const Calendar = getComponent('Calendar');
    const Button = getComponent('Button');

    // TODO: Перетащить подключение StandardTypoStyle в @salutejs/plasma-cy-utils
    // после переезда на новую типографику для @salutejs/plasma-web
    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo() {
        const [value, setValue] = React.useState(date);
        const handleOnChange = React.useCallback((newValue: Date) => {
            setValue(newValue);
        }, []);

        return (
            <>
                <Button onClick={() => setValue(new Date(2005, 5, 5))}>Set date</Button>
                <Calendar isDouble value={value} onChangeValue={handleOnChange} />
            </>
        );
    }

    beforeEach(() => {
        cy.viewport(700, 500);
    });

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('set value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('prev month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('next month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });

    it('event list', () => {
        const eventsRange = [...new Array(20)].map((_, day) => ({
            date: new Date(2021, 5, 25 + day),
            color: 'purple',
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar
                    isDouble
                    value={new Date(2021, 5, 6)}
                    eventList={[...events, ...eventsRange]}
                    onChangeValue={() => {}}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled days', () => {
        const disabledDays = [...new Array(5)].map((_, day) => ({
            date: new Date(2021, 5, 11 + day),
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={new Date(2021, 5, 6)} disabledList={disabledDays} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('min and max', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar
                    isDouble
                    value={new Date(2021, 5, 6)}
                    min={new Date(2021, 5, 4)}
                    max={new Date(2021, 5, 15)}
                    onChangeValue={() => {}}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('range', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar
                    isRange
                    isDouble
                    value={[new Date(2021, 5, 6), new Date(2021, 6, 15)]}
                    onChangeValue={() => {}}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('range in progress', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble isRange value={[new Date(2021, 5, 6)]} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div:nth-child(3) > div:nth-child(4) > div:nth-child(4)').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('range in progress with disabled', () => {
        const disabledDays = [...new Array(5)].map((_, day) => ({
            date: new Date(2021, 6, 11 + day),
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar
                    isDouble
                    isRange
                    disabledList={disabledDays}
                    value={[new Date(2021, 5, 6)]}
                    onChangeValue={() => {}}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div:nth-child(3) > div:nth-child(3) > div:nth-child(6)').first().trigger('mouseover');
        cy.get('div:nth-child(3) > div:nth-child(4) > div:nth-child(4)').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});
