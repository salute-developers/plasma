#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires, import/no-dynamic-require, global-require */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */

const path = require('path');
const fg = require('fast-glob');
const chalk = require('chalk');
const semver = require('semver');
const required = require('required-path');

console.log('Linting packages structure');
console.log();

const cwd = process.cwd();
const lerna = require(path.join(cwd, 'lerna.json'));

const packagesInfo = lerna.packages
    .reduce((acc, pttrn) => acc.concat(fg.sync(pttrn, { onlyDirectories: true })), [])
    .reduce((packages, p) => {
        const packagePath = path.join(cwd, p, 'package.json');

        try {
            const packageJSON = require(required(packagePath));
            const {
                name,
                version,
                dependencies = {},
                devDependencies = {},
                peerDependencies = {},
                private = false,
                author,
            } = packageJSON;

            packages.set(name, {
                name,
                version,
                dependencies,
                devDependencies,
                peerDependencies,
                private,
                author,
                path: packagePath,
                dir: p,
            });
        } catch (err) {
            console.error(p, 'Error while reading package.json');
        }

        return packages;
    }, new Map());

const statusCheck = (success, msg = '') => {
    if (success) {
        return {
            statusCode: 0,
            success: true,
            msg,
        };
    }

    return {
        statusCode: 1,
        success: false,
        msg,
    };
};

// Linter get current packageInfo and all packages as second arg
// and must return statusCheck() or undefined

const lintName = (namespace) => (pkgInfo) => {
    if (pkgInfo.name.split('/')[0] !== namespace) {
        return statusCheck(false, `${pkgInfo.name} should be in scope: ${namespace}`);
    }
};

const lintAuthor = (author) => (pkgInfo) => {
    if (!pkgInfo.author) {
        return statusCheck(false, `${pkgInfo.name} should have "author" field in package.json`);
    }

    if (pkgInfo.author !== author) {
        return statusCheck(false, `"author" of package must be: "${author}"`);
    }
};

const lintPeerDeps = (pkgInfo) => {
    const { dependencies, peerDependencies, devDependencies } = pkgInfo;

    const msgs = [];
    for (const peerDep of Object.keys(peerDependencies)) {
        if (!devDependencies[peerDep]) {
            msgs.push(`Your should add "${peerDep}" to devDependencies section of package.json`);
        }

        if (dependencies[peerDep]) {
            msgs.push(`Your should move "${peerDep}" to devDependencies from dependencies section of package.json`);
        }
    }

    return msgs.length ? statusCheck(false, msgs) : statusCheck(true);
};

// Public packages could have deps only on also public packages
const lintPublicDeps = (pkgInfo, packagesInfo) => {
    const { dependencies, peerDependencies, devDependencies } = pkgInfo;

    if (pkgInfo.private) {
        return statusCheck(true);
    }

    const msgs = [];
    const _lintPublicDeps = (pkgName) => {
        const depPkgInfo = packagesInfo.get(pkgName);
        const { dir } = depPkgInfo;

        if (depPkgInfo.private) {
            msgs.push(`Public packages must depend on public packages: ${pkgName} (${dir}) is private`);
        }
    };

    [...Object.keys(dependencies), ...Object.keys(peerDependencies), ...Object.keys(devDependencies)]
        .filter((pkgName) => packagesInfo.has(pkgName))
        .forEach(_lintPublicDeps);

    return msgs.length ? statusCheck(false, msgs) : statusCheck(true);
};

const lintDepsVersions = (pkgInfo, packagesInfo) => {
    const { dependencies, peerDependencies, devDependencies } = pkgInfo;

    const msgs = [];
    const _lintDepsVersions = ([pkgName, range]) => {
        const depPkgInfo = packagesInfo.get(pkgName);

        const version = semver.parse(range);

        if (version === null) {
            msgs.push(`Versions of local packages in dependencies must be exact, ${pkgName}: ${range}`);
            return;
        }

        if (semver.neq(version, depPkgInfo.version)) {
            msgs.push(`Versions must be in sync ${pkgName}: expected ${depPkgInfo.version} but got ${version}`);
        }
    };

    [...Object.entries(dependencies), ...Object.entries(devDependencies)]
        .filter(([pkgName]) => packagesInfo.has(pkgName))
        .forEach(_lintDepsVersions);

    const _lintPeerDepsVersion = ([pkgName, range]) => {
        const depPkgInfo = packagesInfo.get(pkgName);
        const actual = depPkgInfo.version;

        if (!semver.satisfies(actual, range, { includePrerelease: true })) {
            msgs.push(`peerDeps should be in range: ${pkgName} local version ${actual} not in range: ${range}`);
            return;
        }

        const minVersion = semver.minVersion(range);
        const actualVersion = semver.parse(depPkgInfo.version);

        if (actualVersion.major !== minVersion.major) {
            msgs.push(`peerDeps of local packages must have same major version: expected ${actual} but got ${range}`);
        }
    };

    Object.entries(peerDependencies)
        .filter(([pkgName]) => packagesInfo.has(pkgName))
        .forEach(_lintPeerDepsVersion);

    return msgs.length ? statusCheck(false, msgs) : statusCheck(true);
};

const linters = [
    lintName('@salutejs'),
    lintAuthor('Salute Frontend Team <salute.developers@gmail.com>'),
    lintPeerDeps,
    lintPublicDeps,
    lintDepsVersions,
];

const results = new Map();
for (const [pkg, pkgInfo] of packagesInfo) {
    for (const linter of linters) {
        const stat = linter(pkgInfo, packagesInfo) || statusCheck(true);
        if (!stat.success) {
            results.set(pkg, (results.get(pkg) || []).concat(stat));
        }
    }
}

const reporter = (pkgInfo, stats) => {
    const pkg = pkgInfo.name;
    const { dir } = pkgInfo;

    // or we could add stats.formatter
    const formatMsg = (msg) => {
        if (Array.isArray(msg)) {
            return `* ${msg.join('\n* ')}`;
        }

        return `* ${msg}`;
    };

    console.log();
    console.log(`Found errors in ${chalk.red(pkg)} (${chalk.magenta(dir)})`);
    stats.forEach((stat) => console.log(formatMsg(stat.msg)));
    console.log();
};

if (results.size) {
    for (const [pkg, stats] of results) {
        const pkgInfo = packagesInfo.get(pkg);
        reporter(pkgInfo, stats);
    }

    process.exit(1);
}
