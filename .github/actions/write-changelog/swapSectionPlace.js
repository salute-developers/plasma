import { visit } from 'unist-util-visit';

export const swapSectionPlace = (pkg) => (tree) => {
    // Находим индексы начала каждой секции
    let coreIndex = -1;
    let pkgIndex = -1;

    visit(tree, 'heading', (node, index) => {
        if (node.depth === 2) {
            if (node.children[0].value === 'Core') {
                coreIndex = index;
            } else if (node.children[0].value.toLowerCase() === pkg) {
                pkgIndex = index;
            }
        }
    });

    // Находим границы секций
    const coreEnd = pkgIndex > coreIndex ? pkgIndex : tree.children.length;
    const pkgEnd = tree.children.length;

    // Извлекаем содержимое секций
    const coreSection = tree.children.slice(coreIndex, coreEnd);
    const pkgSection = tree.children.slice(pkgIndex, pkgEnd);

    tree.children = [...pkgSection, ...coreSection];
};
