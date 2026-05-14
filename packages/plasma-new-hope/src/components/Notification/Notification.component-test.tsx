import React from 'react';
import styled from 'styled-components';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    SpaceMe,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma, IconTrash } from 'override/_Icon';

import type { NotificationPlacement, NotificationProps } from './Notification.types';

type NotificationsProviderProps = React.PropsWithChildren<{
    placement?: NotificationPlacement;
}>;

type AddNotification = (notification: NotificationProps & { id: string }, timeout: number | null) => void;
type CloseNotification = (id: string) => void;

type ButtonProps = {
    text: string;
    size?: string;
    stretching?: string;
    id?: string;
    onClick?: () => void;
};

const componentExists = hasComponent('Notification');
const providerExists = hasComponent('NotificationsProvider');
const addNotificationExists = hasComponent('addNotification');
const closeNotificationExists = hasComponent('closeNotification');
const buttonExists = hasComponent('Button');
const describeFn = getDescribeFN('Notification');

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 0.375rem;
`;

const textContent = 'JavaScript frameworks are an essential part of modern front-end web development!';

const componentProps = {
    title: 'Title',
    children: 'Text',
};

getBaseVisualTests({
    component: 'Notification',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'layout'],
});

describeFn('Notification', () => {
    const Notification = componentExists ? getComponent<NotificationProps>('Notification') : () => null;
    const NotificationsProvider = providerExists
        ? getComponent<NotificationsProviderProps>('NotificationsProvider')
        : () => null;
    const addNotification = addNotificationExists ? getComponent<AddNotification>('addNotification') : () => undefined;
    const closeNotification = closeNotificationExists
        ? getComponent<CloseNotification>('closeNotification')
        : () => undefined;
    const Button = buttonExists ? getComponent<ButtonProps>('Button') : () => null;

    const renderActions = (size = 'xs', stretching?: string) => (
        <ButtonsWrapper>
            <Button text="First" size={size} stretching={stretching} />
            <Button text="Second" size={size} stretching={stretching} />
        </ButtonsWrapper>
    );

    it('placement: bottom-left', () => {
        mount(
            <NotificationsProvider placement="bottom-left">
                <Button
                    text="Открыть"
                    onClick={() => {
                        addNotification(
                            {
                                id: 'placement-bottom-left',
                                title: 'Title',
                                children: 'Text',
                                layout: 'horizontal',
                                icon: <IconPlasma />,
                                actions: renderActions('s'),
                            },
                            5000,
                        );
                    }}
                />
                <SpaceMe />
                <Button text="Закрыть" onClick={() => closeNotification('placement-bottom-left')} />
            </NotificationsProvider>,
        );

        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('icon positions, show close icon', () => {
        mount(
            <NotificationsProvider>
                <Button
                    text="Открыть"
                    onClick={() => {
                        addNotification(
                            {
                                id: 'icon-top',
                                title: 'Title',
                                iconPlacement: 'top',
                                icon: <IconPlasma />,
                                showCloseIcon: true,
                                children: textContent,
                                actions: renderActions('s', 'filled'),
                            },
                            5000,
                        );
                        addNotification(
                            {
                                id: 'icon-left',
                                title: 'Title',
                                iconPlacement: 'left',
                                icon: <IconPlasma />,
                                showCloseIcon: false,
                                children: textContent,
                                actions: renderActions('s', 'filled'),
                            },
                            5000,
                        );
                    }}
                />
                <SpaceMe />
                <Button
                    id="close"
                    text="Закрыть"
                    onClick={() => {
                        closeNotification('icon-top');
                        closeNotification('icon-left');
                    }}
                />
            </NotificationsProvider>,
        );

        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('#close').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('long text, custom close icon', () => {
        mount(
            <NotificationsProvider>
                <Button
                    text="Открыть"
                    onClick={() => {
                        addNotification(
                            {
                                id: 'long-text',
                                title:
                                    'Title! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                children:
                                    'Text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                customCloseIcon: <IconTrash color="inherit" />,
                                actions: renderActions('s', 'filled'),
                            },
                            5000,
                        );
                    }}
                />
                <SpaceMe />
                <Button text="Закрыть" onClick={() => closeNotification('long-text')} />
            </NotificationsProvider>,
        );

        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('timeouts', () => {
        const fiveSecNotification = '5sec notification';
        const infiniteNotification = 'Infinite notification';

        mount(
            <NotificationsProvider>
                <Button
                    text="5sec"
                    onClick={() => {
                        addNotification(
                            {
                                id: '5sec',
                                title: fiveSecNotification,
                                layout: 'horizontal',
                            },
                            5000,
                        );
                    }}
                />
                <Button
                    text="infinite"
                    onClick={() => {
                        addNotification(
                            {
                                id: 'infinite',
                                title: infiniteNotification,
                                layout: 'horizontal',
                            },
                            null,
                        );
                    }}
                />
                <SpaceMe />
                <Button text="close infinite notification" onClick={() => closeNotification('infinite')} />
            </NotificationsProvider>,
        );

        cy.clock();
        cy.get('button').contains('5sec').click();
        cy.contains(fiveSecNotification).should('be.visible');
        cy.tick(6000);
        cy.contains(fiveSecNotification).should('not.exist');

        cy.get('button').contains('infinite').click();
        cy.tick(6000);
        cy.contains(infiniteNotification).should('be.visible');
        cy.get('button.notification-close-icon').click({ force: true });
        cy.tick(500);
        cy.get('.popup-base-root').should('not.exist');

        cy.get('button').contains('infinite').click();
        cy.tick(6000);
        cy.contains(infiniteNotification).should('be.visible');
        cy.get('button').contains('close infinite notification').click({ force: true });
        cy.tick(500);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('close notification by action', () => {
        mount(
            <NotificationsProvider>
                <Button
                    text="Открыть"
                    onClick={() => {
                        addNotification(
                            {
                                id: 'close-by-action',
                                title: 'Title!',
                                showCloseIcon: true,
                                children: textContent,
                                actions: renderActions('s', 'filled'),
                            },
                            5000,
                        );
                    }}
                />
                <SpaceMe />
                <Button text="Закрыть" onClick={() => closeNotification('close-by-action')} />
            </NotificationsProvider>,
        );

        cy.get('button').contains('Открыть').click();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('close notification by icon', () => {
        mount(
            <NotificationsProvider>
                <Button
                    text="Открыть"
                    onClick={() => {
                        addNotification(
                            {
                                id: 'close-by-icon',
                                title: 'Title!',
                                showCloseIcon: true,
                                children: textContent,
                                actions: renderActions('s', 'filled'),
                            },
                            5000,
                        );
                    }}
                />
            </NotificationsProvider>,
        );

        cy.get('button').contains('Открыть').click();
        cy.get('button.notification-close-icon').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('renders notification component', () => {
        mount(<Notification title="Title">Text</Notification>);
        cy.contains('Title').should('be.visible');
    });
});
