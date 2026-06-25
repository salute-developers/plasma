import React from 'react';
// @ts-ignore
import { IconPlasma, IconEye } from 'override/_Icon';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { TextFieldProps } from '@salutejs/plasma-new-hope';

const views = ['default', 'positive', 'warning', 'negative'];
const sizes = ['s', 'xs'];

describe('sdds-finai: TextField', () => {
    const TextField = getComponent<TextFieldProps>('TextField');

    const Demo = (props: any) => (
        <TextField
            placeholder="Placeholder"
            value="Value"
            label="Label"
            labelPlacement="outer"
            leftHelper="Helper text"
            rightHelper="Right helper"
            contentLeft={<IconPlasma color="inherit" size="s" />}
            contentRight={<IconEye color="inherit" size="s" />}
            {...props}
        />
    );

    it(':view appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <Demo appearance="viewMode" key={view} view={view} size={sizes[0]} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo appearance="viewMode" key={size} view={views[0]} size={size} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
