import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe, PadMe } from '@salutejs/plasma-cy-utils';
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
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="success"
                    height="90px"
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="warning"
                    height="90px"
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="error"
                    height="90px"
                />
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
                <TextArea size="xl" height="90px" {...propsDefault} />
                <SpaceMe />
                <TextArea size="l" height="90px" {...propsDefault} />
                <SpaceMe />
                <TextArea size="m" height="90px" {...propsDefault} />
                <SpaceMe />
                <TextArea size="s" height="90px" {...propsDefault} />
                <SpaceMe />
                <TextArea size="xs" height="90px" {...propsDefault} />
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
                <TextArea size="xl" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="l" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="m" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="s" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="xs" height="90px" {...props} />
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
                <TextArea size="xl" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="l" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="m" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="s" height="90px" {...props} />
                <SpaceMe />
                <TextArea size="xs" height="90px" {...props} />
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
                                    height="90px"
                                    hintText="Подсказка к полю"
                                    hintTrigger="click"
                                    {...props}
                                />
                                <PadMe />
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
