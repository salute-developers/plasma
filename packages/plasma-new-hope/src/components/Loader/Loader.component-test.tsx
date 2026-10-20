import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { LoaderProps } from './Loader.types';

const componentExists = hasComponent('Loader');
const describeFn = getDescribeFN('Loader');

const componentProps = {
    value: 50,
};

getBaseVisualTests({
    component: 'Loader',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Loader', () => {
    const Loader = componentExists ? getComponent<LoaderProps>('Loader') : () => null;

    it('Loader: progress, strokeWidth', () => {
        mount(
            <>
                <Loader type="progress" size="xxs" view="default" strokeSize={1} value={50} />
                <PadMe />
                <Loader type="progress" size="xs" view="secondary" strokeSize={2} value={50} />
                <PadMe />
                <Loader type="progress" size="s" view="accent" strokeSize={3} value={50} />
                <PadMe />
                <Loader type="progress" size="m" view="positive" strokeSize={4} value={50} />
                <PadMe />
                <Loader type="progress" size="l" view="warning" strokeSize={5} value={50} />
                <PadMe />
                <Loader type="progress" size="xl" view="negative" strokeSize={6} value={50} />
                <PadMe />
                <Loader type="progress" size="xxl" view="info" strokeSize={7} value={50} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('Loader: customOverlayColor', () => {
        mount(<Loader type="progress" hasOverlay overlayColor="gray" value={50} />);

        cy.matchImageSnapshot();
    });
});
