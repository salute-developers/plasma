/* eslint-disable cypress/no-unnecessary-waiting */
import React from 'react';
import { mountLegacyMode, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const noop = () => {};

// TODO: Кажется нужно переписать тесты. Они опираются на `cy.wait(ms)` и это хрупкий механизм
// TODO: После стабилизации тестов будет использоваться метод mount
describe('plasma-ui: DatePicker', () => {
    const DatePicker = getComponent('DatePicker');
    const AutofocusedDatePicker = () => (
        <DatePicker
            scrollSnapType="none"
            onChange={noop}
            infiniteScroll={false}
            value={new Date(2022, 0, 12)}
            min={new Date(2000, 3, 15)}
            max={new Date(2025, 10, 30)}
            autofocus
        />
    );

    it('default', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <DatePicker value={new Date(1985, 8, 1)} min={new Date(1975, 1, 1)} max={new Date(1985, 10, 30)} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('without infiniteScroll', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <DatePicker
                    infiniteScroll={false}
                    value={new Date(1980, 8, 1)}
                    min={new Date(1975, 1, 1)}
                    max={new Date(1985, 10, 30)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('change values', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <DatePicker
                    scrollSnapType="none"
                    onChange={noop}
                    value={new Date(1985, 8, 1)}
                    min={new Date(1975, 1, 1)}
                    max={new Date(1995, 10, 30)}
                />
            </CypressTestDecorator>,
        );

        // отключение анимаций на всех div'ах внутри окружения, TODO: перенести в plasma-cy-utils?
        cy.get('div').invoke('attr', 'style', 'transition: unset; animation: none; scroll-snap-type: none;');

        cy.get('div > div:nth-child(1)').contains('5').click({ force: true });
        cy.wait(150);
        cy.get('div > div:nth-child(2)').contains('мая').click({ force: true });
        cy.wait(150);
        cy.get('div > div:nth-child(3)').contains('1979').click({ force: true });

        cy.wait(1000);

        cy.matchImageSnapshot();
    });

    it('with controls', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <DatePicker
                    value={new Date(1980, 8, 1)}
                    min={new Date(1975, 1, 1)}
                    max={new Date(1985, 10, 30)}
                    controls
                    autofocus
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('jump 10 down', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <AutofocusedDatePicker />
            </CypressTestDecorator>,
        );

        cy.get('body').type('{pagedown}');
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('jump 10 up', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <AutofocusedDatePicker />
            </CypressTestDecorator>,
        );

        cy.get('body').type('{pageup}');
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('jump home', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <AutofocusedDatePicker />
            </CypressTestDecorator>,
        );

        cy.get('body').type('{home}');
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('jump end', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <AutofocusedDatePicker />
            </CypressTestDecorator>,
        );

        cy.get('body').type('{end}');
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('with single item', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <>
                    <DatePicker
                        value={new Date(1980, 8, 1, 0, 28, 59)}
                        min={new Date(1980, 1, 1, 0, 15, 29)}
                        max={new Date(1980, 10, 30, 0, 30, 30)}
                        controls
                    />
                    <DatePicker
                        value={new Date(1980, 8, 1, 0, 28, 59)}
                        min={new Date(1980, 8, 1, 0, 28, 59)}
                        max={new Date(1980, 8, 1, 0, 28, 59)}
                        visibleItems={3}
                        controls
                    />
                </>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

describe('plasma-ui: DatePicker update value', () => {
    const DatePicker = getComponent('DatePicker');
    const Button = getComponent('Button');

    function Demo({ data, type }: { data: Date; type: 'valueChange' | 'minChange' }) {
        const [state, setState] = React.useState(new Date(1980, 8, 1, 0, 0, 0));

        const min = type === 'minChange' ? state : new Date(1975, 1, 1, 0, 0, 0);
        const value = type === 'valueChange' ? state : new Date(1980, 8, 1, 0, 0, 0);
        const max = new Date(1985, 10, 30, 0, 0, 0);

        const onClick = React.useCallback(() => {
            setState(data);
        }, [data]);

        return (
            <>
                <DatePicker scrollSnapType="none" onChange={noop} value={value} min={min} max={max} />
                <Button onClick={onClick}>Изменить значение</Button>
            </>
        );
    }

    it('change values', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <Demo data={new Date(1984, 3, 10, 3, 0, 0)} type="valueChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('change values with max', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <Demo data={new Date(1999, 3, 10, 0, 0, 0)} type="valueChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('change values with min', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <Demo data={new Date(1970, 3, 10, 0, 0, 0)} type="valueChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('change min value', () => {
        mountLegacyMode(
            <CypressTestDecorator>
                <Demo data={new Date(1980, 8, 5, 0, 0, 0)} type="minChange" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });
});
