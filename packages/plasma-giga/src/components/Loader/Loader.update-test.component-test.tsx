import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Loader as LoaderGIGA } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>
        <StandardTypoStyle />
        {children}
    </CypressTestDecorator>
);

describe('plasma-giga: Loader', () => {
    const Loader = getComponent('Loader') as typeof LoaderGIGA;
    const Button = getComponent('Button');

    it('[PLASMA-T2396] Loader: type=spinner, view=default, size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="spinner" view="default" size="l" hasOverlay={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2397] Loader: type=spinner, view=accent, size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="spinner" view="accent" size="m" hasOverlay={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2398] Loader: type=spinner, view=secondary, size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="spinner" view="secondary" size="s" hasOverlay={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2399] Loader: type=spinner, view=warning, size=l', () => {
        const LoaderWithButton = () => {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <CypressTestDecoratorWithTypo>
                    {isOpen && <Loader type="spinner" view="warning" size="l" hasOverlay withBlur />}
                    <Button id="button" text="show loader" view="default" onClick={() => setIsOpen(true)} />
                </CypressTestDecoratorWithTypo>
            );
        };
        mount(<LoaderWithButton />);
        cy.get('button').contains('show loader').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2400] Loader: type=spinner, view=positive', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="spinner" view="positive" hasOverlay withBlur={false} overlayColor="yellow" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2401] Loader: type=spinner, view=negative', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="spinner" view="negative" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2402] Loader: type=spinner, view=info', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="spinner" view="info" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2403] Loader: type=progress, view=default, progressSize=xxl, strokeSize=8', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="default" size="xxl" value={50} strokeSize={8} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2404] Loader: type=progress, view=accent, progressSize=xl, strokeSize=6', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="accent" size="xl" value={50} strokeSize={6} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2405] Loader: type=progress, view=secondary, progressSize=l, strokeSize=4', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="secondary" size="l" value={50} strokeSize={4} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2406] Loader: type=progress, view=warning, progressSize=m, strokeSize=2', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="warning" size="m" value={50} strokeSize={2} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2407] Loader: type=progress, view=positive, progressSize=s, hasTrack=false', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="positive" size="s" hasTrack={false} value={50} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2408] Loader: type=progress, view=negative, progressSize=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="negative" size="xs" value={50} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2409] Loader: type=progress, view=info, progressSize=xxs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Loader type="progress" view="info" size="xxs" value={50} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
