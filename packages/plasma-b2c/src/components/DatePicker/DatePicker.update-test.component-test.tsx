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

const matchImageSnapshotWithTreshold = () =>
    cy.matchImageSnapshot({
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
    });

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

    // TODO: добавить тесты для prop: lang

    it('[PLASMA-T1097] DatePicker: size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="l" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1103] DatePicker: size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1104] DatePicker: size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1105] DatePicker: size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1098] DatePicker: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1099] DatePicker: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} readOnly />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1101] DatePicker: valueError, enableContentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo valueError enableContentRight defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1102] DatePicker: valueSuccess, enableContentLeft', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo valueSuccess enableContentLeft defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1114] DatePicker: label, leftHelper, placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1200] DatePicker: inner label without input value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    label="Лейбл"
                    labelPlacement="inner"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    size="m"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1201] DatePicker: inner label with input value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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

    it('[PLASMA-T1112] DatePicker: input date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');

        matchImageSnapshotWithTreshold();
    });

    it('[PLASMA-T1106] DatePicker: select month by arrows', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        cy.get('.popover-root').should('be.visible');
        cy.get('button[aria-label="Следующий месяц"]').click();
        cy.get('button[aria-label="Предыдущий месяц"]').click();
        cy.get('button[aria-label="Следующий месяц"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1107] DatePicker: select month in popover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="Февраль"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1108] DatePicker: select year by arrows', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('button[aria-label="Предыдущий год"]').click();
        cy.get('button[aria-label="Следующий год"]').click();
        cy.get('#id-grid-label').should('have.text', '2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1110] DatePicker: select year in popover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="2025"]').click();

        cy.get('#id-grid-label').should('have.text', '2025');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1111] DatePicker: select day in popover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        cy.get('.popover-root').should('be.visible');
        cy.get('[data-day="15"]').click();

        cy.matchImageSnapshot();
    });

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: input masked date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo format="MM/DD/YYYY" maskWithFormat />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('06');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').should('have.value', '06/');
        cy.get('input').type('14');
        cy.get('input').should('have.value', '06/14/');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '06/1');
        cy.get('input').type('42023');

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

    it('prop: placement', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '600px' }} />

                <Demo placement={['top', 'bottom']} defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();

        matchImageSnapshotWithTreshold();
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

        cy.get('input').click();
        cy.get('#outer').click();

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

    it('[PLASMA-T1115] DatePickerRange: default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
                <PadMe />
                <Demo id="demo" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: size l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="l" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('prop: size m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: size s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: size xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
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

        cy.get('input').first().click();

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

        cy.get('#demo input').first().click();

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

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
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

    it('[PLASMA-T1116] DatePickerRange: input date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('17.06.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1117] DatePickerRange: input same date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('14.06.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1119] DatePickerRange: default, double calendar', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    isDoubleCalendar
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('[PLASMA-T1120] DatePickerRange: input date, double calendar', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo isDoubleCalendar enableContentRight />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('17.07.2023');

        cy.matchImageSnapshot();
    });
});
