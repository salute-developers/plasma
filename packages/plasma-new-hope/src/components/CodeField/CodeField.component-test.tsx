import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { CodeFieldProps } from './CodeField.types';

const componentExists = hasComponent('CodeField');
const describeFn = getDescribeFN('CodeField');

const componentProps = {};

const mockWebOTP = () =>
    cy.window().then((win) => {
        const credentialsGet = cy
            .stub()
            .returns(new Promise<Credential | null>(() => undefined))
            .as('credentialsGet');

        Object.defineProperty(win, 'OTPCredential', {
            configurable: true,
            value: class OTPCredential {},
        });
        Object.defineProperty(win.navigator, 'credentials', {
            configurable: true,
            value: { get: credentialsGet },
        });
    });

getBaseVisualTests({
    component: 'CodeField',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'shape'],
});

describeFn('CodeField', () => {
    const CodeField = componentExists ? getComponent<CodeFieldProps>('CodeField') : () => null;

    it('placeholder', () => {
        mount(
            <>
                <CodeField placeholder="123456" />
                <PadMe />
                <CodeField placeholder="0" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('codeLength', () => {
        mount(
            <>
                <CodeField codeLength={4} />
                <PadMe />
                <CodeField codeLength={5} />
                <PadMe />
                <CodeField codeLength={6} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('caption, captionAlign', () => {
        mount(
            <>
                <CodeField caption="Подпись к CodeField" captionAlign="center" />
                <PadMe />
                <CodeField caption="Подпись к CodeField" captionAlign="left" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('shape', () => {
        mount(
            <>
                <CodeField shape="segmented" />
                <PadMe />
                <CodeField shape="segmented" codeLength={5} />
                <PadMe />
                <CodeField shape="segmented" codeLength={4} />
                <PadMe />
                <CodeField shape="default" />
                <PadMe />
                <CodeField shape="default" codeLength={5} />
                <PadMe />
                <CodeField shape="default" codeLength={4} />
                <PadMe />
            </>,
        );
        cy.matchImageSnapshot();
    });

    describe(':itemErrorBehavior', () => {
        const Demo = ({ itemErrorBehavior }: { itemErrorBehavior: CodeFieldProps['itemErrorBehavior'] }) => {
            return <CodeField itemErrorBehavior={itemErrorBehavior} autoFocus />;
        };

        it('remove-symbol', () => {
            mount(<Demo itemErrorBehavior="remove-symbol" />);

            cy.focused().type('12345q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('remove-symbol blocks input while the first invalid symbol is animated', () => {
            const onChange = cy.stub().as('onChange');

            mount(<CodeField itemErrorBehavior="remove-symbol" autoFocus onChange={onChange} />);

            cy.focused().then(($input) => {
                const input = $input[0] as HTMLInputElement;
                const inputWindow = input.ownerDocument.defaultView;
                const valueSetter = inputWindow
                    ? Object.getOwnPropertyDescriptor(inputWindow.HTMLInputElement.prototype, 'value')?.set
                    : undefined;

                if (!inputWindow || !valueSetter) {
                    throw new Error('Native input APIs are not available');
                }

                valueSetter.call(input, 'q');
                input.dispatchEvent(new inputWindow.Event('input', { bubbles: true }));

                valueSetter.call(input, 'qw');
                input.dispatchEvent(new inputWindow.Event('input', { bubbles: true }));
            });
            cy.get('[data-code-field-item]')
                .eq(0)
                .should(($item) => {
                    expect($item).to.have.class('codefield-item-error');
                    expect($item).to.have.class('codefield-item-error-fade');
                    expect($item).to.have.class('codefield-item-error-animation');

                    const input = $item[0].ownerDocument.querySelector<HTMLInputElement>('[data-code-field-input]');

                    expect(input).to.have.property('readOnly', true);
                });

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.then(() => {
                expect(onChange.args).to.deep.equal([['q'], ['']]);
            });
            cy.focused().should('have.value', '').and('not.have.attr', 'readonly');
        });

        it('keep blocks input while the first invalid symbol is animated', () => {
            const onChange = cy.stub().as('onChange');

            mount(<CodeField itemErrorBehavior="keep" autoFocus onChange={onChange} />);

            cy.focused().then(($input) => {
                const input = $input[0] as HTMLInputElement;
                const inputWindow = input.ownerDocument.defaultView;
                const valueSetter = inputWindow
                    ? Object.getOwnPropertyDescriptor(inputWindow.HTMLInputElement.prototype, 'value')?.set
                    : undefined;

                if (!inputWindow || !valueSetter) {
                    throw new Error('Native input APIs are not available');
                }

                valueSetter.call(input, 'q');
                input.dispatchEvent(new inputWindow.Event('input', { bubbles: true }));

                valueSetter.call(input, 'qw');
                input.dispatchEvent(new inputWindow.Event('input', { bubbles: true }));
            });
            cy.get('[data-code-field-item]')
                .eq(0)
                .should(($item) => {
                    expect($item).to.have.class('codefield-item-error');
                    expect($item).to.have.class('codefield-item-error-animation');
                    expect($item).not.to.have.class('codefield-item-error-fade');

                    const input = $item[0].ownerDocument.querySelector<HTMLInputElement>('[data-code-field-input]');

                    expect(input).to.have.property('readOnly', true);
                });

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.then(() => {
                expect(onChange.args).to.deep.equal([['q']]);
            });
            cy.focused().should('have.value', 'q').and('not.have.attr', 'readonly');
        });

        it('forbid-enter', () => {
            mount(<Demo itemErrorBehavior="forbid-enter" />);

            cy.focused().type('123q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(<Demo itemErrorBehavior="keep" />);

            cy.focused().type('1234q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.get('[data-code-field-item]')
                .eq(4)
                .should('have.class', 'codefield-item-error')
                .find('[data-code-field-item-value]')
                .should('have.class', 'codefield-item-selected');
            cy.matchImageSnapshot();
        });
    });

    describe('codeErrorBehavior', () => {
        const Demo = ({ codeErrorBehavior }: { codeErrorBehavior: CodeFieldProps['codeErrorBehavior'] }) => {
            const [error, setError] = useState(false);
            const onFullCodeEnter = () => setError(true);

            return (
                <CodeField
                    codeErrorBehavior={codeErrorBehavior}
                    isError={error}
                    onFullCodeEnter={onFullCodeEnter}
                    autoFocus
                />
            );
        };

        it('remove-symbol', () => {
            mount(<Demo codeErrorBehavior="remove-code" />);

            cy.focused().type('123456');
            cy.focused().should('have.attr', 'readonly');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.focused().should(($input) => {
                const input = $input[0] as HTMLInputElement;

                expect(input).not.to.have.attr('readonly');
                expect(input.value).to.equal('');
                expect(input.selectionStart).to.equal(0);
                expect(input.selectionEnd).to.equal(0);
            });
            cy.get('[data-code-field-item]').eq(0).find('[data-code-field-caret]').should('exist');
            cy.get('[data-code-field-item]').eq(5).find('[data-code-field-caret]').should('not.exist');
            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(<Demo codeErrorBehavior="keep" />);

            cy.focused().type('123456');
            cy.focused().should('have.attr', 'readonly');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.focused().should('not.have.attr', 'readonly');
            cy.matchImageSnapshot();
        });
    });

    it('delete symbols', () => {
        mount(<CodeField autoFocus />);

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });

    it('renders a single native input for autocomplete', () => {
        mount(<CodeField codeLength={4} name="code" required aria-label="Код из СМС" />);

        cy.get('input').should('have.length', 1);
        cy.get('[data-code-field-input]').should(($input) => {
            expect($input).to.have.attr('autocomplete', 'one-time-code');
            expect($input).to.have.attr('inputmode', 'numeric');
            expect($input).to.have.attr('minlength', '4');
            expect($input).to.have.attr('maxlength', '4');
            expect($input).not.to.have.attr('pattern');
            expect($input).to.have.attr('name', 'code');
            expect($input).to.have.attr('required');
            expect($input).to.have.attr('aria-label', 'Код из СМС');
        });
        cy.get('[data-code-field-item]').should('have.length', 4);
    });

    it('does not use the single-symbol matcher as a native whole-value pattern', () => {
        mount(<CodeField codeLength={4} allowedSymbols="[0-9]" required autoComplete="off" />);

        cy.get('[data-code-field-input]')
            .type('1234')
            .should(($input) => {
                expect(($input[0] as HTMLInputElement).checkValidity()).to.equal(true);
            });
    });

    it('handles a complete value inserted by native autocomplete', () => {
        const onChange = cy.stub().as('onChange');
        const onFullCodeEnter = cy.stub().as('onFullCodeEnter');

        mount(
            <CodeField
                codeLength={4}
                autoComplete="one-time-code"
                onChange={onChange}
                onFullCodeEnter={onFullCodeEnter}
            />,
        );

        cy.get('[data-code-field-input]').then(($input) => {
            const input = $input[0] as HTMLInputElement;
            const ownerWindow = input.ownerDocument.defaultView;

            expect(ownerWindow).not.to.equal(null);

            const valueSetter = Object.getOwnPropertyDescriptor(ownerWindow?.HTMLInputElement.prototype ?? {}, 'value')
                ?.set;
            const inputEvent = input.ownerDocument.createEvent('Event');

            valueSetter?.call(input, '1234');
            inputEvent.initEvent('input', true, true);
            input.dispatchEvent(inputEvent);
        });

        cy.get('[data-code-field-input]').should('have.value', '1234');
        cy.get('[data-code-field-item]').eq(0).should('have.text', '1');
        cy.get('[data-code-field-item]').eq(3).should('have.text', '4');
        cy.get('@onChange').should('have.been.calledOnceWith', '1234');
        cy.get('@onFullCodeEnter').should('have.been.calledOnceWith', '1234');
    });

    it('derives completion state from a controlled value', () => {
        const onFullCodeEnter = cy.stub().as('onFullCodeEnter');

        const Demo = () => {
            const [value, setValue] = useState('');

            return (
                <>
                    <button type="button" onClick={() => setValue('12q4')}>
                        Set invalid code
                    </button>
                    <button type="button" onClick={() => setValue('1234')}>
                        Set valid code
                    </button>
                    <CodeField codeLength={4} value={value} onFullCodeEnter={onFullCodeEnter} />
                </>
            );
        };

        mount(<Demo />);

        cy.contains('button', 'Set invalid code').click();
        cy.get('[data-code-field-input]').should('have.value', '12q4');
        cy.get('@onFullCodeEnter').should('not.have.been.called');

        cy.contains('button', 'Set valid code').click();
        cy.get('[data-code-field-input]').should('have.value', '1234');
        cy.get('@onFullCodeEnter').should('have.been.calledOnceWith', '1234');
    });

    it('does not call onFullCodeEnter again after an unrelated rerender', () => {
        const onFullCodeEnter = cy.stub().as('onFullCodeEnter');

        const Demo = () => {
            const [value, setValue] = useState('');
            const [renderCount, setRenderCount] = useState(0);

            return (
                <>
                    <button type="button" onClick={() => setValue('1234')}>
                        Fill code
                    </button>
                    <button type="button" onClick={() => setRenderCount((count) => count + 1)}>
                        Rerender {renderCount}
                    </button>
                    <CodeField
                        codeLength={4}
                        value={value}
                        autoComplete="off"
                        onFullCodeEnter={(code) => onFullCodeEnter(code)}
                    />
                </>
            );
        };

        mount(<Demo />);

        cy.contains('button', 'Fill code').click();
        cy.get('@onFullCodeEnter').should('have.been.calledOnceWith', '1234');

        cy.contains('button', 'Rerender').click();
        cy.get('@onFullCodeEnter').should('have.been.calledOnceWith', '1234');
    });

    it('shows a caret in the active empty item', () => {
        mount(<CodeField codeLength={4} />);

        cy.get('[data-code-field-input]').focus();
        cy.get('[data-code-field-item]').eq(0).find('[data-code-field-caret]').should('exist');

        cy.get('[data-code-field-input]').type('1');
        cy.get('[data-code-field-item]').eq(0).find('[data-code-field-caret]').should('not.exist');
        cy.get('[data-code-field-item]').eq(1).find('[data-code-field-caret]').should('exist');

        cy.get('[data-code-field-input]').blur();
        cy.get('[data-code-field-caret]').should('not.exist');
    });

    it('shows a caret in the last item when the code is complete', () => {
        mount(<CodeField codeLength={4} autoFocus autoComplete="off" />);

        cy.focused().type('1234');

        cy.get('[data-code-field-input]').should(($input) => {
            const input = $input[0] as HTMLInputElement;

            expect(input.selectionStart).to.equal(4);
            expect(input.selectionEnd).to.equal(4);
        });
        cy.get('[data-code-field-item]').eq(3).find('[data-code-field-caret]').should('exist');
        cy.get('[data-code-field-item-value]').eq(3).should('not.have.class', 'codefield-item-selected');
    });

    it('keeps the visual caret in sync after removing an invalid symbol', () => {
        mount(<CodeField codeLength={4} autoFocus autoComplete="off" />);

        cy.focused().type('12q');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.get('[data-code-field-input]').should(($input) => {
            const input = $input[0] as HTMLInputElement;

            expect(input.value).to.equal('12');
            expect(input.selectionStart).to.equal(2);
        });
        cy.get('[data-code-field-item]').eq(2).find('[data-code-field-caret]').should('exist');
        cy.get('[data-code-field-item]').eq(3).find('[data-code-field-caret]').should('not.exist');
    });

    it('prevents default behavior for forbidden keys', () => {
        mount(<CodeField />);

        cy.get('[data-code-field-input]').then(($input) => {
            const input = $input[0] as HTMLInputElement;

            ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete'].forEach((key) => {
                const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });

                input.dispatchEvent(event);

                expect(event.defaultPrevented, `${key} should be prevented`).to.equal(true);
            });

            const backspaceEvent = new KeyboardEvent('keydown', {
                key: 'Backspace',
                bubbles: true,
                cancelable: true,
            });

            input.dispatchEvent(backspaceEvent);

            expect(backspaceEvent.defaultPrevented, 'Backspace should remain available').to.equal(false);
        });
    });

    it('prop: onChange', () => {
        const onChange = cy.stub().as('onChange');

        mount(<CodeField codeLength={4} autoFocus autoComplete="off" onChange={onChange} />);

        cy.focused().type('1');

        cy.get('@onChange').should('have.been.calledOnce');
        cy.get('@onChange').should('have.been.calledWith', '1');
    });

    it('does not start WebOTP for a non-empty controlled value with an invalid symbol', () => {
        mockWebOTP();

        mount(<CodeField codeLength={4} value="12q4" />);

        cy.get('[data-code-field-input]').should('have.value', '12q4');
        cy.get('@credentialsGet').should('not.have.been.called');
    });

    it('does not restart a pending WebOTP request when an inline onChange callback changes', () => {
        mockWebOTP();

        const Demo = () => {
            const [renderCount, setRenderCount] = useState(0);

            return (
                <>
                    <button type="button" onClick={() => setRenderCount((count) => count + 1)}>
                        Rerender {renderCount}
                    </button>
                    <CodeField codeLength={4} onChange={() => undefined} />
                </>
            );
        };

        mount(<Demo />);

        cy.get('@credentialsGet').should('have.been.calledOnce');
        cy.contains('button', 'Rerender').click();
        cy.get('@credentialsGet')
            .should('have.been.calledOnce')
            .then((credentialsGet) => {
                const { signal } = credentialsGet.firstCall.args[0] as CredentialRequestOptions;

                expect(signal?.aborted).to.equal(false);
            });
    });
});
