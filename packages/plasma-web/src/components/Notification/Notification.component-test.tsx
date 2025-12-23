import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDisclosureRight, IconTrash } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 6px;
`;

describe('plasma-web: Notification', () => {
    const NotificationsProvider = getComponent('NotificationsProvider');
    const addNotification = getComponent('addNotification');
    const closeNotification = getComponent('closeNotification');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const showNotifications = () => {
        addNotification(
            {
                id: 'layout-first',
                title: 'Title',
                children: 'Text',
                layout: 'vertical',
                actions: (
                    <ButtonsWrapper>
                        <Button text="First" size="xs" stretching="filled" />
                        <Button text="Second" size="xs" stretching="filled" />
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
                        <Button text="First" size="xxs" />
                        <Button text="Second" size="xxs" />
                    </ButtonsWrapper>
                ),
            },
            80000,
        );
    };

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('layout', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('placement: bottom-left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('icon positions', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
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
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('#close').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('long text', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('oneline horizontal', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                                            <Button text="First" size="xxs" />
                                            <Button text="Second" size="xxs" />
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('close on icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                                            <Button text="First" size="xxs" />
                                            <Button text="Second" size="xxs" />
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').contains('Открыть').click();
        cy.get('button.notification-close-icon').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('custom close icon', () => {
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
                                            <Button text="First" size="xxs" />
                                            <Button text="Second" size="xxs" />
                                        </ButtonsWrapper>
                                    ),
                                    customCloseIcon: <IconTrash color="inherit" />,
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
        cy.matchImageSnapshot();
        cy.get('button.notification-close-icon').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('timeouts', () => {
        const fiveSecNotification = '5sec notification';
        const infiniteNotification = 'Infinite notification';

        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
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
