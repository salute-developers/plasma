import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconMic } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const sizes = ['xs', 's', 'm', 'l'];

const itemsStatuses = [
    [
        {
            indicator: 1,
        },
    ],
    [
        {
            indicator: 1,
            status: 'active',
        },
    ],
    [
        {
            indicator: 1,
            status: 'completed',
        },
    ],
    [
        {
            indicator: 1,
        },
        {
            indicator: 2,
        },
    ],
    [
        {
            indicator: 1,
            status: 'active',
        },
        {
            indicator: 2,
        },
    ],
    [
        {
            indicator: 1,
            status: 'active',
        },
        {
            indicator: 2,
            status: 'completed',
        },
    ],
    [
        {
            indicator: 1,
        },
        {
            indicator: 2,
        },
        {
            indicator: 3,
        },
    ],
    [
        {
            indicator: 1,
            status: 'inactive',
        },
        {
            indicator: 2,
            status: 'completed',
        },
        {
            indicator: 3,
            status: 'completed',
        },
    ],
    [
        {
            indicator: 1,
            status: 'completed',
        },
        {
            indicator: 2,
            status: 'inactive',
        },
        {
            indicator: 3,
            status: 'completed',
        },
    ],
    [
        {
            indicator: 1,
            status: 'active',
        },
        {
            indicator: 2,
            status: 'completed',
        },
        {
            indicator: 3,
            status: 'completed',
        },
    ],
    [
        {
            indicator: 1,
            status: 'completed',
        },
        {
            indicator: 2,
            status: 'active',
        },
        {
            indicator: 3,
            status: 'completed',
        },
    ],
    [
        {
            indicator: 1,
            status: 'completed',
        },
        {
            indicator: 2,
            status: 'completed',
        },
        {
            indicator: 3,
            status: 'active',
        },
    ],
    [
        {
            indicator: 1,
            status: 'completed',
        },
        {
            indicator: 2,
            status: 'completed',
        },
        {
            indicator: 3,
            status: 'completed',
        },
    ],
];

const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
`;

const getItems = ({ quantity = 5, title = 'Title', content = 'Content', simple = false } = {}) => {
    const newItems = new Array(quantity).fill(null).map((_, index) => {
        const indicator = index + 1;
        const status = index === 0 ? 'active' : 'inactive';

        if (simple) {
            return {
                indicator,
                status,
            };
        }

        return {
            title,
            content,
            indicator,
            status,
        };
    });

    return newItems;
};

describe('plasma-b2c: Steps', () => {
    const Steps = getComponent('Steps');

    const simpleItems = getItems({ simple: true });
    const simpleBulletItems = simpleItems.map((item) => ({ ...item, indicator: undefined }));

    const items = getItems({ quantity: 4, simple: false });
    const bulletItems = items.map((item) => ({ ...item, indicator: undefined }));

    const CypressTestDecoratorWithTypo: React.FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={simpleItems} />
                        <PadMe />
                    </>
                ))}
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={simpleBulletItems} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: current', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {new Array(simpleItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={simpleItems} />
                        <PadMe />
                    </>
                ))}
                {new Array(simpleBulletItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={simpleBulletItems} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with title', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={items} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with title: hasContent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Steps items={items} hasContent="all" />
                <PadMe />
                <Steps items={items} hasContent="active" />
                <PadMe />
                <Steps items={items} hasContent="none" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with title, bullets', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={bulletItems} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with title: current', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {new Array(items.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={items} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with title, bullets: current', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {new Array(bulletItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={bulletItems} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with indicators: statuses', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {itemsStatuses.map((items, index) => (
                    <Steps key={index} items={items} />
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with bullets: statuses', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {itemsStatuses.map((items, index) => (
                    <Steps key={index} items={items.map((item) => ({ ...item, indicator: undefined }))} />
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Steps items={simpleItems.map((item) => ({ ...item, disabled: true }))} />
                <PadMe />
                <Steps items={items.map((item) => ({ ...item, disabled: true }))} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_hasLine', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Steps items={simpleItems} hasLine={false} />
                <PadMe />
                <Steps items={simpleBulletItems} hasLine={false} />
                <PadMe />
                <Steps items={items} hasLine={false} />
                <PadMe />
                <Steps items={bulletItems} hasLine={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('itemView:negative', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {new Array(simpleItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={simpleItems} itemView="negative" />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    describe('vertical', () => {
        it('simple', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={simpleItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={simpleBulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('simple: current', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {new Array(simpleItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={simpleItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                        {new Array(simpleBulletItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={simpleBulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });

        it('with title', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={items} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('with title: hasContent', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        <Steps items={items} orientation="vertical" hasContent="all" />
                        <PadMe />
                        <Steps items={items} orientation="vertical" hasContent="active" />
                        <PadMe />
                        <Steps items={items} orientation="vertical" hasContent="none" />
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });

        it('with title, bullets', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={bulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('with title: current', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {new Array(items.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={items} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });

        it('with title, bullets: current', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {new Array(bulletItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={bulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });

        it('with indicators: statuses', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {itemsStatuses.map((items, index) => (
                            <Steps key={index} items={items} orientation="vertical" />
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });

        it('with bullets: statuses', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {itemsStatuses.map((items, index) => (
                            <Steps
                                key={index}
                                items={items.map((item) => ({ ...item, indicator: undefined }))}
                                orientation="vertical"
                            />
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });

        it('_disabled', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        <Steps
                            items={simpleItems.map((item) => ({ ...item, disabled: true }))}
                            orientation="vertical"
                        />
                        <PadMe />
                        <Steps items={items.map((item) => ({ ...item, disabled: true }))} orientation="vertical" />
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_hasLine', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        <Steps items={simpleItems} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={simpleBulletItems} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={items} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={bulletItems} hasLine={false} orientation="vertical" />
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('item view: negative', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <VerticalWrapper>
                        {new Array(simpleItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={simpleItems} orientation="vertical" itemView="negative" />
                                <PadMe />
                            </>
                        ))}
                        {new Array(simpleBulletItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps
                                    current={index}
                                    items={simpleBulletItems}
                                    orientation="vertical"
                                    itemView="negative"
                                />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });
    });
});
