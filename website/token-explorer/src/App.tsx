import { useEffect, useMemo, useState } from 'react';
import type {
    ComponentRecord,
    DesignSystem,
    ExplorerPayload,
    TokenRecord,
    UsageRecord,
} from './types';

type View = 'tokens' | 'components' | 'gaps';

type UsageFilter = 'all' | 'used' | 'unused';

type CategorySubs = Record<string, TokenRecord[] | Record<string, TokenRecord[]>>;

const COLOR_SUB_LABEL: Record<string, string> = {
    default: 'Default',
    onDark: 'On dark',
    onLight: 'On light',
    inverse: 'Inverse',
    _: 'Other',
};

const CATEGORY_ORDER = ['colors', 'spaces', 'borderRadii', 'shadows', 'typography', 'other'];

const CATEGORY_LABELS: Record<string, string> = {
    colors: 'Colors',
    spaces: 'Spaces',
    borderRadii: 'Border radii',
    shadows: 'Shadows',
    typography: 'Typography',
    other: 'Other',
};

const FRACTION_TITLE =
    'Tokens with ≥1 distinct config usage in this design system / total tokens in this group';

function typographyBaseExport(exportName: string): string {
    const dot = exportName.indexOf('.');
    return dot === -1 ? exportName : exportName.slice(0, dot);
}

function typographyFamilyAndVariant(exportName: string): { family: string; variant: string } {
    const base = typographyBaseExport(exportName);
    const m = base.match(/^(.+)(Bold|Medium)$/);
    if (m) {
        return { family: m[1], variant: m[2].toLowerCase() };
    }
    return { family: base, variant: 'default' };
}

const TYPO_VARIANT_ORDER = ['default', 'bold', 'medium'] as const;

const TYPO_VARIANT_LABEL: Record<string, string> = {
    default: 'Default',
    bold: 'Bold',
    medium: 'Medium',
};

function splitTypographyByVariant(list: TokenRecord[]): Record<string, TokenRecord[]> {
    const buckets: Record<string, TokenRecord[]> = {};
    for (const t of list) {
        const { variant } = typographyFamilyAndVariant(t.exportName);
        if (!buckets[variant]) buckets[variant] = [];
        buckets[variant].push(t);
    }
    for (const k of Object.keys(buckets)) {
        buckets[k].sort((a, b) => a.exportName.localeCompare(b.exportName));
    }
    return buckets;
}

const COLOR_SEMANTIC_ORDER = [
    'background',
    'data',
    'outline',
    'overlay',
    'surface',
    'text',
    'other',
] as const;

const COLOR_SEMANTIC_LABEL: Record<string, string> = {
    background: 'Background',
    data: 'Data',
    outline: 'Outline',
    overlay: 'Overlay',
    surface: 'Surface',
    text: 'Text',
    other: 'Other',
};

function colorSemanticSubgroup(exportName: string, cssVar: string): string {
    const ev = exportName.toLowerCase();
    const cv = cssVar.toLowerCase();
    let stem = ev;
    if (stem.startsWith('inverse')) stem = stem.slice(7);
    if (stem.startsWith('ondark')) stem = stem.slice(6);
    if (stem.startsWith('onlight')) stem = stem.slice(7);

    if (stem.startsWith('data') || /^--data-/.test(cv)) return 'data';
    if (stem.startsWith('background') || /--background-/.test(cv) || cv === '--background') {
        return 'background';
    }
    if (stem.startsWith('surface') || /--surface-/.test(cv)) return 'surface';
    if (stem.startsWith('text') || /--text-/.test(cv)) return 'text';
    if (stem.startsWith('outline') || /--outline-/.test(cv)) return 'outline';
    if (stem.startsWith('overlay') || /--overlay-/.test(cv)) return 'overlay';
    if (stem.includes('gradient') || cv.includes('gradient')) {
        if (/--text-/.test(cv) || stem.includes('text')) return 'text';
        if (/--surface-/.test(cv) || stem.includes('surface')) return 'surface';
        if (/--outline-/.test(cv) || stem.includes('outline')) return 'outline';
        return 'other';
    }
    return 'other';
}

