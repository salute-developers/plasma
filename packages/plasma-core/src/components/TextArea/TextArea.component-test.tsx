import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

describe('plasma-core: TextArea', () => {
    const TextArea = getComponent('TextArea');

    /*
     * INFO: Необходимо исключить эту ошибку, т.к. это проблема в Cypress:
     * https://github.com/cypress-io/cypress/issues/8418#issuecomment-992564877
     */
    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            if (err.toString().match(/ResizeObserver loop limit exceeded/)) {
                return false;
            }
        });
    });

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':empty', () => {
        mount(
            <CypressTestDecorator>
                <TextArea placeholder="Placeholder" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':focused', () => {
        mount(
            <CypressTestDecorator>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecorator>,
        );

        cy.get('textarea:first').focus();
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecorator>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':success, :warning, :error', () => {
        mount(
            <CypressTestDecorator>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" status="success" />
                <SpaceMe />
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" status="warning" />
                <SpaceMe />
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" status="error" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('resize', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    resize="horizontal"
                    value="horizontal"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <TextArea
                    resize="vertical"
                    value="vertical"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <TextArea
                    resize="both"
                    value="both"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecorator>,
        );

        cy.root().get('textarea').last().invoke('attr', 'style', 'width: 280px; height: 140px;');

        cy.matchImageSnapshot();
    });

    it('custom width and height', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    width={10}
                    height={10}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('contentRight', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextArea
                    value="Very very very very very very very very very very very very long text"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('leftHelper and rightHelper', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text left"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    rightHelper="Helper text right"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text left"
                    rightHelper="Helper text right"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('placeholder with multiline', () => {
        mount(
            <CypressTestDecorator>
                <TextArea width={10} placeholder="Very very long placeholder" leftHelper="Helper text left" />
                <SpaceMe />
                <TextArea
                    width={10}
                    placeholder="Very very long placeholder"
                    leftHelper="Helper text left"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
