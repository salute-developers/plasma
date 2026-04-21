import React, { useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import {
    missingTokensByConfig,
    missingTokensByToken,
    missingTokensDescription,
    missingTokensGeneratedAt,
} from './missingTokensData';
import type { MissingTokenGroupId, TypographySubId } from './missingTokensGroups';
import {
    MISSING_TOKEN_GROUPS,
    compareTypographySub,
    getMissingTokenGroup,
    getTypographySubsection,
    typographySubsectionLabel,
} from './missingTokensGroups';

const meta: Meta = {
    title: 'Tokens/Missing DS tokens',
    decorators: [InSpacingDecorator],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.875rem',
    lineHeight: 1.45,
};

const thStyle: React.CSSProperties = {
    textAlign: 'left',
    borderBottom: '2px solid var(--plasma-colors-surfaceSolidTertiary, #e8e8e8)',
    padding: '0.5rem 0.75rem',
    fontWeight: 600,
};

const tdStyle: React.CSSProperties = {
    borderBottom: '1px solid var(--plasma-colors-surfaceTransparentSecondary, rgba(0,0,0,0.08))',
    padding: '0.45rem 0.75rem',
    verticalAlign: 'top',
};

const codeStyle: React.CSSProperties = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.8125rem',
};

const mutedStyle: React.CSSProperties = {
    color: 'var(--plasma-colors-textSecondary, #5c5c5c)',
    fontSize: '0.8125rem',
};

const groupTitleStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: 600,
    margin: '1.75rem 0 0.35rem',
};

const subTitleStyle: React.CSSProperties = {
    fontSize: '0.9375rem',
    fontWeight: 600,
    margin: '1rem 0 0.5rem',
    color: 'var(--plasma-colors-textSecondary, #5c5c5c)',
};

const colorsColumnHeaderStyle: React.CSSProperties = {
    ...thStyle,
    color: 'var(--plasma-colors-textTertiary, #888)',
    fontWeight: 500,
    fontSize: '0.75rem',
};

const dashCellStyle: React.CSSProperties = {
    ...tdStyle,
    color: 'var(--plasma-colors-textTertiary, #aaa)',
    textAlign: 'center',
};

function TokenRow({ name, paths }: { name: string; paths: string[] }) {
    return (
        <tr key={name}>
            <td style={tdStyle}>
                <code style={codeStyle}>{name}</code>
            </td>
            <td style={dashCellStyle}>—</td>
            <td style={dashCellStyle}>—</td>
            <td style={dashCellStyle}>—</td>
            <td style={dashCellStyle}>—</td>
            <td style={tdStyle}>
                {paths.map((p) => (
                    <div key={p} style={{ marginBottom: '0.15rem' }}>
                        <code style={codeStyle}>{p}</code>
                    </div>
                ))}
            </td>
        </tr>
    );
}

