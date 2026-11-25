// Типы `package.mjs` для тестов упаковки (`test/package.test.ts`).

export interface WebPluginManifest {
    schemaVersion?: unknown;
    platform?: unknown;
    protocolVersion?: unknown;
    entrypoint?: unknown;
    plasmaNewHopeVersion?: unknown;
    apiMetaSha256?: unknown;
    commit?: unknown;
    version?: unknown;
    [field: string]: unknown;
}

export const MANIFEST_FILE: 'preview-plugin.json';
export const META_FILE: 'api-meta.json';
export const BUILD_ID_LENGTH: 12;
export const ARCHIVE_PATH: string;
export const PROVENANCE_START: string;
export const PROVENANCE_END: string;
export const BUNDLED_WORKSPACE_PACKAGES: string[];

export function sha256Hex(bytes: Uint8Array | string): string;
export function installedPackageVersion(name: string, from: string): string;
export function enrichManifest(distDir: string, commit: string, plasmaNewHopeVersion: string): WebPluginManifest;
export function listFiles(dir: string): string[];
export function validateWebManifest(manifest: WebPluginManifest, files: Map<string, Uint8Array>): string[];
export function zipDirectory(sourceDir: string): Promise<Buffer>;
export function formatProvenance(options: {
    manifest: WebPluginManifest;
    archiveSha256: string;
    dirty: boolean;
}): string;
