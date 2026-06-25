import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    skipForPackages,
    PadMe,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';
import styled from 'styled-components';

import type { ModalProps } from '../Modal/Modal.types';

import type { TimePickerProps } from './TimePicker.types';

const componentExists = hasComponent('TimePicker');
const componentModalExists = hasComponent('Modal');
const componentPopupProviderExists = hasComponent('PopupProvider');
const describeFn = getDescribeFN('TimePicker');
const itSkip = skipForPackages(['plasma-b2c', 'plasma-web', 'sdds-dfa']);
const itSkipHint = skipForPackages(['plasma-b2c', 'plasma-web', 'sdds-cs']);
const itSkipClear = skipForPackages([
    'plasma-b2c',
    'plasma-giga',
    'plasma-homeds',
    'plasma-web',
    'sdds-bizcom',
    'sdds-cs',
    'sdds-dfa',
    'sdds-insol',
    'sdds-netology',
    'sdds-platform-ai',
    'sdds-sbcom',
    'sdds-scan',
    'sdds-serv',
]);

const openTimePicker = () => {
    cy.viewport(580, 800);
    cy.get('input').first().click();
};

getBaseVisualTests({
    component: 'TimePicker',
    componentProps: {
        value: '00:00:00',
        columnsQuantity: 3,
    },
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: openTimePicker,
});

const Content = styled.div`
    background: var(--surface-solid-card);
    box-shadow: var(--shadow-down-soft-s);
    padding: 1rem;
    box-sizing: border-box;
`;

