import React, { useState, useRef } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

const componentExists = hasComponent('Portal');
const describeFn = getDescribeFN('Portal');

const text = 'Содержимое портала';

// TODO: перенести в unit тесты
describeFn('Portal', () => {
    const Portal = componentExists ? getComponent('Portal') : () => null;
    const Button = componentExists ? getComponent('Button') : () => null;
    const BodyM = componentExists ? getComponent('BodyM') : () => null;

    function Demo({ disabled = false }: { disabled?: boolean }) {
        const [show, setShow] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);

        return (
            <>
                <Button onClick={() => setShow(!show)} />
                <div id="parentContainer">
                    <BodyM>
                        Содержимое появится в нижнем блоке.
                        Если портал выключен (disabled), то содержимое появится в данном блоке.
                    </BodyM>
                    {show && containerRef.current && (
                        <Portal disabled={disabled} container={containerRef.current}>
                            <BodyM>{text}</BodyM>
                        </Portal>
                    )}
                </div>
                <div id="targetContainer" ref={containerRef} />
            </>
        );
    }

    it('open portal', () => {
        mount(
            <Demo />
        );

        cy.get('button').click();
        cy.get('#parentContainer').contains(text).should('not.exist');
        cy.get('#targetContainer').contains(text).should('be.visible');
    });

    it('disabled portal', () => {
        mount(
            <Demo disabled />
        );

        cy.get('button').click();
        cy.get('#parentContainer').contains(text).should('be.visible');
        cy.get('#targetContainer').contains(text).should('not.exist');
    });
});
