import { z } from 'zod';

export const OutputPropSchema = z.object({
    name: z.string(),
    type: z.string(),
    required: z.boolean(),
    default: z.string(),
    description: z.string(),
});

export const ComponentOutputFileSchema = z.object({
    name: z.string(),
    package: z.string(),
    category: z.string(),
    summary: z.string(),
    api: z.object({
        props: z.array(OutputPropSchema),
    }),
    examples: z.array(
        z.object({
            title: z.string(),
            snippet: z.string(),
        }),
    ),
    stability: z.literal('beta').optional(),
    warning: z.string().optional(),
    /** У стабильного компонента: ссылка на одноимённую beta-версию. */
    recommendation: z.string().optional(),
});

export const SimpleOutputFileSchema = z.object({
    name: z.string(),
    package: z.string(),
    category: z.string(),
    summary: z.string(),
});

export const IndexItemSchema = z.object({
    name: z.string(),
    href: z.string(),
    summary: z.string(),
    category: z.string(),
});

export const ComponentsIndexSchema = z.array(IndexItemSchema);

export const ManifestSchema = z.object({
    builtAt: z.string(),
    version: z.string(),
    source: z.object({
        repo: z.string(),
    }),
    tools: z.array(z.string().min(1)),
    paths: z.record(z.string(), z.string()),
});

export type OutputProp = z.infer<typeof OutputPropSchema>;
export type ComponentOutputFile = z.infer<typeof ComponentOutputFileSchema>;
export type SimpleOutputFile = z.infer<typeof SimpleOutputFileSchema>;
export type OutputFile = ComponentOutputFile | SimpleOutputFile;
export type CategoryIndexItem = z.infer<typeof IndexItemSchema>;

/** Элемент `index.json` в том виде, в котором его читает шаг `mcp-data`. */
export interface InputItem {
    pageContent?: unknown;
    metadata?: {
        heading?: {
            text?: unknown;
        };
        source?: {
            url?: unknown;
        };
        category?: unknown;
        productId?: unknown;
    };
}
