export const updateSingleAncestors = (node: any, checkedMap: any, type) => {
    if (!node.parent) return;

    const { parent } = node;

    checkedMap.set(parent.value, type);

    updateSingleAncestors(parent, checkedMap, type);
};