function usageCountFor(tokenUsageCount: Record<string, number>, id: string) {
    return tokenUsageCount[id] ?? 0;
}

function usedTotalForTokens(
    tokens: TokenRecord[],
    tokenUsageCount: Record<string, number>,
): { used: number; total: number } {
    const total = tokens.length;
    const used = tokens.filter((t) => usageCountFor(tokenUsageCount, t.id) > 0).length;
    return { used, total };
}

function flattenSubs(subs: CategorySubs): TokenRecord[] {
    const out: TokenRecord[] = [];
    for (const v of Object.values(subs)) {
        if (Array.isArray(v)) {
            out.push(...v);
        } else {
            for (const list of Object.values(v)) {
                out.push(...list);
            }
        }
    }
    return out;
}

function TokenHeaderFraction({ used, total }: { used: number; total: number }) {
    return (
        <span className="token-header-fraction" title={FRACTION_TITLE}>
            {used}/{total}
        </span>
    );
}

function tokenUsageCountFromUsages(usages: UsageRecord[]): Record<string, number> {
    const m = new Map<string, Set<string>>();
    for (const u of usages) {
        if (!u.tokenId) continue;
        const compKey = `${u.package}::${u.configPath}`;
        if (!m.has(u.tokenId)) m.set(u.tokenId, new Set());
        m.get(u.tokenId)!.add(compKey);
    }
    const out: Record<string, number> = {};
    for (const [tid, set] of m) out[tid] = set.size;
    return out;
}

function groupTokens(
    tokens: TokenRecord[],
    search: string,
    usageFilter: UsageFilter,
    tokenUsageCount: Record<string, number>,
): Record<string, CategorySubs> {
    let filtered = tokens;
    if (usageFilter === 'used') {
        filtered = filtered.filter((t) => usageCountFor(tokenUsageCount, t.id) > 0);
    } else if (usageFilter === 'unused') {
        filtered = filtered.filter((t) => usageCountFor(tokenUsageCount, t.id) === 0);
    }

    const q = search.trim().toLowerCase();
    if (q) {
        filtered = filtered.filter(
            (t) =>
                t.exportName.toLowerCase().includes(q) ||
                t.cssVar.toLowerCase().includes(q) ||
                t.slug.toLowerCase().includes(q) ||
                t.themePackage.toLowerCase().includes(q),
        );
    }

    const tree: Record<string, CategorySubs> = {};
    for (const t of filtered) {
        const cat = t.category;
        if (cat === 'colors') {
            const palette = t.colorSubgroup ?? '_';
            const semantic = colorSemanticSubgroup(t.exportName, t.cssVar);
            if (!tree[cat]) tree[cat] = {};
            if (!tree[cat][palette]) tree[cat][palette] = {};
            const paletteMap = tree[cat][palette] as Record<string, TokenRecord[]>;
            if (!paletteMap[semantic]) paletteMap[semantic] = [];
            paletteMap[semantic].push(t);
        } else {
            let sub: string;
            if (cat === 'typography') {
                sub = typographyFamilyAndVariant(t.exportName).family;
            } else {
                sub = '_';
            }
            if (!tree[cat]) tree[cat] = {};
            if (!tree[cat][sub]) tree[cat][sub] = [];
            (tree[cat][sub] as TokenRecord[]).push(t);
        }
    }

    for (const cat of Object.keys(tree)) {
        if (cat === 'colors') {
            for (const palette of Object.keys(tree[cat])) {
                const paletteMap = tree[cat][palette] as Record<string, TokenRecord[]>;
                for (const sem of Object.keys(paletteMap)) {
                    paletteMap[sem].sort((a, b) => a.exportName.localeCompare(b.exportName));
                }
            }
        } else {
            for (const sub of Object.keys(tree[cat])) {
                const leaf = tree[cat][sub];
                if (Array.isArray(leaf)) {
                    leaf.sort((a, b) => a.exportName.localeCompare(b.exportName));
                }
            }
        }
    }
    return tree;
}

