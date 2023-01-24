async function getNextPromise<T, TR>(generator: AsyncGenerator<T, TR>, index: number) {
    return { index, result: await generator.next() };
}

const neverResolvedPromise = new Promise<any>(() => {});

export default async function* combineGenerators<T, TR>(generators: AsyncGenerator<T, TR>[]): AsyncGenerator<T, TR> {
    let finished = 0;

    const nextPromises = generators.map(getNextPromise);

    while (finished < generators.length) {
        const { index, result } = await Promise.race(nextPromises);

        if (result.done) {
            nextPromises[index] = neverResolvedPromise;
            ++finished;

            continue;
        }

        nextPromises[index] = getNextPromise(generators[index], index);
        yield result.value;
    }

    return (undefined as unknown) as TR;
}
