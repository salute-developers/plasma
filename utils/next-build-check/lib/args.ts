import { Args } from './types';

export function parseArgs(argv: string[]): Args {
    const args: Args = { ci: false };

    for (const raw of argv) {
        if (raw === '--ci') {
            args.ci = true;
        } else if (raw.startsWith('--package=')) {
            args.package = raw.slice('--package='.length);
        } else if (raw.startsWith('--build=')) {
            args.build = raw.slice('--build='.length);
        }
    }

    return args;
}
