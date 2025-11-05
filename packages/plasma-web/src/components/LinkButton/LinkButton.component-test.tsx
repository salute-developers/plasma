import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { LinkButton as LinkButtonB2C } from '.';

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl'] as const;
const views = ['default', 'accent', 'secondary', 'positive', 'warning', 'negative'] as const;

const Icon = () => <IconDownload color="inherit" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: LinkButton', () => {
    const LinkButton = getComponent('LinkButton') as typeof LinkButtonB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <LinkButton text="Hello Plasma" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {views.map((view) => (
                    <>
                        <LinkButton view={view} text={`LinkButton_view_${view}`} contentLeft={<Icon />} />
                        <SpaceMe />
                        <LinkButton view={view} text="_disabled" disabled contentLeft={<Icon />} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <LinkButton size={size} view="default" text={`LinkButton_size_${size}`} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with Icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <LinkButton text="with Icon" contentLeft={<Icon />} />
                <PadMe />
                <LinkButton text="with Icon" contentRight={<Icon />} />
                <PadMe />
                <LinkButton text="with Icon" contentLeft={<Icon />} contentRight={<Icon />} />
                <PadMe />
                <LinkButton contentLeft={<Icon />} contentRight={<Icon />}>
                    text as children
                </LinkButton>
                <PadMe />
                <LinkButton contentLeft={<Icon />} contentRight={<Icon />}>
                    <Icon />
                </LinkButton>
                <SpaceMe />
                <LinkButton>
                    <Icon />
                </LinkButton>
                <SpaceMe />
                <LinkButton contentLeft={<Icon />} />
                <SpaceMe />
                <LinkButton contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with Loader', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <LinkButton size={size} view="default" text={`LinkButton_size_${size}`} isLoading />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
