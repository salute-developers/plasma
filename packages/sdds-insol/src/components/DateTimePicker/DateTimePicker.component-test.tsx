import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { IconSber } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

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
                contentLeft={enableContentLeft ? <IconSber size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconSber size={iconSize} /> : undefined}
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
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14, 1, 0, 0)} />
            </CypressTestDecorator>,
        );

        cy.get('#demo').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: size l', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="l" defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: size m', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="m" defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: size s', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: size xs', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xs" defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: stretch', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14, 12, 12, 12)} stretched />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: calendarContainerWidth, calendarContainerHeight', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    calendarContainerWidth="35rem"
                    calendarContainerHeight="40rem"
                />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: defaultDate, enableContentLeft, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} enableContentLeft enableContentRight />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: renderFromDate', () => {
        mount(
            <CypressTestDecorator>
                <Demo renderFromDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: valueError, valueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo valueError defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
                <PadMe />
                <Demo valueSuccess defaultDate={new Date(2023, 5, 14, 12, 12, 12)} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: label, leftHelper, placeholder', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    id="demo"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                />
            </CypressTestDecorator>,
        );

        cy.get('#demo').realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('prop: inner label', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    labelPlacement="inner"
                    size="m"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                />
                <PadMe />
                <Demo label="Лейбл" labelPlacement="inner" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    label="Лейбл"
                    labelPlacement="inner"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14, 12, 12, 12)}
                    size="m"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: dateFormat', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} dateFormat="MM/DD/YYYY" enableContentLeft />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} dateFormat="MM.DD.YYYY" enableContentRight />
                <PadMe />
                <Demo
                    defaultDate={new Date(2023, 5, 14)}
                    dateFormat="YYYY-MM-DD"
                    enableContentLeft
                    enableContentRight
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: timeFormat', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14, 1, 2, 3)} timeFormat="HH:mm:ss" enableContentLeft />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14, 1, 2, 3)} timeFormat="HH mm" enableContentRight />
                <PadMe />
                <Demo
                    defaultDate={new Date(2023, 5, 14, 1, 2, 3)}
                    timeFormat="HH/mm/ss"
                    enableContentLeft
                    enableContentRight
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: disabled, readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} disabled />
                <PadMe />
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} readOnly />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: placement', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ height: '600px' }} />

                <Demo placement={['top', 'bottom']} defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: required', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ padding: '1rem' }}>
                    <Demo required label="Лейбл" />
                    <PadMe />
                    <Demo required requiredPlacement="left" label="Лейбл" />
                    <PadMe />
                    <Demo required />
                    <PadMe />
                    <Demo required requiredPlacement="left" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: onToggle, outside click', () => {
        mount(
            <CypressTestDecorator>
                <span id="outer">outer text</span>
                <Demo
                    defaultDate={new Date(2023, 5, 14)}
                    onToggle={(isOpen, event) => {
                        expect(isOpen).to.be.oneOf([true, false]);
                        expect(event.type).to.eq('click');
                    }}
                />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('#outer').click();
    });

    it('prop: input date', () => {
        mount(
            <CypressTestDecorator>
                <Demo enableContentRight />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');
        cy.realPress('Enter');

        cy.matchImageSnapshot();
    });

    it('prop: input date from calendar', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14)}
                    renderFromDate={new Date(2023, 5, 1)}
                    closeAfterDateSelect={false}
                />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().clear();
        cy.get('body').click();
        cy.get('input').first().click();
        cy.get('body').find('[data-day="16"][data-month-index="5"]').first().click();
        cy.matchImageSnapshot();
    });

    it('prop: input masked date', () => {
        mount(
            <CypressTestDecorator>
                <Demo dateFormat="MM/DD/YYYY" maskWithFormat enableContentRight />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('06');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/');
        cy.get('input').first().type('14');
        cy.get('input').first().should('have.value', '06/14/');
        cy.get('input').first().type('{backspace}');
        cy.get('input').first().should('have.value', '06/1');
        cy.get('input').first().type('42023');

        cy.matchImageSnapshot();
    });

    const ControlledDemo = () => {
        const [date, setDate] = useState<string | Date | undefined>();

        return (
            <>
                <div>
                    <Button onClick={() => setDate(new Date(2024, 9, 15))}>Set date</Button>
                    <Button className="reset-btn" onClick={() => setDate('')}>
                        Reset date
                    </Button>
                </div>
                <DateTimePicker
                    value={date}
                    size="l"
                    view="default"
                    min={new Date(2024, 1, 1)}
                    max={new Date(2024, 11, 29)}
                    lang="ru"
                    dateFormat="MM/DD/YYYY"
                    maskWithFormat
                />
            </>
        );
    };

    it('controlled datepicker: set date', () => {
        mount(
            <CypressTestDecorator>
                <ControlledDemo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024 ');
        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('controlled datepicker: reset date', () => {
        mount(
            <CypressTestDecorator>
                <ControlledDemo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024 ');
        cy.get('button.reset-btn').click();
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });
});
