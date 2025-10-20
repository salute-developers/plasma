import React, { useState } from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconSber } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { TimePicker as TimePickerB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>
        <StandardTypoStyle />
        {children}
    </CypressTestDecorator>
);

describe('plasma-b2c: TimePicker', () => {
    const TimePicker = getComponent('TimePicker') as typeof TimePickerB2C;

    const Demo = ({
        size = 'm',
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

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo value="14:30" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="l"
                    label="Label"
                    labelPlacement="inner"
                    placeholder="HH:MM"
                    enableContentLeft
                    enableContentRight
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" label="Label" labelPlacement="outer" placeholder="HH:MM" enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" label="Label" placeholder="HH:MM" enableContentLeft valueError />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" placeholder="HH:MM" valueSuccess />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo disabled value="14:30" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with seconds', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo columnsQuantity={3} value="14:30:45" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('input time', () => {
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

    it('select time from popover', () => {
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
