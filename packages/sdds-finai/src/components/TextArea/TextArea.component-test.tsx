import React from 'react';
// @ts-ignore
import { IconEye } from 'override/_Icon';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { TextAreaProps } from '@salutejs/plasma-new-hope';

const views = ['default', 'positive', 'warning', 'negative'];

describe('sdds-finai: TextArea', () => {
    const TextArea = getComponent<TextAreaProps>('TextArea');

    const Demo = (props: any) => (
        <TextArea
            placeholder="Placeholder"
            defaultValue="Value"
            label="Label"
            leftHelper="Left helper"
            rightHelper="Right helper"
            contentRight={<IconEye color="inherit" size="s" />}
            size="s"
            {...props}
        />
    );

    it(':view appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <Demo appearance="viewMode" key={view} view={view} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
