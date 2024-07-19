import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-web: Typography', () => {
    const DsplS = getComponent('DsplS');
    const Headline5 = getComponent('Headline5');
    const Subtitle = getComponent('Subtitle');

    it('Headline5', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Headline5>Hello Headline5</Headline5>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('Subtitle', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Subtitle>Hello Subtitle</Subtitle>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with color', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Headline5 color="#3CB371">Green</Headline5>
                <Subtitle color="#F0E68C">Yellow</Subtitle>
                <DsplS color="#FF7F50">Red</DsplS>
                <DsplS color={undefined}>Undefined</DsplS>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
