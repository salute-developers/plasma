import React, { useState } from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconSb } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { DateTimePicker as DateTimePickerB2C } from '.';

type DateTimePickerProps = ComponentProps<typeof DateTimePickerB2C> & {
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
};

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: DateTimePicker', () => {
    const DateTimePicker = getComponent('DateTimePicker') as typeof DateTimePickerB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

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
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="l"
                    enableContentLeft
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2337] DateTimePicker: size=xl, labelPlacement=inner, without contentLeft, without leftHelper', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" label="Лейбл" labelPlacement="inner" defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2338] DateTimePicker: size=m, required, requiredPlacement=right, valueError', () => {
        cy.viewport(500, 599);

        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2345] DateTimePicker: size=s, required, requiredPlacement=left, valueSuccess', () => {
        cy.viewport(500, 599);

        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2346] DateTimePicker: size=xs, textBefore, stretched', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="xs"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    textBefore="textBefore"
                    stretched
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2347] DateTimePicker: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    disabled
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2348] DateTimePicker: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    readOnly
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2349] DateTimePicker: lang=ru', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} lang="ru" />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14)}
                    lang="en"
                    isDouble
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2351] DateTimePicker: input date and time', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo maskWithFormat={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023 05:06:07');

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2352] DateTimePicker: select date and time', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2024, 5, 14)} renderFromDate={new Date(2024, 5, 1)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().clear();
        cy.get('body').click();
        cy.get('input').first().click();
        cy.get('body').find('[data-day="16"][data-month-index="5"]').first().click();
        cy.get('body').find('[data-value="05"][data-column="hours"]').first().click();
        cy.get('body').find('[data-value="06"][data-column="minutes"]').first().click();
        cy.get('body').find('[data-value="07"][data-column="seconds"]').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2361] DateTimePicker: input masked date and time', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo dateFormat="MM.DD.YYYY" timeFormat="HH:mm:ss" maskWithFormat />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14)}
                    dateFormat="YYYY-MM-DD"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2365] DateTimePicker: calendarContainerWidth, calendarContainerHeight', () => {
        cy.viewport(600, 704);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    defaultDate={new Date(2023, 5, 14)}
                    calendarContainerWidth="35rem"
                    calendarContainerHeight="40rem"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });
});