describeFn('TimePicker', () => {
    const TimePicker = componentExists ? getComponent<TimePickerProps>('TimePicker') : () => null;
    const Modal = componentModalExists ? getComponent<ModalProps>('Modal') : () => null;
    const PopupProvider = componentPopupProviderExists ? getComponent('PopupProvider') : () => null;

    it('with seconds', () => {
        mount(<TimePicker columnsQuantity={3} value="00:00:00" />);

        cy.matchImageSnapshot();
    });

    it('contentLeft, contentRight', () => {
        mount(
            <TimePicker
                contentLeft={<IconPlasma size="s" />}
                contentRight={<IconPlasma size="s" />}
                value="00:00:00"
            />,
        );

        cy.matchImageSnapshot();
    });

    it('disableFlip', () => {
        cy.viewport(400, 400);

        mount(
            <div style={{ width: '300px' }}>
                <TimePicker placeholder="Placeholder" placement="right" disableFlip />
            </div>,
        );

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('dropdownWidth=35rem, dropdownHeight=10rem', () => {
        cy.viewport(580, 300);
        mount(<TimePicker dropdownWidth="35rem" dropdownHeight="10rem" />);

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('readOnly', () => {
        mount(<TimePicker value="00:00:00" readonly />);

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<TimePicker value="00:00:00" disabled />);

        cy.matchImageSnapshot();
    });

    it('input time', () => {
        cy.viewport(580, 900);
        mount(<TimePicker />);

        cy.get('input').first().click().type('1430');
        cy.get('input').first().should('have.value', '14:30');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('select time from popover', () => {
        cy.viewport(580, 900);
        mount(<TimePicker />);

        cy.get('input').first().click();
        cy.contains('14').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('min and max', () => {
        cy.viewport(580, 900);
        mount(<TimePicker value="15:00:00" columnsQuantity={3} min="12:00:00" max="18:00:00" />);

        cy.get('input').first().click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('min: disabled hour has aria-disabled and is not selectable', () => {
        cy.viewport(580, 900);
        mount(<TimePicker columnsQuantity={3} min="14:00:00" />);

        cy.get('input').first().click();

        cy.get('[data-value="10"][data-column="hours"]').first().should('have.attr', 'aria-disabled', 'true');
        cy.get('[data-value="10"][data-column="hours"]').first().click();
        cy.get('input').first().should('not.have.value', '10:00:00');
    });

    itSkipHint('with hint', () => {
        const cases = [
            { labelPlacement: 'outer' },
            { labelPlacement: 'inner' },
            { labelPlacement: 'inner', hintTargetPlacement: 'inner' },
        ] as const;

        mount(
            <>
                {cases.map((props) => (
                    <div style={{ margin: '0 3rem' }}>
                        <TimePicker
                            placeholder="Placeholder"
                            label="Title"
                            hintText="Подсказка к полю"
                            hintTrigger="click"
                            hintSize="s"
                            {...props}
                        />
                        <PadMe />
                    </div>
                ))}
            </>,
        );

        cy.get('.popover-wrapper').first().click();

        cy.matchImageSnapshot();
    });

    itSkip('TimePicker inside Modal: popover opens below (TimePicker at top of viewport)', () => {
        cy.viewport(580, 400);

        mount(
            <PopupProvider>
                <Modal opened placement="top">
                    <Content>
                        <TimePicker usePortal dropdownHeight="250px" zIndex="9999" />
                    </Content>
                </Modal>
            </PopupProvider>,
        );

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    itSkip('TimePicker inside Modal: popover opens above (TimePicker at bottom of viewport)', () => {
        cy.viewport(580, 400);

        mount(
            <PopupProvider>
                <div
                    style={{
                        width: '580px',
                        height: '400px',
                    }}
                />
                <Modal opened placement="bottom">
                    <Content>
                        <TimePicker usePortal dropdownHeight="250px" zIndex="9999" />
                    </Content>
                </Modal>
            </PopupProvider>,
        );

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    itSkipClear('appearance=clear, hasClearDivider', () => {
        mount(
            <>
                <TimePicker appearance="clear" value="00:00:00" label="Лейбл" leftHelper="Подсказка к полю" />
                <PadMe />
                <TimePicker
                    appearance="clear"
                    hasClearDivider
                    value="00:00:00"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    itSkipClear('appearance=clear, contentLeft, contentRight', () => {
        mount(
            <>
                <TimePicker appearance="clear" value="00:00:00" contentLeft={<IconPlasma size="s" />} />
                <PadMe />
                <TimePicker
                    appearance="clear"
                    hasClearDivider
                    value="00:00:00"
                    contentRight={<IconPlasma size="s" />}
                />
                <PadMe />
                <TimePicker
                    appearance="clear"
                    value="00:00:00"
                    contentLeft={<IconPlasma size="s" />}
                    contentRight={<IconPlasma size="s" />}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    itSkipClear('appearance=clear, valueError, valueSuccess', () => {
        mount(
            <>
                <TimePicker appearance="clear" hasClearDivider value="00:00:00" valueError leftHelper="Ошибка" />
                <PadMe />
                <TimePicker appearance="clear" hasClearDivider value="00:00:00" valueSuccess leftHelper="Успех" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('renders minutes with multiplicity 5', () => {
        cy.viewport(580, 900);
        mount(<TimePicker value="00:00" multiplicityMinutes={5} />);

        cy.get('input').first().click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('renders minutes with multiplicity 15', () => {
        cy.viewport(580, 900);
        mount(<TimePicker value="00:15" multiplicityMinutes={15} />);

        cy.get('input').first().click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('renders seconds with multiplicity 20', () => {
        cy.viewport(580, 900);
        mount(<TimePicker value="00:00:00" columnsQuantity={3} multiplicitySeconds={20} />);

        cy.get('input').first().click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('rounds value to multiplicity 5', () => {
        cy.viewport(580, 900);
        mount(<TimePicker value="00:14" multiplicityMinutes={5} />);

        cy.get('input').first().click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.matchImageSnapshot();
    });

    it('min: hour 12 is not disabled when min="12:05:05" (12:59:59 satisfies min)', () => {
        cy.viewport(580, 900);
        mount(<TimePicker columnsQuantity={3} min="12:05:05" />);

        cy.get('input').first().click();

        cy.get('[data-value="12"][data-column="hours"]').first().should('have.attr', 'aria-disabled', 'false');
    });

    it('min: hours before min boundary are disabled when min="12:05:05"', () => {
        cy.viewport(580, 900);
        mount(<TimePicker columnsQuantity={3} min="12:05:05" />);

        cy.get('input').first().click();

        cy.get('[data-value="11"][data-column="hours"]').first().should('have.attr', 'aria-disabled', 'true');
        cy.get('[data-value="00"][data-column="hours"]').first().should('have.attr', 'aria-disabled', 'true');
    });

    it('min: clicking hour 12 auto-clamps minutes and seconds to min boundary', () => {
        cy.viewport(580, 900);
        mount(<TimePicker columnsQuantity={3} min="12:05:05" />);

        cy.get('input').first().click();
        cy.get('[data-value="12"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '12:05:05');
    });

    it('min: clicking hour above min does not change minutes and seconds', () => {
        cy.viewport(580, 900);
        mount(<TimePicker columnsQuantity={3} min="12:05:05" value="13:10:20" />);

        cy.get('input').first().click();
        cy.get('[data-value="13"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '13:10:20');
    });

    it('min with multiplicityMinutes: clicking hour 12 clamps minutes to nearest multiple above min', () => {
        cy.viewport(580, 900);
        // min.mm=3, multiplicityMinutes=5 → ceil(3/5)*5 = 5
        mount(<TimePicker columnsQuantity={3} min="12:03:00" multiplicityMinutes={5} />);

        cy.get('input').first().click();
        cy.get('[data-value="12"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '12:05:00');
    });

    it('min with multiplicitySeconds: clicking minute 05 clamps seconds to nearest multiple above min', () => {
        cy.viewport(580, 900);

        // min.ss=5, multiplicitySeconds=10 → ceil(5/10)*10 = 10
        const TestCase = () => {
            const [value, setValue] = React.useState('12:00:00');
            return (
                <TimePicker
                    columnsQuantity={3}
                    min="12:05:05"
                    multiplicitySeconds={10}
                    value={value}
                    onChange={(ev: unknown) => setValue((ev as { value?: string })?.value ?? '')}
                />
            );
        };
        mount(<TestCase />);

        cy.get('input').first().click();
        cy.get('[data-value="05"][data-column="minutes"]').first().click();

        cy.get('input').first().should('have.value', '12:05:10');
    });

    it('min: clicking minute auto-clamps seconds to min boundary', () => {
        cy.viewport(580, 900);

        const TestCase = () => {
            const [value, setValue] = React.useState('12:00:00');
            return (
                <TimePicker
                    columnsQuantity={3}
                    min="12:05:05"
                    value={value}
                    onChange={(ev: unknown) => setValue((ev as { value?: string })?.value ?? '')}
                />
            );
        };
        mount(<TestCase />);

        cy.get('input').first().click();
        cy.get('[data-value="05"][data-column="minutes"]').first().click();

        cy.get('input').first().should('have.value', '12:05:05');
    });

    it('max: clicking hour clamps minutes when minutes exceed max boundary', () => {
        cy.viewport(580, 900);

        // click minute 30 first (uncontrolled) → "00:30:00", then hour 12 triggers clamp
        // mm=30 > max.mm=25 → floor(25/1)*1=25; recalc 12:25:00 < max → ss stays 0
        mount(<TimePicker columnsQuantity={3} max="12:25:30" />);

        cy.get('input').first().click();
        cy.get('[data-value="30"][data-column="minutes"]').first().click();
        cy.get('[data-value="12"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '12:25:00');
    });

    it('max: clicking hour clamps seconds when minutes match max boundary', () => {
        cy.viewport(580, 900);

        // build state mm=25,ss=35 via clicks, then click hour 12 → ss clamped to floor(30/1)*1=30
        mount(<TimePicker columnsQuantity={3} max="12:25:30" />);

        cy.get('input').first().click();
        cy.get('[data-value="35"][data-column="seconds"]').first().click();
        cy.get('[data-value="25"][data-column="minutes"]').first().click();
        cy.get('[data-value="12"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '12:25:30');
    });

    it('max with multiplicityMinutes: clicking hour clamps minutes to nearest multiple below max', () => {
        cy.viewport(580, 900);

        // click minute 30 first (uncontrolled) → "00:30:00", then hour 12 triggers clamp
        // max.mm=27, multiplicityMinutes=5 → floor(27/5)*5=25
        mount(<TimePicker columnsQuantity={3} max="12:27:00" multiplicityMinutes={5} />);

        cy.get('input').first().click();
        cy.get('[data-value="30"][data-column="minutes"]').first().click();
        cy.get('[data-value="12"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '12:25:00');
    });

    it('min without seconds: hour 12 is not disabled when min="12:05"', () => {
        cy.viewport(580, 900);
        mount(<TimePicker min="12:05" />);

        cy.get('input').first().click();

        cy.get('[data-value="12"][data-column="hours"]').first().should('have.attr', 'aria-disabled', 'false');
        cy.get('[data-value="11"][data-column="hours"]').first().should('have.attr', 'aria-disabled', 'true');
    });

    it('min without seconds: clicking hour 12 clamps minutes to min boundary', () => {
        cy.viewport(580, 900);
        mount(<TimePicker min="12:05" />);

        cy.get('input').first().click();
        cy.get('[data-value="12"][data-column="hours"]').first().click();

        cy.get('input').first().should('have.value', '12:05');
    });
});
