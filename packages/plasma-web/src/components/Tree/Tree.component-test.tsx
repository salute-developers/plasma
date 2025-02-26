import React, { FC } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const treeData = [
    {
        title: 'Parent 1',
        key: '0-0',
        children: [
            {
                title: 'Parent 1-0',
                key: '0-0-0',
                children: [
                    {
                        title: 'Leaf',
                        key: '0-0-0-0',
                        disabled: true,
                    },
                    {
                        title: 'Leaf',
                        key: '0-0-0-1',
                        children: [
                            {
                                title: 'Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf',
                                key: '0-0-0-0-0',
                            },
                            {
                                title: 'Leaf',
                                key: '0-0-0-0-1',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Parent 1-1',
                key: '0-0-1',
                children: [{ title: 'Leaf', key: '0-0-1-0' }],
            },
        ],
    },
    {
        title: 'Parent 2',
        key: '0-1',
        children: [
            {
                title: 'Parent 2-0',
                key: '0-1-0',
            },
        ],
    },
];

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Tree', () => {
    const Tree = getComponent('Tree');

    const CypressTestDecoratorWithTypo: FC<any> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('default', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} checkable defaultExpandAll />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultExpandAll', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} defaultExpandAll />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: checkable', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} checkable defaultExpandAll />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('[aria-label="Select Parent 1-0"]').click();
        cy.get('[aria-label="Select Parent 2-0"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: multiple', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} defaultExpandAll multiple />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('[title="Parent 1-0"]').click();
        cy.get('[title="Parent 1-1"]').click();

        cy.get('[title="Parent 1-0"]').realHover();

        cy.matchImageSnapshot();
    });

    it('prop: defaultCheckedKeys', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} checkable defaultExpandAll defaultCheckedKeys={['0-0-0', '0-1-0']} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultExpandedKeys', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} checkable defaultExpandedKeys={['0-0-0', '0-1-0']} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultSelectedKeys', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} defaultExpandAll multiple defaultSelectedKeys={['0-0-0', '0-1-0']} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: arrowPlacement', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} checkable defaultExpandAll arrowPlacement="right" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: height', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} defaultExpandAll height="300px" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: size', () => {
        cy.viewport(1000, 1000);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'grid', gridTemplateColumns: '500px 500px', gridRow: '500px 500px' }}>
                    <Tree items={treeData} checkable defaultExpandAll size="l" />
                    <Tree items={treeData} checkable defaultExpandAll size="m" />
                    <Tree items={treeData} checkable defaultExpandAll size="s" />
                    <Tree items={treeData} checkable defaultExpandAll size="xs" />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: renderTitle', () => {
        cy.viewport(1000, 1000);

        mount(
            <CypressTestDecoratorWithTypo>
                <Tree items={treeData} defaultExpandAll renderTitle={() => 'test render title'} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
