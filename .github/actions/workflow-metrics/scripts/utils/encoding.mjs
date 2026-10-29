import { createHash } from 'node:crypto';

export const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

export const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value)}\n`);
