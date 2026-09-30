/**
 * Проверки JSDoc-аннотаций Style API над токенами в *.tokens.ts.
 * Работает с ESTree-деревом @typescript-eslint/parser.
 * */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const INTERNAL_DICTIONARIES = new Set(['privateTokens', 'innerTokens']);

const PROPERTY_TYPES = new Set([
    'value',
    'boolean',
    'integer',
    'float',
    'dimension',
    'color',
    'typography',
    'shape',
    'shadow',
    'icon',
    'component_style',
]);
const COMPOUND_TYPES = new Set(['typography', 'component_style']);
const PARTS_BY_TYPE = {
    typography: new Set(['fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight']),
};
const STYLE_TAGS = new Set(['styleType', 'styleProp', 'stylePart', 'styleState', 'styleComponent']);

/** Компонент по умолчанию: Button.tokens.ts → Button, Skeleton/tokens.ts → Skeleton. */
const defaultComponent = (file) =>
    path.basename(file) === 'tokens.ts' ? path.basename(path.dirname(file)) : path.basename(file, '.tokens.ts');

const isDictionaryName = (name) => (name === 'tokens' || name.endsWith('Tokens')) && !INTERNAL_DICTIONARIES.has(name);

const propertyKey = (property, text) => {
    const { key, computed } = property;

    if (!computed && key.type === 'Identifier') {
        return key.name;
    }
    if (key.type === 'Literal') {
        return String(key.value);
    }

    return text.slice(...key.range);
};

/** Словарь — экспорт `tokens`, а если его нет, единственный экспорт `*Tokens`. */
const findDictionary = (program, report) => {
    const dictionaries = new Map();

    program.body.forEach((statement) => {
        const declaration = statement.type === 'ExportNamedDeclaration' && statement.declaration;
        if (!declaration || declaration.type !== 'VariableDeclaration') {
            return;
        }

        declaration.declarations.forEach(({ id, init }) => {
            const literal = init && init.type === 'TSAsExpression' ? init.expression : init;

            if (
                id.type === 'Identifier' &&
                isDictionaryName(id.name) &&
                literal &&
                literal.type === 'ObjectExpression'
            ) {
                dictionaries.set(
                    id.name,
                    literal.properties.filter(
                        (property) =>
                            property.type === 'Property' &&
                            property.kind === 'init' &&
                            !property.method &&
                            !property.shorthand,
                    ),
                );
            }
        });
    });

    if (dictionaries.has('tokens')) {
        return dictionaries.get('tokens');
    }
    if (dictionaries.size > 1) {
        report(program, `несколько словарей токенов (${[...dictionaries.keys()].join(', ')}), ожидается один`);
    }

    return [...dictionaries.values()][0] || [];
};

/** JSDoc-комментарий, стоящий непосредственно перед узлом. */
const findJSDoc = (node, comments, text) => {
    const comment = comments.filter(({ range }) => range[1] <= node.range[0]).pop();

    if (
        !comment ||
        comment.type !== 'Block' ||
        !comment.value.startsWith('*') ||
        text.slice(comment.range[1], node.range[0]).trim() !== ''
    ) {
        return undefined;
    }

    return comment;
};

/** Теги JSDoc в виде [{ name, text }]; текст тега тянется до следующего тега. */
const parseJSDocTags = (comment) => {
    const body = comment.value
        .slice(1)
        .split('\n')
        .map((line, index) => (index === 0 ? line : line.replace(/^\s*\*?/, '')))
        .join('\n');
    const matches = [...body.matchAll(/(^|\s)@(\w+)/g)];

    return matches.map((match, index) => {
        const start = match.index + match[0].length;
        const end = index + 1 < matches.length ? matches[index + 1].index : body.length;

        return { name: match[2], text: body.slice(start, end).trim() };
    });
};

const readAnnotation = (property, key, comments, text, report) => {
    const annotation = { key, node: property.key };
    const comment = findJSDoc(property, comments, text);
    const tags = comment ? parseJSDocTags(comment) : [];

    tags.forEach(({ name, text: value }) => {
        const fail = (message) => report(property.key, `токен "${key}": ${message}`);

        if (name === 'deprecated') {
            const replacement = value.match(/\{@link\s+([^\s|}]+)/);
            annotation.replacement = replacement ? replacement[1] : undefined;
            return;
        }
        if (!name.startsWith('style')) {
            return;
        }
        if (!STYLE_TAGS.has(name)) {
            fail(`неизвестный тег @${name}`);
            return;
        }
        if (Object.prototype.hasOwnProperty.call(annotation, name)) {
            fail(`тег @${name} повторяется`);
            return;
        }
        if (name === 'styleComponent') {
            if (!/^[A-Za-z0-9_]+(\s+[A-Za-z0-9_]+)*$/.test(value)) {
                fail(`@styleComponent ожидает имена компонентов через пробел, получено "${value}"`);
                return;
            }
            annotation.styleComponent = value.split(/\s+/);
            return;
        }
        if (!/^[A-Za-z0-9_]+$/.test(value)) {
            fail(`@${name} ожидает один идентификатор, получено "${value}"`);
            return;
        }
        annotation[name] = value;
    });

    return annotation;
};

