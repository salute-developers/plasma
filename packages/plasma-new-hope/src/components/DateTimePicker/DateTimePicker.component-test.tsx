import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { DateTimePickerProps } from './DateTimePicker.types';

const componentExists = hasComponent('DateTimePicker');
const componentButtonExists = hasComponent('Button');
const describeFn = getDescribeFN('DateTimePicker');

const openDateTimePicker = () => {
    cy.viewport(750, 700);
    cy.get('input').first().realClick();
};

getBaseVisualTests({
    component: 'DateTimePicker',
    componentProps: {
        defaultDate: new Date(2023, 5, 14, 0, 0, 0),
    },
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: openDateTimePicker,
});

describeFn('DateTimePicker', () => {
    const DateTimePicker = componentExists ? getComponent<DateTimePickerProps>('DateTimePicker') : () => null;
    const Button = componentButtonExists ? getComponent('Button') : (props: any) => <button type="button" {...props} />;

    type DateTimePickerDemoProps = {
        enableContentLeft?: boolean;
        enableContentRight?: boolean;
        size?: string;
        onToggle?: (isOpen: boolean, event: any) => void;
        [key: string]: any;
    };

    const Demo = ({ enableContentLeft, enableContentRight, onToggle, ...rest }: DateTimePickerDemoProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = rest.size === 'xs' ? 'xs' : 's';

        return (
            <DateTimePicker
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

    it('default', () => {
        cy.viewport(750, 700);
        mount(
            <>
                <Demo defaultDate={new Date(2023, 5, 14, 0, 0, 0)} />
                <PadMe />
                <Demo id="demo" defaultDate={new Date(2023, 5, 14, 0, 0, 0)} />
            </>,
        );

        cy.get('#demo').first().realClick();

        cy.matchImageSnapshot();
    });

    it('stretch', () => {
        cy.viewport(750, 700);
        mount(<Demo defaultDate={new Date(2023, 5, 14, 0, 0, 0)} stretched />);

        cy.get('input').first().realClick();

        cy.matchImageSnapshot();
    });

    it('defaultDate, enableContentLeft, enableContentRight', () => {
        cy.viewport(750, 700);
        mount(<Demo defaultDate={new Date(2023, 5, 14)} enableContentLeft enableContentRight />);

        cy.get('input').first().realClick();
        cy.matchImageSnapshot();
    });

    it('renderFromDate', () => {
        cy.viewport(750, 700);
        mount(<Demo renderFromDate={new Date(2023, 5, 14, 0, 0, 0)} />);

        cy.get('input').first().realClick();

        cy.matchImageSnapshot();
    });

    it('valueError, valueSuccess', () => {
        mount(
            <>
                <Demo valueError defaultDate={new Date(2023, 5, 14, 0, 0, 0)} />
                <PadMe />
                <Demo valueSuccess defaultDate={new Date(2023, 5, 14, 0, 0, 0)} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('label, leftHelper, placeholder', () => {
        cy.viewport(750, 700);
        mount(
            <>
                <Demo label="Лейбл" leftHelper="Подсказка к полю" placeholder="Выберите дату" />
                <PadMe />
                <Demo
                    id="demo"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    placeholder="Выберите дату"
                    defaultDate={new Date(2023, 5, 14, 0, 0, 0)}
                />
            </>,
        );

        cy.get('#demo').realClick();

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
                    defaultDate={new Date(2023, 5, 14, 0, 0, 0)}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('dateFormat', () => {
        mount(
            <>
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
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('timeFormat', () => {
        mount(
            <>
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
        cy.viewport(850, 700);

        mount(
            <>
                <div style={{ height: '600px' }} />
                <Demo placement={['top', 'bottom']} defaultDate={new Date(2023, 5, 14)} />
            </>,
        );

        cy.get('input').first().realClick();
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
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
    });

    it('input date', () => {
        cy.viewport(750, 700);
        mount(<Demo enableContentRight />);

        cy.get('input').first().click().type('14.06.2023');
        cy.get('.popover-root').should('be.visible');
        cy.realPress('Enter');

        cy.matchImageSnapshot();
    });

    it('input date from calendar', () => {
        cy.viewport(750, 700);
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
        cy.viewport(750, 700);
        mount(<Demo dateFormat="MM/DD/YYYY" maskWithFormat enableContentRight />);

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

    it('input date and time', () => {
        cy.viewport(750, 700);
        mount(<Demo maskWithFormat={false} />);

        cy.get('input').first().click().type('14.06.2023 05:06:07');

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('select date and time', () => {
        cy.viewport(750, 700);
        mount(<Demo defaultDate={new Date(2024, 5, 14)} renderFromDate={new Date(2024, 5, 1)} />);

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

    it('input masked date and time', () => {
        cy.viewport(750, 700);
        mount(<Demo dateFormat="MM.DD.YYYY" timeFormat="HH:mm:ss" maskWithFormat />);

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

    it('calendarContainerWidth, calendarContainerHeight', () => {
        cy.viewport(600, 750);

        mount(
            <Demo
                label="Лейбл"
                leftHelper="Подсказка к полю"
                defaultDate={new Date(2023, 5, 14)}
                calendarContainerWidth="35rem"
                calendarContainerHeight="40rem"
            />,
        );

        cy.get('input').first().click();

        cy.get('body').find('[data-active="true"]').last().should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);
        cy.matchImageSnapshot();
    });

    it('controlled datepicker: set date', () => {
        cy.viewport(750, 700);
        mount(<ControlledDemo />);

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024 ');
        cy.get('button').first().click();

        cy.matchImageSnapshot();
    });

    it('controlled datepicker: reset date', () => {
        cy.viewport(750, 700);
        mount(<ControlledDemo />);

        cy.get('input').first().click().type('06142024');
        cy.get('.popover-root').should('be.visible');
        cy.get('input').first().should('have.value', '06/14/2024 ');
        cy.get('button.reset-btn').click();
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });
});
