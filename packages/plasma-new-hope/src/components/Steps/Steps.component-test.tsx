import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';
// @ts-ignore
import { IconMic } from 'override/_Icon';

import type { StepsProps } from './Steps.types';
import type { StepItemProps, StepStatus } from './ui';

const componentExists = hasComponent('Steps');
const describeFn = getDescribeFN('Steps');

const stepItems: StepItemProps[] = [
    { title: 'Title', content: 'Content', status: 'active', indicator: 1 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 2 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 3 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 4 },
    { title: 'Title', content: 'Content', status: 'inactive', indicator: 5 },
];

const stepItemsWithView: StepItemProps[] = [
    { title: 'Title', content: 'Content', status: 'completed', indicator: 1, completedItemView: 'accent' },
    { title: 'Title', content: 'Content', status: 'completed', indicator: 2, completedItemView: 'positive' },
    { title: 'Title', content: 'Content', status: 'completed', indicator: 3, completedItemView: 'warning' },
    { title: 'Title', content: 'Content', status: 'completed', indicator: 4, completedItemView: 'negative' },
    { title: 'Title', content: 'Content', status: 'completed', indicator: 5, completedItemView: 'default' },
];

const complexContent = (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <span>Text</span>
        <span>Lorem Ipsum</span>
        <input type="text" placeholder="input" />
    </div>
);

const complexStepItems: StepItemProps[] = [
    { title: 'Title', content: complexContent, status: 'active', indicator: 1 },
    { title: 'Title', content: complexContent, status: 'inactive', indicator: 2 },
    { title: 'Title', content: complexContent, status: 'inactive', indicator: 3 },
];

