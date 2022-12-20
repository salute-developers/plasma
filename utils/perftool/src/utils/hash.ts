const HASH_BASE = 1553;
const MAX_HASH = Math.trunc(2 ** 32 - 1);

export default function getHashCode(data: string): string {
    let currentBase = 1;
    let hashCode = 0;

    for (let index = 0; index < data.length; ++index) {
        hashCode = Math.trunc(hashCode + ((data.charCodeAt(index) * currentBase) % MAX_HASH));
        currentBase = Math.trunc((currentBase * HASH_BASE) % MAX_HASH);
    }

    return hashCode.toString(16);
}
