import React, { ComponentProps } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEdit } from '@salutejs/plasma-icons';

import { IconButton } from '../IconButton';

const sizes = ['xs', 's', 'm', 'l'];

const ExampleButton = (props: ComponentProps<typeof IconButton>) => (
    <IconButton {...props} view="clear">
        <IconEdit />
    </IconButton>
);

describe('sdds-insol: Toolbar', () => {
    const Toolbar = getComponent('Toolbar');
    const ToolbarDivider = getComponent('ToolbarDivider');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Toolbar size={size}>
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                        </Toolbar>
                        <SpaceMe />
                    </>
                ))}
                <PadMe />
                {sizes.map((size) => (
                    <>
                        <Toolbar size={size} orientation="horizontal">
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                        </Toolbar>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('without shadow', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Toolbar size={size} hasShadow={false}>
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                        </Toolbar>
                        <SpaceMe />
                    </>
                ))}
                <PadMe />
                {sizes.map((size) => (
                    <>
                        <Toolbar size={size} hasShadow={false} orientation="horizontal">
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                        </Toolbar>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with divider', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Toolbar size={size}>
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ToolbarDivider />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                        </Toolbar>
                        <SpaceMe />
                    </>
                ))}
                <PadMe />
                {sizes.map((size) => (
                    <>
                        <Toolbar size={size} orientation="horizontal">
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                            <ToolbarDivider />
                            <ExampleButton size={size} />
                            <ExampleButton size={size} />
                        </Toolbar>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
