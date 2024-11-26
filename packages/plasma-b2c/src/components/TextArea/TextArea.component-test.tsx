import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

describe('plasma-b2c: TextArea', () => {
    const TextArea = getComponent('TextArea');

    const propsDefault = {
        placeholder: 'Оставьте ваш комментарий [placeholder]',
        leftHelper: 'Максимум 300 символов',
        rightHelper: '125 слов',
    };

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

    it(':clear, :success, :warning, :error', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    value="Value"
                    label="Placeholder"
                    labelPlacement="inner"
                    helperText="Helper text"
                    status="success"
                    clear
                    hasDivider
                />
                <SpaceMe />
                <TextArea placeholder="Placeholder" helperText="Helper text" status="warning" clear hasDivider />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="error"
                    clear
                    hasDivider
                />
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

    it('defaultValue', () => {
        mount(
            <CypressTestDecorator>
                <TextArea placeholder="Placeholder" defaultValue="Default Value" leftHelper="Helper text left" />
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

    describe('_required', () => {
        const sizes = ['xs', 's', 'm', 'l'];

        const cases = [
            { required: true, labelPlacement: 'outer' },
            { required: true, requiredPlacement: 'left', labelPlacement: 'outer' },
            { required: true, labelPlacement: 'inner' },
            { required: true, requiredPlacement: 'left', labelPlacement: 'inner' },
        ];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecorator>
                        {cases.map((props) => (
                            <div style={{ margin: '0 1rem' }}>
                                <TextArea
                                    value="Value"
                                    placeholder="Placeholder"
                                    label="Title"
                                    size={size}
                                    height="2.5rem"
                                    {...props}
                                />
                                <SpaceMe />
                            </div>
                        ))}
                    </CypressTestDecorator>,
                );

                cy.matchImageSnapshot();
            });
        });
    });

    it('_size :empty', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="l" {...propsDefault} />
                <SpaceMe />
                <TextArea size="m" {...propsDefault} />
                <SpaceMe />
                <TextArea size="s" {...propsDefault} />
                <SpaceMe />
                <TextArea size="xs" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size with content', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            contentRight: <IconEye color="inherit" size="s" />,
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    describe('_required', () => {
        const sizes = ['xs', 's', 'm', 'l'];

        const cases = [
            { required: true, labelPlacement: 'outer' },
            { required: true, requiredPlacement: 'left', labelPlacement: 'outer' },
            { required: true, labelPlacement: 'inner' },
            { required: true, requiredPlacement: 'left', labelPlacement: 'inner' },
        ];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecorator>
                        {cases.map((props) => (
                            <div style={{ margin: '0 1rem' }}>
                                <TextArea
                                    value="Value"
                                    placeholder="Placeholder"
                                    label="Title"
                                    size={size}
                                    height="2.5rem"
                                    {...props}
                                />
                                <SpaceMe />
                            </div>
                        ))}
                    </CypressTestDecorator>,
                );

                cy.matchImageSnapshot();
            });
        });
    });

    describe('with hint', () => {
        const sizes = ['xs', 's', 'm', 'l'];

        const cases = [{ labelPlacement: 'outer' }, { labelPlacement: 'inner' }];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecorator>
                        {cases.map((props) => (
                            <div style={{ margin: '0 1rem' }}>
                                <TextArea
                                    value="Value"
                                    placeholder="Placeholder"
                                    label="Title"
                                    size={size}
                                    height="2.5rem"
                                    hintText="Подсказка к полю"
                                    hintTrigger="click"
                                    {...props}
                                />
                                <SpaceMe />
                            </div>
                        ))}
                    </CypressTestDecorator>,
                );

                cy.get('.popover-wrapper').first().click();

                cy.matchImageSnapshot();
            });
        });
    });
});
