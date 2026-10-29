import { CollectionPaused } from '../github/errors.mjs';

/** CLI-only error reporting; service modules throw and never print credentials. */
export async function runCli(command, { formatError = (error) => error.message } = {}) {
    try {
        await command();
    } catch (error) {
        console.error(formatError(error));
        process.exitCode = error instanceof CollectionPaused ? 2 : 1;
    }
}
