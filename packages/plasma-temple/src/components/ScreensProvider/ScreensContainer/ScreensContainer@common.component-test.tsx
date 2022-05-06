import React from 'react';
import { Button, Header } from '@salutejs/plasma-ui';

import { startScreensApp, sendAction } from '../../../testHelpers/testRenderHelpers';
import { useScreens } from '../hooks/useScreens';

interface State {
    page1: null;
    page2: {
        text?: string;
    } | null;
    page3: null;
}

const Page1: React.FC = () => {
    const { pushScreen, pushHistory, goToScreen } = useScreens<State, 'page1'>();
    return (
        <>
            <Header title="Page 1" />
            <Button onClick={() => pushScreen('page2')} data-cy="open-second">
                Open Next Page (pushScreen)
            </Button>
            <Button
                onClick={() => pushHistory('page2', { text: 'some text' })}
                data-cy="open-second-history"
                style={{ marginTop: '0.5rem' }}
            >
                Open Next Page (pushHistory)
            </Button>
            <Button onClick={() => goToScreen('page2')} data-cy="open-second-goto" style={{ marginTop: '0.5rem' }}>
                Open Next Page (goToScreen)
            </Button>
        </>
    );
};

const Page2: React.FC = () => {
    const { state, pushScreen, popScreen } = useScreens<State, 'page2'>();
    return (
        <>
            <Header title="Page 2" />
            <p>{state?.text}</p>
            <Button onClick={popScreen} data-cy="go-back">
                Open Prev Page
            </Button>
            <Button onClick={() => pushScreen('page3')} data-cy="go-next" style={{ marginTop: '0.5rem' }}>
                Open Next Page
            </Button>
        </>
    );
};

const Page3: React.FC = () => {
    const { goToScreen, popScreen } = useScreens<State>();
    return (
        <>
            <Header title="Page 3" />
            <Button onClick={popScreen} data-cy="go-back">
                Open Next Page
            </Button>
            <Button onClick={() => goToScreen('page1')} data-cy="go-to-first" focused>
                Open First Page
            </Button>
        </>
    );
};

describe('ScreensContainer', () => {
    beforeEach(() => {
        startScreensApp({
            screens: [
                {
                    name: 'page1',
                    component: <Page1 />,
                },
                {
                    name: 'page2',
                    component: <Page2 />,
                },
                {
                    name: 'page3',
                    component: <Page3 />,
                },
            ],
            onStart: ({ pushScreen }) => {
                pushScreen('page1');
            },
        });
    });

    it('render first screen', () => {
        cy.matchImageSnapshot();
    });

    it('navigate to next screen', () => {
        cy.get('[data-cy="open-second"]').click();
        cy.matchImageSnapshot();
    });

    it('navigate to next screen with state', () => {
        cy.get('[data-cy="open-second-history"]').click();
        cy.matchImageSnapshot();
    });

    it('navigate to next screen via goto', () => {
        cy.get('[data-cy="open-second-goto"]').click();
        cy.matchImageSnapshot();
    });

    it('back to first screen', () => {
        cy.get('[data-cy="open-second"]').click();
        cy.get('[data-cy="go-back"]').click();
        cy.matchImageSnapshot();
    });

    it('runtime switch character', () => {
        sendAction({
            type: 'character',
            character: {
                id: 'joy',
                gender: 'female',
                name: 'Джой',
                appeal: 'no_official',
            },
        });

        cy.matchImageSnapshot();
    });

    it('runtime switch theme', () => {
        sendAction({
            type: 'theme',
            theme: {
                name: 'light',
            },
        });

        cy.matchImageSnapshot();
    });
});
