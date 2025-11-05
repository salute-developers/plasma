import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import React, { FC, PropsWithChildren, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { SheetProps } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Sheet', () => {
    const Sheet = getComponent('Sheet');
    const BodyM = getComponent('BodyM');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Sheet opened>
                    <BodyM>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </BodyM>
                </Sheet>
            </CypressTestDecoratorWithTypo>,
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
        mount(
            <CypressTestDecoratorWithTypo>
                <Interactive />
            </CypressTestDecoratorWithTypo>,
        );

        cy.root().click();

        cy.matchImageSnapshot();
    });

    it('onTouchMove', () => {
        cy.viewport('iphone-6');

        mount(
            <CypressTestDecoratorWithTypo>
                <Interactive />
            </CypressTestDecoratorWithTypo>,
        );

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

        cy.matchImageSnapshot(':opened');

        cy.get('#sheet > div:first-child')
            .trigger('touchstart', touchEvent({ clientX: 180, clientY: 409 }))
            .trigger('touchmove', touchEvent({ clientX: 180, clientY: 450 }))
            .trigger('touchmove', touchEvent({ clientX: 180, clientY: 500 }))
            .trigger('touchend', touchEvent({ clientX: 180, clientY: 500 }));

        cy.matchImageSnapshot(':closed');
    });

    it('withoutOverlay', () => {
        cy.viewport('iphone-6');

        mount(
            <CypressTestDecoratorWithTypo>
                <Interactive withOverlay={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
