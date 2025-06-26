import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

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

describe('plasma-giga: Steps', () => {
    const Steps = getComponent('Steps');

    const simpleItems = getItems({ simple: true });
    const simpleBulletItems = simpleItems.map((item) => ({ ...item, indicator: undefined }));

    const items = getItems({ quantity: 4, simple: false });
    const bulletItems = items.map((item) => ({ ...item, indicator: undefined }));

    it('simple', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: current', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with title', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={items} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with title: hasContent', () => {
        mount(
            <CypressTestDecorator>
                <Steps items={items} hasContent="all" />
                <PadMe />
                <Steps items={items} hasContent="active" />
                <PadMe />
                <Steps items={items} hasContent="none" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with title, bullets', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={bulletItems} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with title: current', () => {
        mount(
            <CypressTestDecorator>
                {new Array(items.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={items} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with title, bullets: current', () => {
        mount(
            <CypressTestDecorator>
                {new Array(bulletItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={bulletItems} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with indicators: statuses', () => {
        mount(
            <CypressTestDecorator>
                {itemsStatuses.map((items, index) => (
                    <Steps key={index} items={items} />
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with bullets: statuses', () => {
        mount(
            <CypressTestDecorator>
                {itemsStatuses.map((items, index) => (
                    <Steps key={index} items={items.map((item) => ({ ...item, indicator: undefined }))} />
                ))}
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecorator>
                <Steps items={simpleItems.map((item) => ({ ...item, disabled: true }))} />
                <PadMe />
                <Steps items={items.map((item) => ({ ...item, disabled: true }))} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_hasLine', () => {
        mount(
            <CypressTestDecorator>
                <Steps items={simpleItems} hasLine={false} />
                <PadMe />
                <Steps items={simpleBulletItems} hasLine={false} />
                <PadMe />
                <Steps items={items} hasLine={false} />
                <PadMe />
                <Steps items={bulletItems} hasLine={false} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('itemView:negative', () => {
        mount(
            <CypressTestDecorator>
                {new Array(simpleItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={simpleItems} itemView="negative" />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    describe('vertical', () => {
        it('simple', () => {
            mount(
                <CypressTestDecorator>
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
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('simple: current', () => {
            mount(
                <CypressTestDecorator>
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
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });

        it('with title', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={items} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('with title: hasContent', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        <Steps items={items} orientation="vertical" hasContent="all" />
                        <PadMe />
                        <Steps items={items} orientation="vertical" hasContent="active" />
                        <PadMe />
                        <Steps items={items} orientation="vertical" hasContent="none" />
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });

        it('with title, bullets', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={bulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('with title: current', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        {new Array(items.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={items} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });

        it('with title, bullets: current', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        {new Array(bulletItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={bulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });

        it('with indicators: statuses', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        {itemsStatuses.map((items, index) => (
                            <Steps key={index} items={items} orientation="vertical" />
                        ))}
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });

        it('with bullets: statuses', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        {itemsStatuses.map((items, index) => (
                            <Steps
                                key={index}
                                items={items.map((item) => ({ ...item, indicator: undefined }))}
                                orientation="vertical"
                            />
                        ))}
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });

        it('_disabled', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        <Steps
                            items={simpleItems.map((item) => ({ ...item, disabled: true }))}
                            orientation="vertical"
                        />
                        <PadMe />
                        <Steps items={items.map((item) => ({ ...item, disabled: true }))} orientation="vertical" />
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_hasLine', () => {
            mount(
                <CypressTestDecorator>
                    <VerticalWrapper>
                        <Steps items={simpleItems} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={simpleBulletItems} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={items} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={bulletItems} hasLine={false} orientation="vertical" />
                    </VerticalWrapper>
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('item view: negative', () => {
            mount(
                <CypressTestDecorator>
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
                </CypressTestDecorator>,
            );

            cy.matchImageSnapshot();
        });
    });
});
