import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { DropzoneProps } from './Dropzone.types';

const componentExists = hasComponent('Dropzone');
const describeFn = getDescribeFN('Dropzone');

const title = 'Click to upload';
const description = 'or drag and drop files here';
const longTitle = 'Click to upload or drag and drop files here';
const longDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const componentProps = {
    title,
    description,
};

getBaseVisualTests({
    component: 'Dropzone',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Dropzone', () => {
    const Dropzone = componentExists ? getComponent<DropzoneProps>('Dropzone') : () => null;

    it('iconPlacement', () => {
        mount(
            <>
                <Dropzone title={title} description={description} iconPlacement="left" />
                <PadMe />
                <Dropzone title={title} description={description} iconPlacement="top" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('width, height, without title, without description', () => {
        mount(
            <>
                <Dropzone description={description} iconPlacement="left" width={100} height={250} />
                <PadMe />
                <Dropzone title={title} iconPlacement="top" width={250} height={100} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('stretch', () => {
        mount(<Dropzone title={title} description={description} stretch />);

        cy.matchImageSnapshot();
    });

    it('title, description truncate', () => {
        mount(
            <Dropzone title={longTitle} description={longDescription} iconPlacement="left" width={200} height={280} />,
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
            <Dropzone title={<Title />} description={<Description />} iconPlacement="left" width={200} height={280} />,
        );

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<Dropzone title={title} description={description} disabled />);

        cy.matchImageSnapshot();
    });
});
