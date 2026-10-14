import React, { ComponentProps } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { EditableProps } from './Editable.types';

const componentExists = hasComponent('Editable');
const describeFn = getDescribeFN('Editable');

const paste = (selector: string, text: string) => {
    // https://github.com/cypress-io/cypress/issues/2386#issuecomment-613374266
    cy.get(selector)
        .first()
        .then(($destination) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
            const pasteEvent = Object.assign(new Event('paste', { bubbles: true, cancelable: true }), {
                clipboardData: {
                    getData: () => text,
                },
            });
            $destination[0].dispatchEvent(pasteEvent);
        });
};

const noop = () => {};

const Headline1ForMatrix = componentExists ? getComponent('Headline1') : () => null;

const componentProps = {
    textComponent: Headline1ForMatrix,
    value: 'Document 1',
    placeholder: 'placeholder',
};

getBaseVisualTests({
    component: 'Editable',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Editable', () => {
    const Editable = componentExists ? getComponent<EditableProps<any>>('Editable') : () => null;

    const iconSizes = ['s', 'xs'] as const;

    type DemoProps = ComponentProps<typeof Editable> & {
        iconSize: typeof iconSizes[number];
        componentName: string;
        defaultValue: string;
        placeholder: string;
    };

    function Demo(props: DemoProps) {
        const {
            iconSize = 's',
            componentName = 'BodyL',
            defaultValue = 'Document 1',
            placeholder = 'placeholder',
        } = props;

        const TextComponent = getComponent(componentName);

        return (
            <Editable
                iconSize={iconSize}
                icon={<IconPlasma size={iconSize} color="inherit" />}
                textComponent={TextComponent}
                value={defaultValue}
                placeholder={placeholder}
            />
        );
    }

    it('empty', () => {
        const Headline1 = getComponent('Headline1');

        mount(<Editable textComponent={Headline1} icon={<IconPlasma size="s" color="inherit" />} />);

        cy.matchImageSnapshot();
    });

    it('empty, placeholder', () => {
        const Headline1 = getComponent('Headline1');

        mount(
            <Editable
                textComponent={Headline1}
                icon={<IconPlasma size="s" color="inherit" />}
                placeholder="Плейсхолдер"
            />,
        );

        cy.matchImageSnapshot();
    });

    it('onChange', () => {
        const Headline1 = getComponent('Headline1');

        mount(<Editable value="onChange" onChange={noop} maxLength={5} textComponent={Headline1} />);

        cy.get('span > div').first().type('Hello');

        cy.matchImageSnapshot();
    });

    it('onBlur and onFocus', () => {
        const Headline1 = getComponent('Headline1');

        mount(
            <Editable
                value="onBlur and onFocus"
                onBlur={noop}
                icon={<IconPlasma size="s" color="inherit" />}
                textComponent={Headline1}
            />,
        );

        cy.get('span > span').click();

        cy.get('span > div').first().blur();

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            // NOTE: https://github.com/salute-developers/plasma/issues/384
            // callsFake не работает с данным методом
            // cy.stub(win, 'getSelection', undefined);

            // для браузеров IE < 9 при использовании компонента
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (win.document as any).selection = {
                empty: noop,
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (win.document.body as any).createTextRange = () => ({
                moveToElementText: noop,
                select: noop,
            });
        });

        cy.get('span > div').first().focus();

        cy.get('span > div').first().trigger('keydown', { keyCode: 13 });

        cy.matchImageSnapshot();
    });

    it('onPaste', () => {
        const Headline1 = getComponent('Headline1');

        mount(<Editable value="onPaste" onPaste={noop} textComponent={Headline1} />);

        paste('span > div', 'Hello from paste');

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            cy.stub(win.document, 'queryCommandSupported').callsFake(() => false);
            cy.stub(navigator.clipboard, 'writeText').callsFake(undefined);

            paste('span > div', 'Hello from paste');
        });

        cy.matchImageSnapshot();
    });

    it('iconSize=s, componentName=BodyL, defaultValue, placeholder', () => {
        mount(
            <>
                <div id="outer">outer text</div>

                <Demo componentName="BodyL" iconSize="s" />
            </>,
        );

        cy.matchImageSnapshot();

        cy.get('svg').click();
        cy.get('.editable-text-box').type('{backspace}');
        cy.get('#outer').click();

        cy.matchImageSnapshot();
    });

    it('iconSize=xs, componentName=DsplM', () => {
        mount(<Demo componentName="DsplM" iconSize="xs" />);

        cy.matchImageSnapshot();
    });

    it('iconSize=s, componentName=TextS', () => {
        mount(<Demo componentName="TextS" iconSize="s" />);

        cy.matchImageSnapshot();
    });

    it('iconSize=xs, componentName=H4', () => {
        mount(<Demo componentName="H4" iconSize="xs" />);

        cy.matchImageSnapshot();
    });
});
