import type {
    StyleApiCommonInfo,
    StyleApiMapping,
    StyleApiMeta,
    StyleApiState,
    StylePropertyKind,
    StyleTokenApiDeclaration,
    StyleTokenMapping,
    StyleTokenStateMapping,
    StyleTokenTarget,
    TokenDictionary,
} from './types.js';

interface RegisteredDeclaration {
    commonInfo: StyleApiCommonInfo;
    dictionaries: readonly TokenDictionary[];
    mapping: StyleApiMapping;
}

interface StyleApiRuntimeRegistry {
    declarations: RegisteredDeclaration[];
}

export * from './types.js';

const registryKey = Symbol.for('@sdds/components-style-dsl/registry');
const runtimeGlobal = globalThis as typeof globalThis & { [registryKey]?: StyleApiRuntimeRegistry };
const propertyKinds = new Set<StylePropertyKind>([
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

function registry(): StyleApiRuntimeRegistry {
    if (!runtimeGlobal[registryKey]) {
        runtimeGlobal[registryKey] = { declarations: [] };
    }
    return runtimeGlobal[registryKey];
}

export function defineStyleTokenApi<TDictionaries extends readonly TokenDictionary[]>(options: {
    commonInfo: StyleApiCommonInfo;
    tokens: TDictionaries;
    mapping: StyleApiMapping;
}): StyleTokenApiDeclaration {
    const componentName = requiredText(options.commonInfo?.componentName, 'componentName');
    requiredText(options.commonInfo?.source?.packageName, `component "${componentName}" source.packageName`);

    if (registry().declarations.some((item) => item.commonInfo.componentName === componentName)) {
        throw new Error(`Style API meta: duplicate declaration for component "${componentName}".`);
    }

    const tokenNames = options.tokens.flatMap((dictionary) => Object.keys(dictionary));
    const duplicate = tokenNames.find((name, index) => tokenNames.indexOf(name) !== index);

    if (duplicate) {
        throw new Error(`Style API meta: component "${componentName}" has duplicate token key "${duplicate}".`);
    }

    const mappedParams = new Set<string>();
    for (const [id, mappedProperty] of Object.entries(options.mapping)) {
        validateMapping(mappedProperty, componentName, id);
        for (const { paramName } of mappingTargets(mappedProperty)) {
            if (!tokenNames.includes(paramName)) {
                throw new Error(
                    `Style API meta: component "${componentName}" property "${id}" maps unknown token key "${paramName}".`,
                );
            }
            if (mappedParams.has(paramName)) {
                throw new Error(
                    `Style API meta: component "${componentName}" maps token "${paramName}" more than once.`,
                );
            }
            mappedParams.add(paramName);
        }
    }

    registry().declarations.push({
        commonInfo: options.commonInfo,
        dictionaries: options.tokens,
        mapping: options.mapping,
    });

    return options;
}

function requiredText(value: string | undefined, field: string): string {
    if (!value || value.trim() === '') {
        throw new Error(`Style API meta: ${field} must be a non-empty string.`);
    }
    return value;
}

function validateMapping(mapping: StyleTokenMapping | undefined, componentName: string, id: string): void {
    requiredText(id, `component "${componentName}" mapping id`);
    if (!mapping || !propertyKinds.has(mapping.type)) {
        throw new Error(`Style API meta: component "${componentName}" property "${id}" has an unknown type.`);
    }
    validateTarget(mapping.target, componentName, id);

    const states = new Set<string>();
    for (const stateMapping of mapping.states) {
        const state = requiredText(stateMapping.state, `component "${componentName}" property "${id}" state`);
        if (states.has(state)) {
            throw new Error(`Style API meta: component "${componentName}" property "${id}" repeats state "${state}".`);
        }
        states.add(state);
        validateTarget(stateMapping.target, componentName, id);

        if (typeof mapping.target !== typeof stateMapping.target) {
            throw new Error(
                `Style API meta: component "${componentName}" property "${id}" state "${state}" has an incompatible target.`,
            );
        }
        if (typeof mapping.target !== 'string' && typeof stateMapping.target !== 'string') {
            for (const part of Object.keys(stateMapping.target)) {
                if (!Object.hasOwn(mapping.target, part)) {
                    throw new Error(
                        `Style API meta: component "${componentName}" property "${id}" state "${state}" maps unknown part "${part}".`,
                    );
                }
            }
        }
    }
}

function validateTarget(target: StyleTokenTarget, componentName: string, id: string): void {
    if (typeof target === 'string') {
        requiredText(target, `component "${componentName}" property "${id}" token`);
        return;
    }

    const parts = Object.entries(target);
    if (parts.length === 0) {
        throw new Error(`Style API meta: component "${componentName}" property "${id}" must map at least one part.`);
    }
    for (const [part, paramName] of parts) {
        requiredText(part, `component "${componentName}" property "${id}" part`);
        requiredText(paramName, `component "${componentName}" property "${id}" part "${part}" token`);
    }
}

interface ResolvedMappingTarget {
    paramName: string;
    part?: string;
    state?: StyleApiState;
}

function targetParams(target: StyleTokenTarget, state?: StyleApiState): ResolvedMappingTarget[] {
    if (typeof target === 'string') {
        return [{ paramName: target, ...(state ? { state } : {}) }];
    }

    return Object.entries(target).map(([part, paramName]) => ({
        paramName,
        part,
        ...(state ? { state } : {}),
    }));
}

function mappingTargets(mapping: StyleTokenMapping): ResolvedMappingTarget[] {
    return [
        ...targetParams(mapping.target),
        ...mapping.states.flatMap(({ state, target }) => targetParams(target, state)),
    ];
}

function property(type: StylePropertyKind, target: StyleTokenTarget): StyleTokenMapping {
    const states: StyleTokenStateMapping[] = [];
    const mapping: StyleTokenMapping = {
        type,
        target,
        states,
        state(state, stateTarget) {
            states.push({ state, target: stateTarget });
            return mapping;
        },
    };
    return mapping;
}

export const value = (target: StyleTokenTarget): StyleTokenMapping => property('value', target);
export const boolean = (target: StyleTokenTarget): StyleTokenMapping => property('boolean', target);
export const integer = (target: StyleTokenTarget): StyleTokenMapping => property('integer', target);
export const float = (target: StyleTokenTarget): StyleTokenMapping => property('float', target);
export const dimension = (target: StyleTokenTarget): StyleTokenMapping => property('dimension', target);
export const color = (target: StyleTokenTarget): StyleTokenMapping => property('color', target);
export const typography = (target: StyleTokenTarget): StyleTokenMapping => property('typography', target);
export const shape = (target: StyleTokenTarget): StyleTokenMapping => property('shape', target);
export const shadow = (target: StyleTokenTarget): StyleTokenMapping => property('shadow', target);
export const icon = (target: StyleTokenTarget): StyleTokenMapping => property('icon', target);
export const componentStyle = (target: StyleTokenTarget): StyleTokenMapping => property('component_style', target);

export function readRegisteredStyleTokenApis(): readonly RegisteredDeclaration[] {
    return registry().declarations;
}

export function collectRegisteredStyleApiMeta(): StyleApiMeta {
    return registry()
        .declarations.map((declaration) => {
            const mappingByParam = new Map<
                string,
                { type: StylePropertyKind; id: string; part?: string; state?: StyleApiState }
            >();
            for (const [id, mapping] of Object.entries(declaration.mapping)) {
                for (const { paramName, part, state } of mappingTargets(mapping)) {
                    mappingByParam.set(paramName, {
                        type: mapping.type,
                        id,
                        ...(part ? { part } : {}),
                        ...(state ? { state } : {}),
                    });
                }
            }
            const params = declaration.dictionaries.flatMap((dictionary) =>
                Object.keys(dictionary).map((paramName) => ({
                    paramName,
                    ...mappingByParam.get(paramName),
                })),
            );

            return {
                ...declaration.commonInfo,
                params: params.sort((left, right) => left.paramName.localeCompare(right.paramName)),
            };
        })
        .sort((left, right) => left.componentName.localeCompare(right.componentName));
}

export function resetStyleTokenApiRegistry(): void {
    runtimeGlobal[registryKey] = {
        declarations: [],
    };
}
