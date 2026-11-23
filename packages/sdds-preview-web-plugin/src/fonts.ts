import type { ResolvedFontLoad } from './protocol';

/** Предел ожидания шрифтов на запрос: плагин успевает ответить сам до таймаута хоста (10 с). */
export const FONT_WAIT_MS = 5_000;

const fontShorthand = ({ family, weight, style }: ResolvedFontLoad) => `${style} ${weight} 16px ${family}`;

/**
 * Запрашивает загрузку начертаний и возвращает те, что не загрузились за `timeoutMs`. Загрузка запускается явно:
 * `document.fonts.ready` не ждёт шрифтов, ещё не применённых к тексту, и не называет упавшие.
 */
export const waitForFonts = async (
    loads: ResolvedFontLoad[],
    fonts: FontFaceSet | undefined = document.fonts,
    timeoutMs = FONT_WAIT_MS,
): Promise<ResolvedFontLoad[]> => {
    if (!fonts || !loads.length) return [];
    const unavailable = new Set(loads);
    const loaded = Promise.all(
        loads.map(async (load) => {
            try {
                const faces = await fonts.load(fontShorthand(load));
                // Браузеры по-разному завершают загрузку с ошибкой: проверяется статус начертаний, а не только отказ.
                if (faces.length && faces.every((face) => face.status === 'loaded')) unavailable.delete(load);
            } catch {
                // Начертание остаётся недоступным.
            }
        }),
    );
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<void>((resolve) => {
        timer = setTimeout(resolve, timeoutMs);
    });
    await Promise.race([loaded, timeout]);
    clearTimeout(timer);
    return [...unavailable];
};
