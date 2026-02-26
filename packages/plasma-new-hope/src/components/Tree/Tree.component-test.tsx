import React, { FC } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconBlankTxtOutline, IconLock } from 'override/_Icon';

import type { TreeProps } from './Tree.types';

const componentExists = hasComponent('Tree');
const describeFn = getDescribeFN('Tree');

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

const treeProps = {
    items: treeData,
};

getBaseVisualTests({
    component: 'Tree',
    componentProps: treeProps,
});

describeFn('Tree', () => {
    const Tree = componentExists ? getComponent<TreeProps>('Tree') : () => null;

    const ControlledTree: FC<any> = () => {
        const [expanded, setExpanded] = React.useState([]);
        const [checked, setChecked] = React.useState([]);
        const [selected, setSelected] = React.useState([]);

        return (
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
        );
    };

    it('default', () => {
        mount(<Tree items={treeData} checkable defaultExpandAll />);

        cy.matchImageSnapshot();
    });

    it('prop: defaultExpandAll', () => {
        mount(<Tree items={treeData} defaultExpandAll />);

        cy.matchImageSnapshot();
    });

    it('prop: checkable', () => {
        mount(<Tree items={treeData} checkable defaultExpandAll />);

        cy.get('[aria-label="Select Parent 1-0"]').click();
        cy.get('[aria-label="Select Parent 2-0"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: multiple', () => {
        mount(<Tree items={treeData} defaultExpandAll multiple />);

        cy.get('[title="Parent 1-0"]').click();
        cy.get('[title="Parent 1-1"]').click();

        cy.get('[title="Parent 1-0"]').trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('prop: defaultCheckedKeys', () => {
        mount(<Tree items={treeData} checkable defaultExpandAll defaultCheckedKeys={['0-0-0', '0-1-0']} />);

        cy.matchImageSnapshot();
    });

    it('prop: defaultExpandedKeys', () => {
        mount(<Tree items={treeData} checkable defaultExpandedKeys={['0-0-0', '0-1-0']} />);

        cy.matchImageSnapshot();
    });

    it('prop: defaultSelectedKeys', () => {
        mount(<Tree items={treeData} defaultExpandAll multiple defaultSelectedKeys={['0-0-0', '0-1-0']} />);

        cy.matchImageSnapshot();
    });

    it('prop: arrowPlacement', () => {
        mount(<Tree items={treeData} checkable defaultExpandAll arrowPlacement="right" />);

        cy.matchImageSnapshot();
    });

    it('prop: height', () => {
        mount(<Tree items={treeData} defaultExpandAll height="300px" />);

        cy.matchImageSnapshot();
    });

    it('prop: renderTitle', () => {
        cy.viewport(1000, 600);

        mount(<Tree items={treeData} defaultExpandAll renderTitle={() => 'test render title'} />);

        cy.matchImageSnapshot();
    });

    it('prop: autoExpandParent', () => {
        cy.viewport(1000, 600);

        mount(<Tree items={treeData} autoExpandParent expandedKeys={['0-0-0']} />);

        cy.matchImageSnapshot();
    });

    it('prop: mode', () => {
        cy.viewport(1000, 600);

        mount(<Tree items={treeData} defaultExpandAll mode="radio" />);

        cy.get('[title="Parent 1-0"]').click();
        cy.get('[title="Parent 1-1"]').click();
        cy.get('[title="Parent 1-1"]').click();

        cy.matchImageSnapshot();
    });

    it('flow: controlled', () => {
        cy.viewport(1000, 600);

        mount(<ControlledTree />);

        cy.get('.rc-tree-switcher').first().click();
        cy.get('[title="Parent 1-0"]').click();
        cy.get('[aria-label="Select Parent 1-1"]').click();

        cy.matchImageSnapshot();
    });

    it('flow: thin block', () => {
        cy.viewport(350, 650);

        mount(
            <div style={{ width: '100px' }}>
                <Tree items={treeData} defaultExpandAll />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('flow: thin block, multi-line title', () => {
        cy.viewport(350, 650);

        mount(
            <div style={{ width: '300px' }}>
                <Tree items={treeData} singleLine={false} defaultExpandAll />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('flow: virtual', () => {
        mount(
            <Tree
                items={Array(1000)
                    .fill(1)
                    .map((_, i) => ({ key: i.toString(), title: i.toString() }))}
                height={400}
                itemHeight={48}
            />,
        );

        cy.get('span[title=1]').should('exist');
        cy.get('span[title=999]').should('not.exist');
    });
});
