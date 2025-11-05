import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { LinkButton as LinkButtonINSOL } from '.';

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl'] as const;
const views = ['default', 'accent', 'secondary', 'positive', 'warning', 'negative'] as const;

const Icon = () => <IconDownload color="inherit" />;

describe('sdds-insol: LinkButton', () => {
    const LinkButton = getComponent('LinkButton') as typeof LinkButtonINSOL;

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton text="Hello Plasma" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <LinkButton view={view} text={`LinkButton_view_${view}`} contentLeft={<Icon />} />
                        <SpaceMe />
                        <LinkButton view={view} text="_disabled" disabled contentLeft={<Icon />} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <LinkButton size={size} view="default" text={`LinkButton_size_${size}`} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with Icon', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with Loader', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <LinkButton size={size} view="default" text={`LinkButton_size_${size}`} isLoading />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
