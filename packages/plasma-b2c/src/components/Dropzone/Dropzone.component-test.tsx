import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const title = 'Click to upload';
const description = 'or drag and drop files here';
const longTitle = 'Click to upload or drag and drop files here';
const longDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

describe('plasma-b2c: Dropzone', () => {
    const Dropzone = getComponent('Dropzone');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone title={title} description={description} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_iconPlacement', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone title={title} description={description} iconPlacement="left" />
                <PadMe />
                <Dropzone title={title} description={description} iconPlacement="top" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_width, _size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone title={title} description={description} iconPlacement="left" width={400} height={280} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_stretch', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone title={title} description={description} stretch />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('title, description truncate', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone
                    title={longTitle}
                    description={longDescription}
                    iconPlacement="left"
                    width={200}
                    height={280}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('title, description as ReactNode', () => {
        const Title = () => {
            return <span>TITLE AS REACT NODE</span>;
        };

        const Description = () => {
            return <span>Description AS REACT NODE</span>;
        };

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone
                    title={<Title />}
                    description={<Description />}
                    iconPlacement="left"
                    width={200}
                    height={280}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropzone title={title} description={description} disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
