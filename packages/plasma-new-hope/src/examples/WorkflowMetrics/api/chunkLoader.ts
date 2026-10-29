import type { Workflow } from '../model/types.ts';
import type { ArchiveManifest, ChunkReference } from '../archive/types.ts';

interface PendingChunk {
    promise: Promise<{ value: unknown; bytes: number }>;
    controller: AbortController;
    users: number;
    settled: boolean;
}

/** Bounded cache and shared requests for immutable payloads; manifest requests bypass it. */
export function createChunkLoader(
    root: (workflow: Workflow) => string,
    {
        fetcher,
        maxCachedBytes,
        maxCachedEntries,
    }: { fetcher: typeof fetch; maxCachedBytes: number; maxCachedEntries: number },
) {
    const cache = new Map<string, { value: unknown; bytes: number }>();

    const pending = new Map<string, PendingChunk>();

    let cachedBytes = 0;

    const remember = (url: string, entry: { value: unknown; bytes: number }) => {
        if (!maxCachedEntries || entry.bytes > maxCachedBytes) return;
        const previous = cache.get(url);
        if (previous) cachedBytes -= previous.bytes;
        cache.delete(url);
        cache.set(url, entry);
        cachedBytes += entry.bytes;
        while (cache.size > maxCachedEntries || cachedBytes > maxCachedBytes) {
            const oldest = cache.keys().next().value!;
            cachedBytes -= cache.get(oldest)!.bytes;
            cache.delete(oldest);
        }
    };

    const consume = (url: string, task: PendingChunk, signal?: AbortSignal) =>
        new Promise<{ value: unknown; bytes: number }>((resolve, reject) => {
            task.users += 1;
            let finished = false;
            const release = () => {
                finished = true;
                signal?.removeEventListener('abort', abort);
                task.users -= 1;
                if (!task.users && !task.settled) {
                    task.controller.abort();
                    if (pending.get(url) === task) pending.delete(url);
                }
            };
            const abort = () => {
                if (finished) return;
                release();
                reject(signal?.reason || new DOMException('Загрузка отменена.', 'AbortError'));
            };
            signal?.addEventListener('abort', abort, { once: true });
            if (signal?.aborted) abort();
            task.promise.then(
                (entry) => {
                    if (!finished) {
                        release();
                        resolve(entry);
                    }
                },
                (error) => {
                    if (!finished) {
                        release();
                        reject(error);
                    }
                },
            );
        });

    const chunk = async <T>(
        manifest: ArchiveManifest,
        ref: ChunkReference,
        parse: (value: unknown, manifest: ArchiveManifest, ref: ChunkReference) => T,
        signal?: AbortSignal,
    ): Promise<T> => {
        signal?.throwIfAborted();
        const url = `${root(manifest.workflow)}/${ref.path}`;
        let entry = cache.get(url);
        if (entry) {
            cache.delete(url);
            cache.set(url, entry);
        } else {
            let task = pending.get(url);
            if (!task) {
                const controller = new AbortController();
                const created: PendingChunk = {
                    controller,
                    users: 0,
                    settled: false,
                    promise: Promise.resolve({ value: null, bytes: 0 }),
                };
                created.promise = (async () => {
                    const response = await fetcher(url, { signal: controller.signal });
                    if (!response.ok) throw new Error(`Не удалось загрузить данные (${response.status}).`);
                    const bytes = await response.arrayBuffer();
                    controller.signal.throwIfAborted();
                    if (bytes.byteLength !== ref.bytes) throw new Error('Размер файла не совпадает с индексом архива.');
                    // HTTPS and localhost support Web Crypto. Structural validation also works in HTTP previews.
                    if (globalThis.crypto?.subtle) {
                        const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
                        const hash = [...new Uint8Array(digest)]
                            .map((value) => value.toString(16).padStart(2, '0'))
                            .join('');
                        if (hash !== ref.sha256) {
                            throw new Error('Контрольная сумма файла не совпадает с индексом архива.');
                        }
                    }
                    const value: unknown = JSON.parse(new TextDecoder().decode(bytes));
                    parse(value, manifest, ref);
                    controller.signal.throwIfAborted();
                    const result = { value, bytes: bytes.byteLength };
                    remember(url, result);
                    return result;
                })().finally(() => {
                    created.settled = true;
                    if (pending.get(url) === created) pending.delete(url);
                });
                pending.set(url, created);
                task = created;
            }
            entry = await consume(url, task, signal);
        }
        signal?.throwIfAborted();
        if (entry.bytes !== ref.bytes) throw new Error('Размер файла не совпадает с индексом архива.');
        return parse(entry.value, manifest, ref);
    };
    return chunk;
}
