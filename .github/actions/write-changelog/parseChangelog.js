/**
 * Парсит AST дерево markdown и группирует данные по версиям и разделам
 * @param {Object} tree - AST дерево от unified().use(remarkParse).parse()
 * @param {string} version - номер версии (например, '1.581.0')
 * @param {string} date - дата релиза в формате 'YYYY-MM-DD'
 * @returns {Object} Сгруппированные данные по версиям
 */
export function parseChangelog(tree, version = '1.581.0', date = '2025-05-28') {
    const result = {
        [version]: {
            date: date,
            core: [],
            lib: [],
        },
    };

    let currentSection = null;
    let currentComponent = null;
    let collectingContent = false;
    let contentBuffer = [];

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

    function addItemToComponent(text, linkInfo) {
        if (!currentComponent || !text || !currentSection) return;

        const item = { text: text.trim() };
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

    function finishCurrentItem(linkInfo = null) {
        if (contentBuffer.length > 0) {
            const fullText = contentBuffer.join('\n\n');
            addItemToComponent(fullText, linkInfo);
            contentBuffer = [];
            collectingContent = false;
        }
    }

    // Проходим по всем узлам дерева
    for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];

        if (node.type === 'heading') {
            // Завершаем текущий элемент при встрече нового заголовка
            finishCurrentItem();

            const headingText = extractTextFromNode(node);

            if (node.depth === 2) {
                // Заголовок раздела
                currentSection = getSectionKey(headingText);
                currentComponent = null;
            } else if (node.depth === 3) {
                // Заголовок компонента
                currentComponent = headingText;
            }
        } else if (currentComponent && currentSection) {
            if (node.type === 'list') {
                // Обрабатываем список изменений
                for (const listItem of node.children) {
                    if (listItem.type === 'listItem' && listItem.children[0]?.type === 'paragraph') {
                        const text = extractTextFromNode(listItem.children[0]);
                        contentBuffer.push(text);
                        collectingContent = true;
                    }
                }
            } else if (node.type === 'paragraph') {
                // Проверяем, содержит ли параграф ссылку PR
                const linkInfo = extractLinkFromParagraph(node);
                if (linkInfo) {
                    // Это ссылка PR - завершаем текущий элемент
                    finishCurrentItem(linkInfo);
                } else if (collectingContent) {
                    // Это обычный параграф - добавляем к контенту
                    const text = extractTextFromNode(node);
                    if (text.trim()) {
                        contentBuffer.push(text);
                    }
                }
            }
            // Игнорируем изображения и HTML, но продолжаем сбор контента
        }
    }

    // Завершаем оставшийся контент в конце
    finishCurrentItem();

    return result;
}
