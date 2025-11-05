import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import React, { ComponentProps, FC } from 'react';
import { IconEye } from '@salutejs/plasma-icons';

import { Avatar as AvatarB2c } from '.';

const Icon = () => <IconEye color="inherit" size="xs" />;

const AvatarImage = 'images/avatar.png';

describe('sdds-insol: Avatar', () => {
    const Avatar = getComponent('Avatar') as FC<ComponentProps<typeof AvatarB2c>>;

    it('[PLASMA-1430] Avatar: size=xxl, status=active, with Avatar url', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="xxl" name="Иван Фадеев" status="active" url={AvatarImage} />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-5103] Avatar: size=xxl, shape=rounded, status=active, with Avatar url', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="xxl" shape="rounded" name="Иван Фадеев" status="active" url={AvatarImage} />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1431] Avatar: size=l, status=inactive, without Avatar url', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="l" name="Иван Фадеев" status="inactive" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1432] Avatar: size=m', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="m" name="Иван Фадеев" status="active" url={AvatarImage} />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1433] Avatar: size=s', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="s" name="Иван Фадеев" status="active" url={AvatarImage} />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1516] Avatar: size=fit, scalable', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="fit" name="Иван Фадеев" status="active" url={AvatarImage} isScalable />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1892] Avatar: size=xxl, hasExtra, extraPlacement=top-right, type=badge, badgeView=default, with text, pilled, enableContentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="top-right"
                    type="badge"
                    badgeView="default"
                    text="Text"
                    pilled
                    contentLeft={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1893] Avatar: size=l, hasExtra, extraPlacement=top-left, type=badge, badgeView=accent, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="l"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="top-left"
                    type="badge"
                    badgeView="accent"
                    text="Text"
                    contentRight={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1894] Avatar: size=m, hasExtra, extraPlacement=bottom-right, type=badge, badgeView=positive, without text', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="m"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="bottom-right"
                    type="badge"
                    badgeView="positive"
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1895] Avatar: size=m, hasExtra, extraPlacement=bottom-left, type=badge, badgeView=warning', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="m"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="bottom-left"
                    type="badge"
                    badgeView="warning"
                    text="Text"
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1896] Avatar: size=xxl, hasExtra, type=badge, badgeView=negative', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="badge"
                    badgeView="negative"
                    text="Text"
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1897] Avatar: size=xxl, hasExtra, type=badge, badgeView=dark', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="badge"
                    badgeView="dark"
                    text="Text"
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1898] Avatar: size=xxl, hasExtra, type=badge, badgeView=light', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="badge"
                    badgeView="light"
                    text="Text"
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1899] Avatar: size=xxl, hasExtra, type=badge, customColor, customBackgroundColor', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="badge"
                    text="Text"
                    customColor="cyan"
                    customBackgroundColor="magenta"
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1900] Avatar: size=xxl, hasExtra, extraPlacement=top-right, type=counter, counterView=default, count=5, maxCount=5', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="top-right"
                    type="counter"
                    counterView="default"
                    count={5}
                    maxCount={5}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1901] Avatar: size=l, hasExtra, extraPlacement=top-left, type=counter, counterView=accent, count=5, maxCount=10', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="l"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="top-left"
                    type="counter"
                    counterView="accent"
                    count={5}
                    maxCount={10}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1902] Avatar: size=m, hasExtra, extraPlacement=bottom-right, type=counter, counterView=positive, count=5, maxCount=2', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="m"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="bottom-right"
                    type="counter"
                    counterView="positive"
                    count={5}
                    maxCount={2}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1903] Avatar: size=s, hasExtra, extraPlacement=bottom-left, type=counter, counterView=warning', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="s"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    extraPlacement="bottom-right"
                    type="counter"
                    counterView="warning"
                    count={5}
                    maxCount={10}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1904] Avatar: size=xxl, hasExtra, type=counter, counterView=negative', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="counter"
                    counterView="negative"
                    count={5}
                    maxCount={10}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1905] Avatar: size=xxl, hasExtra, type=counter, counterView=dark', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="counter"
                    counterView="dark"
                    count={5}
                    maxCount={10}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1906] Avatar: size=xxl, hasExtra, type=counter, counterView=light', () => {
        mount(
            <CypressTestDecorator>
                <Avatar
                    size="xxl"
                    name="Иван Фадеев"
                    url={AvatarImage}
                    hasExtra
                    type="counter"
                    counterView="light"
                    count={5}
                    maxCount={10}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });
});
