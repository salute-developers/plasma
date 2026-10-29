import { randomUUID } from 'node:crypto';
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';

const exec = promisify(execFile);

/** Credentials stay in a private temporary config, never in command arguments or output. */
export async function createS3Transport(env = process.env) {
    const fields = {
        access_key: 'AWS_ACCESS_KEY_ID',
        secret_key: 'AWS_SECRET_ACCESS_KEY',
        host_base: 'AWS_ENDPOINT',
        host_bucket: 'AWS_ENDPOINT',
        bucket_location: 'AWS_REGION',
    };
    const config = Object.entries(fields).map(([key, variable]) => {
        const value = env[variable]?.trim();
        if (!value || /[\r\n]/.test(value)) {
            throw new Error(`Проверьте ${variable}.`);
        }
        return `${key} = ${value}`;
    });
    const bucket = env.AWS_S3_BUCKET_2?.trim();
    if (!bucket || !/^[a-zA-Z0-9._-]+$/.test(bucket)) {
        throw new Error('Проверьте AWS_S3_BUCKET_2.');
    }
    const prefix = env.WORKFLOW_METRICS_S3_PREFIX || 'workflow-metrics';
    if (!/^[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(prefix)) {
        throw new Error('Проверьте WORKFLOW_METRICS_S3_PREFIX.');
    }
    const temporary = await mkdtemp(join(tmpdir(), 'plasma-metrics-s3-'));
    const configPath = join(temporary, 's3cfg');
    await writeFile(configPath, ['[default]', ...config, 'use_https = True', 'signature_v2 = True', ''].join('\n'), {
        mode: 0o600,
    });
    const base = `s3://${bucket}/${prefix}/`;
    async function run(args, key, allowMissing = false) {
        try {
            return await exec('s3cmd', ['--config', configPath, '--no-mime-magic', '--no-progress', ...args], {
                timeout: 300000,
                maxBuffer: 1024 * 1024,
                env: { ...process.env, ...env },
            });
        } catch (error) {
            // A missing key is a bootstrap case. AccessDenied, NoSuchBucket and network errors must stop restore.
            if (
                allowMissing &&
                /404\s*\(NoSuchKey\)|ERROR: Parameter problem: Source object '[^\r\n]+' does not exist\./.test(
                    error.stderr || '',
                )
            ) {
                return false;
            }
            if (allowMissing && /S3 error: 404 \(Not Found\)/.test(error.stderr || '')) {
                // HEAD responses may omit the XML error code. A successful empty listing proves the
                // bucket is accessible and this key is absent; a missing/forbidden bucket still fails.
                const listing = await run(['ls', base + key], key);
                if (!listing.stdout.trim()) {
                    return false;
                }
            }
            const status = /S3 error: (\d+ \([^()\r\n]+\))/.exec(error.stderr || '')?.[1];
            throw new Error(`S3: не удалось выполнить операцию с ${key}${status ? `: ${status}` : ''}.`);
        }
    }
    return {
        async get(key) {
            const path = join(temporary, randomUUID());
            try {
                if (!(await run(['get', base + key, path], key, true))) {
                    return undefined;
                }
                return await readFile(path);
            } finally {
                await rm(path, { force: true });
            }
        },
        async put(key, bytes, headers) {
            const path = join(temporary, randomUUID());
            try {
                await writeFile(path, bytes);
                await run(
                    [
                        '--mime-type=application/json',
                        ...Object.entries(headers).map(([name, value]) => `--add-header=${name}:${value}`),
                        'put',
                        path,
                        base + key,
                    ],
                    key,
                );
            } finally {
                await rm(path, { force: true });
            }
        },
        close: () => rm(temporary, { recursive: true, force: true }),
    };
}
