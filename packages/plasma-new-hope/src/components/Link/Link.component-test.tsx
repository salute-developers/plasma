import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { LinkProps } from './Link.types';

const componentExists = hasComponent('Link');
const describeFn = getDescribeFN('Link');

const url = 'https://plasma.sberdevices.ru';
const text = 'Hello Plasma';

getBaseVisualTests({
    component: 'Link',
    componentProps: { href: url },
    children: text,
    configPropsForMatrix: ['view'],
});

getBaseVisualTests({
    component: 'Link',
    componentProps: { href: url, disabled: true },
    children: text,
    configPropsForMatrix: ['view'],
    propsForName: ['disabled'],
});

describeFn('Link', () => {
    const Link = componentExists ? getComponent<LinkProps>('Link') : () => null;

    it('underline', () => {
        mount(
            <>
                <Link href={url} underline="none">
                    Without underline
                </Link>
                <PadMe />
                <Link href={url} underline="always">
                    Always underline
                </Link>
            </>,
        );

        cy.matchImageSnapshot();
    });
});
