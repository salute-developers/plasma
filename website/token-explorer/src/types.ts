export interface TokenRecord {
    id: string;
    exportName: string;
    cssVar: string;
    valuePreview: string;
    category: string;
    colorSubgroup: string | null;
    themePackage: string;
    slug: string;
}

export interface UsageRecord {
    package: string;
    configPath: string;
    line: number;
    kind: string;
    tokenId: string | null;
    raw: string;
}

export interface ComponentRecord {
    package: string;
    configPath: string;
    tokenIds: string[];
    gapCount: number;
    gaps: { kind: string; line: number; raw: string }[];
}

export interface DesignSystem {
    id: string;
    label: string;
    package: string;
    tokenSlugs: string[];
}

export interface ExplorerPayload {
    generatedAt: string;
    designSystems?: DesignSystem[];
    tokens: TokenRecord[];
    usages: UsageRecord[];
    tokenUsageCount: Record<string, number>;
    components: ComponentRecord[];
}
