import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import React from 'react';
import styled from 'styled-components';

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

describe('plasma-b2c: Flow', () => {
    const Flow = getComponent('Flow');

    const FlowCustom = styled(Flow)`
        background: var(--surface-transparent-primary);
        border-radius: 0.5rem;
    `;

    const Demo: React.FC<any> = (props) => {
        return (
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
        );
    };

    it('[PLASMA-T1951] Flow: arrangement=start, alignment=start, orientation=horizontal, itemsPerLine=2, mainAxisGap=10, crossAxisGap=10', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    arrangement="start"
                    alignment="start"
                    orientation="horizontal"
                    itemsPerLine="2"
                    mainAxisGap="10"
                    crossAxisGap="10"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1952] Flow: arrangement=center, alignment=center, orientation=vertical, itemsPerLine=3, mainAxisGap=10', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    arrangement="center"
                    alignment="center"
                    orientation="vertical"
                    itemsPerLine="3"
                    mainAxisGap="10"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1953] Flow: arrangement=end, alignment=end, orientation=horizontal, itemsPerLine=2, crossAxisGap=10', () => {
        mount(
            <CypressTestDecorator>
                <Demo arrangement="end" alignment="end" orientation="horizontal" itemsPerLine="2" crossAxisGap="10" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1954] Flow: arrangement=spaceBetween, alignment=start, orientation=horizontal, itemsPerLine=2', () => {
        mount(
            <CypressTestDecorator>
                <Demo arrangement="spaceBetween" alignment="start" orientation="horizontal" itemsPerLine="2" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1955] Flow: arrangement=spaceAround, alignment=start, orientation=horizontal, itemsPerLine=2', () => {
        mount(
            <CypressTestDecorator>
                <Demo arrangement="spaceAround" alignment="start" orientation="horizontal" itemsPerLine="2" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1956] Flow: arrangement=start, alignment=end, orientation=horizontal, itemsPerLine=1', () => {
        mount(
            <CypressTestDecorator>
                <Demo arrangement="start" alignment="end" orientation="horizontal" itemsPerLine="1" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
