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
import { classes } from './Notification.tokens';

type NotificationsProviderProps = React.PropsWithChildren<{
    placement?: NotificationPlacement;
}>;

type AddNotification = (notification: NotificationProps, timeout?: number | null) => string;
type CloseNotification = (id: string) => void;
type UseNotifications = () => {
    addNotification: AddNotification;
    closeNotification: CloseNotification;
};

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
const useNotificationsExists = hasComponent('useNotifications');
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
    const addNotification = addNotificationExists ? getComponent<AddNotification>('addNotification') : () => '';
    const closeNotification = closeNotificationExists
        ? getComponent<CloseNotification>('closeNotification')
        : () => undefined;
    const useNotifications = useNotificationsExists
        ? ((getComponent('useNotifications') as unknown) as UseNotifications)
        : () => ({ addNotification: () => '', closeNotification: () => undefined });
    const Button = buttonExists ? getComponent<ButtonProps>('Button') : () => null;

    const ScopedNotificationControls = () => {
        const {
            addNotification: addScopedNotification,
            closeNotification: closeScopedNotification,
        } = useNotifications();

        return (
            <>
                <Button
                    text="Open scoped notification"
                    onClick={() => {
                        addScopedNotification(
                            {
                                id: 'scoped-provider',
                                title: 'Scoped notification',
                            },
                            null,
                        );
                    }}
                />
                <Button text="Close scoped notification" onClick={() => closeScopedNotification('scoped-provider')} />
            </>
        );
    };

    const TimedNotificationsControls = () => {
        const { addNotification: addScopedNotification } = useNotifications();

        return (
            <Button
                text="Open timed notifications"
                onClick={() => {
                    addScopedNotification({ title: 'First timed notification' }, 1000);
                    addScopedNotification({ title: 'Second timed notification' }, 3000);
                }}
            />
        );
    };

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

    it('closes notifications according to their individual timeouts', () => {
        mount(
            <NotificationsProvider>
                <TimedNotificationsControls />
            </NotificationsProvider>,
        );

        cy.clock();
        cy.get('button').contains('Open timed notifications').click();
        cy.contains('First timed notification').should('be.visible');
        cy.contains('Second timed notification').should('be.visible');

        cy.tick(1500);
        cy.contains('First timed notification').should('not.exist');
        cy.contains('Second timed notification').should('be.visible');

        cy.tick(2000);
        cy.contains('Second timed notification').should('not.exist');
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

    it('renders notification once with multiple providers', () => {
        mount(
            <>
                <NotificationsProvider>
                    <Button
                        text="Open notification"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'multiple-providers',
                                    title: 'Notification with multiple providers',
                                },
                                null,
                            );
                        }}
                    />
                </NotificationsProvider>
                <NotificationsProvider>
                    <div />
                </NotificationsProvider>
            </>,
        );

        cy.get('button').contains('Open notification').click();
        cy.get('.popup-base-root').should('have.length', 1);

        closeNotification('multiple-providers');
        cy.get('.popup-base-root').should('not.exist');
    });

    it('uses the nearest provider configuration with multiple providers', () => {
        mount(
            <>
                <NotificationsProvider placement="bottom-left">
                    <div />
                </NotificationsProvider>
                <NotificationsProvider placement="center">
                    <ScopedNotificationControls />
                </NotificationsProvider>
            </>,
        );

        cy.get('button').contains('Open scoped notification').click();
        cy.get('.popup-base-root').should('have.length', 1);
        cy.get(`.${classes.notificationLeftToRightAnimation}`).should('not.exist');

        cy.get('button').contains('Close scoped notification').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('renders notification component', () => {
        mount(<Notification title="Title">Text</Notification>);
        cy.contains('Title').should('be.visible');
    });
});
