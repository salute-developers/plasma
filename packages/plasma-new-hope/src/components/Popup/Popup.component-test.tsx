import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, skipForPackages } from '@salutejs/plasma-cy-utils';

import type { PopupProps } from './Popup.types';

const componentName = hasComponent('PopupBase') ? 'PopupBase' : 'Popup';
const providerName = componentName === 'PopupBase' ? 'PopupBaseProvider' : 'PopupProvider';
const componentExists = hasComponent(componentName);
const describeFn = getDescribeFN(componentName);
const skipForOldPopup = skipForPackages(['plasma-b2c', 'plasma-web']);

const startResize = () => {
    cy.get('.resizable-bottom-right-icon').trigger('mousedown', {
        eventConstructor: 'MouseEvent',
        clientX: 100,
        clientY: 100,
    });
};

const moveResize = (clientX = 140, clientY = 125) => {
    cy.get('body').trigger('mousemove', { eventConstructor: 'MouseEvent', clientX, clientY, force: true });
};

const stopResize = () => {
    cy.get('body').trigger('mouseup', { eventConstructor: 'MouseEvent', force: true });
};

const expectSize = (width: number, height: number) => {
    cy.get('.resizable-container').should('have.css', 'width', `${width}px`).and('have.css', 'height', `${height}px`);
};

describeFn('Popup: controlled resize', () => {
    const Popup = componentExists ? getComponent<PopupProps>(componentName) : () => null;
    const PopupProvider = componentExists ? getComponent(providerName) : () => null;

    skipForOldPopup('applies size before defaultSize and updates it from the parent', () => {
        const Demo = () => {
            const [size, setSize] = useState({ width: 200, height: 100 });

            return (
                <PopupProvider>
                    <button type="button" onClick={() => setSize({ width: 300, height: 150 })}>
                        Change size
                    </button>
                    <Popup opened resizable={{ size, defaultSize: { width: 100, height: 50 } }}>
                        Content
                    </Popup>
                </PopupProvider>
            );
        };

        mount(<Demo />);

        expectSize(200, 100);
        cy.contains('button', 'Change size').click();
        expectSize(300, 150);
    });

    (['center', 'top-left'] as const).forEach((placement) => {
        skipForOldPopup(`updates the controlled size during resize, placement=${placement}`, () => {
            const onResizeStart = cy.stub().as('onResizeStart');
            const onResizeEnd = cy.stub().as('onResizeEnd');

            const Demo = () => {
                const [size, setSize] = useState({ width: 200, height: 100 });
                const [opened, setOpened] = useState(true);

                return (
                    <PopupProvider>
                        <output>{`${size.width}x${size.height}`}</output>
                        <button
                            type="button"
                            style={{ position: 'absolute', bottom: 0, right: 0 }}
                            onClick={() => setOpened(!opened)}
                        >
                            Toggle popup
                        </button>
                        <Popup
                            opened={opened}
                            placement={placement}
                            resizable={{
                                size,
                                directions: ['bottom-right'],
                                onResizeStart,
                                onResize: (container) => container?.current && setSize(container.current.size),
                                onResizeEnd,
                            }}
                        >
                            Content
                        </Popup>
                    </PopupProvider>
                );
            };

            mount(<Demo />);

            startResize();
            cy.get('@onResizeStart').should('have.been.calledOnce');
            cy.get('.resizable-container').should('have.class', 'resizable-container-no-select');
            moveResize();

            const width = placement === 'center' ? 280 : 240;
            const height = placement === 'center' ? 150 : 125;
            expectSize(width, height);
            cy.get('output').should('have.text', `${width}x${height}`);

            stopResize();
            cy.get('@onResizeEnd').should('have.been.calledOnce');
            cy.get('.resizable-container').should('not.have.class', 'resizable-container-no-select');
            expectSize(width, height);

            cy.contains('button', 'Toggle popup').click();
            cy.get('.resizable-container').should('not.exist');
            cy.contains('button', 'Toggle popup').click();
            expectSize(width, height);
        });
    });

    skipForOldPopup('restores the controlled size when the parent does not accept the resize', () => {
        const onResize = cy.stub().as('onResize');

        mount(
            <PopupProvider>
                <Popup opened resizable={{ size: { width: 200, height: 100 }, onResize }}>
                    Content
                </Popup>
            </PopupProvider>,
        );

        startResize();
        moveResize();
        expectSize(280, 150);
        cy.get('@onResize').should('have.been.calledOnce');
        stopResize();
        expectSize(200, 100);
    });

    skipForOldPopup('commits a controlled size on resize end and respects the size limits', () => {
        const Demo = () => {
            const [size, setSize] = useState({ width: 200, height: 100 });

            return (
                <PopupProvider>
                    <output>{`${size.width}x${size.height}`}</output>
                    <Popup
                        opened
                        resizable={{
                            size,
                            minWidth: 150,
                            minHeight: 80,
                            maxWidth: 250,
                            maxHeight: 130,
                            onResizeEnd: (container) => container?.current && setSize(container.current.size),
                        }}
                    >
                        Content
                    </Popup>
                </PopupProvider>
            );
        };

        mount(<Demo />);

        startResize();
        moveResize();
        expectSize(250, 130);
        cy.get('output').should('have.text', '200x100');
        stopResize();
        expectSize(250, 130);
        cy.get('output').should('have.text', '250x130');

        startResize();
        moveResize(0, 0);
        expectSize(150, 80);
        stopResize();
        expectSize(150, 80);
        cy.get('output').should('have.text', '150x80');
    });
});
