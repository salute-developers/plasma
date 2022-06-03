import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Calendar', () => {
    const Calendar = getComponent('Calendar');
    const Button = getComponent('Button');

    const date = new Date(1970, 1, 1);

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
                <Calendar value={value} type="Days" onChangeValue={handleOnChange} />
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

    it('inline', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} isInline type="Days" onChangeValue={() => {}} />
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
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('next month', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });

    it('prev year', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('next year', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });

    it('prev range years', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
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
                <Calendar value={date} type="Days" onChangeValue={() => {}} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > div > div > div').first().click();
        cy.get('div > div > div > div').first().click();

        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });
});
