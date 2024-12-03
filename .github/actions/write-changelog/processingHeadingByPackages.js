import { visit, SKIP } from 'unist-util-visit';

const isH2Heading = ({ type, depth }) => {
    return type === 'heading' && depth === 2;
};

const findNextH2Index = (parent, startIndex) => {
    let index = startIndex + 1;

    while (index < parent.children.length) {
        if (isH2Heading(parent.children[index])) {
            return index;
        }

        index++;
    }

    return parent.children.length;
};

export const processingHeadingByPackages = (list) => (tree) => {
    visit(tree, (node, index, parent) => {
        if (!parent?.children) {
            return;
        }

        const value = node.children?.[0]?.value ?? '';
        const isExcludePackage = value && list.includes(value.toLowerCase());

        if (!isH2Heading(node) || !isExcludePackage) {
            return;
        }

        const nextH2Index = findNextH2Index(parent, index);
        const deleteCount = nextH2Index - index;

        parent.children.splice(index, deleteCount);
        return [SKIP, index];
    });
};
