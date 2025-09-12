import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Avatar as AvatarB2c } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const AvatarImage = 'images/avatar.png';

const sizes = ['xxl', 'l', 'm', 's'] as const;
const extraPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
const counterViews = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'] as const;
const badgeViews = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'] as const;

describe('plasma-web: Avatar', () => {
    const Avatar = getComponent('Avatar') as FC<ComponentProps<typeof AvatarB2c>>;

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
                {sizes.map((size) => (
                    <>
                        <Avatar size={size} name="Иван Фадеев" />
                        <PadMe />
                    </>
                ))}
                <Avatar size="fit" name="Иван Фадеев" />
                <PadMe />
                {sizes.map((size) => (
                    <>
                        <Avatar
                            size={size}
                            name="Иван Фадеев"
                            type="counter"
                            count={33}
                            counterView="positive"
                            hasExtra
                        />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_hasExtra,type=counter,extraPlacement', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {extraPlacements.map((placement) => (
                    <>
                        <Avatar
                            size="l"
                            name="Иван Фадеев"
                            extraPlacement={placement}
                            type="counter"
                            count={33}
                            counterView="positive"
                            hasExtra
                        />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_hasExtra,type=counter,counterView', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {counterViews.map((counterView) => (
                    <>
                        <Avatar
                            size="l"
                            name="Иван Фадеев"
                            type="counter"
                            count={33}
                            counterView={counterView}
                            hasExtra
                        />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_hasExtra,type=badge,badgeView', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {badgeViews.map((badgeView) => (
                    <>
                        <Avatar size="l" name="Иван Фадеев" type="badge" text="15" badgeView={badgeView} hasExtra />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('shape=rounded,status=active', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Avatar size="xxl" shape="rounded" name="Иван Фадеев" status="active" url={AvatarImage} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });
});
