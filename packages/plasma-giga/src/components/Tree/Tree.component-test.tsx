import React, { FC } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconBlankTxtOutline, IconLock } from '@salutejs/plasma-icons';

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
                        contentRight: <IconLock size="s" color="inherit" />,
                    },
                    {
                        title: 'Leaf',
                        key: '0-0-0-1',
                        children: [
                            {
                                title: 'Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf',
                                key: '0-0-0-0-0',
                                icon: <IconBlankTxtOutline size="s" color="inherit" />,
                            },
                            {
                                title: 'Leaf',
                                key: '0-0-0-0-1',
                                icon: <IconBlankTxtOutline size="s" color="inherit" />,
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

describe('plasma-giga: Tree', () => {
    const Tree = getComponent('Tree');

    const ControlledTree: FC<any> = () => {
        const [expanded, setExpanded] = React.useState([]);
        const [checked, setChecked] = React.useState([]);
        const [selected, setSelected] = React.useState([]);

        return (
            <CypressTestDecorator>
                <Tree
                    items={treeData}
                    checkable
                    expandedKeys={expanded}
                    onTreeExpand={setExpanded}
                    checkedKeys={checked}
                    onTreeCheck={setChecked}
                    selectedKeys={selected}
                    onTreeSelect={setSelected}
                />
            </CypressTestDecorator>
        );
    };

    const AsyncTree: FC<any> = () => {
        const [treeData, setTreeData] = React.useState([
            { title: 'Открыть для загрузки', key: '0' },
            { title: 'Конечный элемент', key: '1', isLeaf: true },
        ]);

        const updateTreeData = (list: any, key: React.Key, children: any): any =>
            list.map((node) => {
                if (node.key === key) {
                    return {
                        ...node,
                        children,
                    };
                }

                if (node.children) {
                    return {
                        ...node,
                        children: updateTreeData(node.children, key, children),
                    };
                }

                return node;
            });

        const loadData = ({ key, children }) =>
            new Promise<void>((resolve) => {
                if (children) {
                    resolve();
                    return;
                }

                setTimeout(() => {
                    setTreeData((origin) =>
                        updateTreeData(origin, key, [{ title: 'Загруженный элемент', key: `${key}-0` }]),
                    );

                    resolve();
                }, 100);
            });

        return (
            <CypressTestDecorator>
                <Tree loadData={loadData} items={treeData} />
            </CypressTestDecorator>
        );
    };

    it('default', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} checkable defaultExpandAll />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultExpandAll', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} defaultExpandAll />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: checkable', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} checkable defaultExpandAll />
            </CypressTestDecorator>,
        );

        cy.get('[aria-label="Select Parent 1-0"]').click();
        cy.get('[aria-label="Select Parent 2-0"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: multiple', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} defaultExpandAll multiple />
            </CypressTestDecorator>,
        );

        cy.get('[title="Parent 1-0"]').click();
        cy.get('[title="Parent 1-1"]').click();

        cy.get('[title="Parent 1-0"]').realHover();

        cy.matchImageSnapshot();

        cy.get('body').realHover({ position: 'bottomRight' });
    });

    it('prop: defaultCheckedKeys', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} checkable defaultExpandAll defaultCheckedKeys={['0-0-0', '0-1-0']} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultExpandedKeys', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} checkable defaultExpandedKeys={['0-0-0', '0-1-0']} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultSelectedKeys', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} defaultExpandAll multiple defaultSelectedKeys={['0-0-0', '0-1-0']} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: arrowPlacement', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} checkable defaultExpandAll arrowPlacement="right" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: height', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} defaultExpandAll height="300px" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: size', () => {
        cy.viewport(1000, 1000);

        mount(
            <CypressTestDecorator>
                <div style={{ display: 'grid', gridTemplateColumns: '500px 500px', gridRow: '500px 500px' }}>
                    <Tree items={treeData} checkable defaultExpandAll size="l" />
                    <Tree items={treeData} checkable defaultExpandAll size="m" />
                    <Tree items={treeData} checkable defaultExpandAll size="s" />
                    <Tree items={treeData} checkable defaultExpandAll size="xs" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: renderTitle', () => {
        cy.viewport(1000, 1000);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} defaultExpandAll renderTitle={() => 'test render title'} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: autoExpandParent', () => {
        cy.viewport(1000, 1000);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} autoExpandParent expandedKeys={['0-0-0']} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: mode', () => {
        cy.viewport(1000, 1000);

        mount(
            <CypressTestDecorator>
                <Tree items={treeData} defaultExpandAll mode="radio" />
            </CypressTestDecorator>,
        );

        cy.get('[title="Parent 1-0"]').click();
        cy.get('[title="Parent 1-1"]').click();
        cy.get('[title="Parent 1-1"]').click();

        cy.matchImageSnapshot();
    });

    it('flow: controlled', () => {
        cy.viewport(1000, 1000);

        mount(<ControlledTree />);

        cy.get('.rc-tree-switcher').first().click();
        cy.get('[title="Parent 1-0"]').click();
        cy.get('[aria-label="Select Parent 1-1"]').click();

        cy.matchImageSnapshot();
    });

    it('flow: thin block', () => {
        cy.viewport(200, 500);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '100px' }}>
                    <Tree items={treeData} defaultExpandAll />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('flow: thin block, multi-line title', () => {
        cy.viewport(200, 500);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Tree items={treeData} singleLine={false} defaultExpandAll />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('flow: virtual', () => {
        cy.viewport(500, 500);

        mount(
            <CypressTestDecorator>
                <Tree
                    items={Array(1000)
                        .fill(1)
                        .map((_, i) => ({ key: i.toString(), title: i.toString() }))}
                    height={400}
                    itemHeight={48}
                />
            </CypressTestDecorator>,
        );

        cy.get('span[title=1]').should('exist');
        cy.get('span[title=999]').should('not.exist');
    });

    it('flow: async loading', () => {
        mount(<AsyncTree />);

        cy.contains('Загруженный элемент').should('not.exist');
        cy.get('.rc-tree-switcher').first().click();
        cy.contains('Загруженный элемент').should('not.exist');

        cy.matchImageSnapshot();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);

        cy.contains('Загруженный элемент').should('exist');
    });
});
