import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

import { PACKAGES } from '../../../scripts/lib/final-packages';

import { ROOT, resolvePackageDir, normalizeExportKey } from './target';
import { Args, PackageJson, ResolvedTarget } from './types';

const inquirerAny = inquirer as any;
const prompt: (questions: unknown[]) => Promise<any> =
    inquirerAny.prompt || inquirerAny.default?.prompt || inquirerAny.createPromptModule?.();

export async function resolveTarget(args: Args): Promise<ResolvedTarget> {
    let pkgInput = args.package;

    if (!pkgInput) {
        if (args.ci) {
            throw new Error('--package is required in --ci mode');
        }

        ({ pkgInput } = await prompt([
            {
                type: 'list',
                name: 'pkgInput',
                message: 'Выберите пакет:',
                choices: PACKAGES,
            },
        ]));
    }

    const pkgDir = resolvePackageDir(pkgInput as string);

    if (!pkgDir) {
        throw new Error(`Неизвестный пакет: ${pkgInput}`);
    }

    const pkgPath = path.join(ROOT, 'packages', pkgDir);
    const pkgJson: PackageJson = JSON.parse(fs.readFileSync(path.join(pkgPath, 'package.json'), 'utf8'));
    const exportKeys = Object.keys(pkgJson.exports || {});

    if (exportKeys.length === 0) {
        throw new Error(`У пакета ${pkgDir} нет поля "exports" в package.json`);
    }

    let buildInput = args.build;

    if (!buildInput) {
        if (args.ci) {
            throw new Error('--build is required in --ci mode');
        }

        ({ buildInput } = await prompt([
            {
                type: 'list',
                name: 'buildInput',
                message: 'Выберите build (exports):',
                choices: exportKeys,
            },
        ]));
    }

    const exportKey = normalizeExportKey(buildInput);

    if (!exportKeys.includes(exportKey)) {
        throw new Error(
            `Неизвестный build "${buildInput}" для пакета ${pkgDir}. Доступные варианты: ${exportKeys.join(', ')}`,
        );
    }

    return { pkgDir, pkgPath, pkgJson, exportKey };
}
