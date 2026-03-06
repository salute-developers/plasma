import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { ButtonProps } from '../Button/Button.types';
import type { IconButtonProps } from '../IconButton/IconButton.types';

import type { DatePickerProps } from './SingleDate/SingleDate.types';
import type { DatePickerRangeProps } from './SingleDate/RangeDate.types';

const componentExists = hasComponent('DatePicker');
const componentRangeExists = hasComponent('DatePickerRange');
const componentButtonExists = hasComponent('Button');
const componentIconButtonExists = hasComponent('IconButton');
const describeFn = getDescribeFN('DatePicker');
const describeFnRange = getDescribeFN('DatePickerRange');

const matchImageSnapshotWithTreshold = () =>
    cy.matchImageSnapshot({
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
    });

const openDatePicker = () => cy.get('input').first().realClick();

getBaseVisualTests({
    component: 'DatePicker',
    componentProps: {
        defaultDate: new Date(2023, 5, 14),
    },
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: openDatePicker,
});

describeFn('DatePicker', () => {
    const DatePicker = componentExists ? getComponent<DatePickerProps>('DatePicker') : () => null;
    const Button = componentButtonExists
        ? getComponent<ButtonProps>('Button')
        : (props) => <button type="button" {...props} />;

    type DatePickerDemoProps = {
        enableContentLeft?: boolean;
        enableContentRight?: boolean;
        size?: string;
        onToggle?: (isOpen: boolean, event: any) => void;
        [key: string]: any;
    };

    const Demo = ({ enableContentLeft, enableContentRight, onToggle, ...rest }: DatePickerDemoProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = rest?.size === 'xs' ? 'xs' : 's';

        return (
            <DatePicker
                opened={isOpen}
                contentLeft={enableContentLeft ? <IconPlasma size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size={iconSize} /> : undefined}
                onToggle={(is: boolean, e: any) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                {...rest}
            />
        );
    };

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
                <DatePicker
                    value={date}
                    view="default"
                    min={new Date(2024, 1, 1)}
                    max={new Date(2024, 11, 29)}
                    lang="ru"
                    format="MM/DD/YYYY"
                    maskWithFormat
                />
            </>
        );
    };

    it('default', () => {
        mount(
            <>
                <Demo defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14)} />
            </>,
        );

        cy.get('#demo input').first().click();
        matchImageSnapshotWithTreshold();
    });

    it('stretch', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} stretched />);

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('calendarContainerWidth, calendarContainerHeight', () => {
        cy.viewport(500, 680);

        mount(
            <Demo defaultDate={new Date(2023, 5, 14)} calendarContainerWidth="35rem" calendarContainerHeight="40rem" />,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('defaultDate, enableContentLeft, enableContentRight', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} enableContentLeft enableContentRight />);

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('renderFromDate', () => {
        mount(<Demo renderFromDate={new Date(2023, 5, 14)} />);

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('valueError, valueSuccess', () => {
        mount(
            <>
                <Demo valueError defaultDate={new Date(2023, 5, 14)} />
                <PadMe />
                <Demo valueSuccess defaultDate={new Date(2023, 5, 14)} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('label, leftHelper, placeholder', () => {
        mount(
            <>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    id="demo"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14)}
                />
            </>,
        );

        cy.get('#demo input').realClick();
        cy.matchImageSnapshot();
    });

    it('inner label', () => {
        mount(
            <>
                <Demo label="Лейбл" labelPlacement="inner" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo label="Лейбл" labelPlacement="inner" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    label="Лейбл"
                    labelPlacement="inner"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14)}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('format', () => {
        mount(
            <>
                <Demo defaultDate={new Date(2023, 5, 14)} format="MM/DD/YYYY" enableContentLeft />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} format="MM.DD.YYYY" enableContentRight />
                <PadMe />
                <Demo defaultDate={new Date(2023, 5, 14)} format="YYYY-MM-DD" enableContentLeft enableContentRight />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled, readOnly', () => {
        mount(
            <>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} disabled />
                <PadMe />
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultDate={new Date(2023, 5, 14)} readOnly />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('placement', () => {
        cy.viewport(500, 656);

        mount(
            <>
                <div style={{ height: '600px' }} />
                <Demo placement={['top', 'bottom']} defaultDate={new Date(2023, 5, 14)} />
            </>,
        );

        cy.get('input').first().click();
        matchImageSnapshotWithTreshold();
    });

    it('required', () => {
        cy.viewport(500, 599);

        mount(
            <div style={{ padding: '1rem' }}>
                <Demo required hasRequiredIndicator label="Лейбл" />
                <PadMe />
                <Demo required hasRequiredIndicator requiredPlacement="left" label="Лейбл" />
                <PadMe />
                <Demo required hasRequiredIndicator />
                <PadMe />
                <Demo required hasRequiredIndicator requiredPlacement="left" />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('onToggle, outside click', () => {
        mount(
            <>
                <span id="outer">outer text</span>
                <Demo
                    defaultDate={new Date(2023, 5, 14)}
                    onToggle={(isOpen: boolean, event: any) => {
                        expect(isOpen).to.be.oneOf([true, false]);
                        expect(event.type).to.eq('click');
                    }}
                />
            </>,
        );

        cy.get('input').first().click();
        cy.get('#outer').click();

        cy.matchImageSnapshot();
    });

    it('input date', () => {
        mount(<Demo enableContentRight />);

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');
        cy.realPress('Enter');

        cy.matchImageSnapshot();
    });

    it('input date from calendar', () => {
        mount(
            <Demo
                label="Лейбл"
                leftHelper="Подсказка к полю"
                placeholder="Выберите дату"
                defaultDate={new Date(2023, 5, 14)}
                renderFromDate={new Date(2023, 5, 1)}
                closeAfterDateSelect={false}
            />,
        );

        cy.get('input').first().click().clear();
        cy.get('body').click();
        cy.get('input').first().click();
        cy.get('body').find('[data-day="16"][data-month-index="5"]').first().click();
        cy.matchImageSnapshot();
    });

    it('input masked date', () => {
        mount(<Demo format="MM/DD/YYYY" maskWithFormat enableContentRight />);

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

    it('DatePicker: input date', () => {
        mount(<Demo />);

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');

        matchImageSnapshotWithTreshold();
    });

    it('DatePicker: select day in popover', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} closeAfterDateSelect={false} />);

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('[data-day="15"]').click();

        cy.matchImageSnapshot();
    });

    it('DatePicker: select month in popover', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} />);

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="Февраль"]').click();

        cy.matchImageSnapshot();
    });

    it('DatePicker: select month by arrows', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} />);

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('button[aria-label="Следующий месяц"]').click();
        cy.get('button[aria-label="Предыдущий месяц"]').click();
        cy.get('button[aria-label="Следующий месяц"]').click();

        cy.matchImageSnapshot();
    });

    it('DatePicker: select year in popover', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} />);

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('#id-grid-label').click();
        cy.get('[aria-label="2024"]').click();

        cy.get('#id-grid-label').should('have.text', '2024');

        cy.matchImageSnapshot();
    });

    it('DatePicker: select year by arrows', () => {
        mount(<Demo defaultDate={new Date(2023, 5, 14)} />);

        cy.get('input').first().click();
        cy.get('.popover-root').should('be.visible');
        cy.get('#id-grid-label').click();
        cy.get('button[aria-label="Предыдущий год"]').click();
        cy.get('button[aria-label="Следующий год"]').click();
        cy.get('#id-grid-label').should('have.text', '2023');

        cy.matchImageSnapshot();
    });

    it('case: very future date', () => {
        mount(<Demo defaultDate={new Date(9999, 5, 14)} />);

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('DatePicker: dateShortcuts, dateShortcutsPlacement=left, dateShortcutsWidth=5rem', () => {
        const dateShortcuts = [
            { value: new Date(2024, 11, 14), label: 'Дата по умолчанию' },
            { value: new Date(2024, 11, 4), label: '10 дней до даты по умолчанию' },
            { value: new Date(2024, 11, 24), label: '10 дней после даты по умолчанию' },
        ];

        mount(
            <Demo
                defaultDate={new Date(2024, 11, 1)}
                dateShortcuts={dateShortcuts}
                dateShortcutsPlacement="left"
                dateShortcutsWidth="5rem"
            />,
        );

        cy.get('input').first().click();
        cy.matchImageSnapshot();
    });

    it('DatePicker: dateShortcuts, dateShortcutsPlacement=right, dateShortcutsWidth=10rem', () => {
        const dateShortcuts = [
            { value: new Date(2024, 11, 14), label: 'Дата по умолчанию' },
            { value: new Date(2024, 11, 4), label: '10 дней до даты по умолчанию' },
            { value: new Date(2024, 11, 24), label: '10 дней после даты по умолчанию' },
        ];

        mount(
            <Demo
                defaultDate={new Date(2024, 11, 1)}
                dateShortcuts={dateShortcuts}
                dateShortcutsPlacement="right"
                dateShortcutsWidth="10rem"
            />,
        );

        cy.get('input').first().click();
        cy.matchImageSnapshot();
    });

    it.skip('controlled datepicker: set date', () => {
        cy.viewport(500, 544);

        mount(<ControlledDemo />);

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024');
        cy.get('button').first().click();
        cy.get('input').first().should('have.value', '10/15/2024');
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('controlled datepicker: reset date', () => {
        cy.viewport(500, 544);

        mount(<ControlledDemo />);

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024');
        cy.get('button.reset-btn').click();
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });
});

describeFnRange('DatePickerRange', () => {
    const DatePickerRange = componentRangeExists ? getComponent<DatePickerRangeProps>('DatePickerRange') : () => null;
    const IconButton = componentIconButtonExists
        ? getComponent<IconButtonProps>('IconButton')
        : (props) => <button type="button" {...props} />;
    const Button = componentButtonExists
        ? getComponent<ButtonProps>('Button')
        : (props) => <button type="button" {...props} />;

    type DatePickerRangeDemoProps = {
        enableContentLeft?: boolean;
        enableContentRight?: boolean;
        enableFirstTextfieldContentLeft?: boolean;
        enableSecondTextfieldContentLeft?: boolean;
        enableFirstTextfieldContentRight?: boolean;
        enableSecondTextfieldContentRight?: boolean;
        size?: string;
        onToggle?: (isOpen: boolean, event: any) => void;
        [key: string]: any;
    };

    const Demo = ({
        enableContentLeft,
        enableContentRight,
        enableFirstTextfieldContentLeft,
        enableSecondTextfieldContentLeft,
        enableFirstTextfieldContentRight,
        enableSecondTextfieldContentRight,

        onToggle,
        ...rest
    }: DatePickerRangeDemoProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = rest?.size === 'xs' ? 'xs' : 's';

        const ActionButton = () => (
            <IconButton view="clear" size={rest?.size || 's'}>
                <IconPlasma size={iconSize} />
            </IconButton>
        );

        return (
            <DatePickerRange
                opened={isOpen}
                contentLeft={enableContentLeft ? <IconPlasma size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <ActionButton /> : undefined}
                stretched={rest.stretched}
                firstTextfieldContentLeft={enableFirstTextfieldContentLeft ? <IconPlasma size={iconSize} /> : undefined}
                firstTextfieldContentRight={
                    enableFirstTextfieldContentRight ? <IconPlasma size={iconSize} /> : undefined
                }
                secondTextfieldContentLeft={
                    enableSecondTextfieldContentLeft ? <IconPlasma size={iconSize} /> : undefined
                }
                secondTextfieldContentRight={
                    enableSecondTextfieldContentRight ? <IconPlasma size={iconSize} /> : undefined
                }
                onToggle={(is: boolean, e: any) => {
                    setIsOpen(is);
                    onToggle?.(is, e);
                }}
                onCommitSecondDate={() => setIsOpen(false)}
                {...rest}
            />
        );
    };

    const ControlledDemo = () => {
        const [date, setDate] = useState<[Date | string, Date | string] | undefined>();

        return (
            <>
                <div>
                    <Button onClick={() => setDate([new Date(2024, 9, 15), new Date(2024, 9, 25)])}>Set date</Button>
                    <Button className="reset-btn" onClick={() => setDate(['', ''])}>
                        Reset date
                    </Button>
                </div>
                <DatePickerRange
                    value={date}
                    min={new Date(2024, 1, 1)}
                    max={new Date(2024, 11, 29)}
                    lang="ru"
                    format="MM/DD/YYYY"
                    maskWithFormat
                />
            </>
        );
    };

    it('default', () => {
        mount(
            <>
                <Demo defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
                <PadMe />
                <Demo id="demo" defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} />
            </>,
        );

        cy.get('#demo input').first().realClick();
        matchImageSnapshotWithTreshold();
    });

    it('stretch', () => {
        mount(<Demo defaultFirstDate={new Date(2023, 5, 14)} defaultSecondDate={new Date(2023, 5, 17)} stretched />);

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('calendarContainerWidth, calendarContainerHeight', () => {
        cy.viewport(500, 680);

        mount(
            <Demo
                defaultFirstDate={new Date(2023, 5, 14)}
                defaultSecondDate={new Date(2023, 5, 17)}
                calendarContainerWidth="35rem"
                calendarContainerHeight="40rem"
            />,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('defaultDate, enableContent', () => {
        mount(
            <Demo
                defaultFirstDate={new Date(2023, 5, 14)}
                enableContentLeft
                enableContentRight
                enableFirstTextfieldContentLeft
                enableSecondTextfieldContentLeft
                enableFirstTextfieldContentRight
                enableSecondTextfieldContentRight
            />,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('renderFromDate', () => {
        mount(<Demo renderFromDate={new Date(2023, 5, 14)} />);

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('valueError, valueSuccess', () => {
        mount(
            <>
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
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('label, leftHelper, placeholder', () => {
        mount(
            <>
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
            </>,
        );

        cy.get('#demo input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('format', () => {
        mount(
            <>
                <Demo defaultFirstDate={new Date(2023, 5, 14)} format="MM/DD/YYYY" />
                <PadMe />
                <Demo defaultFirstDate={new Date(2023, 5, 14)} format="MM.DD.YYYY" />
                <PadMe />
                <Demo defaultFirstDate={new Date(2023, 5, 14)} format="YYYY-MM-DD" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled, readOnly', () => {
        mount(
            <>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} disabled />
                <PadMe />
                <Demo label="Лейбл" leftHelper="Подсказка к полю" defaultFirstDate={new Date(2023, 5, 14)} readOnly />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('placement', () => {
        cy.viewport(500, 656);

        mount(
            <>
                <div style={{ height: '600px' }} />
                <Demo placement={['top', 'bottom']} defaultFirstDate={new Date(2023, 5, 14)} />
            </>,
        );

        cy.get('input').first().click();
        matchImageSnapshotWithTreshold();
    });

    it('required', () => {
        cy.viewport(500, 599);

        mount(
            <div style={{ padding: '1rem' }}>
                <Demo required hasRequiredIndicator label="Лейбл" />
                <PadMe />
                <Demo required hasRequiredIndicator requiredPlacement="left" label="Лейбл" />
                <PadMe />
                <Demo required hasRequiredIndicator />
                <PadMe />
                <Demo required hasRequiredIndicator requiredPlacement="left" />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('onToggle, outside click', () => {
        mount(
            <>
                <span id="outer">outer text</span>
                <Demo
                    defaultFirstDate={new Date(2023, 5, 14)}
                    onToggle={(isOpen: boolean, event: any) => {
                        expect(isOpen).to.be.oneOf([true, false]);
                        expect(event.type).to.eq('click');
                    }}
                />
            </>,
        );

        cy.get('input').first().click();
        cy.get('#outer').click();
    });

    it('input date', () => {
        mount(<Demo enableContentRight />);

        cy.get('input').first().click().type('14.06.2023');
        cy.realPress('Enter');
        cy.focused().type('17.06.2023');

        cy.matchImageSnapshot();
    });

    it('change only second date', () => {
        mount(<Demo enableContentRight />);

        cy.get('input').first().click().type('14.06.2023');
        cy.realPress('Enter');
        cy.get('body').find('[data-day="17"]').first().click();
        cy.realPress('Escape');
        cy.get('.input-wrapper input').last().click();
        cy.get('body').find('[data-day="27"]').first().click();

        cy.get('input').first().should('have.value', '14.06.2023');
        cy.get('input').last().should('have.value', '27.06.2023');

        cy.matchImageSnapshot();
    });

    it('input date, double calendar', () => {
        cy.viewport(900, 599);

        mount(<Demo isDoubleCalendar enableContentRight />);

        cy.get('input').first().click().type('14.06.2023');
        cy.realPress('Enter');
        cy.focused().type('17.07.2023');

        cy.matchImageSnapshot();
    });

    it('input same date', () => {
        mount(<Demo />);

        cy.get('input').first().click().type('14.06.2023{enter}');
        cy.focused().type('14.06.2023');

        cy.matchImageSnapshot();
    });

    it('hintText, required, requiredPlacement=right', () => {
        mount(
            <Demo
                renderFromDate={new Date(2024, 11, 14)}
                hintText="Тестовый текст"
                required
                requiredPlacement="right"
            />,
        );

        cy.get('input.textfield-input-text-ellipsis').last().click();
        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('appearance=clear, hasClearDivider', () => {
        mount(
            <>
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" />
                <PadMe />
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" hasClearDivider />
            </>,
        );

        cy.get('input.textfield-input-text-ellipsis').last().click();

        cy.matchImageSnapshot();
    });

    it('appearance=clear, firstValueSuccess, secondValueSuccess', () => {
        mount(
            <>
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" firstValueSuccess hasClearDivider />
                <PadMe />
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" secondValueSuccess hasClearDivider />
                <PadMe />
                <Demo
                    renderFromDate={new Date(2024, 11, 14)}
                    appearance="clear"
                    firstValueSuccess
                    secondValueSuccess
                    hasClearDivider
                />
            </>,
        );

        cy.get('input.textfield-input-text-ellipsis').last().click();

        cy.matchImageSnapshot();
    });

    it('appearance=clear, firstValueError, secondValueError', () => {
        mount(
            <>
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" firstValueError hasClearDivider />
                <PadMe />
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" secondValueError hasClearDivider />
                <PadMe />
                <Demo
                    renderFromDate={new Date(2024, 11, 14)}
                    appearance="clear"
                    firstValueError
                    secondValueError
                    hasClearDivider
                />
            </>,
        );

        cy.get('input.textfield-input-text-ellipsis').last().click();

        cy.matchImageSnapshot();
    });

    it('dateShortcuts, dateShortcutsPlacement=left, dateShortcutsWidth=5rem', () => {
        const dateShortcutsRange = [
            {
                value: [new Date(2024, 11, 14), new Date(2024, 11, 23)] as [Date, Date],
                label: 'Промежуток в 10 дней',
            },
            {
                value: [new Date(2024, 11, 1), new Date(2024, 11, 20)] as [Date, Date],
                label: 'Промежуток в 20 дней',
            },
            {
                value: [new Date(2024, 11, 5), undefined] as [Date, undefined],
                label: 'Промежуток без конечой даты',
            },
        ];

        mount(
            <Demo
                renderFromDate={new Date(2024, 11, 14)}
                dateShortcuts={dateShortcutsRange}
                dateShortcutsPlacement="left"
                dateShortcutsWidth="5rem"
            />,
        );

        cy.get('input').first().click();
        cy.matchImageSnapshot();
    });

    it('dateShortcuts, dateShortcutsPlacement=right, dateShortcutsWidth=10rem', () => {
        const dateShortcutsRange = [
            {
                value: [new Date(2024, 11, 14), new Date(2024, 11, 23)] as [Date, Date],
                label: 'Промежуток в 10 дней',
            },
            {
                value: [new Date(2024, 11, 1), new Date(2024, 11, 20)] as [Date, Date],
                label: 'Промежуток в 20 дней',
            },
            {
                value: [new Date(2024, 11, 5), undefined] as [Date, undefined],
                label: 'Промежуток без конечой даты',
            },
        ];

        mount(
            <Demo
                renderFromDate={new Date(2024, 11, 14)}
                dateShortcuts={dateShortcutsRange}
                dateShortcutsPlacement="right"
                dateShortcutsWidth="10rem"
            />,
        );

        cy.get('input').first().click();
        cy.matchImageSnapshot();
    });

    it.skip('controlled datepicker: set date', () => {
        cy.viewport(500, 544);

        mount(<ControlledDemo />);

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024');
        cy.get('button').first().click();
        cy.get('input').first().should('have.value', '10/15/2024');
        cy.get('input').last().should('have.value', '10/25/2024');
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('controlled datepicker: reset date', () => {
        cy.viewport(500, 544);

        mount(<ControlledDemo />);

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024');
        cy.get('button.reset-btn').click();
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });
});
