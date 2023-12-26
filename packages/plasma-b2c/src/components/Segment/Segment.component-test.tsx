import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

describe('plasma-web: Segment', () => {
    const SegmentProvider = getComponent('SegmentProvider');
    const SegmentItem = getComponent('SegmentItem');
    const SegmentGroup = getComponent('SegmentGroup');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with fixed width', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup style={{ width: '10rem' }}>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="clear">
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_filledBackground', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="clear" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_pilled', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="xs" filledBackground pilled>
                        <SegmentItem view="default" size="xs" value="segment_1" label="Segment 1" pilled />
                        <SegmentItem view="default" size="xs" value="segment_2" label="Segment 2" pilled />
                        <SegmentItem view="default" size="xs" value="segment_3" label="Segment 3" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="s" filledBackground pilled>
                        <SegmentItem view="default" size="s" value="segment_1.1" label="Segment 1.1" pilled />
                        <SegmentItem view="default" size="s" value="segment_2.1" label="Segment 2.1" pilled />
                        <SegmentItem view="default" size="s" value="segment_3.1" label="Segment 3.1" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="m" filledBackground pilled>
                        <SegmentItem view="secondary" size="m" value="segment_1.2" label="Segment 1.2" pilled />
                        <SegmentItem view="secondary" size="m" value="segment_2.2" label="Segment 2.2" pilled />
                        <SegmentItem view="secondary" size="m" value="segment_3.2" label="Segment 3.2" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="l" filledBackground pilled>
                        <SegmentItem view="secondary" size="l" value="segment_1.3" label="Segment 1.3" pilled />
                        <SegmentItem view="secondary" size="l" value="segment_2.3" label="Segment 2.3" pilled />
                        <SegmentItem view="secondary" size="l" value="segment_3.3" label="Segment 3.3" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
            </CypressTestDecorator>,
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

    it('_disabled', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground disabled>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_stretch', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" stretch filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="xs">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" size="xs" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" size="xs" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" size="xs" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="s">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" size="s" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" size="s" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" size="s" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="m">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" size="m" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" size="m" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" size="m" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="l">
                        <SegmentItem value="segment_1" label="Segment 1" view="default" size="l" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" size="l" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" size="l" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('single choice', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('multiple choice', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup selectionMode="multiple" view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 2').click();

        cy.matchImageSnapshot();
    });

    it('navigate with arrow`', () => {
        mount(
            <CypressTestDecorator>
                <SegmentProvider>
                    <SegmentGroup style={{ width: '10rem' }} view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecorator>,
        );

        cy.get('body').find('[aria-label="Следующий сегмент"]').click();
        cy.get('body').find('[aria-label="Предыдущий сегмент"]');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);

        cy.matchImageSnapshot();
    });
});
