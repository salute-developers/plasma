export function groupByHeadings(tree) {
    const initialState = {
        groups: new Map(),
        currentH2: null,
        currentH3: null,
        seenHeadings: new Set(),
    };

    const result = tree.children.reduce((state, node) => {
        const { groups, currentH2, currentH3, seenHeadings } = state;

        if (node.type !== 'heading') {
            const currentHeading = currentH3 || currentH2;
            const currentNodes = groups.get(currentHeading) || [];
            groups.set(currentHeading, [...currentNodes, node]);
            return state;
        }

        const value = node.children[0].value;
        if (seenHeadings.has(value)) {
            return state;
        }

        seenHeadings.add(value);

        return {
            ...state,
            currentH2: node.depth === 2 ? value : currentH2,
            currentH3: node.depth === 3 ? value : node.depth === 2 ? null : currentH3,
            groups: new Map([...groups, [value, [node]]]),
        };
    }, initialState);

    return {
        ...tree,
        children: [...result.groups.values()].flat(),
    };
}
