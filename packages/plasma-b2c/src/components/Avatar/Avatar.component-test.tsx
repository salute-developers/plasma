import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import React, { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const AvatarImage = 'images/avatar.png';

describe('plasma-b2c: Avatar', () => {
    const Avatar = getComponent('Avatar');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Avatar name="Иван Фадеев" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with Avatar url', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Avatar url={AvatarImage} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('with status', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Avatar status="active" name="Иван Фадеев" />
                <PadMe />
                <Avatar status="inactive" name="Иван Фадеев" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
