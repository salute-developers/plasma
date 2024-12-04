export function groupByHeadings(tree) {
    const groups = new Map();
    const h2List = new Set();

    let currentGroup = null;
    let currentNodes = [];

    for (const node of tree.children) {
        if (node.type === 'heading' && node.depth === 2) {
            // Сохраняем предыдущую группу
            if (currentGroup) {
                const data = [...(groups.get(currentGroup) || []), ...currentNodes];

                groups.set(currentGroup, data);
            }

            const headingValue = node.children[0].value;

            currentGroup = headingValue;

            // Сохраняем заголовок только если он встречается впервые
            currentNodes = !h2List.has(headingValue) ? [node] : [];
            h2List.add(headingValue);
        } else if (currentGroup) {
            currentNodes.push(node);
        }
    }

    // Сохраняем последнюю группу
    if (currentGroup && currentNodes.length) {
        const data = [...(groups.get(currentGroup) || []), ...currentNodes];

        groups.set(currentGroup, data);
    }

    return {
        ...tree,
        children: [...groups.values()].flat(),
    };
}