function TypographyGroupedTable({ names }: { names: string[] }) {
    const sorted = useMemo(() => [...names].sort(compareTypographySub), [names]);
    const subOrder: TypographySubId[] = ['display', 'heading', 'body', 'textStyle', 'other'];

    return (
        <>
            {subOrder.map((subId) => {
                const inSub = sorted.filter((n) => getTypographySubsection(n) === subId);
                if (inSub.length === 0) return null;

                return (
                    <div key={subId}>
                        <h3 style={subTitleStyle}>{typographySubsectionLabel(subId)}</h3>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>Token</th>
                                    <th style={colorsColumnHeaderStyle}>Color</th>
                                    <th style={colorsColumnHeaderStyle}>Tone</th>
                                    <th style={colorsColumnHeaderStyle}>Opacity</th>
                                    <th style={colorsColumnHeaderStyle}>Hex</th>
                                    <th style={thStyle}>Config files</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inSub.map((name) => (
                                    <TokenRow key={name} name={name} paths={missingTokensByToken[name]} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </>
    );
}

function GroupTable({ groupId, names }: { groupId: MissingTokenGroupId; names: string[] }) {
    const sortedAlphabetical = useMemo(() => [...names].sort((a, b) => a.localeCompare(b)), [names]);

    if (groupId === 'typography') {
        return <TypographyGroupedTable names={names} />;
    }

    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={thStyle}>Token</th>
                    <th style={colorsColumnHeaderStyle}>Color</th>
                    <th style={colorsColumnHeaderStyle}>Tone</th>
                    <th style={colorsColumnHeaderStyle}>Opacity</th>
                    <th style={colorsColumnHeaderStyle}>Hex</th>
                    <th style={thStyle}>Config files</th>
                </tr>
            </thead>
            <tbody>
                {sortedAlphabetical.map((name) => (
                    <TokenRow key={name} name={name} paths={missingTokensByToken[name]} />
                ))}
            </tbody>
        </table>
    );
}

const MissingTokensPage: React.FC = () => {
    const tokenNames = Object.keys(missingTokensByToken);

    const byGroup = useMemo(() => {
        const m = new Map<MissingTokenGroupId, string[]>();
        for (const id of MISSING_TOKEN_GROUPS.map((g) => g.id)) {
            m.set(id, []);
        }
        for (const name of tokenNames) {
            const g = getMissingTokenGroup(name);
            const bucket = m.get(g);
            if (bucket) bucket.push(name);
        }
        return m;
    }, [tokenNames]);

    return (
        <div style={{ maxWidth: 'min(1200px, 100%)', padding: '1rem 1.25rem 2rem' }}>
            <h1 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>Missing tokens (from config NOTEs)</h1>
            <p style={{ margin: '0 0 0.75rem', color: 'var(--plasma-colors-textSecondary, #5c5c5c)' }}>
                {missingTokensDescription}
            </p>
            <p style={{ margin: '0 0 0.75rem', ...mutedStyle }}>
                Grouping follows the same families as <strong>Tokens/Colors</strong> (Text, Background, Surface,
                Overlay, Outline, Data, Persona) plus <strong>Typography</strong>. The Color / Tone / Opacity / Hex
                columns are placeholders to mirror the Colors layout—this report does not resolve theme values, only
                missing token names.
            </p>
            <p
                style={{
                    margin: '0 0 1.25rem',
                    fontSize: '0.8125rem',
                    color: 'var(--plasma-colors-textSecondary, #5c5c5c)',
                }}
            >
                Data generated: {new Date(missingTokensGeneratedAt).toLocaleString()} ·{' '}
                <strong>{tokenNames.length}</strong> unique tokens across{' '}
                <strong>{missingTokensByConfig.length}</strong> config files. Regenerate with{' '}
                <code style={codeStyle}>npm run update-storybook-with-missing-tokens</code> from this package directory
                (see <code style={codeStyle}>package.json</code> scripts).
            </p>

            <h2 style={{ fontSize: '1.125rem', margin: '1.5rem 0 0.75rem' }}>By token (grouped)</h2>

            {MISSING_TOKEN_GROUPS.map(({ id, label, description }) => {
                const names = byGroup.get(id) ?? [];
                if (names.length === 0) return null;

                return (
                    <section key={id}>
                        <h2 style={groupTitleStyle}>{label}</h2>
                        {description && (
                            <p style={{ margin: '0 0 0.75rem', ...mutedStyle }}>
                                <em>{description}</em>
                            </p>
                        )}
                        <GroupTable groupId={id} names={names} />
                    </section>
                );
            })}

            <h2 style={{ fontSize: '1.125rem', margin: '2rem 0 0.75rem' }}>By config</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Config</th>
                        <th style={thStyle}>Missing token names</th>
                    </tr>
                </thead>
                <tbody>
                    {missingTokensByConfig.map((row) => (
                        <tr key={row.configPath}>
                            <td style={tdStyle}>
                                <code style={codeStyle}>{row.configPath}</code>
                            </td>
                            <td style={tdStyle}>
                                <code style={codeStyle}>{row.tokens.join(', ')}</code>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

type Story = StoryObj<typeof MissingTokensPage>;

export const Overview: Story = {
    render: () => <MissingTokensPage />,
};
