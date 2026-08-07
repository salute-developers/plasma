import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

import type { SegmentProviderProps } from './SegmentProvider/SegmentProvider.types';
import type { SegmentGroupProps } from './ui/SegmentGroup/SegmentGroup.types';
import type { SegmentItemProps } from './ui/SegmentItem/SegmentItem.types';

const componentExists = hasComponent('SegmentProvider') && hasComponent('SegmentGroup') && hasComponent('SegmentItem');
const describeFn = getDescribeFN('SegmentGroup');

const sizes = ['xs', 's', 'm', 'l', 'xl'];

// отключает transition у сдвигающегося фона выбранного сегмента (SegmentGroup StyledThumb),
// чтобы снапшот не попадал на промежуточный кадр анимации
const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        transition: none !important;
        animation: none !important;
    }
`;

describeFn('Segment', () => {
    const SegmentProvider = componentExists ? getComponent<SegmentProviderProps>('SegmentProvider') : () => null;
    const SegmentGroup = componentExists ? getComponent<SegmentGroupProps>('SegmentGroup') : () => null;
    const SegmentItem = componentExists ? getComponent<SegmentItemProps>('SegmentItem') : () => null;

    it('simple', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup>
                    <SegmentItem value="segment_1" label="Segment 1" />
                    <SegmentItem value="segment_2" label="Segment 2" />
                    <SegmentItem value="segment_3" label="Segment 3" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.matchImageSnapshot();
    });

    it('with fixed width', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup style={{ width: '10rem' }}>
                    <SegmentItem value="segment_1" label="Segment 1" />
                    <SegmentItem value="segment_2" label="Segment 2" />
                    <SegmentItem value="segment_3" label="Segment 3" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.matchImageSnapshot();
    });

    it('view', () => {
        mount(
            <>
                <SegmentProvider>
                    <SegmentGroup view="clear">
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider defaultSelected={['segment_1']}>
                    <SegmentGroup view="filled">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="accent" />
                        <SegmentItem value="segment_3" label="Segment 3" view="secondary" />
                        <SegmentItem value="segment_3" label="Segment 3" view="clear" />
                    </SegmentGroup>
                </SegmentProvider>
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('pilled', () => {
        mount(
            <>
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="xs" pilled>
                        <SegmentItem view="default" size="xs" value="segment_1" label="Segment 1" pilled />
                        <SegmentItem view="default" size="xs" value="segment_2" label="Segment 2" pilled />
                        <SegmentItem view="default" size="xs" value="segment_3" label="Segment 3" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="s" pilled>
                        <SegmentItem view="default" size="s" value="segment_1.1" label="Segment 1.1" pilled />
                        <SegmentItem view="default" size="s" value="segment_2.1" label="Segment 2.1" pilled />
                        <SegmentItem view="default" size="s" value="segment_3.1" label="Segment 3.1" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="m" pilled>
                        <SegmentItem view="secondary" size="m" value="segment_1.2" label="Segment 1.2" pilled />
                        <SegmentItem view="secondary" size="m" value="segment_2.2" label="Segment 2.2" pilled />
                        <SegmentItem view="secondary" size="m" value="segment_3.2" label="Segment 3.2" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="l" pilled>
                        <SegmentItem view="secondary" size="l" value="segment_1.3" label="Segment 1.3" pilled />
                        <SegmentItem view="secondary" size="l" value="segment_2.3" label="Segment 2.3" pilled />
                        <SegmentItem view="secondary" size="l" value="segment_3.3" label="Segment 3.3" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
            </>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 3').click();

        cy.get('button').contains('Segment 1.1').click();
        cy.get('button').contains('Segment 3.1').click();

        cy.get('button').contains('Segment 1.2').click();
        cy.get('button').contains('Segment 3.2').click();

        cy.get('button').contains('Segment 1.3').click();
        cy.get('button').contains('Segment 3.3').click();

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup view="filled" disabled>
                    <SegmentItem value="segment_1" label="Segment 1" view="default" />
                    <SegmentItem value="segment_2" label="Segment 2" view="default" />
                    <SegmentItem value="segment_3" label="Segment 3" view="default" />
                </SegmentGroup>
            </SegmentProvider>,
        );
        cy.matchImageSnapshot();
    });

    it('stretch', () => {
        mount(
            <>
                <NoAnimationStyle />
                <SegmentProvider>
                    <SegmentGroup view="filled" stretch>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('maxItemWidth', () => {
        mount(
            <>
                <NoAnimationStyle />
                <SegmentProvider>
                    <SegmentGroup view="filled">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" maxItemWidth="3rem" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" maxItemWidth="3rem" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" maxItemWidth="3rem" />
                    </SegmentGroup>
                </SegmentProvider>
            </>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('size', () => {
        mount(
            <>
                {sizes.map((size) => (
                    <React.Fragment key={size}>
                        <SegmentProvider>
                            <SegmentGroup view="filled" size={size}>
                                <SegmentItem value="segment_1" label="Segment 1" view="default" size={size} />
                                <SegmentItem value="segment_2" label="Segment 2" view="default" size={size} />
                                <SegmentItem value="segment_3" label="Segment 3" view="default" size={size} />
                            </SegmentGroup>
                        </SegmentProvider>
                        <PadMe />
                    </React.Fragment>
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('single choice', () => {
        mount(
            <>
                <NoAnimationStyle />
                <SegmentProvider>
                    <SegmentGroup view="filled">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('single selected required', () => {
        mount(
            <>
                <NoAnimationStyle />
                <SegmentProvider singleSelectedRequired>
                    <SegmentGroup view="filled">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('single choice predefined', () => {
        mount(
            <SegmentProvider defaultSelected={['segment_1']}>
                <SegmentGroup view="filled">
                    <SegmentItem value="segment_1" label="Segment 1" view="default" />
                    <SegmentItem value="segment_2" label="Segment 2" view="default" />
                    <SegmentItem value="segment_3" label="Segment 3" view="default" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.matchImageSnapshot();
    });

    it('multiple choice', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup selectionMode="multiple" view="filled">
                    <SegmentItem value="segment_1" label="Segment 1" view="default" />
                    <SegmentItem value="segment_2" label="Segment 2" view="default" />
                    <SegmentItem value="segment_3" label="Segment 3" view="default" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 2').click();

        cy.matchImageSnapshot();
    });

    it('multiple choice predefined', () => {
        mount(
            <SegmentProvider defaultSelected={['segment_1', 'segment_2']}>
                <SegmentGroup selectionMode="multiple" view="filled">
                    <SegmentItem value="segment_1" label="Segment 1" view="default" />
                    <SegmentItem value="segment_2" label="Segment 2" view="default" />
                    <SegmentItem value="segment_3" label="Segment 3" view="default" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.matchImageSnapshot();
    });

    it('navigate with arrow', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup style={{ width: '10rem' }} view="filled" size="xs" clip>
                    <SegmentItem value="segment_1" label="Segment 1" view="default" size="xs" />
                    <SegmentItem value="segment_2" label="Segment 2" view="default" size="xs" />
                    <SegmentItem value="segment_3" label="Segment 3" view="default" size="xs" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.get('body').find('[aria-label="Следующий сегмент"]').click();
        cy.get('body').find('[aria-label="Предыдущий сегмент"]');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);

        cy.matchImageSnapshot();
    });

    it('vertical', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup orientation="vertical">
                    <SegmentItem value="segment_1" label="Segment 1" />
                    <SegmentItem value="segment_2" label="Segment 2" />
                    <SegmentItem value="segment_3" label="Segment 3" />
                    <SegmentItem value="segment_4" label="Segment 4" />
                    <SegmentItem value="segment_5" label="Segment 5" />
                    <SegmentItem value="segment_6" label="Segment 6" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.matchImageSnapshot();
    });

    it('vertical with arrows', () => {
        mount(
            <div style={{ height: '10rem', maxHeight: '10rem' }}>
                <SegmentProvider>
                    <SegmentGroup orientation="vertical" pilled hasBackground>
                        <SegmentItem value="segment_1" label="Segment 1" pilled />
                        <SegmentItem value="segment_2" label="Segment 2" pilled />
                        <SegmentItem value="segment_3" label="Segment 3" pilled />
                        <SegmentItem value="segment_4" label="Segment 4" pilled />
                        <SegmentItem value="segment_5" label="Segment 5" pilled />
                        <SegmentItem value="segment_6" label="Segment 6" pilled />
                    </SegmentGroup>
                </SegmentProvider>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <SegmentProvider>
                <SegmentGroup view="default" disabled>
                    <SegmentItem value="item_1" label="Item 1" view="default" />
                    <SegmentItem value="item_2" label="Item 2" view="default" />
                    <SegmentItem value="item_3" label="Item 3" view="default" />
                </SegmentGroup>
            </SegmentProvider>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('controlled change', () => {
        const Controlled = () => {
            const [selected, setSelected] = useState(['segment_1']);

            const handleChangeSelected = (selectedSegnment: string) => {
                setSelected([selectedSegnment]);
            };

            return (
                <>
                    <NoAnimationStyle />
                    <SegmentProvider selected={selected} onChangeSelected={handleChangeSelected}>
                        <SegmentGroup view="default">
                            <SegmentItem value="segment_1" label="Segment 1" view="default" />
                            <SegmentItem value="segment_2" label="Segment 2" view="default" />
                            <SegmentItem value="segment_3" label="Segment 3" view="default" />
                        </SegmentGroup>
                    </SegmentProvider>
                </>
            );
        };

        mount(<Controlled />);

        cy.get('button').contains('Segment 2').click();

        cy.matchImageSnapshot();
    });
});
