import { visit } from 'unist-util-visit';

export const rewriteHeadingValue = (pkg) => (tree) => {
    visit(tree, 'heading', (node, index, parent) => {
        const { depth, children } = node;
        const { value = '' } = children && children.length ? children[0] : {};

        if (depth === 2) {
            if (value.toLowerCase() === pkg) {
                node.children[0].value = 'Изменения в библиотеки';

                return node;
            }

            if (value.toLowerCase() === 'core') {
                node.children[0].value = 'Функциональные изменения в компонентах';

                return node;
            }
        }
    });
};
