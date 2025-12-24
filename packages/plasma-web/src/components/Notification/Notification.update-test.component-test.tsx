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

    it('[PLASMA-T1663] Notification: size=xs, view=default, withCloseIcon, withLeftIcon, iconPlacement=top, layout=vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1663',
                                    size: 'xs',
                                    view: 'default',
                                    title: 'Title!',
                                    layout: 'vertical',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: true,
                                    iconPlacement: 'top',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                5000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('PLASMA-T1663');
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

    it('[PLASMA-T1664] Notification: size=xxs, view=positive, withLeftIcon, iconPlacement=left, layout=vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1664',
                                    size: 'xxs',
                                    view: 'positive',
                                    title: 'Title!',
                                    layout: 'vertical',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: false,
                                    iconPlacement: 'left',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                5000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('PLASMA-T1664');
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

    it('[PLASMA-T1665] Notification: size=xs, view=warning, showCloseIcon, withLeftIcon, iconPlacement=left, layout=horizontal', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1665',
                                    size: 'xs',
                                    view: 'warning',
                                    title: 'Title!',
                                    layout: 'horizontal',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: true,
                                    iconPlacement: 'left',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                5000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('PLASMA-T1665');
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

    it('[PLASMA-T1666] Notification: size=xxs, view=negative, layout=horizontal', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1666',
                                    size: 'xxs',
                                    view: 'negative',
                                    title: 'Title!',
                                    layout: 'horizontal',
                                    showCloseIcon: false,
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                5000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('PLASMA-T1666');
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

    it('[PLASMA-T2217] Notification: size=xs, view=info, showCloseIcon, withLeftIcon, iconPlacement=top, layout=vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T2217',
                                    size: 'xs',
                                    view: 'info',
                                    title: 'Title!',
                                    layout: 'vertical',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: true,
                                    customCloseIcon: <IconTrash color="inherit" />,
                                    iconPlacement: 'top',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="xs" stretching="filled" />
                                            <Button text="Second" size="xs" stretching="filled" />
                                        </ButtonsWrapper>
                                    ),
                                },
                                5000,
                            );
                        }}
                    />
                    <SpaceMe />
                    <Button
                        text="Закрыть"
                        onClick={() => {
                            closeNotification('PLASMA-T2217');
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
});
