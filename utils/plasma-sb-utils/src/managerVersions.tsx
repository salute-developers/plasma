import React from 'react';
import { addons, types } from 'storybook/manager-api';
import { styled } from 'storybook/theming';

export type PackageVersion = {
    name: string;
    version: string;
};

export type RegisterPackageVersionsOptions = {
    /** Unique addon id. Defaults to `plasma/package-versions`. */
    id?: string;
    /** Toolbar item title (tooltip). Defaults to `Package versions`. */
    title?: string;
};

const Root = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    height: '100%',
    padding: '0 10px',
    fontFamily: theme.typography.fonts.base,
    fontSize: theme.typography.size.s1,
    lineHeight: 1,
    color: theme.color.mediumdark,
    whiteSpace: 'nowrap',
}));

const Item = styled.span({
    display: 'inline-flex',
    gap: 4,
});

const Value = styled.b(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
    color: theme.color.defaultText,
}));

/**
 * Presentational badge that lists packages and their versions.
 * Rendered inside a Storybook manager slot (toolbar, panel, etc.).
 */
export const PackageVersions: React.FC<{ packages: PackageVersion[] }> = ({ packages }) => (
    <Root>
        {packages.map(({ name, version }) => (
            <Item key={name}>
                {name} <Value>v{version}</Value>
            </Item>
        ))}
    </Root>
);

const DEFAULT_ADDON_ID = 'plasma/package-versions';

/**
 * Registers a Storybook manager toolbar item that shows the given packages and versions.
 * Call it from a package `.storybook/manager.{ts,tsx}` alongside `addons.setConfig`.
 *
 * @example
 * registerPackageVersions([
 *     { name: 'sdds-serv', version: servVersion },
 *     { name: 'sdds-themes', version: themesVersion },
 * ]);
 */
export const registerPackageVersions = (packages: PackageVersion[], options: RegisterPackageVersionsOptions = {}) => {
    const { id = DEFAULT_ADDON_ID, title = 'Package versions' } = options;

    addons.register(id, () => {
        addons.add(`${id}/tool`, {
            type: types.TOOLEXTRA,
            title,
            match: () => true,
            render: () => <PackageVersions packages={packages} />,
        });
    });
};
