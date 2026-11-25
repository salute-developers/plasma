import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { SheetProps } from './Sheet.types';

const componentExists = hasComponent('Sheet');
const describeFn = getDescribeFN('Sheet');

describeFn('Sheet', () => {
    const Sheet = componentExists ? getComponent<SheetProps>('Sheet') : () => null;
    const BodyM = componentExists ? getComponent<SheetProps>('BodyM') : () => null;

    it('simple', () => {
        mount(
            <Sheet opened>
                <BodyM>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                    consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel illum ea
                    fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nostrum
                    placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt ullam,
                    dolorem labore quaerat vero maxime ab ipsa nihil.
                </BodyM>
            </Sheet>,
        );

        cy.matchImageSnapshot();
    });

    const Interactive = ({ withOverlay }: Pick<SheetProps, 'withOverlay'>) => {
        const [opened, setOpened] = useState(true);

        return (
            <>
                <div>Content</div>
                <Sheet id="sheet" opened={opened} withOverlay={withOverlay} onClose={() => setOpened(false)}>
                    <BodyM>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </BodyM>
                </Sheet>
            </>
        );
    };

    it('onClose', () => {
        mount(<Interactive />);

        cy.root().click();

        cy.matchImageSnapshot();
    });

    it('onTouchMove', () => {
        cy.viewport(375, 600);

        mount(<Interactive />);

        const touchEvent = ({ clientX, clientY }) => ({
            changedTouches: {
                0: {
                    clientX,
                    clientY,
                },
            },
        });

        // Handle
        cy.get('#sheet > div:first-child')
            .trigger('touchstart', touchEvent({ clientX: 180, clientY: 409 }))
            .trigger('touchmove', touchEvent({ clientX: 180, clientY: 420 }))
            .trigger('touchmove', touchEvent({ clientX: 180, clientY: 450 }))
            .trigger('touchend', touchEvent({ clientX: 180, clientY: 450 }));

        cy.matchImageSnapshot('Sheet -- opened');

        cy.get('#sheet > div:first-child')
            .trigger('touchstart', touchEvent({ clientX: 180, clientY: 409 }))
            .trigger('touchmove', touchEvent({ clientX: 180, clientY: 450 }))
            .trigger('touchmove', touchEvent({ clientX: 180, clientY: 500 }))
            .trigger('touchend', touchEvent({ clientX: 180, clientY: 500 }));

        cy.matchImageSnapshot('Sheet -- closed');
    });

    it('withoutOverlay', () => {
        cy.viewport(375, 600);

        mount(<Interactive withOverlay={false} />);

        cy.matchImageSnapshot();
    });
});
