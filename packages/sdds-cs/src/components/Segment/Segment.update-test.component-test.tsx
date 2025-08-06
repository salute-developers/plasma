import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconMic } from '@salutejs/plasma-icons';

import { Counter } from '../Counter';

import { SegmentGroup as SegmentGroupCS, SegmentItem as SegmentItemCS, SegmentProvider as SegmentProviderCS } from '.';

const Icon = <IconMic size="xs" color="inherit" />;
const counter = <Counter size="s" count={1} view="positive" />;

describe('sdds-cs: Segment', () => {
    const SegmentProvider = getComponent('SegmentProvider') as typeof SegmentProviderCS;
    const SegmentItem = getComponent('SegmentItem') as typeof SegmentItemCS;
    const SegmentGroup = getComponent('SegmentGroup') as typeof SegmentGroupCS;

    it('[PLASMA-T1350] Segment: size=xs, orientation=vertical', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" size="xs" orientation="vertical" filledBackground>
                        <SegmentItem value="item_1" label="Item 1" view="default" size="xs" />
                        <SegmentItem value="item_2" label="Item 2" view="default" size="xs" />
                        <SegmentItem value="item_3" label="Item 3" view="default" size="xs" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Item 1').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1351] Segment: pilled, hasBackground, contentLeft=icon, contentRight=text', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup filledBackground pilled>
                        <SegmentItem
                            value="item_1"
                            label="Item 1"
                            view="default"
                            pilled
                            contentLeft={Icon}
                            contentRight="Text"
                        />
                        <SegmentItem
                            value="item_2"
                            label="Item 2"
                            view="default"
                            pilled
                            contentLeft={Icon}
                            contentRight="Text"
                        />
                        <SegmentItem
                            value="item_3"
                            label="Item 3"
                            view="default"
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

    it('[PLASMA-T1352] Segment: contentLeft=icon', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup filledBackground>
                        <SegmentItem value="item_1" label="Item 1" view="default" contentLeft={Icon} />
                        <SegmentItem value="item_2" label="Item 2" view="default" contentLeft={Icon} />
                        <SegmentItem value="item_3" label="Item 3" view="default" contentLeft={Icon} />
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
                    <SegmentGroup size="xs" filledBackground>
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
                    <SegmentGroup orientation="vertical" filledBackground>
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
                    <SegmentGroup filledBackground disabled>
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
                    <SegmentGroup filledBackground stretch>
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
                    <SegmentGroup filledBackground>
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

    it('_maxItemWidth', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground>
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
