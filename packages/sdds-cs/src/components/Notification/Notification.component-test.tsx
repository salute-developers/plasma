import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconDisclosureRight } from '@salutejs/plasma-icons';

import { Button as ButtonCS } from '../Button';

import { NotificationsProvider as NotificationsProviderCS } from '.';

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation-duration: 0 !important;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 6px;
`;

describe('sdds-cs: Notification', () => {
    const NotificationsProvider = getComponent('NotificationsProvider') as typeof NotificationsProviderCS;
    const Button = getComponent('Button') as typeof ButtonCS;
    const addNotification = getComponent('addNotification');
    const closeNotification = getComponent('closeNotification');

    const showNotifications = () => {
        addNotification(
            {
                id: 'layout-first',
                title: 'Title',
                children: 'Text',
                layout: 'vertical',
                actions: (
                    <ButtonsWrapper>
                        <Button text="First" size="s" stretching="filled" />
                        <Button text="Second" size="s" stretching="filled" />
                    </ButtonsWrapper>
                ),
            },
            80000,
        );
        addNotification(
            {
                id: 'layout-second',
                title: 'Title',
                children: 'Text',
                layout: 'horizontal',
                icon: <IconDisclosureRight />,
                actions: (
                    <ButtonsWrapper>
                        <Button text="First" size="s" />
                        <Button text="Second" size="s" />
                    </ButtonsWrapper>
                ),
            },
            80000,
        );
    };

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'test-notification-success',
                                    title: 'Success!',
                                    children: 'Sucess!',
                                    size: 'xs',
                                },
                                80000,
                            );
                            addNotification(
                                {
                                    id: 'test-notification-warning',
                                    title: 'Warning!',
                                    children: 'Warning!',
                                },
                                80000,
                            );
                            addNotification(
                                {
                                    id: 'test-notification-error',
                                    title: 'Error!',
                                    children: 'Error!',
                                },
                                80000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('test-notification-success');
                            closeNotification('test-notification-warning');
                            closeNotification('test-notification-error');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('layout', () => {
        mount(
            <CypressTestDecorator>
                <NotificationsProvider>
                    <Button text="Открыть" onClick={showNotifications} />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('layout-first');
                            closeNotification('layout-second');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('placement: bottom-left', () => {
        mount(
            <CypressTestDecorator>
                <NotificationsProvider placement="bottom-left">
                    <Button text="Открыть" onClick={showNotifications} />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('layout-first');
                            closeNotification('layout-second');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('icon positions', () => {
        mount(
            <CypressTestDecorator>
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'icon-first',
                                    title: 'Title',
                                    children: 'Text',
                                    iconPlacement: 'top',
                                    icon: <IconDisclosureRight />,
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                80000,
                            );
                            addNotification(
                                {
                                    id: 'icon-second',
                                    title: 'Title',
                                    children: 'Text',
                                    iconPlacement: 'left',
                                    icon: <IconDisclosureRight />,
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                80000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        id="close"
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('icon-first');
                            closeNotification('icon-second');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('#close').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('long text', () => {
        mount(
            <CypressTestDecorator>
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'long-text',
                                    title: 'LonglonglonglonglonglonglonglongTitle!',
                                    children: 'longlonglonglonglonglonglonglongText!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                80000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('long-text');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('oneline horizontal', () => {
        mount(
            <CypressTestDecorator>
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'oneline',
                                    title: 'Title!',
                                    layout: 'horizontal',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" />
                                            <Button text="Second" size="s" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                80000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('oneline');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('close on icon', () => {
        mount(
            <CypressTestDecorator>
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'close-icon',
                                    title: 'Title!',
                                    layout: 'horizontal',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" />
                                            <Button text="Second" size="s" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                80000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('close-icon');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.get('button.notification-close-icon').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('timeouts', () => {
        const fiveSecNotification = '5sec notification';
        const infiniteNotification = 'Infinite notification';

        mount(
            <CypressTestDecorator>
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
                    <Button
                        text="close infinite notification"
                        onClick={() => {
                            closeNotification('infinite');
                        }}
                    />
                </NotificationsProvider>
            </CypressTestDecorator>,
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
        cy.tick(500); // wait close animation
        cy.get('.popup-base-root').should('not.exist');

        cy.get('button').contains('infinite').click();
        cy.tick(6000);
        cy.contains(infiniteNotification).should('be.visible');
        cy.get('button').contains('close infinite notification').click({ force: true });
        cy.tick(500); // wait close animation
        cy.get('.popup-base-root').should('not.exist');
    });
});
