import React, { useState } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconHelp } from '@salutejs/plasma-icons';
import styled from 'styled-components';

const ConfirmFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
`;

describe('Confirm', () => {
    const Confirm = getComponent('Confirm');
    const Body3 = getComponent('Body3');
    const PopupBaseProvider = getComponent('PopupBaseProvider');

    const title = 'Использовать максимум возможностей?';
    const subtitle = 'Возможно всё.';
    const approveText = 'Да';
    const dismissText = 'Нет';

    const props = {
        title,
        subtitle,
        approveText,
        dismissText,
    };

    const extraContent = (
        <ConfirmFooter>
            <IconHelp />
            <Body3 style={{ paddingLeft: '0.5rem' }}>Дополнительный контент</Body3>
        </ConfirmFooter>
    );

    it('basic', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('withExtraContent', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible extraContent={extraContent} view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('title: white-space: pre-line', () => {
        const { title, ...rest } = props;

        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible title={'Processing new line by \n and this new line'} view="primary" {...rest} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('subtitle: white-space: pre-line', () => {
        const { subtitle, ...rest } = props;

        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm
                        visible
                        subtitle={'Processing new line by \n and this new line'}
                        view="primary"
                        {...rest}
                    />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('button direction: default(horizontal)', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('button direction: vertical', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible buttonsDirection="vertical" view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('button direction: horizontal-reverse', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible buttonsDirection="horizontal-reverse" view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('button direction: vertical-reverse', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible buttonsDirection="vertical-reverse" view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('button direction + reverseButtons', () => {
        mount(
            <CypressTestDecorator>
                <PopupBaseProvider>
                    <Confirm visible reverseButtons buttonsDirection="vertical-reverse" view="primary" {...props} />
                </PopupBaseProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    ['primary', undefined, 'secondary', 'success', 'warning', 'critical'].forEach((view) => {
        it(`_view_${view}`, () => {
            mount(
                <CypressTestDecorator>
                    <PopupBaseProvider>
                        <Confirm visible view={view} {...props} />
                    </PopupBaseProvider>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('__button', () => {
        it('_reverse', () => {
            mount(
                <CypressTestDecorator>
                    <PopupBaseProvider>
                        <Confirm reverseButtons visible view="primary" {...props} />
                    </PopupBaseProvider>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_one', () => {
            mount(
                <CypressTestDecorator>
                    <PopupBaseProvider>
                        <Confirm reverseButtons visible view="primary" {...{ ...props, dismissText: null }} />
                    </PopupBaseProvider>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('_visible', () => {
        const Body1 = getComponent('Body1');

        it('_yes', () => {
            mount(
                <CypressTestDecorator>
                    <PopupBaseProvider>
                        <Confirm visible view="primary" {...props} />
                        <Body1 mt={12}>
                            I have a dream that one day this nation will rise up and live out the true meaning of its
                            creed. We hold these truths to be self-evident that all men are created equal. I have a
                            dream that one day on the red hills of Georgia the sons of former slaves and the sons of
                            former slaveowners will be able to sit down together at the table of brotherhood. I have a
                            dream that one day even the state of Mississippi, a state sweltering with the heat of
                            injustice, sweltering with the heat of oppression, will be transformed into an oasis of
                            freedom and justice. I have a dream...
                        </Body1>
                    </PopupBaseProvider>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_no', () => {
            mount(
                <CypressTestDecorator>
                    <PopupBaseProvider>
                        <Confirm view="primary" {...props} />
                        <Body1 mt={12}>
                            I have a dream that one day this nation will rise up and live out the true meaning of its
                            creed. We hold these truths to be self-evident that all men are created equal. I have a
                            dream that one day on the red hills of Georgia the sons of former slaves and the sons of
                            former slaveowners will be able to sit down together at the table of brotherhood. I have a
                            dream that one day even the state of Mississippi, a state sweltering with the heat of
                            injustice, sweltering with the heat of oppression, will be transformed into an oasis of
                            freedom and justice. I have a dream...
                        </Body1>
                    </PopupBaseProvider>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe(':events', () => {
        const Body1 = getComponent('Body1');
        const Button = getComponent('Button');

        const Interactive = ({ onApproveAction, onDismissAction }) => {
            const [visible, setVisible] = useState(false);

            const onDismiss = () => {
                onDismissAction();
                setVisible(false);
            };

            const onApprove = () => {
                onApproveAction();
                setVisible(false);
            };

            return (
                <PopupBaseProvider>
                    <Button id="show" text="show" onClick={() => setVisible(true)} />
                    <Confirm
                        id="confirm"
                        visible={visible}
                        view="primary"
                        onApprove={onApprove}
                        onDismiss={onDismiss}
                        {...props}
                    />
                    <Body1 mt={12}>
                        I have a dream that one day this nation will rise up and live out the true meaning of its creed.
                        We hold these truths to be self-evident that all men are created equal. I have a dream that one
                        day on the red hills of Georgia the sons of former slaves and the sons of former slaveowners
                        will be able to sit down together at the table of brotherhood. I have a dream that one day even
                        the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the
                        heat of oppression, will be transformed into an oasis of freedom and justice. I have a dream...
                    </Body1>
                </PopupBaseProvider>
            );
        };

        it('onApprove', () => {
            const onApproveAction = cy.spy().as('onApproveAction');
            mount(
                <CypressTestDecorator>
                    <Interactive onApproveAction={onApproveAction} />
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.contains(approveText).click();
            cy.get('@onApproveAction').should('have.been.calledOnce');
        });

        it('onDismiss', () => {
            const onDismissAction = cy.spy().as('onDismissAction');
            mount(
                <CypressTestDecorator>
                    <Interactive onDismissAction={onDismissAction} />
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.contains(dismissText).click();
            cy.get('@onDismissAction').should('have.been.calledOnce');

            cy.get('#show').click();

            cy.contains(dismissText).click();
            cy.get('@onDismissAction').should('have.been.calledTwice');
        });
    });
});
