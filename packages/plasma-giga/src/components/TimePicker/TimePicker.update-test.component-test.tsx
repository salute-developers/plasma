import React, { useState } from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconSber } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import cypress from 'cypress';

import { TimePicker as TimePickerB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>
        <StandardTypoStyle />
        {children}
    </CypressTestDecorator>
);

describe('plasma-giga: TimePicker', () => {
    const TimePicker = getComponent('TimePicker') as typeof TimePickerB2C;

    const Demo = ({
        size = 'l',
        dropdownAlign = 'left',
        dropdownWidth = undefined,
        stretched = false,
        disabled = false,
        valueError = false,
        valueSuccess = false,
        columnsQuantity = 2,
        enableContentLeft = false,
        enableContentRight = false,
        onToggle,
        ...rest
    }: ComponentProps<typeof TimePicker> & {
        enableContentLeft?: boolean;
        enableContentRight?: boolean;
    }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <TimePicker
                opened={isOpen}
                size={size}
                dropdownAlign={dropdownAlign}
                dropdownWidth={dropdownWidth}
                disabled={disabled}
                valueError={valueError}
                valueSuccess={valueSuccess}
                columnsQuantity={columnsQuantity}
                contentLeft={enableContentLeft ? <IconSber size="s" /> : undefined}
                contentRight={enableContentRight ? <IconSber size="s" /> : undefined}
                stretched={stretched}
                onToggle={(is, e) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                {...rest}
            />
        );
    };

    it('[PLASMA-T2299] TimePicker: size=l, enableContentLeft, enableContentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo enableContentLeft enableContentRight value="14:30:40" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2300] TimePicker: size=m, enableContentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" enableContentRight value="14:30:40" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2301] TimePicker: size=s, enableContentLeft', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" enableContentLeft value="14:30:40" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2302] TimePicker: size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" value="14:30:40" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2303] TimePicker: dropdownAlign=left, columnsQuantity=3', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo columnsQuantity={3} dropdownAlign="left" value="14:30:40" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2304] TimePicker: dropdownAlign=right, columnsQuantity=2, dropdownWidth=fixed', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo columnsQuantity={2} dropdownAlign="right" value="14:30:40" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2305] TimePicker: dropdownWidth=fullWidth', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo dropdownWidth="fullWidth" value="14:30" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2306] TimePicker: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo value="14:30:40" readOnly />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2307] TimePicker: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo value="14:30:40" disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2308] TimePicker: input time', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('1430');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '14:30');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2309] TimePicker: select time from popover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.contains('14').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });
});
