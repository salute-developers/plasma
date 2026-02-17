import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { IconCalendar, IconPlasma } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { TimePicker as TimePickerCS } from '.';

describe('sdds-cs: TimePicker', () => {
    const TimePicker = getComponent('TimePicker') as typeof TimePickerCS;

    const Demo = ({
        size = 's',
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
                contentLeft={enableContentLeft ? <IconCalendar size="s" /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size="s" /> : undefined}
                stretched={stretched}
                onToggle={(is, e) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                {...rest}
            />
        );
    };

    it('[PLASMA-T2299] TimePicker: size=s, enableContentLeft, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Demo enableContentLeft enableContentRight value="14:30:40" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2300] TimePicker: size=s, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" enableContentRight value="14:30:40" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2301] TimePicker: size=s, enableContentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" enableContentLeft value="14:30:40" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2303] TimePicker: dropdownAlign=left, columnsQuantity=3', () => {
        mount(
            <CypressTestDecorator>
                <Demo columnsQuantity={3} dropdownAlign="left" value="14:30:40" />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.viewport(500, 646);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2304] TimePicker: dropdownAlign=right, columnsQuantity=2, dropdownWidth=fixed', () => {
        mount(
            <CypressTestDecorator>
                <Demo columnsQuantity={2} dropdownAlign="right" value="14:30:40" />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.viewport(500, 646);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2305] TimePicker: dropdownWidth=fullWidth', () => {
        mount(
            <CypressTestDecorator>
                <Demo dropdownWidth="fullWidth" value="14:30" />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.viewport(500, 646);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-] TimePicker: dropdownWidth=35rem, dropdownHeight=10rem', () => {
        mount(
            <CypressTestDecorator>
                <Demo dropdownWidth="35rem" dropdownHeight="10rem" value="14:30" />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2306] TimePicker: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo value="14:30:40" readonly />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2307] TimePicker: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo value="14:30:40" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2308] TimePicker: input time', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('1430');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '14:30');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.viewport(500, 646);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2309] TimePicker: select time from popover', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.contains('14').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.viewport(500, 646);
        cy.matchImageSnapshot();
    });
});
