import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    PadMe,
    SpaceMe,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { LinkButtonProps } from './LinkButton.types';

const componentExists = hasComponent('LinkButton');
const describeFn = getDescribeFN('LinkButton');

const Icon = <IconPlasma color="inherit" />;

const componentProps = {
    text: 'LinkButton',
};

getBaseVisualTests({
    component: 'LinkButton',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('LinkButton', () => {
    const LinkButton = componentExists ? getComponent<LinkButtonProps>('LinkButton') : () => null;

    it('with loader', () => {
        mount(<LinkButton text="LinkButton" isLoading />);

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<LinkButton text="LinkButton" disabled />);

        cy.matchImageSnapshot();
    });

    it('with content', () => {
        mount(
            <>
                <LinkButton text="with Icon" contentLeft={Icon} />
                <PadMe />
                <LinkButton text="with Icon" contentRight={Icon} />
                <PadMe />
                <LinkButton text="with Icon" contentLeft={Icon} contentRight={Icon} />
                <PadMe />
                <LinkButton contentLeft={Icon} contentRight={Icon}>
                    text as children
                </LinkButton>
                <PadMe />
                <LinkButton contentLeft={Icon} contentRight={Icon}>
                    {Icon}
                </LinkButton>
                <SpaceMe />
                <LinkButton>{Icon}</LinkButton>
                <SpaceMe />
                <LinkButton contentLeft={Icon} />
                <SpaceMe />
                <LinkButton contentRight={Icon} />
            </>,
        );

        cy.matchImageSnapshot();
    });
});
