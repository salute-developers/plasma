import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDisclosureRight } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    #plasma-popup-root * {
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
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('layout', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'layout-first',
                                    title: 'Title',
                                    children: 'Text',
                                    layout: 'vertical',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="xs" stretch />
                                            <Button text="Second" size="xs" stretch />
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
                        }}
                    />
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
                                            <Button text="First" size="xs" stretch />
                                            <Button text="Second" size="xs" stretch />
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
                                            <Button text="First" size="xs" stretch />
                                            <Button text="Second" size="xs" stretch />
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
                                    size: 'xxs',
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
                        }}
                    />
                    <SpaceMe />
                    <Button
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
        cy.get('button').contains('Закрыть').click();
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
                                            <Button text="First" size="xs" stretch />
                                            <Button text="Second" size="xs" stretch />
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
        cy.get('.notification-close-icon').click();
        cy.get('#plasma-popup-root').should('be.empty');
    });
});
