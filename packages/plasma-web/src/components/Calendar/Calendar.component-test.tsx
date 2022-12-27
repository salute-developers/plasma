/* eslint-disable newline-per-chained-call */
import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const date = new Date(1970, 1, 1);

const dateFormatter = new Intl.DateTimeFormat('ru', {
    month: 'long',
});

const getMonth = () => {
    const [first, ...currentMonth] = dateFormatter.format(date);

    return first.toUpperCase().concat(...currentMonth);
};

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

    // TODO: https://github.com/salute-developers/plasma/issues/173
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

    it('value as undefined', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={undefined} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').find('[aria-selected="true"]').should('not.be.exist');
    });

    it('prev month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').eq(1).click();

        cy.matchImageSnapshot();
    });

    it('next month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').eq(2).click();

        cy.matchImageSnapshot();
    });

    it('prev year', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').eq(0).click();
        cy.get('button').eq(1).click();

        cy.matchImageSnapshot();
    });

    it('next year', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').eq(0).click();
        cy.get('button').eq(2).click();

        cy.matchImageSnapshot();
    });

    it('prev range years', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').eq(0).click();
        cy.get('button').eq(0).click();

        cy.get('button').eq(1).click();

        cy.matchImageSnapshot();
    });

    it('next range years', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').eq(0).click();
        cy.get('button').eq(0).click();

        cy.get('button').eq(2).click();

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

    it('range with init values as undefined', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isRange value={[undefined, undefined]} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').find('[aria-selected="true"]').should('not.be.exist');
    });

    it('range in progress', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isRange value={[new Date(2021, 5, 6)]} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div:nth-of-type(5) > div:nth-of-type(5)').first().trigger('mouseover');

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

        cy.get('div:nth-of-type(3) > div:nth-of-type(4)').first().trigger('mouseover');
        cy.get('div:nth-of-type(5) > div:nth-of-type(5)').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});

