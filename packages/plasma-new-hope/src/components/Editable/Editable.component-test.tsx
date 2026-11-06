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

// У sdds-finai нет старой типографики Headline*, там только H1–H6.
const textComponentName = hasComponent('Headline1') ? 'Headline1' : 'H1';
const TextForMatrix = componentExists ? getComponent(textComponentName) : () => null;

const componentProps = {
    textComponent: TextForMatrix,
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
        const TextComponent = getComponent(textComponentName);

        mount(<Editable textComponent={TextComponent} icon={<IconPlasma size="s" color="inherit" />} />);

        cy.matchImageSnapshot();
    });

    it('empty, placeholder', () => {
        const TextComponent = getComponent(textComponentName);

        mount(
            <Editable
                textComponent={TextComponent}
                icon={<IconPlasma size="s" color="inherit" />}
                placeholder="Плейсхолдер"
            />,
        );

        cy.matchImageSnapshot();
    });

    it('onChange', () => {
        const TextComponent = getComponent(textComponentName);

        mount(<Editable value="onChange" onChange={noop} maxLength={5} textComponent={TextComponent} />);

        cy.get('span > div').first().type('Hello');

        cy.matchImageSnapshot();
    });

    it('onBlur and onFocus', () => {
        const TextComponent = getComponent(textComponentName);

        mount(
            <Editable
                value="onBlur and onFocus"
                onBlur={noop}
                icon={<IconPlasma size="s" color="inherit" />}
                textComponent={TextComponent}
            />,
        );

        cy.get('.editable-text-box').click();

        cy.get('.editable-text-box').blur();

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

        cy.get('.editable-text-box').focus();

        cy.get('.editable-text-box').trigger('keydown', { keyCode: 13 });

        cy.matchImageSnapshot();
    });

    it('onPaste', () => {
        const TextComponent = getComponent(textComponentName);

        mount(<Editable value="onPaste" onPaste={noop} textComponent={TextComponent} />);

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

    const longValue = 'Очень длинное название документа, которое не помещается в одну строку';

    it('multiline', () => {
        const H5 = getComponent('H5');

        mount(
            <Editable
                textComponent={H5}
                value={longValue}
                multiline
                icon={<IconPlasma size="s" color="inherit" />}
                style={{ maxWidth: '17rem' }}
            />,
        );

        cy.get('.editable-multiline').should('exist');
        cy.get('.editable-text-box').should('have.css', 'white-space', 'pre-wrap');

        cy.matchImageSnapshot();
    });

    it('single line overflow', () => {
        const H5 = getComponent('H5');

        mount(
            <div style={{ width: '16rem' }}>
                <Editable
                    textComponent={H5}
                    value={longValue}
                    icon={<IconPlasma size="s" color="inherit" />}
                    style={{ maxWidth: '100%' }}
                />
            </div>,
        );

        cy.get('.editable-multiline').should('not.exist');
        cy.get('.editable-text-box').should('have.css', 'white-space', 'nowrap');

        cy.matchImageSnapshot();
    });

    it('short text does not overflow', () => {
        const H5 = getComponent('H5');

        mount(
            <div style={{ width: '16rem' }}>
                <Editable
                    textComponent={H5}
                    value="Header 5"
                    icon={<IconPlasma size="s" color="inherit" />}
                    style={{ maxWidth: '100%' }}
                />
            </div>,
        );

        cy.get('.editable-text-clip').then(($clip) => {
            expect($clip[0].scrollWidth).to.be.at.most($clip[0].clientWidth + 1);
        });

        cy.matchImageSnapshot();
    });

    it('enter ends editing', () => {
        const H5 = getComponent('H5');

        mount(<Editable textComponent={H5} value="Header 5" icon={<IconPlasma size="s" color="inherit" />} />);

        cy.get('.editable-text-box').click();
        cy.get('svg').should('not.be.visible');

        cy.get('.editable-text-box').type('{enter}');

        cy.get('.editable-text-box').should('not.be.focused');
        cy.get('svg').should('be.visible');
    });

    it('paste strips line breaks', () => {
        const H5 = getComponent('H5');

        mount(<Editable textComponent={H5} value="текст" icon={<IconPlasma size="s" color="inherit" />} />);

        cy.get('svg').click();
        paste('.editable-text-box', 'первая\nвторая');

        cy.get('.editable-text-box').should('have.text', 'перваявторая');
    });
});
