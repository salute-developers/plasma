/* eslint-disable no-console */

import { spawnSync, SpawnSyncOptions, SpawnSyncReturns } from 'child_process';

export function run(command: string, cmdArgs: string[], options?: SpawnSyncOptions): SpawnSyncReturns<Buffer | string> {
    console.log(`\n$ ${command} ${cmdArgs.join(' ')}`);

    const result = spawnSync(command, cmdArgs, { stdio: 'inherit', ...options });

    if (result.status !== 0) {
        throw new Error(`Команда завершилась с ошибкой: ${command} ${cmdArgs.join(' ')}`);
    }

    return result;
}
