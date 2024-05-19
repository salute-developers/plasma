export const updateDescendants = (node: any, checkedMap: any, isChecked: boolean) => {
    if (!node?.items) return;

    node.items.forEach((item) => {
        checkedMap.set(item.value, isChecked);

        if (item.items) {
            updateDescendants(item, checkedMap, isChecked);
        }
    });
};
