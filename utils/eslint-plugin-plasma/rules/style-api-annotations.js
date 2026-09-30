/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { analyzeTokenFile } = require('../lib/styleApiAnnotations');
const { findComponentsRoot, isIgnoredDirectory, findOtherDeclarations } = require('../lib/componentDeclarations');

/**
 * Проверяет JSDoc-аннотации Style API над токенами в *.tokens.ts
 * и что каждый компонент объявлен только в одном файле токенов внутри src/components.
 * */
module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Проверяет JSDoc-аннотации Style API в словарях токенов',
        },
        schema: [],
    },
    create(context) {
        const filename = path.resolve(context.getFilename());
        const root = findComponentsRoot(filename);

        if (root && isIgnoredDirectory(root, path.dirname(filename))) {
            return {};
        }

        const sourceCode = context.getSourceCode();

        return {
            'Program:exit': (program) => {
                const { problems, components } = analyzeTokenFile({
                    program,
                    comments: sourceCode.getAllComments(),
                    text: sourceCode.text,
                    filename,
                });

                problems.forEach(({ node, message }) => context.report({ node, message }));

                if (!root) {
                    return;
                }

                const otherDeclarations = findOtherDeclarations(root, filename);
                components.forEach((node, componentName) => {
                    const files = otherDeclarations.get(componentName);
                    if (files) {
                        context.report({
                            node,
                            message: `компонент "${componentName}" объявлен также в: ${files.join(', ')}`,
                        });
                    }
                });
            },
        };
    },
};
