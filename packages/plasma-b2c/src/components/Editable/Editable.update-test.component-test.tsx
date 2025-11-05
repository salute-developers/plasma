import React, { ComponentProps } from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { IconEdit } from '@salutejs/plasma-icons';

import * as typographyVariants from '../Typography/Typography';

const iconSizes = ['s', 'xs'] as const;

describe('plasma-b2c: Editable', () => {
    const Editable = getComponent('Editable');

    type EditableDemoProps = ComponentProps<typeof Editable> & {
        iconSize: typeof iconSizes[number];
        componentName: keyof typeof typographyVariants;
        defaultValue: string;
        placeholder: string;
    };

    function Demo(props: EditableDemoProps) {
        const {
            iconSize = 's',
            componentName = 'BodyL',
            defaultValue = 'Document 1',
            placeholder = 'placeholder',
        } = props;

        return (
            <Editable
                iconSize={iconSize}
                icon={<IconEdit size={iconSize} color="inherit" />}
                textComponent={typographyVariants[componentName]}
                value={defaultValue}
                placeholder={placeholder}
            />
        );
    }

    it('[PLASMA-T1638] Editable: iconSize=s, componentName=BodyL, defaultValue, placeholder', () => {
        mount(
            <CypressTestDecorator>
                <div id="outer">outer text</div>

                <Demo componentName="BodyL" iconSize="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();

        cy.get('svg').click();
        cy.get('.editable-text-box').type('{backspace}');
        cy.get('#outer').click();

        cy.matchImageSnapshot('plasma-b2c Editable -- [PLASMA-T1638] Editable: on click outside');
    });

    it('[PLASMA-T1639] Editable: iconSize=xs, componentName=DsplM', () => {
        mount(
            <CypressTestDecorator>
                <Demo componentName="DsplM" iconSize="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1640] Editable: iconSize=s, componentName=TextS', () => {
        mount(
            <CypressTestDecorator>
                <Demo componentName="TextS" iconSize="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1641] Editable: iconSize=xs, componentName=H4', () => {
        mount(
            <CypressTestDecorator>
                <Demo componentName="H4" iconSize="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1642] Editable: without value', () => {
        mount(
            <CypressTestDecorator>
                <Demo componentName="BodyL" iconSize="s" defaultValue="" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1643] Editable: without placeholder', () => {
        mount(
            <CypressTestDecorator>
                <div id="outer">outer text</div>

                <Demo componentName="BodyL" iconSize="s" placeholder="" />
            </CypressTestDecorator>,
        );

        cy.get('svg').click();
        cy.get('.editable-text-box').type('{backspace}');
        cy.get('#outer').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1644] Editable: without value, without placeholder', () => {
        mount(
            <CypressTestDecorator>
                <Demo componentName="BodyL" iconSize="s" defaultValue="" placeholder="" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
