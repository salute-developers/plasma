const processingHeading = (heading) => {
    const data = heading.toLowerCase().replace(/с/g, 'c');

    return data.charAt(0).toUpperCase() + data.slice(1);
};

export function groupByH2Headings(nodes) {
    const data = new Map();
    let currentH2 = null;
    let start = 0;

    nodes.forEach((node, index) => {
        const { type, children } = node;

        if (type === 'paragraph' && children.length === 1 && children[0].type === 'link') {
            const data = nodes.slice(start, index);

            data.forEach((item) => {
                if (item.type === 'heading' && [2, 3].includes(item.depth)) {
                    item.link = node;
                }
            });

            start = index;
        }
    });

    nodes.forEach((node, index) => {
        if (node.type === 'heading' && node.depth === 2) {
            // INFO: Защита от дурака, если первая буква будет cyrillic С
            currentH2 = ['Core', 'Сore', 'core', 'сore'].includes(node.children[0].value)
                ? processingHeading(node.children[0].value)
                : node.children[0].value;

            if (!data.has(currentH2)) {
                data.set(currentH2, [node]);
            }
        } else if (currentH2) {
            const nodes = data.get(currentH2);

            nodes.push(node);
        }
    });

    return data;
}
