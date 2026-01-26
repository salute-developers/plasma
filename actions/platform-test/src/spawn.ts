import { spawn } from 'child_process';

import { log } from './helpers';

export function spawnCyCommand(command: 'run' | 'open', args: ReadonlyArray<string>) {
    log('spawn command', command);
    log('spawn args', args);

    return new Promise((resolve, reject) => {
        const proc = spawn('cypress', [command, '--component', '--browser', 'chromium', ...args], {
            env: process.env,
            stdio: 'inherit',
            detached: false,
        });

        proc.on('exit', (code, signal) => {
            if (code === 0) {
                resolve(0);
            }

            reject(signal);
        });

        proc.on('error', (error) => {
            // eslint-disable-next-line no-console
            console.error(error);
            reject(error);
        });
    });
}
