import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import React from 'react';

describe('plasma-b2c: Avatar', () => {
    const Avatar = getComponent('Avatar');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Avatar name="Иван Фадеев" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with Avatar url', () => {
        mount(
            <CypressTestDecorator>
                <Avatar url="https://avatars.githubusercontent.com/u/1813468?v=4" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with status', () => {
        mount(
            <CypressTestDecorator>
                <Avatar status="active" name="Иван Фадеев" />
                <PadMe />
                <Avatar status="inactive" name="Иван Фадеев" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Avatar size="xxl" name="Иван Фадеев" />
                <PadMe />
                <Avatar size="l" name="Иван Фадеев" />
                <PadMe />
                <Avatar size="m" name="Иван Фадеев" />
                <PadMe />
                <Avatar size="s" name="Иван Фадеев" />
                <PadMe />
                <Avatar size="fit" name="Иван Фадеев" />
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
