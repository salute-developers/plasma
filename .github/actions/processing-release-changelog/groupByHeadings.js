export function groupByHeadings(tree) {
    const groups = new Map();
    const h2List = new Set();

    let nodes = [...tree.children];
    let currentGroup = null;
    let currentNodes = [];

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (node.type === 'heading' && node.depth === 2) {
            const headingValue = node.children[0].value;

            if (currentGroup) {
                if (!groups.has(currentGroup)) {
                    groups.set(currentGroup, []);
                }

                groups.get(currentGroup).push(...currentNodes);
            }

            currentGroup = headingValue;

            if (!h2List.has(headingValue)) {
                currentNodes = [node];

                h2List.add(headingValue);
            } else {
                currentNodes = [];
            }
        } else {
            if (currentGroup) {
                currentNodes.push(node);
            }
        }
    }

    if (currentGroup && currentNodes.length) {
        if (!groups.has(currentGroup)) {
            groups.set(currentGroup, []);
        }

        groups.get(currentGroup).push(...currentNodes);
    }

    const newChildren = [];

    for (const [_, nodes] of groups) {
        newChildren.push(...nodes);
    }

    return { ...tree, children: newChildren };
}
