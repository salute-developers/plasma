export function groupByHeadings(tree) {
    const groups = new Map();
    let currentHeading = null;

    // Группируем узлы по заголовкам
    for (const node of tree.children) {
        if (node.type === 'heading' && node.depth === 2) {
            currentHeading = node.children[0].value;
            // При первом появлении заголовка создаем массив с ним
            groups.set(currentHeading, [node]);
        } else if (currentHeading) {
            // Добавляем узлы к текущей группе
            groups.get(currentHeading).push(node);
        }
    }

    return {
        ...tree,
        children: [...groups.values()].flat(),
    };
}