describe('plasma-web: Calendar keyboard navigation', () => {
    const Calendar = getComponent('Calendar');

    // TODO: https://github.com/salute-developers/plasma/issues/173
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

        return <Calendar value={value} onChangeValue={handleOnChange} />;
    }

    beforeEach(() => {
        cy.viewport(700, 500);
    });

    it('set value with `Enter` and `Space`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{rightarrow}').type('{enter}').type('{rightarrow}').type(' ');

        cy.matchImageSnapshot();
    });

    it('navigate with `Down`, `Left`, `Up`, `Right` arrows', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body')
            .type('{downarrow}')
            .type('{leftarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{uparrow}');

        cy.matchImageSnapshot();
    });

    it('navigate with `Home` and `End`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{downarrow}').type('{downarrow}').type('{home}');
        cy.get('body').find('[data-day="9"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{end}');
        cy.get('body').find('[data-day="15"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{home}').type('{downarrow}').type('{downarrow}').type('{end}');
        cy.get('body').find('[data-day="28"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');
    });

    it('navigate with `PageUp` and `PageDown`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{pageup}');
        cy.get('body').find('[data-day="4"][data-month-index="0"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{downarrow}').type('{pagedown}');
        cy.get('body').find('[data-day="8"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');
    });

    it('navigate with Shift + `PageUp` and `PageDown`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{shift}{pageup}');
        cy.get('body')
            .find('[data-day="2"][data-month-index="1"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'data-year', date.getFullYear() - 1);

        cy.get('[id="id-grid-label"]').contains(`${getMonth()} ${date.getFullYear() - 1}`);

        cy.get('body').type('{shift}{pagedown}'.repeat(2));
        cy.get('body')
            .find('[data-day="7"][data-month-index="1"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'data-year', date.getFullYear() + 1);

        cy.get('[id="id-grid-label"]').contains(`${getMonth()} ${date.getFullYear() + 1}`);
    });

    it('navigate with arrow abroad bounds', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{leftarrow}');
        cy.get('body').find('[data-day="31"][data-month-index="0"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{uparrow}').type('{uparrow}').type('{uparrow}').type('{uparrow}').type('{uparrow}');
        cy.get('body').find('[data-day="27"][data-month-index="11"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="0"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{uparrow}');
        cy.get('body').find('[data-day="25"][data-month-index="11"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{downarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="0"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{leftarrow}').type('{downarrow}');
        cy.get('body').find('[data-day="7"][data-month-index="0"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="1"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{downarrow}').type('{downarrow}').type('{downarrow}').type('{downarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="2"]').last().should('have.attr', 'tabindex', '0');
    });

    it('processing aria-disabled as disabled attr', () => {
        const disabledDays = [...new Array(5)].map((_, day) => ({
            date: new Date(1970, 1, 11 + day),
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar disabledList={disabledDays} value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{downArrow}'.repeat(2));

        cy.get('body')
            .find('[data-day="15"][data-month-index="1"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'aria-disabled', 'true');
    });
});

describe('plasma-web: CalendarDouble', () => {
    const Calendar = getComponent('Calendar');
    const Button = getComponent('Button');

    // TODO: https://github.com/salute-developers/plasma/issues/173
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

        cy.get('div:nth-of-type(3) > div:nth-of-type(4) > div:nth-of-type(4)').first().trigger('mouseover');

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

        cy.get('div:nth-of-type(3) > div:nth-of-type(3) > div:nth-of-type(6)').first().trigger('mouseover');
        cy.get('div:nth-of-type(3) > div:nth-of-type(4) > div:nth-of-type(4)').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});

describe('plasma-web: CalendarDouble keyboard navigation', () => {
    const Calendar = getComponent('Calendar');

    // TODO: https://github.com/salute-developers/plasma/issues/173
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

        return <Calendar isDouble value={value} onChangeValue={handleOnChange} />;
    }

    beforeEach(() => {
        cy.viewport(700, 500);
    });

    it('set value with `Enter` and `Space`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{rightarrow}').type('{enter}').type('{rightarrow}').type(' ');

        cy.matchImageSnapshot();
    });

    it('navigate with `Down`, `Left`, `Up`, `Right` arrows', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body')
            .type('{downarrow}')
            .type('{leftarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{uparrow}');

        cy.matchImageSnapshot();
    });

    it('navigate with `Home` and `End`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{downarrow}').type('{downarrow}').type('{home}');
        cy.get('body').find('[data-day="9"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{end}');
        cy.get('body').find('[data-day="15"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{home}').type('{downarrow}').type('{downarrow}').type('{end}');
        cy.get('body').find('[data-day="28"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');
    });

    it('navigate with `PageUp` and `PageDown`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{pageup}');
        cy.get('body').find('[data-day="4"][data-month-index="0"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{downarrow}').type('{pagedown}');
        cy.get('body').find('[data-day="8"][data-month-index="1"]').first().should('have.attr', 'tabindex', '0');
    });

    it('navigate with arrow abroad bounds', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{leftarrow}');
        cy.get('body').find('[data-day="31"][data-month-index="0"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{uparrow}').type('{uparrow}').type('{uparrow}').type('{uparrow}').type('{uparrow}');
        cy.get('body').find('[data-day="27"][data-month-index="11"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="0"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{uparrow}');
        cy.get('body').find('[data-day="25"][data-month-index="11"]').first().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{downarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="0"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{leftarrow}').type('{downarrow}');
        cy.get('body').find('[data-day="7"][data-month-index="0"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{downarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}')
            .type('{rightarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="1"]').last().should('have.attr', 'tabindex', '0');

        cy.get('body').type('{downarrow}').type('{downarrow}').type('{downarrow}').type('{downarrow}');
        cy.get('body').find('[data-day="1"][data-month-index="2"]').last().should('have.attr', 'tabindex', '0');
    });

    it('processing aria-disabled as disabled attr', () => {
        const disabledDays = [...new Array(5)].map((_, day) => ({
            date: new Date(1970, 1, 11 + day),
        }));

        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar isDouble disabledList={disabledDays} value={date} onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').type('{downArrow}'.repeat(2));

        cy.get('body')
            .find('[data-day="15"][data-month-index="1"]')
            .first()
            .should('have.attr', 'tabindex', '0')
            .should('have.attr', 'aria-disabled', 'true');
    });
});