function subKeysForCategory(cat: string, subs: CategorySubs): string[] {
    const keys = Object.keys(subs);
    if (cat === 'colors') {
        const order = ['default', 'onDark', 'onLight', 'inverse', '_'];
        return [...order.filter((k) => keys.includes(k)), ...keys.filter((k) => !order.includes(k))];
    }
    if (cat === 'typography') {
        const rest = keys.filter((k) => k !== '_').sort((a, b) => a.localeCompare(b));
        if (keys.includes('_')) rest.push('_');
        return rest.length ? rest : ['_'];
    }
    return ['_'];
}

function TokenSidebar({
    grouped,
    selectedId,
    onSelect,
    tokenUsageCount,
}: {
    grouped: Record<string, CategorySubs>;
    selectedId: string | null;
    onSelect: (id: string) => void;
    tokenUsageCount: Record<string, number>;
}) {
    const renderTokenButton = (t: TokenRecord) => {
        const n = usageCountFor(tokenUsageCount, t.id);
        return (
            <button
                key={t.id}
                type="button"
                className={`token-item${selectedId === t.id ? ' selected' : ''}`}
                onClick={() => onSelect(t.id)}
            >
                <span className="token-item-name">{t.exportName}</span>
                <span className="token-item-count" title="Distinct configs using this token">
                    {n}
                </span>
            </button>
        );
    };

    if (Object.keys(grouped).length === 0) {
        return <p className="sidebar-empty">No tokens match search or usage filter.</p>;
    }

    const renderSubgroupSummary = (label: string, list: TokenRecord[]) => {
        const { used, total } = usedTotalForTokens(list, tokenUsageCount);
        return (
            <summary className="token-subgroup-summary token-header-with-fraction">
                <span className="token-header-title">{label}</span>
                <TokenHeaderFraction used={used} total={total} />
            </summary>
        );
    };

    const renderCategoryBody = (cat: string, subs: CategorySubs) => {
        if (cat === 'colors') {
            return subKeysForCategory(cat, subs).map((paletteKey) => {
                const paletteVal = subs[paletteKey];
                if (!paletteVal || typeof paletteVal !== 'object' || Array.isArray(paletteVal)) return null;
                const paletteMap = paletteVal as Record<string, TokenRecord[]>;
                const paletteList = Object.values(paletteMap).flat();
                if (!paletteList.length) return null;
                const paletteLabel = paletteKey === '_' ? 'Other' : COLOR_SUB_LABEL[paletteKey] ?? paletteKey;
                const semanticKeys = [
                    ...COLOR_SEMANTIC_ORDER.filter((k) => paletteMap[k]?.length),
                    ...Object.keys(paletteMap)
                        .filter((k) => !(COLOR_SEMANTIC_ORDER as readonly string[]).includes(k))
                        .sort(),
                ];
                return (
                    <details key={paletteKey} className="token-subgroup token-subgroup--color-palette" open>
                        {renderSubgroupSummary(paletteLabel, paletteList)}
                        <div className="token-color-semantics">
                            {semanticKeys.map((sem) => {
                                const list = paletteMap[sem];
                                if (!list?.length) return null;
                                const semLabel = COLOR_SEMANTIC_LABEL[sem] ?? sem;
                                return (
                                    <details key={sem} className="token-color-semantic" open>
                                        {renderSubgroupSummary(semLabel, list)}
                                        <div className="token-subgroup-list">{list.map(renderTokenButton)}</div>
                                    </details>
                                );
                            })}
                        </div>
                    </details>
                );
            });
        }
        if (cat === 'typography') {
            return subKeysForCategory(cat, subs).map((sub) => {
                const list = subs[sub];
                if (!list || !Array.isArray(list) || !list.length) return null;
                const label = sub === '_' ? 'Other' : sub;
                const byVariant = splitTypographyByVariant(list);
                const extraVariants = Object.keys(byVariant)
                    .filter((v) => !(TYPO_VARIANT_ORDER as readonly string[]).includes(v))
                    .sort();
                return (
                    <details key={sub} className="token-subgroup token-subgroup--typography-family" open>
                        {renderSubgroupSummary(label, list)}
                        <div className="token-typography-variants">
                            {TYPO_VARIANT_ORDER.filter((v) => byVariant[v]?.length).map((v) => (
                                <details key={v} className="token-typography-variant" open>
                                    {renderSubgroupSummary(TYPO_VARIANT_LABEL[v] ?? v, byVariant[v])}
                                    <div className="token-subgroup-list">
                                        {byVariant[v].map(renderTokenButton)}
                                    </div>
                                </details>
                            ))}
                            {extraVariants.map((v) => (
                                <details key={v} className="token-typography-variant" open>
                                    {renderSubgroupSummary(v, byVariant[v])}
                                    <div className="token-subgroup-list">
                                        {byVariant[v].map(renderTokenButton)}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </details>
                );
            });
        }
        return subKeysForCategory(cat, subs).map((sub) => {
            const list = subs[sub];
            if (!list || !Array.isArray(list) || !list?.length) return null;
            return (
                <details key={sub || '_'} className="token-subgroup" open>
                    {renderSubgroupSummary('All', list)}
                    <div className="token-subgroup-list">{list.map(renderTokenButton)}</div>
                </details>
            );
        });
    };

    const renderCategorySection = (cat: string) => {
        const subs = grouped[cat];
        const catTokens = flattenSubs(subs);
        const { used, total } = usedTotalForTokens(catTokens, tokenUsageCount);
        return (
            <details key={cat} className="token-group" open>
                <summary className="token-group-summary token-header-with-fraction">
                    <span className="token-header-title">{CATEGORY_LABELS[cat] ?? cat}</span>
                    <TokenHeaderFraction used={used} total={total} />
                </summary>
                <div className="token-group-body">{renderCategoryBody(cat, subs)}</div>
            </details>
        );
    };

    return (
        <>
            {CATEGORY_ORDER.filter((c) => grouped[c]).map((cat) => renderCategorySection(cat))}
            {Object.keys(grouped)
                .filter((c) => !CATEGORY_ORDER.includes(c))
                .map((cat) => renderCategorySection(cat))}
        </>
    );
}

export function App() {
    const [data, setData] = useState<ExplorerPayload | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [view, setView] = useState<View>('tokens');
    const [search, setSearch] = useState('');
    const [usageFilter, setUsageFilter] = useState<UsageFilter>('all');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [pkgFilter, setPkgFilter] = useState<string>('');
    const [designSystemId, setDesignSystemId] = useState<string>('');

    useEffect(() => {
        fetch('/token-explorer.data.json')
            .then((r) => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.json();
            })
            .then(setData)
            .catch((e) => setError(String(e.message || e)));
    }, []);

    const designSystems: DesignSystem[] | null = data?.designSystems?.length
        ? data.designSystems
        : null;

    useEffect(() => {
        if (!designSystems?.length) return;
        setDesignSystemId((id) => {
            if (id && designSystems.some((d) => d.id === id)) return id;
            return designSystems[0].id;
        });
    }, [designSystems]);

    const activeDesignSystem = useMemo(() => {
        if (!designSystems?.length) return null;
        return designSystems.find((d) => d.id === designSystemId) ?? designSystems[0] ?? null;
    }, [designSystems, designSystemId]);

    useEffect(() => {
        setSelectedId(null);
    }, [designSystemId]);

    const tokenMap = useMemo(() => {
        const m = new Map<string, TokenRecord>();
        if (!data) return m;
        for (const t of data.tokens) m.set(t.id, t);
        return m;
    }, [data]);

    const scopedTokens = useMemo(() => {
        if (!data) return [];
        if (!activeDesignSystem) return data.tokens;
        return data.tokens.filter((t) => activeDesignSystem.tokenSlugs.includes(t.slug));
    }, [data, activeDesignSystem]);

    const scopedUsages = useMemo(() => {
        if (!data) return [];
        if (!activeDesignSystem) return data.usages;
        return data.usages.filter((u) => u.package === activeDesignSystem.package);
    }, [data, activeDesignSystem]);

    const scopedTokenUsageCount = useMemo(
        () => tokenUsageCountFromUsages(scopedUsages),
        [scopedUsages],
    );

    const grouped = useMemo(
        () =>
            data
                ? groupTokens(scopedTokens, search, usageFilter, scopedTokenUsageCount)
                : {},
        [data, scopedTokens, search, usageFilter, scopedTokenUsageCount],
    );

    const usagesForToken = useMemo(() => {
        if (!data || !selectedId) return [];
        return data.usages.filter((u) => {
            if (u.tokenId !== selectedId) return false;
            if (activeDesignSystem && u.package !== activeDesignSystem.package) return false;
            return true;
        });
    }, [data, selectedId, activeDesignSystem]);

    const selectedToken = selectedId ? tokenMap.get(selectedId) ?? null : null;

    const packages = useMemo(() => {
        if (!data) return [];
        return [...new Set(data.components.map((c) => c.package))].sort();
    }, [data]);

    const filteredComponents = useMemo(() => {
        if (!data) return [];
        let rows = data.components;
        if (activeDesignSystem) rows = rows.filter((c) => c.package === activeDesignSystem.package);
        else if (pkgFilter) rows = rows.filter((c) => c.package === pkgFilter);
        if (search.trim()) {
            const q = search.toLowerCase();
            rows = rows.filter((c) => c.configPath.toLowerCase().includes(q));
        }
        return rows;
    }, [data, activeDesignSystem, pkgFilter, search]);

    const gapLeaders = useMemo(() => {
        if (!data) return [];
        let rows = [...data.components].sort((a, b) => b.gapCount - a.gapCount);
        if (activeDesignSystem) rows = rows.filter((c) => c.package === activeDesignSystem.package);
        return rows;
    }, [data, activeDesignSystem]);

    if (error) {
        return (
            <div className="empty">
                <p>Could not load data: {error}</p>
                <p>
                    Run <code>npm run generate:data</code> from website/token-explorer.
                </p>
            </div>
        );
    }

    if (!data) {
        return <div className="empty">Loading token data…</div>;
    }

    return (
        <div className="layout" style={view === 'tokens' ? undefined : { gridTemplateColumns: '1fr' }}>
            <header>
                <h1>Design token explorer</h1>
                {designSystems && activeDesignSystem && (
                    <label className="design-system-select">
                        <span className="design-system-select-label">Design system</span>
                        <select
                            value={activeDesignSystem.id}
                            onChange={(e) => setDesignSystemId(e.target.value)}
                            title="Component package and token set"
                        >
                            {designSystems.map((ds) => (
                                <option key={ds.id} value={ds.id}>
                                    {ds.label} ({ds.package} · {ds.tokenSlugs.join(', ')})
                                </option>
                            ))}
                        </select>
                    </label>
                )}
                <nav className="nav">
                    <button type="button" className={view === 'tokens' ? 'active' : ''} onClick={() => setView('tokens')}>
                        Tokens
                    </button>
                    <button
                        type="button"
                        className={view === 'components' ? 'active' : ''}
                        onClick={() => setView('components')}
                    >
                        Components
                    </button>
                    <button type="button" className={view === 'gaps' ? 'active' : ''} onClick={() => setView('gaps')}>
                        Gaps
                    </button>
                </nav>
                <input
                    type="search"
                    placeholder={
                        view === 'tokens' ? 'Search tokens…' : view === 'gaps' ? 'Filter config path…' : 'Filter path…'
                    }
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {view === 'tokens' && (
                    <select
                        className="usage-filter"
                        value={usageFilter}
                        onChange={(e) => setUsageFilter(e.target.value as UsageFilter)}
                        title="Filter by usage in component configs"
                    >
                        <option value="all">All tokens</option>
                        <option value="used">Used only</option>
                        <option value="unused">Unused only</option>
                    </select>
                )}
                {view === 'components' && !activeDesignSystem && (
                    <select value={pkgFilter} onChange={(e) => setPkgFilter(e.target.value)}>
                        <option value="">All packages</option>
                        {packages.map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>
                )}
                <span className="meta">Generated {new Date(data.generatedAt).toLocaleString()}</span>
            </header>

            {view === 'tokens' && (
                <>
                    <aside className="sidebar">
                        <TokenSidebar
                            grouped={grouped}
                            selectedId={selectedId}
                            onSelect={setSelectedId}
                            tokenUsageCount={scopedTokenUsageCount}
                        />
                    </aside>
                    <main className="main">
                        {selectedToken ? (
                            <TokenDetail
                                token={selectedToken}
                                usageCount={scopedTokenUsageCount[selectedToken.id] ?? 0}
                                usages={usagesForToken}
                            />
                        ) : (
                            <p className="meta">Select a token in the sidebar.</p>
                        )}
                    </main>
                </>
            )}

            {view === 'components' && (
                <main className="main" style={{ gridColumn: '1 / -1' }}>
                    <ComponentsTable rows={filteredComponents} tokenMap={tokenMap} />
                </main>
            )}

            {view === 'gaps' && (
                <main className="main" style={{ gridColumn: '1 / -1' }}>
                    <GapsDashboard
                        rows={gapLeaders}
                        pkgFilter={activeDesignSystem ? activeDesignSystem.package : pkgFilter}
                        onPkgFilter={setPkgFilter}
                        packages={packages}
                        pathQuery={search}
                        lockPackageFilter={Boolean(activeDesignSystem)}
                    />
                </main>
            )}
        </div>
    );
}

function TokenDetail({
    token,
    usageCount,
    usages,
}: {
    token: TokenRecord;
    usageCount: number;
    usages: UsageRecord[];
}) {
    const byFile = useMemo(() => {
        const m = new Map<string, UsageRecord[]>();
        for (const u of usages) {
            const k = `${u.package}::${u.configPath}`;
            if (!m.has(k)) m.set(k, []);
            m.get(k)!.push(u);
        }
        return m;
    }, [usages]);

    return (
        <>
            <h2 style={{ marginTop: 0 }}>{token.exportName}</h2>
            <dl className="detail-grid">
                <dt>CSS variable</dt>
                <dd>
                    <code>{token.cssVar}</code>
                </dd>
                <dt>Theme</dt>
                <dd>
                    {token.themePackage} / {token.slug}
                </dd>
                <dt>Category</dt>
                <dd>
                    {CATEGORY_LABELS[token.category] ?? token.category}
                    {token.colorSubgroup
                        ? ` · ${COLOR_SUB_LABEL[token.colorSubgroup] ?? token.colorSubgroup}`
                        : ''}
                </dd>
                <dt>Value</dt>
                <dd>
                    <code>{token.valuePreview}</code>
                </dd>
                <dt>Components (distinct)</dt>
                <dd>{usageCount}</dd>
            </dl>
            <h3>Usages ({usages.length})</h3>
            <ul className="usage-list">
                {[...byFile.entries()].map(([key, list]) => (
                    <li key={key}>
                        <span className="badge">{list[0].package}</span>
                        <code>{list[0].configPath}</code>
                        {list.map((u, i) => (
                            <div key={i} style={{ marginTop: 4, color: '#8a827b' }}>
                                L{u.line} · {u.kind} · <code>{u.raw}</code>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </>
    );
}

function ComponentsTable({ rows, tokenMap }: { rows: ComponentRecord[]; tokenMap: Map<string, TokenRecord> }) {
    const [expanded, setExpanded] = useState<string | null>(null);
    return (
        <table>
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Config</th>
                    <th>Tokens</th>
                    <th>Gaps</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((c) => {
                    const key = `${c.package}::${c.configPath}`;
                    const isOpen = expanded === key;
                    return (
                        <tr key={key}>
                            <td>{c.package}</td>
                            <td>
                                <code>{c.configPath}</code>
                                <button
                                    type="button"
                                    style={{ marginLeft: 8 }}
                                    onClick={() => setExpanded(isOpen ? null : key)}
                                >
                                    {isOpen ? 'Hide' : 'Details'}
                                </button>
                                {isOpen && (
                                    <div style={{ marginTop: 8, fontSize: 11, color: '#a69f97' }}>
                                        <div>
                                            <strong>Tokens</strong>
                                        </div>
                                        <ul style={{ margin: '4px 0', paddingLeft: 18 }}>
                                            {c.tokenIds.slice(0, 80).map((id) => (
                                                <li key={id}>
                                                    <code>{tokenMap.get(id)?.exportName ?? id}</code>
                                                </li>
                                            ))}
                                            {c.tokenIds.length > 80 && <li>… {c.tokenIds.length - 80} more</li>}
                                        </ul>
                                        {c.gaps.length > 0 && (
                                            <>
                                                <div>
                                                    <strong>Gaps</strong>
                                                </div>
                                                <ul style={{ margin: '4px 0', paddingLeft: 18 }}>
                                                    {c.gaps.map((g, i) => (
                                                        <li key={i}>
                                                            L{g.line} · {g.kind} · <code>{g.raw}</code>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )}
                            </td>
                            <td>{c.tokenIds.length}</td>
                            <td>{c.gapCount}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

function GapsDashboard({
    rows,
    pkgFilter,
    onPkgFilter,
    packages,
    pathQuery,
    lockPackageFilter,
}: {
    rows: ComponentRecord[];
    pkgFilter: string;
    onPkgFilter: (v: string) => void;
    packages: string[];
    pathQuery: string;
    lockPackageFilter?: boolean;
}) {
    let filtered = pkgFilter ? rows.filter((r) => r.package === pkgFilter) : rows;
    const q = pathQuery.trim().toLowerCase();
    if (q) filtered = filtered.filter((r) => r.configPath.toLowerCase().includes(q));
    const withGaps = filtered.filter((r) => r.gapCount > 0);

    return (
        <>
            <p className="meta">
                Configs with at least one unresolved <code>var(--*)</code>, unresolved template interpolation{' '}
                <code>{'${ … }'}</code>, or raw dimension literal.
            </p>
            {!lockPackageFilter && (
                <select value={pkgFilter} onChange={(e) => onPkgFilter(e.target.value)} style={{ marginBottom: 12 }}>
                    <option value="">All packages</option>
                    {packages.map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </select>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Config</th>
                        <th>Gap count</th>
                        <th>Sample</th>
                    </tr>
                </thead>
                <tbody>
                    {withGaps.map((c) => (
                        <tr key={`${c.package}::${c.configPath}`}>
                            <td>{c.package}</td>
                            <td>
                                <code>{c.configPath}</code>
                            </td>
                            <td>{c.gapCount}</td>
                            <td>
                                <code>{c.gaps[0]?.raw ?? '—'}</code>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {withGaps.length === 0 && <p className="empty">No gaps in this filter.</p>}
        </>
    );
}
