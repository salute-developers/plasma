export async function parallelMap<T, R>(items: T[], concurrency: number, work: (item: T) => Promise<R>): Promise<R[]> {
    const results = new Array<R>(items.length);
    let next = 0;
    let failed = false;
    await Promise.all(
        Array.from({ length: Math.min(items.length, concurrency) }, async () => {
            while (!failed && next < items.length) {
                const index = next++;
                try {
                    // Workers run sequentially; the pool bounds the total number of requests.
                    // eslint-disable-next-line no-await-in-loop
                    results[index] = await work(items[index]);
                } catch (error) {
                    failed = true;
                    throw error;
                }
            }
        }),
    );
    return results;
}
