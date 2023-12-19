import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Segment', () => {
    const SegmentProvider = getComponent('SegmentProvider');
    const SegmentItem = getComponent('SegmentItem');
    const SegmentGroup = getComponent('SegmentGroup');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with fixed width', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup style={{ width: '10rem' }}>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_filledBackground', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_pilled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="xs" filledBackground pilled>
                        <SegmentItem view="filled" size="xs" value="segment_1" label="Segment 1" pilled />
                        <SegmentItem view="filled" size="xs" value="segment_2" label="Segment 2" pilled />
                        <SegmentItem view="filled" size="xs" value="segment_3" label="Segment 3" pilled />
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
                        <SegmentItem view="card" size="m" value="segment_1.2" label="Segment 1.2" pilled />
                        <SegmentItem view="card" size="m" value="segment_2.2" label="Segment 2.2" pilled />
                        <SegmentItem view="card" size="m" value="segment_3.2" label="Segment 3.2" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="l" filledBackground pilled>
                        <SegmentItem view="inverse" size="l" value="segment_1.3" label="Segment 1.3" pilled />
                        <SegmentItem view="inverse" size="l" value="segment_2.3" label="Segment 2.3" pilled />
                        <SegmentItem view="inverse" size="l" value="segment_3.3" label="Segment 3.3" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground disabled>
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="xs">
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" size="xs" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" size="xs" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" size="xs" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="s">
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" size="s" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" size="s" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" size="s" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="m">
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" size="m" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" size="m" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" size="m" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground size="l">
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" size="l" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" size="l" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" size="l" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('single choice', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('multiple choice', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup selectionMode="multiple" view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="inverse" />
                        <SegmentItem value="segment_2" label="Segment 2" view="inverse" />
                        <SegmentItem value="segment_3" label="Segment 3" view="inverse" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 2').click();

        cy.matchImageSnapshot();
    });

    it('navigate with arrow`', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup style={{ width: '10rem' }} view="filled" filledBackground>
                        <SegmentItem value="segment_1" label="Segment 1" view="filled" />
                        <SegmentItem value="segment_2" label="Segment 2" view="filled" />
                        <SegmentItem value="segment_3" label="Segment 3" view="filled" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').find('[aria-label="Следующий сегмент"]').click({ waitForAnimations: true });
        cy.get('body').find('[aria-label="Предыдущий сегмент"]', { timeout: 500 });

        cy.matchImageSnapshot();
    });
});
