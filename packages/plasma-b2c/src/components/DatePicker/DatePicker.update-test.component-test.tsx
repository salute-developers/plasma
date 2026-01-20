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
        size = 'xs',
        stretched = false,
        onToggle,
        ...rest
    }: DatePickerProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = size === 'xs' ? 'xs' : 's';

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

    it('[PLASMA-T1774] DatePicker: size=l, label, labelPlacement=inner, leftHelper, placeholder, lang=ru, textBefore, enableContentLeft, enableContentRight, maskWithFormat, required, requiredPlacement=left, valueError', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="l"
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1775] DatePicker: size=m, labelPlacement=outer, placeholder, lang=en, required, requiredPlacement=right, valueSuccess', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="m"
                    labelPlacement="outer"
                    placeholder="05.05.2023"
                    lang="en"
                    required
                    requiredPlacement="right"
                    valueSuccess
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1776] size=s, label, labelPlacement=inner, leftHelper, placeholder, lang=en, textBefore, enableContentLeft, valueError', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1777] DatePicker: size=xs, labelPlacement=outer, leftHelper, placeholder, lang=ru, enableContentRight, maskWithFormat, valueSuccess', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="xs"
                    labelPlacement="outer"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="ru"
                    enableContentRight
                    maskWithFormat
                    valueSuccess
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1778] DatePicker: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="l"
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1779] DatePicker: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="m"
                    label="Label"
                    labelPlacement="inner"
                    leftHelper="Left helper"
                    placeholder="05.05.2023"
                    lang="ru"
                    readOnly
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1782] DatePicker: input date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');

        matchImageSnapshotWithTreshold();
    });

    it('[PLASMA-T1783] DatePicker: select day in popover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} closeAfterDateSelect={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('[data-day="15"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1784] DatePicker: select month in popover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="Февраль"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1785] DatePicker: select month by arrows', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#demo input').first().click();

        matchImageSnapshotWithTreshold();
    });

    it('prop: input masked date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo format="MM/DD/YYYY" maskWithFormat />
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

        cy.get('input').first().click();

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

        cy.get('input').first().click();
        cy.get('#outer').click();

        cy.matchImageSnapshot();
    });

    it('case: very future date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo defaultDate={new Date(9999, 5, 14)} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click();

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
        stretched = false,
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

    it('[PLASMA-T1793] DatePickerRange: highlight range', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023');
        cy.get('[data-day="23"]').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1794] DatePickerRange: input date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('17.06.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1795] DatePickerRange: input date, double calendar', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo isDoubleCalendar />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('17.07.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1796] DatePickerRange: input same date', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('14.06.2023');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1798] DatePickerRange: size=l, multy props', () => {
        cy.viewport(900, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ marginLeft: '1rem' }}>
                    <Demo
                        size="l"
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1799] DatePickerRange: size=m, multy props', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="m"
                    firstPlaceholder="05.05.2023"
                    secondPlaceholder="10.05.2023"
                    dividerVariant="dash"
                    lang="en"
                    format="DD MMMM YYYY"
                    firstValueSuccess
                    secondValueSuccess
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1800] DatePickerRange: size=s, multy props', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="l"
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1801] DatePickerRange: size=xs, multy props', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    size="xs"
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1802] DatePickerRange: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1803] DatePickerRange: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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

    it.skip('[PLASMA-] DatePickerRange: hintText, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <Demo hintText="Тестовый текст" required requiredPlacement="right" />
            </CypressTestDecorator>,
        );
        cy.get('input.textfield-input-text-ellipsis').last().click();
        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] DatePickerRange: appearance=clear, hasClearDivider', () => {
        mount(
            <CypressTestDecorator>
                <Demo appearance="clear" />
                <PadMe />
                <Demo appearance="clear" hasClearDivider />
            </CypressTestDecorator>,
        );
        cy.get('input.textfield-input-text-ellipsis').last().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] DatePickerRange: appearance=clear, firstValueSuccess, secondValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo appearance="clear" firstValueSuccess hasClearDivider />
                <PadMe />
                <Demo appearance="clear" secondValueSuccess hasClearDivider />
                <PadMe />
                <Demo appearance="clear" firstValueSuccess secondValueSuccess hasClearDivider />
            </CypressTestDecorator>,
        );
        cy.get('input.textfield-input-text-ellipsis').last().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] DatePickerRange: appearance=clear, firstValueError, secondValueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo appearance="clear" firstValueError hasClearDivider />
                <PadMe />
                <Demo appearance="clear" secondValueError hasClearDivider />
                <PadMe />
                <Demo appearance="clear" firstValueError secondValueError hasClearDivider />
            </CypressTestDecorator>,
        );
        cy.get('input.textfield-input-text-ellipsis').last().click();

        cy.matchImageSnapshot();
    });
});
