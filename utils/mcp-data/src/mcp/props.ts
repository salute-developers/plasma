import { PROPS_MARKER_REGEX } from '../propsMarker.ts';

import { OutputPropSchema } from './schemas.ts';
import type { OutputProp } from './schemas.ts';
import { asString } from './text.ts';

function findJsonArrayChunk(source: string, fromIndex: number): string {
    const start = source.indexOf('[', fromIndex);
    if (start === -1) {
        return '';
    }

    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let i = start; i < source.length; i += 1) {
        const char = source[i];

        if (inString) {
            if (escaped) {
                escaped = false;
            } else if (char === '\\') {
                escaped = true;
            } else if (char === '"') {
                inString = false;
            }
            // eslint-disable-next-line no-continue
            continue;
        }

        if (char === '"') {
            inString = true;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (char === '[') {
            depth += 1;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (char === ']') {
            depth -= 1;
            if (depth === 0) {
                return source.slice(start, i + 1);
            }
        }
    }

    return '';
}

function toTypeString(type: unknown): string {
    if (typeof type === 'string') {
        return type;
    }

    if (type && typeof type === 'object') {
        const typeRecord = type as Record<string, unknown>;
        if (typeof typeRecord.raw === 'string') {
            return typeRecord.raw;
        }
        if (typeof typeRecord.name === 'string') {
            return typeRecord.name;
        }
        return JSON.stringify(typeRecord);
    }

    return '';
}

function toDefaultString(propRecord: Record<string, unknown>): string {
    if (typeof propRecord.default === 'string') {
        return propRecord.default;
    }

    const { defaultValue } = propRecord;
    if (typeof defaultValue === 'string') {
        return defaultValue;
    }

    if (defaultValue && typeof defaultValue === 'object') {
        const defaultRecord = defaultValue as Record<string, unknown>;
        if (typeof defaultRecord.value === 'string') {
            return defaultRecord.value;
        }
        return JSON.stringify(defaultRecord);
    }

    return '';
}

/** Разбирает JSON с props, который шаг `index` записал после маркера. */
export function extractProps(pageContent: string): OutputProp[] {
    const propsMatch = PROPS_MARKER_REGEX.exec(pageContent);
    if (!propsMatch) {
        return [];
    }

    const jsonChunk = findJsonArrayChunk(pageContent, propsMatch.index + propsMatch[0].length);
    if (!jsonChunk) {
        return [];
    }

    try {
        const parsed = JSON.parse(jsonChunk);
        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.map((item) => {
            const propRecord = item && typeof item === 'object' ? (item as Record<string, unknown>) : {};
            const result = {
                name: asString(propRecord.name),
                type: toTypeString(propRecord.type),
                required: typeof propRecord.required === 'boolean' ? propRecord.required : false,
                default: toDefaultString(propRecord),
                description: asString(propRecord.description),
            };
            return OutputPropSchema.parse(result);
        });
    } catch {
        return [];
    }
}
