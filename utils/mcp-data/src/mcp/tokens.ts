import fs from 'node:fs';
import { createRequire } from 'node:module';

import type { Site } from '../site.ts';

const TOKEN_DECLARATION_REGEX = /^export declare const \w+/m;

/**
 * Читает объявления токенов темы: `.d.ts` модуля `entry`.
 * Модуль разрешается от `package.json` вертикали, поэтому берётся та версия темы, с которой она публикуется.
 */
export function readTokensSource(site: Site, entry: string): string {
    const requireFromVertical = createRequire(site.packageJsonPath);
    let modulePath: string;

    try {
        modulePath = requireFromVertical.resolve(entry);
    } catch {
        throw new Error(
            `Не найден модуль токенов "${entry}" (tokens.entry в ${site.configPath}).\n` +
                `Он разрешается от ${site.packageJsonPath}: проверьте, что зависимости установлены и пакеты тем собраны.`,
        );
    }

    const declarationPath = modulePath.replace(/\.js$/, '.d.ts');

    if (declarationPath === modulePath || !fs.existsSync(declarationPath)) {
        throw new Error(`У модуля токенов "${entry}" нет файла объявлений рядом с ${modulePath}`);
    }

    const source = fs.readFileSync(declarationPath, 'utf8');

    if (!TOKEN_DECLARATION_REGEX.test(source)) {
        throw new Error(`В ${declarationPath} нет объявлений токенов (export declare const)`);
    }

    return source;
}