const getItems = ({ quantity = 5, title = 'Title', content = 'Content', simple = false } = {}): StepItemProps[] => {
    const newItems = new Array(quantity).fill(null).map((_, index) => {
        const indicator = index + 1;
        const status = (index === 0 ? 'active' : 'inactive') as StepStatus;

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

getBaseVisualTests({
    component: 'Steps',
    componentProps: {
        items: stepItems,
    },
    configPropsForMatrix: ['view', 'size'],
});

getBaseVisualTests({
    component: 'Steps',
    componentProps: {
        items: stepItems,
        orientation: 'vertical',
    },
    propsForName: ['orientation'],
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Steps', () => {
    const Steps = componentExists ? getComponent<StepsProps>('Steps') : () => null;

    const simpleItems = getItems({ simple: true });
    const items = getItems({ quantity: 4, simple: false });

    const bulletItems = items.map((item) => ({ ...item, indicator: undefined }));
    const bulletIcon = items.map((item) => ({ ...item, indicator: <IconMic size="xs" /> }));

    it('status', () => {
        mount(
            <>
                {itemsStatuses.map((items, ind) => (
                    <Steps items={items} key={ind} />
                ))}
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('status, orientation=vertical', () => {
        mount(
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', height: '200px' }}>
                {itemsStatuses.map((items, ind) => (
                    <Steps items={items} key={ind} orientation="vertical" />
                ))}
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('contentAlign=center, indicatorType=bullet, hasLine=false', () => {
        mount(<Steps items={bulletItems} contentAlign="center" hasLine={false} />);
        cy.matchImageSnapshot();
    });

    it('indicatorType=icon, hasContent=none', () => {
        mount(<Steps items={bulletIcon} hasContent="none" />);
        cy.matchImageSnapshot();
    });

    it('simple items', () => {
        mount(<Steps items={simpleItems} />);
        cy.matchImageSnapshot();
    });

    it('hasLoader', () => {
        mount(<Steps items={stepItems} hasLoader />);
        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<Steps items={stepItems.map((item) => ({ ...item, disabled: true }))} />);
        cy.matchImageSnapshot();
    });

    it('itemView:negative', () => {
        mount(<Steps current={2} items={simpleItems} itemView="negative" />);
        cy.matchImageSnapshot();
    });

    it('custom step item view', () => {
        mount(
            <VerticalWrapper>
                <Steps items={stepItemsWithView} orientation="vertical" />
                <Steps items={stepItemsWithView} orientation="vertical" hasLine={false} />
            </VerticalWrapper>,
        );

        cy.matchImageSnapshot();
    });

    it('item stretch to max width', () => {
        mount(
            <div style={{ maxWidth: '450px' }}>
                <Steps items={complexStepItems} orientation="vertical" />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('custom height, orientation=vertical', () => {
        const itemsWithHeight: StepItemProps[] = [
            { indicator: 1, title: 'Title', content: 'Content', status: 'completed', height: '8rem' },
            { indicator: 2, title: 'Title', content: 'Content', status: 'active', height: '8rem' },
            { indicator: 3, title: 'Title', content: 'Content', status: 'inactive' },
        ];

        mount(
            <div style={{ width: '300px' }}>
                <Steps items={itemsWithHeight} orientation="vertical" hasLine />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('title of first item is not cropped, orientation=vertical', () => {
        const itemsWithoutIndicator: StepItemProps[] = [
            { title: 'Title', content: 'Content', status: 'completed', height: '4rem' },
            { title: 'Title', status: 'completed', height: '4rem' },
            { title: 'Title', status: 'active', height: '4rem' },
        ];

        mount(
            <div style={{ width: '300px', overflow: 'hidden' }}>
                <div id="neighbour" style={{ background: '#9d9d9d' }}>
                    Neighbour
                </div>
                <Steps
                    id="vertical-bullet-steps"
                    size="s"
                    items={itemsWithoutIndicator}
                    orientation="vertical"
                    hasLine
                />
            </div>,
        );

        cy.get('#vertical-bullet-steps').then(($steps) => {
            const stepsTop = $steps[0].getBoundingClientRect().top;

            cy.get('.step-item-title')
                .first()
                .then(($title) => {
                    expect($title[0].getBoundingClientRect().top).to.be.at.least(stepsTop - 1);
                });
        });

        cy.matchImageSnapshot();
    });

    it('first active marker stays inside the container', () => {
        const indicatorItems: StepItemProps[] = [
            { indicator: 1, title: 'Title', content: 'Content', status: 'active' },
            { indicator: 2, title: 'Title', content: 'Content', status: 'inactive' },
        ];
        const bulletItems: StepItemProps[] = indicatorItems.map(({ indicator: _indicator, ...item }) => item);

        const clip = { overflow: 'hidden', background: '#c5d8ee' } as const;

        mount(
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
                <div style={clip}>
                    <Steps id="horizontal-indicator" items={indicatorItems} hasLine />
                </div>
                <div style={{ ...clip, height: '12rem' }}>
                    <Steps id="vertical-indicator" items={indicatorItems} orientation="vertical" hasLine />
                </div>
                <div style={clip}>
                    <Steps id="horizontal-bullet" items={bulletItems} hasLine />
                </div>
                <div style={{ ...clip, height: '12rem' }}>
                    <Steps id="vertical-bullet" items={bulletItems} orientation="vertical" hasLine />
                </div>
            </div>,
        );

        ['horizontal-indicator', 'horizontal-bullet'].forEach((id) => {
            cy.get(`#${id} .step-item`)
                .first()
                .then(($item) => {
                    const itemLeft = $item[0].getBoundingClientRect().left;

                    cy.wrap($item)
                        .find('button')
                        .then(($marker) => {
                            expect($marker[0].getBoundingClientRect().left).to.be.at.least(itemLeft - 1);
                        });
                });
        });

        ['vertical-indicator', 'vertical-bullet'].forEach((id) => {
            cy.get(`#${id} .step-item`)
                .first()
                .then(($item) => {
                    const itemTop = $item[0].getBoundingClientRect().top;

                    cy.wrap($item)
                        .find('button')
                        .then(($marker) => {
                            expect($marker[0].getBoundingClientRect().top).to.be.at.least(itemTop - 1);
                        });
                });
        });

        cy.matchImageSnapshot();
    });

    it('consecutive active items, divider does not overlap indicator', () => {
        const consecutiveActiveItems: StepItemProps[] = [
            { title: 'Title', content: 'Content', status: 'active', height: '4rem' },
            { title: 'Title', status: 'active', height: '4rem' },
            { title: 'Title', status: 'active', height: '4rem' },
            { title: 'Title', content: 'Content', status: 'completed', height: '4rem' },
        ];

        const consecutiveActiveIndicators: StepItemProps[] = consecutiveActiveItems.map((item, index) => ({
            ...item,
            indicator: index + 1,
        }));

        mount(
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '600px' }}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Steps items={consecutiveActiveItems} orientation="vertical" hasLine size="s" />
                    <Steps items={consecutiveActiveIndicators} orientation="vertical" hasLine />
                    <Steps items={consecutiveActiveIndicators} hasLine />
                </div>
                <Steps items={consecutiveActiveItems} hasLine />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('custom width, orientation=horizontal', () => {
        const itemsWithWidth: StepItemProps[] = [
            { indicator: 1, title: 'Title', content: 'Content', status: 'completed', width: '200px' },
            { indicator: 2, title: 'Title', content: 'Content', status: 'active' },
            { indicator: 3, title: 'Title', content: 'Content', status: 'inactive', width: '200px' },
        ];

        mount(<Steps items={itemsWithWidth} />);

        cy.matchImageSnapshot();
    });

    it('prop: onChange', () => {
        const clickableItems: StepItemProps[] = [
            { title: 'Step 1', indicator: 1, status: 'active' },
            { title: 'Step 2', indicator: 2, status: 'inactive' },
        ];

        const onChange = cy.stub().as('onChange');

        mount(<Steps items={clickableItems} onChange={onChange} />);

        cy.contains('Step 2').click();

        cy.get('@onChange').should('have.been.calledOnce');
        cy.get('@onChange').its('firstCall.args.0.title').should('eq', 'Step 2');
        cy.get('@onChange').its('firstCall.args.1').should('eq', 1);
        cy.get('@onChange').its('firstCall.args.2').should('eq', 0);
    });
});
