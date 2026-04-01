import React from 'react';
import { mount, getComponent } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

const Content = styled.div`
    background: var(--surface-solid-card);
    box-shadow: var(--shadow-down-soft-s);
    padding: 1rem;
    box-sizing: border-box;
`;

describe('TimePicker', () => {
    const TimePicker = getComponent('TimePicker');
    const Modal = getComponent('ModalBase');
    const PopupProvider = getComponent('PopupBaseProvider');

    it('TimePicker inside Modal: popover opens below (TimePicker at top of viewport)', () => {
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

    it('TimePicker inside Modal: popover opens above (TimePicker at bottom of viewport)', () => {
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
