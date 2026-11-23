import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(process.argv[2] ?? path.join(sourceDir, 'builder_output.json'));
const outputDir = path.resolve(process.argv[3] ?? path.join(sourceDir, 'generated'));

const fail = (message) => {
    throw new Error(`Popover generator: ${message}`);
};
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const identifier = (value) => /^[A-Za-z_$][\w$]*$/.test(value);
const kebab = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const camel = (value) => value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
const quote = (value) => `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;

function cssDeclarations(props, location) {
    if (!isObject(props)) fail(`${location}.props must be an object`);

    const declarations = [];
    for (const [name, prop] of Object.entries(props)) {
        if (!identifier(name) || !isObject(prop)) fail(`invalid prop at ${location}.${name}`);
        const token = `--plasma-popover-${kebab(name)}`;

        if (prop.type === 'value') continue; // A binding value is a runtime prop, not a CSS token.
        if (prop.type === 'dimension' && typeof prop.value === 'number' && Number.isFinite(prop.value)) {
            declarations.push(`    ${token}: ${prop.value}px;`);
        } else if (prop.type === 'color' && typeof prop.default === 'string') {
            const parts = prop.default.split('.');
            if (parts.length < 2 || !parts.every((part) => /^[a-z0-9-]+$/i.test(part))) {
                fail(`invalid color token at ${location}.${name}`);
            }
            if (parts[1] === 'default') parts.splice(1, 1);
            declarations.push(`    ${token}: var(--${parts.join('-')});`);
        } else if (prop.type === 'typography' && typeof prop.value === 'string') {
            const parts = prop.value.split('.');
            if (parts.length < 2 || !parts.every((part) => /^[a-z0-9-]+$/i.test(part))) {
                fail(`invalid typography token at ${location}.${name}`);
            }
            if (parts.at(-1) === 'normal') parts.pop();
            const prefix = `--plasma-typo-${parts.join('-')}`;
            for (const suffix of [
                'font-family',
                'font-size',
                'font-style',
                'font-weight',
                'letter-spacing',
                'line-height',
            ]) {
                declarations.push(`    ${token}-${suffix}: var(${prefix}-${suffix});`);
            }
        } else {
            fail(`${location}.${name} has unsupported type or value: ${String(prop.type)}`);
        }
    }
    return declarations;
}

function generate(data) {
    if (!isObject(data) || !isObject(data.view) || !isObject(data.props)) fail('expected view and props objects');
    if (!Array.isArray(data.bindings) || !Array.isArray(data.variations))
        fail('expected bindings and variations arrays');

    const bindings = data.bindings.map((binding) => {
        if (!isObject(binding) || typeof binding.name !== 'string' || !Array.isArray(binding.values)) {
            fail('invalid binding');
        }
        const name = camel(binding.name);
        if (
            !identifier(name) ||
            !['enum', 'view'].includes(binding.type) ||
            !binding.values.length ||
            !binding.values.every((value) => typeof value === 'string' && /^[A-Za-z_][\w-]*$/.test(value)) ||
            !binding.values.includes(binding.defaultValue)
        )
            fail(`invalid binding ${binding.name}`);
        return { ...binding, name };
    });
    if (new Set(bindings.map(({ name }) => name)).size !== bindings.length) fail('duplicate binding names');
    const viewBinding = bindings.find(({ type }) => type === 'view');
    if (!viewBinding || viewBinding.name !== 'view') fail('a view binding is required');

    const runtimeProps = Object.entries(data.props).map(([name, prop]) => {
        if (!identifier(name) || !isObject(prop) || prop.type !== 'boolean' || typeof prop.value !== 'boolean') {
            fail(`unsupported runtime prop ${name}`);
        }
        if (bindings.some((binding) => binding.name === name)) fail(`duplicate runtime prop ${name}`);
        return { name, type: 'boolean', defaultValue: prop.value };
    });

    const css = [];
    const views = Object.entries(data.view);
    for (const [name, view] of views) {
        if (!viewBinding.values.includes(name) || !isObject(view)) fail(`invalid view ${name}`);
        css.push(`.view_${name.replaceAll('-', '_')} {`, ...cssDeclarations(view.props, `view.${name}`), '}', '');
    }
    if (views.length !== viewBinding.values.length) fail('view values and view definitions differ');

    const variationById = new Map(data.variations.map((variation) => [variation.id, variation]));
    if (variationById.size !== data.variations.length) fail('duplicate variation ids');
    const classNames = new Set();
    const variationStyles = {};
    const selectionBindings = bindings.filter(({ type }) => type !== 'view');

    function ancestry(id, seen = new Set()) {
        if (seen.has(id)) fail(`cyclic variation parent at ${id}`);
        const variation = variationById.get(id);
        if (!isObject(variation)) fail(`unknown variation ${id}`);
        seen.add(id);
        return variation.parent == null ? [variation] : [...ancestry(variation.parent, seen), variation];
    }

    for (const variation of data.variations) {
        if (!variation || typeof variation.id !== 'string' || !/^[A-Za-z_][\w.-]*$/.test(variation.id)) {
            fail('invalid variation id');
        }
        const className = variation.id.replace(/[^A-Za-z0-9_]/g, '_');
        if (classNames.has(className)) fail(`duplicate CSS class ${className}`);
        classNames.add(className);
        css.push(`.${className} {`, ...cssDeclarations(variation.props, `variation.${variation.id}`), '}', '');

        const chain = ancestry(variation.id);
        const selected = Object.fromEntries(selectionBindings.map(({ name, defaultValue }) => [name, defaultValue]));
        for (const entry of chain) {
            if (!Array.isArray(entry.binding)) fail(`invalid binding for variation ${entry.id}`);
            for (const item of entry.binding) {
                if (!isObject(item) || !selectionBindings.some(({ name }) => name === camel(item.name))) {
                    fail(`unknown binding in variation ${entry.id}`);
                }
                selected[camel(item.name)] = item.value;
            }
        }
        for (const binding of selectionBindings) {
            if (!binding.values.includes(selected[binding.name]))
                fail(`invalid ${binding.name} in variation ${variation.id}`);
        }
        const key = JSON.stringify(selectionBindings.map(({ name }) => selected[name]));
        if (variationStyles[key]) fail(`duplicate binding combination for ${variation.id}`);
        variationStyles[key] = chain.map(({ id }) => id.replace(/[^A-Za-z0-9_]/g, '_'));
    }

    const allProps = [...bindings, ...runtimeProps];
    const typeLines = allProps.map(
        ({ name, values, type }) => `    ${name}?: ${type === 'boolean' ? 'boolean' : values.map(quote).join(' | ')};`,
    );
    const defaults = allProps.map(
        ({ name, defaultValue }) =>
            `        ${name} = ${typeof defaultValue === 'string' ? quote(defaultValue) : defaultValue},`,
    );
    const forwarded = allProps.map(({ name }) => `        ${name},`);
    const selection = selectionBindings.map(({ name }) => name).join(', ');
    const viewLines = views.map(([name]) => `    ${quote(name)}: styles.view_${name.replaceAll('-', '_')},`);
    const variationLines = Object.entries(variationStyles).map(
        ([key, classes]) => `    ${quote(key)}: [${classes.map((name) => `styles.${name}`).join(', ')}],`,
    );

    const component =
        `// Generated by generate.mjs from builder_output.json.\n` +
        `import React, { forwardRef } from 'react';
import cls from 'classnames';
import { Popover as CorePopover } from '@salutejs/plasma-new-hope/beta';
import type { PopoverProps as CorePopoverProps } from '@salutejs/plasma-new-hope/beta';

import styles from './config/Popover.module.css';

type RuntimeProps = {
${typeLines.join('\n')}
};

export type PopoverProps = Omit<CorePopoverProps, keyof RuntimeProps> & RuntimeProps;

const viewStyles: Record<string, string> = {
${viewLines.join('\n')}
};
const variationStyles: Record<string, string[]> = {
${variationLines.join('\n')}
};

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(({
${defaults.join('\n')}
        ...rest
    }, ref) => {
    const configClassName = cls(viewStyles[view], ...(variationStyles[JSON.stringify([${selection}])] ?? []));
    const coreProps: CorePopoverProps & RuntimeProps & { _configClassName: string } = {
        ...rest,
${forwarded.join('\n')}
        _configClassName: configClassName,
    };

    return <CorePopover ref={ref} {...coreProps} />;
});
`;

    return { css: `${css.join('\n').trimEnd()}\n`, component };
}

const data = JSON.parse(readFileSync(inputPath, 'utf8'));
const { css, component } = generate(data);
mkdirSync(path.join(outputDir, 'config'), { recursive: true });
writeFileSync(path.join(outputDir, 'config/Popover.module.css'), css);
const prettierOptions = prettier.resolveConfig.sync(path.join(sourceDir, 'Popover.tsx')) ?? {};
writeFileSync(
    path.join(outputDir, 'Popover.tsx'),
    prettier.format(component, { ...prettierOptions, parser: 'typescript' }),
);
writeFileSync(
    path.join(outputDir, 'index.ts'),
    "export { Popover } from './Popover';\nexport type { PopoverProps } from './Popover';\n",
);
console.log(`Generated Popover in ${outputDir}`);
