/**
 * Парсит AST дерево markdown и группирует данные по версиям и разделам
 * @param {Object} tree - AST дерево от unified().use(remarkParse).parse()
 * @param {string} version - номер версии (например, '1.581.0')
 * @param {string} date - дата релиза в формате 'YYYY-MM-DD'
 * @returns {Object} Сгруппированные данные по версиям
 */
export function parseChangelog(tree, version, date) {
    const result = {
        [version]: {
            date: date,
            core: [],
            lib: [],
        },
    };

    let currentSection = null;
    let currentComponent = null;
    let pendingLinkInfo = null;

    // Функция для определения секции: Core -> 'core', все остальное -> 'lib'
    function getSectionKey(headingText) {
        return headingText === 'Core' ? 'core' : 'lib';
    }

    function extractTextFromNode(node) {
        if (node.type === 'text') {
            return node.value;
        }

        if (node.type === 'inlineCode') {
            return `\`${node.value}\``;
        }

        if (node.type === 'strong') {
            const innerText = node.children.map(extractTextFromNode).join('');
            return `**${innerText}**`;
        }

        if (node.children) {
            return node.children.map(extractTextFromNode).join('');
        }

        return '';
    }

    function extractLinkFromParagraph(paragraph) {
        if (paragraph.children) {
            for (const child of paragraph.children) {
                if (child.type === 'link' && child.children[0]?.value === 'PR') {
                    const url = child.url;
                    const match = url.match(/\/(\d+)$/);
                    return {
                        link: url,
                        id: match ? parseInt(match[1]) : null,
                    };
                }
            }
        }
        return null;
    }

    function addItemToCurrentComponent(text, linkInfo) {
        if (!currentComponent || !text || !currentSection) return;

        const item = { text };
        if (linkInfo) {
            item.link = linkInfo.link;
            if (linkInfo.id) {
                item.id = linkInfo.id;
            }
        }

        // Ищем существующий компонент или создаем новый
        let componentObj = result[version][currentSection].find((comp) => comp.component === currentComponent);

        if (!componentObj) {
            componentObj = {
                component: currentComponent,
                children: [],
            };
            result[version][currentSection].push(componentObj);
        }

        componentObj.children.push(item);
    }

    // Проходим по всем узлам дерева
    for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];

        if (node.type === 'heading') {
            const headingText = extractTextFromNode(node);

            if (node.depth === 2) {
                // Заголовок раздела
                currentSection = getSectionKey(headingText);
                currentComponent = null;
            } else if (node.depth === 3 && currentSection) {
                // Заголовок компонента
                currentComponent = headingText;
            }
        } else if (node.type === 'list' && currentComponent && currentSection) {
            // Обрабатываем список изменений
            for (const listItem of node.children) {
                if (listItem.type === 'listItem' && listItem.children[0]?.type === 'paragraph') {
                    const text = extractTextFromNode(listItem.children[0]);

                    // Ищем ссылку в следующих узлах после списка
                    let linkInfo = pendingLinkInfo;
                    pendingLinkInfo = null;

                    addItemToCurrentComponent(text, linkInfo);
                }
            }
        } else if (node.type === 'paragraph' && currentComponent && currentSection) {
            // Проверяем, содержит ли параграф ссылку PR
            const linkInfo = extractLinkFromParagraph(node);
            if (linkInfo) {
                pendingLinkInfo = linkInfo;

                // Если у нас уже есть компонент, применяем ссылку к последнему элементу
                const componentObj = result[version][currentSection].find(
                    (comp) => comp.component === currentComponent,
                );

                if (componentObj && componentObj.children.length > 0) {
                    const lastChild = componentObj.children[componentObj.children.length - 1];
                    if (!lastChild.link) {
                        lastChild.link = linkInfo.link;
                        if (linkInfo.id) {
                            lastChild.id = linkInfo.id;
                        }
                    }
                }
                pendingLinkInfo = null;
            }
        }
    }

    return result;
}
