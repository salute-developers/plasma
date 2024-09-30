import React, { useState } from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconSber } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { DatePicker as DatePickerB2C, DatePickerRange as DatePickerRangeB2C } from '.';

type DatePickerProps = ComponentProps<typeof DatePickerB2C> & {
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
};

type DatePickerRangeProps = ComponentProps<typeof DatePickerRangeB2C> & {
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
    enableFirstTextfieldContentLeft?: boolean;
    enableSecondTextfieldContentLeft?: boolean;
    enableFirstTextfieldContentRight?: boolean;
    enableSecondTextfieldContentRight?: boolean;
};

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: DatePicker', () => {
    const DatePicker = getComponent('DatePicker') as typeof DatePickerB2C;

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
        onToggle,
        ...rest
    }: DatePickerProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = size === 'xs' ? 'xs' : 's';

        return (
            <DatePicker
                opened={isOpen}
                size={size}
                valueError={valueError}
                valueSuccess={valueSuccess}
                contentLeft={enableContentLeft ? <IconSber size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconSber size={iconSize} /> : undefined}
                onToggle={(is, e) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                onCommitDate={() => setIsOpen(false)}
                {...rest}
            />
        );
    };

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').first().realClick();
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: size l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="l" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: size m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: size s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: size xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: defaultDate, enableContentLeft, enableContentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} enableContentLeft enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: valueError, valueSuccess', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo valueError defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo valueSuccess defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: label, leftHelper, placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    id="demo"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').realClick();
        cy.matchImageSnapshot();
    });

    it('prop: inner label', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                    defaultDate={new Date(2023, 5, 14)}
                    size="m"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: format', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} format="MM/DD/YYYY" enableContentLeft />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} format="MM.DD.YYYY" enableContentRight />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} format="YYYY-MM-DD" enableContentLeft enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: disabled, readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} disabled />
                <PadMe />
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} readOnly />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: placement', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '600px' }} />

                <Demo placement={['top', 'bottom']} defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: onToggle, outside click', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <span id="outer">outer text</span>
                <Demo
                    defaultDate={new Date(2023, 5, 14)}
                    onToggle={(isOpen, event) => {
                        expect(isOpen).to.be.oneOf([true, false]);
                        expect(event.type).to.eq('click');
                    }}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('#outer').click();
    });

    it('prop: input date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');
        cy.realPress('Enter');

        cy.matchImageSnapshot();
    });

    it('prop: input date from calendar', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().clear();
        cy.get('body').click();
        cy.get('input').first().click();
        cy.get('body').find('[data-day="16"][data-month-index="5"]').first().click();
        cy.matchImageSnapshot();
    });

    it('prop: input masked date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo format="MM/DD/YYYY" maskWithFormat enableContentRight />
            </CypressTestDecoratorWithTypo>,
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
});

describe('plasma-b2c: DatePickerRange', () => {
    const DatePickerRange = getComponent('DatePickerRange') as typeof DatePickerRangeB2C;
    const IconButton = getComponent('IconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo = ({
        enableContentLeft,
        enableContentRight,
        enableFirstTextfieldContentLeft,
        enableSecondTextfieldContentLeft,
        enableFirstTextfieldContentRight,
        enableSecondTextfieldContentRight,
        size = 'xs',
        onToggle,
        ...rest
    }: DatePickerRangeProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = size === 'xs' ? 'xs' : 's';

        const ActionButton = () => (
            <IconButton view="clear" size={size}>
                <IconSber size={iconSize} />
            </IconButton>
        );

        return (
            <DatePickerRange
                opened={isOpen}
                size={size}
                contentLeft={enableContentLeft ? <IconSber size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <ActionButton /> : undefined}
                firstTextfieldContentLeft={enableFirstTextfieldContentLeft ? <IconSber size={iconSize} /> : undefined}
                firstTextfieldContentRight={enableFirstTextfieldContentRight ? <IconSber size={iconSize} /> : undefined}
                secondTextfieldContentLeft={enableSecondTextfieldContentLeft ? <IconSber size={iconSize} /> : undefined}
                secondTextfieldContentRight={
                    enableSecondTextfieldContentRight ? <IconSber size={iconSize} /> : undefined
                }
                onToggle={(is, e) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                onCommitSecondDate={() => setIsOpen(false)}
                {...rest}
            />
        );
    };

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
                <PadMe />
                <Demo id="demo" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').first().realClick();
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: size l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="l" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: size m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: size s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: size xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: defaultDate, enableContent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    defaultFirstDate={new Date(2023, 5, 14)}
                    enableContentLeft
                    enableContentRight
                    enableFirstTextfieldContentLeft
                    enableSecondTextfieldContentLeft
                    enableFirstTextfieldContentRight
                    enableSecondTextfieldContentRight
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: valueError, valueSuccess', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    firstValueError
                    secondValueSuccess
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
                <PadMe />
                <Demo
                    firstValueSuccess
                    secondValueSuccess
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
                <PadMe />
                <Demo
                    firstValueError
                    secondValueError
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: label, leftHelper, placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    id="demo"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('prop: format', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultFirstDate={new Date(2023, 5, 14)} format="MM/DD/YYYY" />
                <PadMe />
                <Demo defaultFirstDate={new Date(2023, 5, 14)} format="MM.DD.YYYY" />
                <PadMe />
                <Demo defaultFirstDate={new Date(2023, 5, 14)} format="YYYY-MM-DD" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: disabled, readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} disabled />
                <PadMe />
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} readOnly />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: placement', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '600px' }} />

                <Demo placement={['top', 'bottom']} defaultFirstDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: onToggle, outside click', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <span id="outer">outer text</span>
                <Demo
                    defaultFirstDate={new Date(2023, 5, 14)}
                    onToggle={(isOpen, event) => {
                        expect(isOpen).to.be.oneOf([true, false]);
                        expect(event.type).to.eq('click');
                    }}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('#outer').click();
    });

    it('prop: input date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.realPress('Enter');
        cy.focused().type('17.06.2023');

        cy.matchImageSnapshot();
    });

    it('prop: input date, double calendar', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo isDoubleCalendar enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.realPress('Enter');
        cy.focused().type('17.07.2023');

        cy.matchImageSnapshot();
    });
});
