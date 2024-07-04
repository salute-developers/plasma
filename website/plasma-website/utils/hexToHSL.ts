export const hexToHSL = (hex: string): number[] => {
    // Разбиваем HEX-значение на составляющие RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result?.[1] ?? '0', 16);
    let g = parseInt(result?.[2] ?? '0', 16);
    let b = parseInt(result?.[3] ?? '0', 16);

    // Нормализуем значения RGB к диапазону [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;

    // Находим максимальное и минимальное значение из RGB
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h;
    let s;
    let l = (max + min) / 2;

    // Вычисляем насыщенность (Saturation)
    if (max === min) {
        s = 0;
        h = s;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        // Вычисляем оттенок (Hue)
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            // no default
        }

        h = (h ?? 0) / 6;
    }

    // Преобразуем значения Saturation и Lightness в проценты
    s *= 100;
    s = Math.round(s);
    l *= 100;
    l = Math.round(l);

    // Преобразуем значение Hue в градусы
    h = Math.round(360 * h);

    return [h, s, l]; // Возвращаем массив с значениями HSL
};
