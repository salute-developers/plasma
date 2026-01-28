import React, { useState } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconMic } from '@salutejs/plasma-icons';

import { Counter } from '../Counter/Counter';

const Icon = <IconMic size="xs" color="inherit" />;
const counter = <Counter size="xs" count={1} view="positive" />;

describe('plasma-giga: Segment', () => {
    const SegmentProvider = getComponent('SegmentProvider');
    const SegmentItem = getComponent('SegmentItem');
    const SegmentGroup = getComponent('SegmentGroup');

    it('[PLASMA-T1350] Segment: size=l, orientation=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" size="l" orientation="horizontal" filledBackground>
                        <SegmentItem value="item_1" label="Item 1" view="default" size="l" />
                        <SegmentItem value="item_2" label="Item 2" view="default" size="l" />
                        <SegmentItem value="item_3" label="Item 3" view="default" size="l" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1351] Segment: size=m, pilled, hasBackground, contentLeft=icon, contentRight=text', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" size="m" filledBackground pilled>
                        <SegmentItem
                            value="item_1"
                            label="Item 1"
                            view="default"
                            size="m"
                            pilled
                            contentLeft={Icon}
                            contentRight="Text"
                        />
                        <SegmentItem
                            value="item_2"
                            label="Item 2"
                            view="default"
                            size="m"
                            pilled
                            contentLeft={Icon}
                            contentRight="Text"
                        />
                        <SegmentItem
                            value="item_3"
                            label="Item 3"
                            view="default"
                            size="m"
                            pilled
                            contentLeft={Icon}
                            contentRight="Text"
                        />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1352] Segment: size=s, contentLeft=icon', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" size="s" filledBackground>
                        <SegmentItem value="item_1" label="Item 1" view="default" size="s" contentLeft={Icon} />
                        <SegmentItem value="item_2" label="Item 2" view="default" size="s" contentLeft={Icon} />
                        <SegmentItem value="item_3" label="Item 3" view="default" size="s" contentLeft={Icon} />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1353] Segment: size=xs, contentRight=icon', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" size="xs" filledBackground>
                        <SegmentItem value="item_1" label="Item 1" view="default" size="xs" contentRight={Icon} />
                        <SegmentItem value="item_2" label="Item 2" view="default" size="xs" contentRight={Icon} />
                        <SegmentItem value="item_3" label="Item 3" view="default" size="xs" contentRight={Icon} />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1354] Segment: orientation=vertical', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" orientation="vertical" filledBackground>
                        <SegmentItem value="item_1" label="Item 1" view="default" />
                        <SegmentItem value="item_2" label="Item 2" view="default" />
                        <SegmentItem value="item_3" label="Item 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1355] Segment: disabled', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" filledBackground disabled>
                        <SegmentItem value="item_1" label="Item 1" view="default" />
                        <SegmentItem value="item_2" label="Item 2" view="default" />
                        <SegmentItem value="item_3" label="Item 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1667] Segment: segmentItemView=secondary, stretch, contentLeft=icon, contentRight=counter', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="default" filledBackground stretch>
                        <SegmentItem
                            value="item_1"
                            label="Item 1"
                            view="secondary"
                            contentLeft={Icon}
                            contentRight={counter}
                        />
                        <SegmentItem
                            value="item_2"
                            label="Item 2"
                            view="secondary"
                            contentLeft={Icon}
                            contentRight={counter}
                        />
                        <SegmentItem
                            value="item_3"
                            label="Item 3"
                            view="secondary"
                            contentLeft={Icon}
                            contentRight={counter}
                        />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1964] Segment: singleSelectedRequired', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider singleSelectedRequired>
                    <SegmentGroup view="default" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] Segment: controlled change', () => {
        const Controlled = () => {
            const [selected, setSelected] = useState(['segment_1']);

            const handleChangeSelected = (selectedSegnment: string) => {
                setSelected([selectedSegnment]);
            };

            return (
                <SegmentProvider selected={selected} onChangeSelected={handleChangeSelected}>
                    <SegmentGroup view="default" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            );
        };

        mount(
            <CypressTestDecorator>
                <Controlled />
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Segment 2').click();

        cy.matchImageSnapshot();
    });

    it('_maxItemWidth', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" maxItemWidth="3rem" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" maxItemWidth="3rem" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" maxItemWidth="3rem" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });
});
