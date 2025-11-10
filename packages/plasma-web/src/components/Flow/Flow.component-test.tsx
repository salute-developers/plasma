import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import React from 'react';
import styled from 'styled-components';

const arrangements = ['start', 'center', 'end', 'spaceBetween', 'spaceAround'];
const alignments = ['start', 'center', 'end'];

const widths = [100, 32, 171, 74, 179, 55];
const heights = [10, 50, 45, 33, 14, 55];

const itemsCount = widths.length;

const Item = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: #aab1e9;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
`;

describe('plasma-web: Flow', () => {
    const Flow = getComponent('Flow');

    const FlowCustom = styled(Flow)`
        background: var(--surface-transparent-primary);
        border-radius: 0.5rem;
    `;

    const Demo: React.FC<any> = (props) => {
        return (
            <CypressTestDecorator>
                <FlowCustom
                    {...props}
                    style={{
                        maxWidth: '28rem',
                        height: '13rem',
                    }}
                >
                    {new Array(itemsCount).fill(null).map((width, index) => (
                        <Item
                            key={index}
                            style={{
                                minWidth: widths[index % widths.length],
                                minHeight: heights[index % heights.length],
                            }}
                        >
                            {index + 1}
                        </Item>
                    ))}
                </FlowCustom>
            </CypressTestDecorator>
        );
    };

    arrangements.forEach((arrangement) => {
        it(`flex-wrap:arrangement:${arrangement}`, () => {
            mount(
                <>
                    <Demo orientation="horizontal" arrangement={arrangement} alignment="center" />
                    <Demo orientation="vertical" arrangement={arrangement} alignment="center" />
                </>,
            );

            cy.matchImageSnapshot();
        });
    });
    alignments.forEach((alignment) => {
        it(`flex-wrap:alignment:${alignment}`, () => {
            mount(
                <>
                    <Demo orientation="horizontal" arrangement="center" alignment={alignment} />
                    <Demo orientation="vertical" arrangement="center" alignment={alignment} />
                </>,
            );

            cy.matchImageSnapshot();
        });
    });

    arrangements.forEach((arrangement) => {
        it(`lines:arrangement:${arrangement}`, () => {
            mount(
                <>
                    <Demo orientation="horizontal" arrangement={arrangement} alignment="center" itemsPerLine={3} />
                    <Demo orientation="vertical" arrangement={arrangement} alignment="center" itemsPerLine={3} />
                </>,
            );

            cy.matchImageSnapshot();
        });
    });
    alignments.forEach((alignment) => {
        it(`lines:alignment:${alignment}`, () => {
            mount(
                <>
                    <Demo orientation="horizontal" arrangement="center" alignment={alignment} itemsPerLine={3} />
                    <Demo orientation="vertical" arrangement="center" alignment={alignment} itemsPerLine={3} />
                </>,
            );

            cy.matchImageSnapshot();
        });
    });

    it('flex-rap:gap', () => {
        mount(
            <>
                <Demo
                    mainAxisGap="0.5rem"
                    crossAxisGap="2rem"
                    orientation="horizontal"
                    arrangement="center"
                    alignment="center"
                />
                <Demo
                    mainAxisGap="0.5rem"
                    crossAxisGap="2rem"
                    orientation="vertical"
                    arrangement="center"
                    alignment="center"
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('lines:gap', () => {
        mount(
            <>
                <Demo
                    mainAxisGap="2rem"
                    crossAxisGap="1rem"
                    itemsPerLine={3}
                    orientation="horizontal"
                    arrangement="center"
                    alignment="center"
                />
                <Demo
                    mainAxisGap="2rem"
                    crossAxisGap="1rem"
                    itemsPerLine={3}
                    orientation="vertical"
                    arrangement="center"
                    alignment="center"
                />
            </>,
        );

        cy.matchImageSnapshot();
    });
});
