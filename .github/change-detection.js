/* eslint-disable @typescript-eslint/no-var-requires */

const { execFileSync } = require('node:child_process');
const { appendFileSync } = require('node:fs');
const { posix: path } = require('node:path');

const processingScope = require('./processing-scope');

const dependencyFields = ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies'];

const git = (cwd, ...args) =>
    execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }).trimEnd();

// Lerna ignores matching dotfiles too (minimatch's dot: true). Prefixing each
// segment lets Node's glob matcher apply the same wildcard rules to dotfiles.
const matchesIgnoredPath = (file, pattern) => {
    const prefixSegments = (value) =>
        value
            .split('/')
            .map((segment) => (segment === '**' ? segment : `x${segment}`))
            .join('/');

    return path.matchesGlob(prefixSegments(file), prefixSegments(pattern));
};

/**
 * Inspect Git objects without checking out or executing the requested revision.
 * In particular, never load its npm scripts, Lerna/Nx plugins or JS helpers.
 */
const getChangedPackages = ({ cwd = process.cwd(), head = 'HEAD', since, excludeDependents = false }) => {
    const readJSON = (file) => JSON.parse(git(cwd, 'show', `${head}:${file}`));
    const config = readJSON('lerna.json');
    const workspaces = config.packages || readJSON('package.json').workspaces;
    const patterns = Array.isArray(workspaces) ? workspaces : workspaces.packages;
    const ignoreChanges = config.command?.list?.ignoreChanges || config.ignoreChanges || [];
    const files = git(cwd, 'ls-tree', '-r', '--name-only', '-z', head).split('\0').filter(Boolean);
    const packages = files
        .filter(
            (file) =>
                path.basename(file) === 'package.json' &&
                patterns.some((pattern) => path.matchesGlob(path.dirname(file), pattern)),
        )
        .map((file) => ({ ...readJSON(file), directory: path.dirname(file) }));

    const changedFiles = git(
        cwd,
        'diff',
        '--no-ext-diff',
        '--no-textconv',
        '--no-renames',
        '--name-only',
        '-z',
        since,
        head,
        '--',
    )
        .split('\0')
        .filter(Boolean);
    const changed = new Set(
        packages
            .filter(({ directory }) =>
                changedFiles.some((file) => {
                    if (!file.startsWith(`${directory}/`)) {
                        return false;
                    }

                    const relativeFile = file.slice(directory.length + 1);

                    return !ignoreChanges.some((pattern) =>
                        matchesIgnoredPath(pattern.includes('/') ? relativeFile : path.basename(relativeFile), pattern),
                    );
                }),
            )
            .map(({ name }) => name),
    );

    if (!excludeDependents) {
        const dependents = new Map();

        packages.forEach((pkg) => {
            dependencyFields.forEach((field) => {
                Object.keys(pkg[field] || {}).forEach((dependency) => {
                    if (!dependents.has(dependency)) {
                        dependents.set(dependency, new Set());
                    }

                    dependents.get(dependency).add(pkg.name);
                });
            });
        });

        // Set iteration visits added entries too, including transitive dependents.
        changed.forEach((name) => dependents.get(name)?.forEach((dependent) => changed.add(dependent)));
    }

    return packages.filter(({ name }) => changed.has(name)).map(({ name }) => ({ name }));
};

if (require.main === module) {
    const cwd = process.cwd();
    const targetRef = process.env.CHANGE_DETECTION_REF;

    if (!targetRef || targetRef.startsWith('-')) {
        throw new Error('A repository ref is required.');
    }

    // Reject refspecs (including destinations) and option-like input before fetch.
    git(cwd, 'check-ref-format', '--allow-onelevel', targetRef);
    git(cwd, 'fetch', '--no-tags', '--', 'origin', targetRef);

    const head = git(cwd, 'rev-parse', '--verify', 'FETCH_HEAD^{commit}');
    let since;

    try {
        since = git(cwd, 'merge-base', '--fork-point', 'origin/dev', head);
    } catch {
        since = git(cwd, 'merge-base', 'origin/dev', head);
    }

    process.env.RAW_DATA = JSON.stringify(
        getChangedPackages({ cwd, head, since, excludeDependents: process.env.EXCLUDE_DEPENDENTS === 'true' }),
    );
    appendFileSync(process.env.GITHUB_OUTPUT, `STATE=${JSON.stringify(processingScope())}\n`);
}

module.exports = { getChangedPackages };
