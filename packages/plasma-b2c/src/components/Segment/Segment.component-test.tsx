import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const sizes = ['xs', 's', 'm', 'l', 'xl'];

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
                    <SegmentGroup clip>
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
                    <SegmentGroup style={{ width: '10rem' }} clip>
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
                    <SegmentGroup view="clear" clip>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider defaultSelected={['segment_1', 'segment_2', 'segment_3', 'segment_4']}>
                    <SegmentGroup view="filled" selectionMode="multiple" clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="accent" />
                        <SegmentItem value="segment_3" label="Segment 3" view="secondary" />
                        <SegmentItem value="segment_3" label="Segment 3" view="clear" />
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
                    <SegmentGroup view="clear" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
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
                    <SegmentGroup view="filled" selectionMode="multiple" size="xs" filledBackground pilled clip>
                        <SegmentItem view="default" size="xs" value="segment_1" label="Segment 1" pilled />
                        <SegmentItem view="default" size="xs" value="segment_2" label="Segment 2" pilled />
                        <SegmentItem view="default" size="xs" value="segment_3" label="Segment 3" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="s" filledBackground pilled clip>
                        <SegmentItem view="default" size="s" value="segment_1.1" label="Segment 1.1" pilled />
                        <SegmentItem view="default" size="s" value="segment_2.1" label="Segment 2.1" pilled />
                        <SegmentItem view="default" size="s" value="segment_3.1" label="Segment 3.1" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="m" filledBackground pilled clip>
                        <SegmentItem view="secondary" size="m" value="segment_1.2" label="Segment 1.2" pilled />
                        <SegmentItem view="secondary" size="m" value="segment_2.2" label="Segment 2.2" pilled />
                        <SegmentItem view="secondary" size="m" value="segment_3.2" label="Segment 3.2" pilled />
                    </SegmentGroup>
                </SegmentProvider>
                <PadMe />
                <SegmentProvider>
                    <SegmentGroup view="filled" selectionMode="multiple" size="l" filledBackground pilled clip>
                        <SegmentItem view="secondary" size="l" value="segment_1.3" label="Segment 1.3" pilled />
                        <SegmentItem view="secondary" size="l" value="segment_2.3" label="Segment 2.3" pilled />
                        <SegmentItem view="secondary" size="l" value="segment_3.3" label="Segment 3.3" pilled />
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
                    <SegmentGroup view="filled" filledBackground disabled clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_stretch', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" stretch filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('_maxItemWidth', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" maxItemWidth="3rem" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" maxItemWidth="3rem" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" maxItemWidth="3rem" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <SegmentProvider>
                            <SegmentGroup view="filled" filledBackground size={size} clip>
                                <SegmentItem value="segment_1" label="Segment 1" view="default" size={size} />
                                <SegmentItem value="segment_2" label="Segment 2" view="default" size={size} />
                                <SegmentItem value="segment_3" label="Segment 3" view="default" size={size} />
                            </SegmentGroup>
                        </SegmentProvider>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size redesign', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <SegmentProvider>
                            <SegmentGroup view="filled" filledBackground size={size}>
                                <SegmentItem value="segment_1" label="Segment 1" view="default" size={size} />
                                <SegmentItem value="segment_2" label="Segment 2" view="default" size={size} />
                                <SegmentItem value="segment_3" label="Segment 3" view="default" size={size} />
                            </SegmentGroup>
                        </SegmentProvider>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('single choice', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('single selected required', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider singleSelectedRequired>
                    <SegmentGroup view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 1').click();

        cy.matchImageSnapshot();
    });

    it('single choice predefined', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider defaultSelected={['segment_1']}>
                    <SegmentGroup view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('multiple choice', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup selectionMode="multiple" view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Segment 1').click();
        cy.get('button').contains('Segment 2').click();

        cy.matchImageSnapshot();
    });

    it('multiple choice predefined', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider defaultSelected={['segment_1', 'segment_2']}>
                    <SegmentGroup selectionMode="multiple" view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('navigate with arrow', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup style={{ width: '10rem' }} view="filled" filledBackground clip>
                        <SegmentItem value="segment_1" label="Segment 1" view="default" />
                        <SegmentItem value="segment_2" label="Segment 2" view="default" />
                        <SegmentItem value="segment_3" label="Segment 3" view="default" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').find('[aria-label="Следующий сегмент"]').click();
        cy.get('body').find('[aria-label="Предыдущий сегмент"]');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);

        cy.matchImageSnapshot();
    });

    it('vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <SegmentProvider>
                    <SegmentGroup orientation="vertical" clip={false}>
                        <SegmentItem value="segment_1" label="Segment 1" />
                        <SegmentItem value="segment_2" label="Segment 2" />
                        <SegmentItem value="segment_3" label="Segment 3" />
                        <SegmentItem value="segment_4" label="Segment 4" />
                        <SegmentItem value="segment_5" label="Segment 5" />
                        <SegmentItem value="segment_6" label="Segment 6" />
                    </SegmentGroup>
                </SegmentProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('vertical with arrows', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '10rem', maxHeight: '10rem' }}>
                    <SegmentProvider>
                        <SegmentGroup orientation="vertical" clip pilled hasBackground>
                            <SegmentItem value="segment_1" label="Segment 1" pilled />
                            <SegmentItem value="segment_2" label="Segment 2" pilled />
                            <SegmentItem value="segment_3" label="Segment 3" pilled />
                            <SegmentItem value="segment_4" label="Segment 4" pilled />
                            <SegmentItem value="segment_5" label="Segment 5" pilled />
                            <SegmentItem value="segment_6" label="Segment 6" pilled />
                        </SegmentGroup>
                    </SegmentProvider>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
