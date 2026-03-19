import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    skipForPackages,
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
const itSkip = skipForPackages(['plasma-b2c', 'plasma-web']);

const openTimePicker = () => {
    cy.viewport(580, 800);
    cy.get('input').first().realClick();
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

    itSkip('TimePicker inside Modal: popover opens below (TimePicker at top of viewport)', () => {
        cy.viewport(580, 400);

        mount(
            <PopupProvider>
                <Modal opened placement="top">
                    <Content>
                        <TimePicker usePortal dropdownHeight="250px" />
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
                        <TimePicker usePortal dropdownHeight="250px" />
                    </Content>
                </Modal>
            </PopupProvider>,
        );

        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });
});
