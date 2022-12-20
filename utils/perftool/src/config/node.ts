import path from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import ncc from '@vercel/ncc';
import process from 'process';
import fs from 'fs';
import os from 'os';
import fsPromises from 'fs/promises';

import checkPath from '../utils/checkPath';
import { debug, error, info } from '../utils/logger';

import { ProjectConfig } from './common';

const defaultJsConfigPath = path.resolve('./perftool.config.js');
const defaultTsConfigPath = path.resolve('./perftool.config.ts');

const pathsToClean: string[] = [];

type ImportedConfig = {
    path: string;
    value: ProjectConfig;
};

export async function importConfig(cliConfigPath?: string): Promise<ImportedConfig | null> {
    debug('importing project config');
    let configPath = cliConfigPath ? path.resolve(cliConfigPath) : undefined;
    debug('cli config path is ', configPath);

    if (configPath && !(await checkPath(configPath))) {
        error('provided config path is inaccessible');
        throw new Error();
    }

    if (!configPath && (await checkPath(defaultJsConfigPath))) {
        debug('no provided config path, using default ', defaultJsConfigPath);
        configPath = defaultJsConfigPath;
    }

    if (!configPath && (await checkPath(defaultTsConfigPath))) {
        debug('no provided config path, using default ', defaultTsConfigPath);
        configPath = defaultTsConfigPath;
    }

    if (!configPath) {
        debug('no project config found, using default config');
        return null;
    }

    info('Using project config', configPath);
    debug('bundling config...');
    // Build config with its dependencies
    const { code }: { code: string } = await ncc(configPath, {
        cache: false,
        transpileOnly: true,
        target: 'es2021',
        esm: true,
        quiet: true,
    });

    if (!code) {
        error('bundling config failed');
        return null;
    }

    const buildConfigPath = path.resolve(os.tmpdir(), 'compiled_config.mjs');
    debug('bundling config succeed, writing contents to temporary module', buildConfigPath);

    pathsToClean.push(buildConfigPath);
    await fsPromises.writeFile(buildConfigPath, code, { encoding: 'utf-8' });

    debug('module is written, importing...');

    const { default: value } = await import(buildConfigPath);

    debug('import succeeded, project config:', value);

    return {
        value,
        path: configPath,
    };
}

process.on('exit', () => {
    for (const p of pathsToClean) {
        debug('cleaning up', p);
        fs.rmSync(p, { recursive: true, force: true });
    }
});