/** Проверяет токены по отдельности и возвращает корректные. */
const checkTokens = (annotations, report) => {
    const keys = new Set(annotations.map(({ key }) => key));

    return annotations.filter(({ key, node, styleType, stylePart, replacement }) => {
        const fail = (message) => report(node, `токен "${key}": ${message}`);

        if (replacement && !keys.has(replacement)) {
            fail(`@deprecated ссылается на несуществующий токен "${replacement}"`);
        }
        if (!styleType) {
            fail('нет @styleType');
            return false;
        }
        if (!PROPERTY_TYPES.has(styleType)) {
            fail(`неизвестный @styleType "${styleType}"`);
            return false;
        }
        if (COMPOUND_TYPES.has(styleType) !== Boolean(stylePart)) {
            fail(`для "${styleType}" @stylePart ${stylePart ? 'не указывается' : 'обязателен'}`);
            return false;
        }
        if (stylePart && PARTS_BY_TYPE[styleType] && !PARTS_BY_TYPE[styleType].has(stylePart)) {
            fail(
                `неизвестный @stylePart "${stylePart}" для "${styleType}", допустимы: ${[
                    ...PARTS_BY_TYPE[styleType],
                ].join(', ')}`,
            );
            return false;
        }
        return true;
    });
};

/** Проверяет, что токены одного компонента согласованно описывают его свойства. */
const checkComponent = (componentName, annotations, report) => {
    const properties = new Map();

    annotations.forEach(({ key, node, styleType, styleProp = key, stylePart, styleState }) => {
        const property = properties.get(styleProp) || { type: styleType, slots: new Map() };
        if (property.type !== styleType) {
            report(
                node,
                `компонент "${componentName}", свойство "${styleProp}": разные типы "${property.type}" и "${styleType}"`,
            );
            return;
        }
        properties.set(styleProp, property);

        // Одно место свойства может задаваться несколькими токенами (например, отступы слева и справа).
        const slot = `${stylePart || ''}:${styleState || ''}`;
        if (!property.slots.has(slot)) {
            property.slots.set(slot, { key, node });
        }
    });

    properties.forEach(({ slots }, id) => {
        slots.forEach(({ key, node }, slot) => {
            const [part, state] = slot.split(':');
            if (state && !slots.has(`${part}:`)) {
                report(
                    node,
                    `компонент "${componentName}", токен "${key}": состояние "${state}" свойства "${id}"${
                        part ? `, часть "${part}"` : ''
                    } без базового токена`,
                );
            }
        });
    });
};

/**
 * Проверяет один файл токенов.
 * Возвращает найденные проблемы и компоненты, которые объявляет файл, с узлом первого их токена.
 * */
const analyzeTokenFile = ({ program, comments, text, filename }) => {
    const problems = [];
    const report = (node, message) => problems.push({ node, message });
    const fallback = defaultComponent(filename);

    const annotations = findDictionary(program, report).map((property) =>
        readAnnotation(property, propertyKey(property, text), comments, text, report),
    );

    // Словарь без единой аннотации ещё не размечен.
    if (!annotations.some(({ styleType }) => styleType)) {
        return { problems, components: new Map([[fallback, program]]) };
    }

    // Токен относится к компонентам из @styleComponent, а без тега — к компоненту файла.
    const byComponent = new Map();
    checkTokens(annotations, report).forEach((annotation) => {
        (annotation.styleComponent || [fallback]).forEach((componentName) =>
            byComponent.set(componentName, [...(byComponent.get(componentName) || []), annotation]),
        );
    });
    const components = new Map();
    byComponent.forEach((componentAnnotations, componentName) => {
        components.set(componentName, componentAnnotations[0].node);
        checkComponent(componentName, componentAnnotations, report);
    });

    return { problems, components };
};

module.exports = { analyzeTokenFile };
