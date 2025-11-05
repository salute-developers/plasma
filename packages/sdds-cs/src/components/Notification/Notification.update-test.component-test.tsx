import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDisclosureRight, IconTrash } from '@salutejs/plasma-icons';

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

    it('[PLASMA-T1663] Notification: size=xs, withCloseIcon, withLeftIcon, iconPlacement=top, layout=vertical', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1663',
                                    size: 'xs',
                                    title: 'Title!',
                                    layout: 'vertical',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: true,
                                    iconPlacement: 'top',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
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
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1664] Notification: size=xxs, withLeftIcon, iconPlacement=left, layout=vertical', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1664',
                                    size: 'xxs',
                                    title: 'Title!',
                                    layout: 'vertical',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: false,
                                    iconPlacement: 'left',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
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
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1665] Notification: size=xs, showCloseIcon, withLeftIcon, iconPlacement=left, layout=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1665',
                                    size: 'xs',
                                    title: 'Title!',
                                    layout: 'horizontal',
                                    icon: <IconDisclosureRight />,
                                    showCloseIcon: true,
                                    iconPlacement: 'left',
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
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
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1666] Notification: size=xxs, layout=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T1666',
                                    size: 'xxs',
                                    title: 'Title!',
                                    layout: 'horizontal',
                                    showCloseIcon: false,
                                    children:
                                        'JavaScript frameworks are an essential part of modern front-end web development!',
                                    actions: (
                                        <ButtonsWrapper>
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
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
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T2217] Notification: size=xs, showCloseIcon, withLeftIcon, iconPlacement=top, layout=vertical', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NotificationsProvider>
                    <Button
                        text="Открыть"
                        onClick={() => {
                            addNotification(
                                {
                                    id: 'PLASMA-T2217',
                                    size: 'xs',
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
                                            <Button text="First" size="s" stretching="filled" />
                                            <Button text="Second" size="s" stretching="filled" />
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
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Открыть').click();
        cy.matchImageSnapshot();
        cy.get('button').contains('Закрыть').click();
        cy.get('.popup-base-root').should('not.exist');
    });
});
