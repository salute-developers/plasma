import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-giga: Link', () => {
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
