import React from 'react';
import { CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-web: Typography', () => {
    const DsplS = getComponent('DsplS');
    const BodyM = getComponent('BodyM');
    const H2 = getComponent('H2');
    const TextS = getComponent('TextS');
    const Headline5 = getComponent('Headline5');
    const Subtitle = getComponent('Subtitle');

    it('DsplS', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <DsplS>Hello DsplS</DsplS>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('BodyM', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <BodyM>Hello BodyM</BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('H2', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <H2>Hello H2</H2>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('TextS', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <TextS>Hello TextS</TextS>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

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

    it('_noWrap', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>

                <div style={{ width: '200px', border: '1px solid red' }}>
                    <Headline5>Текст на русском языкe, свойство noWrap выключено</Headline5>
                    <Subtitle>Text in English, noWrap is false</Subtitle>
                    <SpaceMe />
                    <H2>Текст на русском языкe, свойство noWrap выключено</H2>
                    <BodyM>Text in English, noWrap is false</BodyM>
                </div>
                <PadMe />
                <div style={{ width: '200px', border: '1px solid red' }}>
                    <Headline5 noWrap>Текст на русском языкe, свойство noWrap выключено</Headline5>
                    <Subtitle noWrap>Text in English, noWrap is false</Subtitle>
                    <SpaceMe />
                    <H2 noWrap>Текст на русском языкe, свойство noWrap выключено</H2>
                    <BodyM noWrap>Text in English, noWrap is false</BodyM>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
