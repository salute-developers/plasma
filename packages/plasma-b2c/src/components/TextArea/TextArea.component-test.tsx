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
                    appearance="clear"
                    hasDivider
                />
                <SpaceMe />
                <TextArea
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="warning"
                    appearance="clear"
                    hasDivider
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="error"
                    appearance="clear"
                    hasDivider
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size :empty', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="xl" {...propsDefault} />
                <SpaceMe />
                <TextArea size="l" {...propsDefault} />
                <SpaceMe />
                <TextArea size="m" {...propsDefault} />
                <SpaceMe />
                <TextArea size="s" {...propsDefault} />
                <SpaceMe />
                <TextArea size="xs" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.viewport(500, 726);
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextArea size="xl" {...props} />
                <SpaceMe />
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.viewport(500, 726);
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
                <TextArea size="xl" {...props} />
                <SpaceMe />
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.viewport(500, 726);
        cy.matchImageSnapshot();
    });

    describe('with hint', () => {
        const sizes = ['xs', 's', 'm', 'l', 'xl'];

        const cases = [{ labelPlacement: 'outer' }, { labelPlacement: 'inner' }];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecorator>
                        {cases.map((props) => (
                            <div style={{ margin: '0 3rem' }}>
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
