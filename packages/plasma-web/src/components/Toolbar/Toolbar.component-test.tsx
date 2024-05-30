import React, { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEdit } from '@salutejs/plasma-icons';

import { IconButton } from '../IconButton';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const sizes = ['xs', 's', 'm', 'l'];

const ExampleButton = (props: ComponentProps<typeof IconButton>) => (
    <IconButton {...props} view="clear">
        <IconEdit />
    </IconButton>
);

describe('plasma-web: Toolbar', () => {
    const Toolbar = getComponent('Toolbar');
    const ToolbarDivider = getComponent('ToolbarDivider');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('without shadow', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with divider', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
