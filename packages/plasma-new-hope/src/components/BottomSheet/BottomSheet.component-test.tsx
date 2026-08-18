import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { BottomSheetProps } from './BottomSheet.types';

const Button = getComponent('Button');
const componentExists = hasComponent('BottomSheet');
const describeFn = getDescribeFN('BottomSheet');

describeFn('BottomSheet', () => {
    const BottomSheet = componentExists ? getComponent<BottomSheetProps>('BottomSheet') : () => null;

    const Header = <div style={{ padding: '1.5rem 1.5rem 0.75rem' }}>Источники</div>;

    const Content = (
        <div style={{ padding: '0 1.5rem' }}>
            <div style={{ padding: '0.75rem 0' }}>Контент шторки</div>
            <div style={{ padding: '0.75rem 0' }}>Дополнительное описание</div>
        </div>
    );

    const Footer = (
        <div style={{ padding: '1rem 1.5rem 2.5rem' }}>
            <Button stretching="filled" view="default">
                Готово
            </Button>
        </div>
    );

    const BeforeHeader = (
        <div
            style={{
                height: '10rem',
                background: 'linear-gradient(135deg, #d3f8e2, #a0e7e5 50%, #b4a7f5)',
            }}
        />
    );

    const renderBottomSheet = (props: BottomSheetProps = {}) => (
        <BottomSheet opened withOverlay={false} contentHeader={Header} contentFooter={Footer} {...props}>
            {props.children ?? Content}
        </BottomSheet>
    );

    it('default', () => {
        mount(renderBottomSheet());

        cy.matchImageSnapshot();
    });

    it('with content before header', () => {
        mount(
            renderBottomSheet({
                contentBeforeHeader: BeforeHeader,
            }),
        );

        cy.matchImageSnapshot();
    });

    it('with outer handle', () => {
        mount(
            renderBottomSheet({
                handlePlacement: 'outer',
            }),
        );

        cy.matchImageSnapshot();
    });

    it('scrollable', () => {
        mount(
            renderBottomSheet({
                maxHeight: '20rem',
                children: (
                    <div style={{ padding: '0 1.5rem' }}>
                        {Array.from({ length: 30 }, (_, index) => (
                            <div key={index} style={{ padding: '0.75rem 0' }}>
                                Элемент {index + 1}
                            </div>
                        ))}
                    </div>
                ),
            }),
        );

        cy.matchImageSnapshot();
    });

    it('with snap points', () => {
        mount(
            renderBottomSheet({
                snapPoints: ['40%', '70%'],
                initialSnapPoint: '40%',
            }),
        );

        cy.matchImageSnapshot();
    });
});
