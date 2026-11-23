import type { PreviewWarning } from '../protocol';

/** Ключ в пути JSON: идентификатор через точку, остальное — в скобках. */
export const pathKey = (key: string) => (/^[A-Za-z_$][\w$]*$/.test(key) ? `.${key}` : `[${JSON.stringify(key)}]`);

/** Предупреждения разрешения без повторов: одинаковые код и сообщение пишутся один раз (первый путь). */
export class WarningSink {
    readonly list: PreviewWarning[] = [];

    private readonly seen = new Set<string>();

    add(code: string, message: string, path?: string) {
        const key = `${code}\u0000${message}`;
        if (this.seen.has(key)) return;
        this.seen.add(key);
        this.list.push({ code, message, ...(path ? { path } : {}) });
    }
}
