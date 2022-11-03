import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

describe('plasma-core: TextField', () => {
    const TextField = getComponent('TextField');

    function Demo({ maxLength }) {
        const [value, setValue] = React.useState('');

        return (
            <TextField
                size="m"
                maxLength={maxLength}
                placeholder="Placeholder"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                value={value}
                helperText="Helper text"
            />
        );
    }

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('default: handle size', () => {
        function TextFieldStub(props) {
            return <TextField {...props} caption="Label" value="Input value" helperText="Helper text" />;
        }

        mount(
            <CypressTestDecorator>
                <TextFieldStub size="l" />
                <SpaceMe />
                <TextFieldStub size="m" />
                <SpaceMe />
                <TextFieldStub size="s" />
                <SpaceMe />
                <TextFieldStub size="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('handle size with placeholder and content', () => {
        function TextFieldStub(props) {
            return (
                <TextField
                    {...props}
                    caption="Label"
                    value="Input value"
                    helperText="Helper text"
                    placeholder="Placeholder"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            );
        }

        mount(
            <CypressTestDecorator>
                <TextFieldStub size="l" />
                <SpaceMe />
                <TextFieldStub size="m" />
                <SpaceMe />
                <TextFieldStub size="s" />
                <SpaceMe />
                <TextFieldStub size="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('handle size with placeholder', () => {
        function TextFieldStub(props) {
            return (
                <TextField
                    {...props}
                    caption="Label"
                    value="Input value"
                    helperText="Helper text"
                    placeholder="Placeholder"
                />
            );
        }

        mount(
            <CypressTestDecorator>
                <TextFieldStub size="l" />
                <SpaceMe />
                <TextFieldStub size="m" />
                <SpaceMe />
                <TextFieldStub size="s" />
                <SpaceMe />
                <TextFieldStub size="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_maxLength', () => {
        mount(
            <CypressTestDecorator>
                <Demo maxLength={10} />
            </CypressTestDecorator>,
        );

        cy.get('input').type('More then ten symbols');

        cy.matchImageSnapshot();
    });

    it(':empty', () => {
        mount(
            <CypressTestDecorator>
                <TextField placeholder="Placeholder" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':focused', () => {
        mount(
            <CypressTestDecorator>
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecorator>,
        );

        cy.get('input:first').focus();
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecorator>
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':readOnly', () => {
        mount(
            <CypressTestDecorator>
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" readOnly />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':success, :warning, :error', () => {
        mount(
            <CypressTestDecorator>
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" status="success" />
                <SpaceMe />
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" status="warning" />
                <SpaceMe />
                <TextField value="Value" placeholder="Placeholder" helperText="Helper text" status="error" />
                <SpaceMe />
                <TextField placeholder="Placeholder" status="success" />
                <SpaceMe />
                <TextField placeholder="Placeholder" status="warning" />
                <SpaceMe />
                <TextField placeholder="Placeholder" status="error" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('content', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextField
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextField
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
