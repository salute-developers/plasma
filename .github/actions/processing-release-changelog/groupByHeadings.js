export function groupByHeadings(tree) {
    const groups = new Map();
    let nodes = [...tree.children];

    let currentGroup = null;
    let currentNodes = [];
    let isFirstMainHeading = new Set(); // Для отслеживания первого вхождения заголовка

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
            // Добавляем заголовок в группу только если он встречается первый раз
            if (!isFirstMainHeading.has(headingValue)) {
                currentNodes = [node];
                isFirstMainHeading.add(headingValue);
            } else {
                // Пропускаем повторный заголовок
                currentNodes = [];
            }
        } else {
            if (currentGroup) {
                currentNodes.push(node);
            }
        }
    }

    // Сохраняем последнюю группу
    if (currentGroup && currentNodes.length) {
        if (!groups.has(currentGroup)) {
            groups.set(currentGroup, []);
        }

        groups.get(currentGroup).push(...currentNodes);
    }

    // Создаем новое дерево
    const newChildren = [];

    for (const [_, nodes] of groups) {
        newChildren.push(...nodes);
    }

    return { ...tree, children: newChildren };
}
