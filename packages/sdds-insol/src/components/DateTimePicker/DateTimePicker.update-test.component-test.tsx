import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { IconSb } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Button as ButtonINSOL } from '../Button';

import { DateTimePicker as DateTimePickerINSOL } from '.';

type DateTimePickerProps = ComponentProps<typeof DateTimePickerINSOL> & {
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
};

describe('sdds-insol: DateTimePicker', () => {
    const DateTimePicker = getComponent('DateTimePicker') as typeof DateTimePickerINSOL;
    const Button = getComponent('Button') as typeof ButtonINSOL;

    const Demo = ({
        enableContentLeft,
        enableContentRight,
        valueError,
        valueSuccess,
        size = 'xs',
        stretched = false,
        onToggle,
        ...rest
    }: DateTimePickerProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = size === 'xs' ? 'xs' : 's';

        return (
            <DateTimePicker
                opened={isOpen}
                size={size}
                valueError={valueError}
                valueSuccess={valueSuccess}
                stretched={stretched}
                contentLeft={enableContentLeft ? <IconSb size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconSb size={iconSize} /> : undefined}
                onToggle={(is, e) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                {...rest}
            />
        );
    };

    it('[PLASMA-T2336] DateTimePicker: size=l, labelPlacement=outer, enableContentLeft, leftHelper', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    size="l"
                    enableContentLeft
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2337] DateTimePicker: size=xl, labelPlacement=inner, without contentLeft, without leftHelper', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xl" label="Лейбл" labelPlacement="inner" defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2338] DateTimePicker: size=m, required, requiredPlacement=right, valueError', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ padding: '1rem' }}>
                    <Demo
                        size="m"
                        label="Лейбл"
                        leftHelper="Подсказка к полю"
                        required
                        requiredPlacement="right"
                        hasRequiredIndicator
                        valueError
                        defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2345] DateTimePicker: size=s, required, requiredPlacement=left, valueSuccess', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ padding: '1rem' }}>
                    <Demo
                        size="s"
                        label="Лейбл"
                        leftHelper="Подсказка к полю"
                        required
                        requiredPlacement="left"
                        hasRequiredIndicator
                        valueSuccess
                        defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2346] DateTimePicker: size=xs, textBefore, stretched', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    size="xs"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    textBefore="textBefore"
                    stretched
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2347] DateTimePicker: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    disabled
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2348] DateTimePicker: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    readOnly
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2349] DateTimePicker: lang=ru', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} lang="ru" />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2350] DateTimePicker: lang=en, isDouble', () => {
        cy.viewport(800, 500);

        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14)}
                    lang="en"
                    isDouble
                />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2351] DateTimePicker: input date and time', () => {
        mount(
            <CypressTestDecorator>
                <Demo maskWithFormat={false} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023 05:06:07');

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2352] DateTimePicker: select date and time', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2024, 5, 14)} renderFromDate={new Date(2024, 5, 1)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().clear();
        cy.get('body').click();
        cy.get('input').first().click();
        cy.get('body').find('[data-day="16"][data-month-index="5"]').first().click();
        cy.get('body').find('[data-value="05"][data-column="hours"]').first().click();
        cy.get('body').find('[data-value="06"][data-column="minutes"]').first().click();
        cy.get('body').find('[data-value="07"][data-column="seconds"]').first().click();
        cy.get('body').find('[data-day="16"][data-month-index="5"]').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2361] DateTimePicker: input masked date and time', () => {
        mount(
            <CypressTestDecorator>
                <Demo dateFormat="MM.DD.YYYY" timeFormat="HH:mm:ss" maskWithFormat />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('06');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06.');
        cy.get('input').first().type('14');
        cy.get('input').first().should('have.value', '06.14.');
        cy.get('input').first().type('{backspace}');
        cy.get('input').first().should('have.value', '06.1');
        cy.get('input').first().type('42023');
        cy.get('input').first().should('have.value', '06.14.2023 ');
        cy.get('input').first().type('05');
        cy.get('input').first().should('have.value', '06.14.2023 05:');
        cy.get('input').first().type('06');
        cy.get('input').first().should('have.value', '06.14.2023 05:06:');
        cy.get('input').first().type('07');
        cy.get('input').first().should('have.value', '06.14.2023 05:06:07');

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2362] DateTimePicker: dateFormat', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14)}
                    dateFormat="YYYY-MM-DD"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2365] DateTimePicker: calendarContainerWidth, calendarContainerHeight', () => {
        cy.viewport(600, 8000);

        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14)}
                    calendarContainerWidth="35rem"
                    calendarContainerHeight="40rem"
                />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });
});
