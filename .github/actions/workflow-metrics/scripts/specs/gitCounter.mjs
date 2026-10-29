import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);

export async function createSpecFileCounter({ cwd, ref = 'origin/dev' }) {
    const git = async (...args) => (await exec('git', args, { cwd, maxBuffer: 64 * 1024 * 1024 })).stdout;
    // Freeze the ref so a concurrent fetch cannot mix different histories within one import.
    const head = (await git('rev-parse', '--verify', '--end-of-options', `${ref}^{commit}`)).trim();
    const shallow = (await git('rev-parse', '--is-shallow-repository')).trim() === 'true';
    const history = (await git('log', '--format=%ct%x09%H', head))
        .trim()
        .split('\n')
        .filter(Boolean)
        .map((line) => {
            const [seconds, commit] = line.split('\t');
            return { time: Number(seconds) * 1000, commit };
        })
        .sort((a, b) => b.time - a.time);
    const counts = new Map();
    return async (run, measurement) => {
        if (measurement.packageName !== 'plasma-b2c') {
            return undefined;
        }
        const exact =
            run.headSha || (measurement.specFiles?.basis === 'run-head' ? measurement.specFiles.commit : undefined);
        if (
            !exact &&
            (shallow || measurement.workflow !== 'cypress-by-cron-every-day.yml' || measurement.branch !== 'dev')
        ) {
            return undefined;
        }
        // Commit dates reconstruct an approximate revision; they are not the run's actual head SHA.
        const commit = exact || history.find((value) => value.time <= Date.parse(run.createdAt))?.commit;
        if (!commit) {
            return undefined;
        }
        if (!/^[a-f0-9]{40}$/.test(commit)) {
            throw new Error('Неверный SHA коммита для подсчёта spec-файлов.');
        }
        if (!counts.has(commit)) {
            let output;
            try {
                output = await git(
                    'ls-tree',
                    '-r',
                    '-z',
                    '--name-only',
                    commit,
                    '--',
                    'packages/plasma-b2c',
                    'packages/plasma-new-hope',
                );
            } catch (error) {
                if (
                    error.code === 128 &&
                    /not a tree object|not a valid object name|bad object/i.test(error.stderr || '')
                ) {
                    counts.set(commit, null);
                    return undefined;
                }
                throw error;
            }
            const paths = output.split('\0');
            counts.set(commit, paths.filter((path) => /\.component-test\.(ts|tsx)$/.test(path)).length);
        }
        if (counts.get(commit) === null) {
            return undefined;
        }
        return {
            count: counts.get(commit),
            commit,
            basis: exact ? 'run-head' : 'history',
            ...(!exact ? { ref } : {}),
        };
    };
}
