/* eslint-disable cypress/no-unnecessary-waiting */
import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const noop = () => {};

describe('plasma-ui: TimePicker', () => {
    const TimePicker = getComponent('TimePicker');

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    value={new Date(1975, 1, 1, 0, 28, 59)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        const props = {
            value: new Date(1975, 1, 1, 1, 28, 58),
            min: new Date(1975, 1, 1, 0, 15, 29),
            max: new Date(1975, 1, 1, 12, 30, 30),
            infiniteScroll: false,
            visibleItems: 3,
        };

        mount(
            <CypressTestDecorator>
                <TimePicker size="xs" {...props} />
                <TimePicker size="s" {...props} />
                <TimePicker size="l" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('__step', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    scrollSnapType="none"
                    step={300}
                    onChange={noop}
                    value={new Date(1975, 1, 1, 15, 28, 0)}
                    min={new Date(1975, 1, 1, 0, 15, 0)}
                    max={new Date(1975, 1, 1, 22, 30, 0)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('without infiniteScroll', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    infiniteScroll={false}
                    value={new Date(1975, 1, 1, 0, 28, 59)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('change values by click', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    scrollSnapType="none"
                    step={2}
                    onChange={noop}
                    value={new Date(1975, 1, 1, 0, 28, 59)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                />
            </CypressTestDecorator>,
        );

        // отключение анимаций на всех div'ах внутри окружения, TODO: перенести в plasma-cy-utils?
        cy.get('div').invoke('attr', 'style', 'transition: unset; animation: none; scroll-snap-type: none;');

        cy.get('div > div:nth-child(1)').contains('03').click({ force: true });
        cy.wait(150);
        cy.get('div > div:nth-child(3)').contains('04').click({ force: true });
        cy.wait(150);
        cy.get('div > div:nth-child(5)').contains('06').click({ force: true });

        cy.wait(1000);

        cy.matchImageSnapshot();
    });

    it('should accept closest date', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    scrollSnapType="none"
                    step={9}
                    onChange={noop}
                    value={new Date(1975, 1, 1, 0, 28, 25)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                />
            </CypressTestDecorator>,
        );

        cy.wait(1000);

        cy.matchImageSnapshot();
    });

    it('label', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    value={new Date(1975, 1, 1, 0, 28, 25)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                    onChange={noop}
                    hasLabel
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('label with controls', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    value={new Date(1975, 1, 1, 0, 4, 6)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                    hasLabel
                    onChange={noop}
                    controls
                />
            </CypressTestDecorator>,
        );

        cy.get('[role="listbox"]:nth-of-type(1) div').contains('03').click({ force: true });
        cy.wait(150);

        cy.matchImageSnapshot();
    });
});

describe('plasma-ui: TimePicker update value', () => {
    const TimePicker = getComponent('TimePicker');
    const Button = getComponent('Button');

    function Demo({ data, type }: { data: Date; type: 'valueChange' | 'minChange' }) {
        const [state, setState] = React.useState(new Date(1975, 1, 1, 0, 28, 25));

        const min = type === 'minChange' ? state : new Date(1975, 1, 1, 0, 15, 29);
        const value = type === 'valueChange' ? state : new Date(1975, 1, 1, 0, 28, 25);
        const max = new Date(1975, 1, 1, 12, 30, 35);

        const onClick = React.useCallback(() => {
            setState(data);
        }, [data]);

        return (
            <>
                <TimePicker
                    style={{ transition: 'unset', animation: 'none', scrollSnapType: 'none' }}
                    scrollSnapType="none"
                    step={1}
                    onChange={noop}
                    value={value}
                    min={min}
                    max={max}
                />
                <Button onClick={onClick}>Изменить значение</Button>
            </>
        );
    }

    it('change values', () => {
        mount(
            <CypressTestDecorator>
                <Demo data={new Date(1975, 1, 1, 3, 30, 35)} type="valueChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('change values with max', () => {
        mount(
            <CypressTestDecorator>
                <Demo data={new Date(1975, 1, 1, 12, 30, 25)} type="valueChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('change values with min', () => {
        mount(
            <CypressTestDecorator>
                <Demo data={new Date(1975, 1, 1, 0, 15, 25)} type="valueChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('change min value', () => {
        mount(
            <CypressTestDecorator>
                <Demo data={new Date(1975, 1, 1, 0, 28, 50)} type="minChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('with controls', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    value={new Date(1975, 1, 1, 0, 28, 59)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1975, 1, 1, 12, 30, 30)}
                    controls
                    autofocus
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with single item', () => {
        mount(
            <CypressTestDecorator>
                <>
                    <TimePicker
                        value={new Date(1975, 1, 1, 0, 28, 59)}
                        min={new Date(1975, 1, 1, 0, 15, 29)}
                        max={new Date(1975, 1, 1, 0, 30, 30)}
                        controls
                    />
                    <TimePicker
                        value={new Date(1975, 1, 1, 0, 28, 59)}
                        min={new Date(1975, 1, 1, 0, 28, 59)}
                        max={new Date(1975, 1, 1, 0, 28, 59)}
                        visibleItems={3}
                        controls
                    />
                </>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
