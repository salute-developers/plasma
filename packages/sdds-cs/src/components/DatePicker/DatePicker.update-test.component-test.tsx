import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { IconSber } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { DatePicker as DatePickerCS, DatePickerRange as DatePickerRangeCS } from '.';

type DatePickerProps = ComponentProps<typeof DatePickerCS> & {
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
};

type DatePickerRangeProps = ComponentProps<typeof DatePickerRangeCS> & {
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
    enableFirstTextfieldContentLeft?: boolean;
    enableSecondTextfieldContentLeft?: boolean;
    enableFirstTextfieldContentRight?: boolean;
    enableSecondTextfieldContentRight?: boolean;
};

const matchImageSnapshotWithTreshold = () =>
    cy.matchImageSnapshot({
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
    });

describe('sdds-cs: DatePicker', () => {
    const DatePicker = getComponent('DatePicker') as typeof DatePickerCS;

    const Demo = ({
        label,
        labelPlacement,
        leftHelper,
        placeholder,
        lang,
        textBefore,
        textAfter,
        maskWithFormat,
        required,
        requiredPlacement,
        enableContentLeft,
        enableContentRight,
        valueError,
        valueSuccess,
        size = 's',
        stretched = false,
        onToggle,
        ...rest
    }: DatePickerProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = 'xs';

        return (
            <DatePicker
                label={label}
                labelPlacement={labelPlacement}
                leftHelper={leftHelper}
                placeholder={placeholder}
                lang={lang}
                textBefore={textBefore}
                textAfter={textAfter}
                maskWithFormat={maskWithFormat}
                required={required}
                requiredPlacement={requiredPlacement}
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

    it('[PLASMA-T1774] DatePicker: label, labelPlacement=inner, leftHelper, placeholder, lang=ru, textBefore, enableContentLeft, enableContentRight, maskWithFormat, required, requiredPlacement=left, valueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Label"
                    labelPlacement="inner"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="ru"
                    textBefore="Text Before"
                    enableContentLeft
                    enableContentRight
                    maskWithFormat
                    required
                    requiredPlacement="left"
                    valueError
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1775] DatePicker: labelPlacement=outer, placeholder, lang=en, required, requiredPlacement=right, valueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    labelPlacement="outer"
                    placeholder="05.05.2023"
                    lang="en"
                    required
                    requiredPlacement="right"
                    valueSuccess
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1776] size=s, label, labelPlacement=inner, leftHelper, placeholder, lang=en, textBefore, enableContentLeft, valueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    size="s"
                    label="Label"
                    labelPlacement="inner"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="en"
                    textBefore="Text before"
                    enableContentLeft
                    valueError
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1777] DatePicker: labelPlacement=outer, leftHelper, placeholder, lang=ru, enableContentRight, maskWithFormat, valueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    labelPlacement="outer"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="ru"
                    enableContentRight
                    maskWithFormat
                    valueSuccess
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1778] DatePicker: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Label"
                    labelPlacement="inner"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="ru"
                    enableContentLeft
                    enableContentRight
                    required
                    requiredPlacement="right"
                    disabled
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1779] DatePicker: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Label"
                    labelPlacement="inner"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="ru"
                    readOnly
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1782] DatePicker: input date', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');

        matchImageSnapshotWithTreshold();
    });

    it('[PLASMA-T1783] DatePicker: select day in popover', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} closeAfterDateSelect={false} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('[data-day="15"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1784] DatePicker: select month in popover', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="Февраль"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1785] DatePicker: select month by arrows', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('button[aria-label="Следующий месяц"]').click();
        cy.get('button[aria-label="Предыдущий месяц"]').click();
        cy.get('button[aria-label="Следующий месяц"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1786] DatePicker: select year in popover', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="2024"]').click();

        cy.get('#id-grid-label').should('have.text', '2024');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1787] DatePicker: select year by arrows', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('button[aria-label="Предыдущий год"]').click();
        cy.get('button[aria-label="Следующий год"]').click();
        cy.get('#id-grid-label').should('have.text', '2023');

        cy.matchImageSnapshot();
    });

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('#demo input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: input masked date', () => {
        mount(
            <CypressTestDecorator>
                <Demo format="MM/DD/YYYY" maskWithFormat />
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

    it('prop: format', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(2023, 5, 14)} format="MM/DD/YYYY" enableContentLeft />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} format="MM.DD.YYYY" enableContentRight />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} format="YYYY-MM-DD" enableContentLeft enableContentRight />
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

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
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

        cy.matchImageSnapshot();
    });

    it('case: very future date', () => {
        mount(
            <CypressTestDecorator>
                <Demo defaultDate={new Date(9999, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });
});

describe('sdds-cs: DatePickerRange', () => {
    const DatePickerRange = getComponent('DatePickerRange') as typeof DatePickerRangeCS;
    const IconButton = getComponent('IconButton');

    const Demo = ({
        enableContentLeft,
        enableContentRight,
        enableFirstTextfieldContentLeft,
        enableSecondTextfieldContentLeft,
        enableFirstTextfieldContentRight,
        enableSecondTextfieldContentRight,
        size = 's',
        stretched = false,
        onToggle,
        ...rest
    }: DatePickerRangeProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = 'xs';

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
                stretched={stretched}
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
                {...rest}
            />
        );
    };

    it('[PLASMA-T1792] DatePickerRange: default, double calendar', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecorator>
                <Demo
                    isDoubleCalendar
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('[PLASMA-T1793] DatePickerRange: highlight range', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.get('[data-day="23"]').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1794] DatePickerRange: input date', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('17.06.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1795] DatePickerRange: input date, double calendar', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecorator>
                <Demo isDoubleCalendar />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('17.07.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1796] DatePickerRange: input same date', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('14.06.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1798] DatePickerRange: size=l, multy props', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <Demo
                        label="Лейбл"
                        leftHelper="Подсказка к полю"
                        firstPlaceholder="05.05.2023"
                        secondPlaceholder="10.05.2023"
                        firstTextfieldTextBefore="firstTB"
                        secondTextfieldTextBefore="secondTB"
                        firstTextfieldTextAfter="firstTA"
                        secondTextfieldTextAfter="secondTA"
                        isDoubleCalendar
                        dividerVariant="none"
                        lang="ru"
                        enableContentLeft
                        enableContentRight
                        enableFirstTextfieldContentLeft
                        enableFirstTextfieldContentRight
                        enableSecondTextfieldContentLeft
                        enableSecondTextfieldContentRight
                        firstValueError
                        secondValueError
                        maskWithFormat
                        required
                        requiredPlacement="left"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1799] DatePickerRange: multy props', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    firstPlaceholder="05.05.2023"
                    secondPlaceholder="10.05.2023"
                    dividerVariant="dash"
                    lang="en"
                    format="DD MMMM YYYY"
                    firstValueSuccess
                    secondValueSuccess
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1800] DatePickerRange: size=s, multy props', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    label="Лейбл"
                    firstPlaceholder="05.05.2023"
                    firstTextfieldTextBefore="firstTB"
                    secondTextfieldTextBefore="secondTB"
                    firstTextfieldTextAfter="firstTA"
                    isDoubleCalendar
                    dividerVariant="icon"
                    lang="en"
                    enableContentLeft
                    enableFirstTextfieldContentLeft
                    enableSecondTextfieldContentRight
                    firstValueError
                    secondValueSuccess
                    maskWithFormat
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1801] DatePickerRange: size=s, multy props', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    size="s"
                    leftHelper="Подсказка к полю"
                    secondPlaceholder="10.05.2023"
                    secondTextfieldTextAfter="secondTA"
                    dividerVariant="dash"
                    lang="ru"
                    format="DD MMMM YYYY"
                    enableContentRight
                    enableFirstTextfieldContentRight
                    enableSecondTextfieldContentLeft
                    firstValueSuccess
                    secondValueError
                    required
                    requiredPlacement="right"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1802] DatePickerRange: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1803] DatePickerRange: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} readOnly />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: placement', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ height: '600px' }} />

                <Demo placement={['top', 'bottom']} defaultFirstDate={new Date(2023, 5, 14)} />
            </CypressTestDecorator>,
        );

        cy.get('input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: onToggle, outside click', () => {
        mount(
            <CypressTestDecorator>
                <span id="outer">outer text</span>
                <Demo
                    defaultFirstDate={new Date(2023, 5, 14)}
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
});
