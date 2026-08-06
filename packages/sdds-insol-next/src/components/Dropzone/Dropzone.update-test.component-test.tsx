import React from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';

const title = 'Click to upload';
const description = 'or drag and drop files here';
const longTitle = 'Click to upload or drag and drop files here, Click to upload or drag and drop files here';
const longDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

describe('sdds-insol: Dropzone', () => {
    const Dropzone = getComponent('Dropzone');

    it('[PLASMA-T1633] Dropzone: iconPlacement=top, width=500, height=500', () => {
        cy.viewport(600, 600);

        mount(
            <CypressTestDecorator>
                <Dropzone title={title} description={description} iconPlacement="top" width="500" height="500" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1634] Dropzone: iconPlacement=left, width=250, height=100, without title', () => {
        mount(
            <CypressTestDecorator>
                <Dropzone description={description} iconPlacement="left" width="250" height="100" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1635] Dropzone: iconPlacement=top, width=100, height=250, without description', () => {
        mount(
            <CypressTestDecorator>
                <Dropzone title={title} iconPlacement="top" width="100" height="250" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1636] Dropzone: iconPlacement=left, width=500, height=500, stretch, without title, without description', () => {
        cy.viewport(600, 600);

        mount(
            <CypressTestDecorator>
                <Dropzone iconPlacement="left" width="500" height="500" stretch />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1637] Dropzone: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Dropzone title={title} description={description} disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1981] Dropzone: title and description truncate', () => {
        mount(
            <CypressTestDecorator>
                <Dropzone
                    title={longTitle}
                    description={longDescription}
                    iconPlacement="top"
                    width={200}
                    height={280}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
