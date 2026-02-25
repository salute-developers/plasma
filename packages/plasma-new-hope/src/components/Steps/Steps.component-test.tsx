import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
import styled, { createGlobalStyle } from 'styled-components';

// @ts-ignore
import { IconMic } from '../../../../plasma-icons';

import type { StepsProps } from './Steps.types';
import type { StepItemProps } from './ui';

const componentExists = hasComponent('Steps');
const describeFn = getDescribeFN('Steps');

const stepItems: StepItemProps[] = [
    { title: 'Title', content: 'Content', status: 'active', indicator: 1 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 2 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 3 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 4 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 5 },
];

getBaseVisualTests({
    component: 'Steps',
    componentProps: { items: stepItems },
    configPropsForMatrix: ['size', 'view'],
});

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

describeFn('Steps', () => {
    const Steps = componentExists ? getComponent<StepsProps>('Steps') : () => null;
    const simpleItems = getItems({ simple: true });
    const simpleBulletItems = simpleItems.map((item) => ({ ...item, indicator: undefined }));

    const items = getItems({ quantity: 4, simple: false });
    const bulletItems = items.map((item) => ({ ...item, indicator: undefined }));
    const sizes = ['xs', 's', 'm', 'l'];
    const bulletIcon = items.map((item) => ({ ...item, indicator: <IconMic size="xs" /> }));

    it('Steps: contentAlign=center, indicatorType=bullet, hasContent=active', () => {
        mount(
            <>
                <Steps size="s" items={bulletItems} contentAlign="center" hasContent="active" hasLine={false} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('Steps: indicatorType=icon, hasContent=none', () => {
        mount(
            <>
                <Steps size="s" items={bulletIcon} hasContent="none" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('Steps: simple', () => {
        mount(
            <>
                <Steps items={simpleItems} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('Steps: vertical, isLoading', () => {
        mount(
            <>
                <Steps items={stepItems} hasLoader orientation="vertical" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('Steps: disabled', () => {
        mount(
            <>
                <Steps items={stepItems.map((item) => ({ ...item, disabled: true }))} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('simple', () => {
        mount(
            <>
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
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: current', () => {
        mount(
            <>
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
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with title', () => {
        mount(
            <>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={items} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with title: hasContent', () => {
        mount(
            <>
                <Steps items={items} hasContent="all" />
                <PadMe />
                <Steps items={items} hasContent="active" />
                <PadMe />
                <Steps items={items} hasContent="none" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with title, bullets', () => {
        mount(
            <>
                {sizes.map((size) => (
                    <>
                        <Steps size={size} items={bulletItems} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with title: current', () => {
        mount(
            <>
                {new Array(items.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={items} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with title, bullets: current', () => {
        mount(
            <>
                {new Array(bulletItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={bulletItems} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with indicators: statuses', () => {
        mount(
            <>
                {itemsStatuses.map((items, index) => (
                    <Steps key={index} items={items} />
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with bullets: statuses', () => {
        mount(
            <>
                {itemsStatuses.map((items, index) => (
                    <Steps key={index} items={items.map((item) => ({ ...item, indicator: undefined }))} />
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <>
                <Steps items={simpleItems.map((item) => ({ ...item, disabled: true }))} />
                <PadMe />
                <Steps items={items.map((item) => ({ ...item, disabled: true }))} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('_hasLine', () => {
        mount(
            <>
                <Steps items={simpleItems} hasLine={false} />
                <PadMe />
                <Steps items={simpleBulletItems} hasLine={false} />
                <PadMe />
                <Steps items={items} hasLine={false} />
                <PadMe />
                <Steps items={bulletItems} hasLine={false} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('itemView:negative', () => {
        mount(
            <>
                {new Array(simpleItems.length + 1).fill(null).map((size, index) => (
                    <>
                        <Steps current={index} items={simpleItems} itemView="negative" />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    describe('vertical', () => {
        it('simple', () => {
            mount(
                <>
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
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('simple: current', () => {
            mount(
                <>
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
                </>,
            );

            cy.matchImageSnapshot();
        });

        it('with title', () => {
            mount(
                <>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={items} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('with title: hasContent', () => {
            mount(
                <>
                    <VerticalWrapper>
                        <Steps items={items} orientation="vertical" hasContent="all" />
                        <PadMe />
                        <Steps items={items} orientation="vertical" hasContent="active" />
                        <PadMe />
                        <Steps items={items} orientation="vertical" hasContent="none" />
                    </VerticalWrapper>
                </>,
            );

            cy.matchImageSnapshot();
        });

        it('with title, bullets', () => {
            mount(
                <>
                    <VerticalWrapper>
                        {sizes.map((size) => (
                            <>
                                <Steps size={size} items={bulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('with title: current', () => {
            mount(
                <>
                    <VerticalWrapper>
                        {new Array(items.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={items} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </>,
            );

            cy.matchImageSnapshot();
        });

        it('with title, bullets: current', () => {
            mount(
                <>
                    <VerticalWrapper>
                        {new Array(bulletItems.length + 1).fill(null).map((size, index) => (
                            <>
                                <Steps current={index} items={bulletItems} orientation="vertical" />
                                <PadMe />
                            </>
                        ))}
                    </VerticalWrapper>
                </>,
            );

            cy.matchImageSnapshot();
        });

        it('with indicators: statuses', () => {
            mount(
                <>
                    <VerticalWrapper>
                        {itemsStatuses.map((items, index) => (
                            <Steps key={index} items={items} orientation="vertical" />
                        ))}
                    </VerticalWrapper>
                </>,
            );

            cy.matchImageSnapshot();
        });

        it('with bullets: statuses', () => {
            mount(
                <>
                    <VerticalWrapper>
                        {itemsStatuses.map((items, index) => (
                            <Steps
                                key={index}
                                items={items.map((item) => ({ ...item, indicator: undefined }))}
                                orientation="vertical"
                            />
                        ))}
                    </VerticalWrapper>
                </>,
            );

            cy.matchImageSnapshot();
        });

        it('_disabled', () => {
            mount(
                <>
                    <VerticalWrapper>
                        <Steps
                            items={simpleItems.map((item) => ({ ...item, disabled: true }))}
                            orientation="vertical"
                        />
                        <PadMe />
                        <Steps items={items.map((item) => ({ ...item, disabled: true }))} orientation="vertical" />
                    </VerticalWrapper>
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('_hasLine', () => {
            mount(
                <>
                    <VerticalWrapper>
                        <Steps items={simpleItems} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={simpleBulletItems} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={items} hasLine={false} orientation="vertical" />
                        <PadMe />
                        <Steps items={bulletItems} hasLine={false} orientation="vertical" />
                    </VerticalWrapper>
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('item view: negative', () => {
            mount(
                <>
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
                </>,
            );
            cy.matchImageSnapshot();
        });
    });
});
