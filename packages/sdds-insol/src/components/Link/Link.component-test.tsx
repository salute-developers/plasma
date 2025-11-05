import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('sdds-insol: Link', () => {
    const Link = getComponent('Link');

    // TODO: why we need global styles on body ?

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Link href="https://plasma.sberdevices.ru">Hello Plasma</Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
