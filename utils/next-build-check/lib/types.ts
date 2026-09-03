export type ExportsEntry =
    | string
    | {
          import?: string;
          require?: string;
          default?: string;
          types?: string;
      };

export type PackageJson = {
    name: string;
    exports?: Record<string, ExportsEntry>;
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
};

export type Args = {
    ci: boolean;
    package?: string;
    build?: string;
};

export type ResolvedTarget = {
    pkgDir: string;
    pkgPath: string;
    pkgJson: PackageJson;
    exportKey: string;
};
