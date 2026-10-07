/* ---------- лента команд: карточки расплетаются на нити у краёв ----------
   По мотивам Unwoven (Clément Grellier, Codrops), но без Three.js: сцена здесь
   плоская и ортографическая, от библиотеки требовались бы проценты возможностей
   при 150 КБ веса. Голый WebGL укладывается в этот файл.

   Эффект собран из двух частей.

   Ткань. Карточка — не плашка, а набор горизонтальных лент. У каждой ленты свои
   вершины, поэтому соседей она за собой не тянет. Чем ближе лента к краю экрана,
   тем сильнее «разрыв»: полосы разбегаются наружу с разной скоростью, расходятся
   по вертикали и истончаются, пока не растворятся.

   Стекло. Готовая лента рисуется не на экран, а в текстуру, и выводится вторым
   проходом через линзу: у левого и правого края изображение уводится вглубь —
   тем сильнее, чем дальше точка от середины по высоте, отчего карточки выгибаются
   дугой, — и по кромке расходятся цветовые каналы.

   Карточки едут бесконечной лентой; ленту можно тянуть мышью, после броска она
   возвращается к обычной скорости. */

/* Карточка темы по макету DS-BUILDER / PLAYGROUND (node 6312:436).
   Скругление здесь своё и постоянное: значение темы живёт только внутри
   карточки, в ячейке «Скругления», и на её силуэт не влияет. */
const CARD = { width: 331, height: 427, radius: 20 };

/* Слой свечения «Vector 49» из макета и ступени шкалы темы. */
const GLOW_PATH =
    'M198.222 332.338L126.888 466.4L121.9 488.338L140.856 796.275L272.549 547.65L280.031 642.712' +
    'L343.384 556.588L378.801 642.712L405.738 556.588L518.476 823.9L550.9 450.962L499.52 403.838' +
    'L405.738 332.338L373.314 121.9L311.957 332.338L249.103 191.775L198.222 332.338Z';
const GLOW = { width: 429, height: 372.94, top: 153 };
const SCALE_LIGHTNESS = [0.9, 0.7, 0.5, 0.4, 0.3, 0.2];

/* Образец «Цвета» — вектор из макета (node 6312:643): три круга одного тона
   разной светлоты. from/to задают направление белого блика по краю. */
const CIRCLE_RADIUS = 14.5;

/* Образец «Платформа» — кружки 48x48 внахлёст с иконкой устройства 32x32
   внутри (node 6312:824). Пути взяты из макета в системе координат 32x32:
   body — силуэт устройства (заливка 30% плюс обводка), line — дополнительная
   линия (полоса окна у десктопа, подставка у телевизора), dots — индикаторы. */
const PLATFORM_ICONS: Record<string, { body: string; dots: number[][]; line?: string; round?: boolean }> = {
    Web: {
        body:
            'M25.3333 4.66667H6.66667C4.82572 4.66667 3.33333 6.15905 3.33333 8V24C3.33333 25.8409 4.82572 27.3333' +
            ' 6.66667 27.3333H25.3333C27.1743 27.3333 28.6667 25.8409 28.6667 24V8C28.6667 6.15905 27.1743 4.66667 25.3333 4.66667Z',
        line: 'M3.33333 10.6667H28.6667',
        dots: [
            [8, 7.66667],
            [11.66667, 7.66667],
            [15.33333, 7.66667],
        ],
    },
    Mobile: {
        body:
            'M19.3333 3.33333H12.6667C10.8257 3.33333 9.33333 4.82572 9.33333 6.66667V25.3333C9.33333 27.1743' +
            ' 10.8257 28.6667 12.6667 28.6667H19.3333C21.1743 28.6667 22.6667 27.1743 22.6667 25.3333V6.66667C22.6667' +
            ' 4.82572 21.1743 3.33333 19.3333 3.33333Z',
        dots: [[16, 24.66667]],
    },
    TV: {
        body:
            'M26 6.66667H6C4.15905 6.66667 2.66667 8.15905 2.66667 10V20C2.66667 21.8409 4.15905 23.3333 6' +
            ' 23.3333H26C27.8409 23.3333 29.3333 21.8409 29.3333 20V10C29.3333 8.15905 27.8409 6.66667 26 6.66667Z',
        line: 'M11.3333 28L16 23.3333L20.6667 28',
        round: true,
        dots: [],
    },
};
const BRAND_CIRCLES: Array<{
    x: number;
    y: number;
    lightness: number;
    alpha: number;
    stroke: number;
    width: number;
    from: number[];
    to: number[];
    blur?: number;
}> = [
    { x: 14.5, y: 34.5, lightness: 0.32, alpha: 0.28, stroke: 0.15, width: 0.5, from: [0, 20], to: [29, 49] },
    { x: 26.5, y: 14.5, lightness: 0.46, alpha: 1, stroke: 0.24, width: 1, from: [12, 0], to: [41, 29] },
    { x: 38.5, y: 34.5, lightness: 0.73, alpha: 0.62, stroke: 0.24, width: 0.5, from: [24, 20], to: [53, 49], blur: 4 },
];

const CONFIG = {
    threads: 58, // лент в карточке — чем больше, тем тоньше нити
    segments: 16, // делений ленты по длине — на них живёт колыхание
    cardHeight: 430, // px, ограничивается высотой холста
    cardAspect: CARD.width / CARD.height, // ширина / высота — из макета
    gapRatio: 0.07, // зазор как доля ширины карточки
    cardMaxWidthRatio: 0.3, // карточка не шире этой доли видимой ширины
    speed: 62, // px/с в покое
    flingMax: 2600, // предел скорости после броска
    minField: 240, // px — минимальное поле распада, если снаружи места нет
    tearRatio: 0.3, // и не шире этой доли окна с каждой стороны
    scrollGain: 0.32, // какая доля скорости прокрутки переходит в ленту
    scrollBoostMax: 520, // px/с — предел прибавки от прокрутки
    scrollSmooth: 0.16, // с, сглаживание замера прокрутки
    scrollAttack: 0.42, // с, набор прибавки: отсюда запаздывание
    scrollDecay: 1.1, // с, затухание после остановки прокрутки
    heightRatio: 0.54, // доля высоты окна под холст
    heightMax: 500, // px, предел высоты холста
    verticalPad: 70, // px, суммарный запас над и под карточкой — в нём живёт разлёт нитей
    dpr: 2, // предел плотности пикселей холста
};

/* На телефонах та же лента обходится дороже: экран плотный, а видеоядро слабее.
   Поэтому там режем число нитей и плотность холста, а карточки делаем крупнее —
   на узком экране мелкие всё равно не прочитать. Всё остальное работает так же,
   включая перетаскивание: pointer-события приходят и от пальца. */
const TOUCH_CONFIG = {
    threads: 26,
    segments: 12,
    dpr: 1.5,
    cardMaxWidthRatio: 0.62,
    minField: 70,
    tearRatio: 0.09, // на узком экране широкие поля съедают сами карточки
    heightRatio: 0.44, // экран узкий и высокий: та же доля дала бы пустые поля
    heightMax: 420,
    verticalPad: 36,
};

const VERTEX_SHADER = `
precision highp float;

attribute vec2 aPosition;   // px относительно центра карточки
attribute vec2 aUv;
attribute float aRim;       // -1 у нижнего края ленты, +1 у верхнего
attribute float aThread;    // номер ленты — источник её случайности

uniform vec2  uViewport;    // px
uniform float uCardX;       // центр карточки по X, px от центра холста
uniform float uHalfWidth;   // половина ширины контейнера, px — там рвётся ткань
uniform float uHalfCanvas;  // половина ширины холста, px — по ней нормализуем
uniform float uZone;        // глубина зоны разрыва у каждого края, px
uniform float uTime;
uniform float uStrength;    // общий выключатель 0..1, разгоняется на старте
uniform float uWobble;      // 0, если система просит меньше движения
uniform float uSeed;        // своё число на карточку

varying vec2  vUv;
varying float vTear;
varying float vRim;
varying float vRandom;
varying float vEdge;        // 0 в центре холста, 1 на его боковой кромке
varying float vEdgeY;       // то же по вертикали
varying float vSide;        // -1 слева от центра, +1 справа

float hash(float n) {
    return fract(sin(n * 127.1 + 311.7) * 43758.5453);
}

void main() {
    vUv = aUv;
    vRim = aRim;

    float x = aPosition.x + uCardX;
    float y = aPosition.y;

    // Внутри контейнера ткань цела: разрыв начинается ровно на его границе и
    // нарастает наружу, в поле за колонкой. Оба smoothstep пишем краем
    // «меньше — больше»: при edge0 >= edge1 результат в GLSL не определён.
    float left  = 1.0 - smoothstep(-uHalfWidth - uZone, -uHalfWidth, x);
    float right = smoothstep(uHalfWidth, uHalfWidth + uZone, x);
    float tear  = max(left, right) * uStrength;

    // Зоны не сходятся в центре, поэтому знак x — это направление побега.
    float direction = x < 0.0 ? -1.0 : 1.0;

    float randomA = hash(aThread + uSeed * 57.0);
    float randomB = hash(aThread * 3.7 + uSeed * 91.0);
    vRandom = randomA;

    // Кривую смещаем: карточка дольше остаётся читаемой, а потом расходится разом.
    float t = pow(tear, 1.4);

    // Каждая лента убегает со своей скоростью — из-за этого край читается
    // гребёнкой нитей, а не одним сползающим листом.
    float run = t * uZone * (1.15 + randomA * 1.6);
    run *= 0.85 + 0.15 * sin(uTime * (1.0 + randomB * 2.0) + randomA * 6.2831);
    // Вторая волна, втрое медленнее первой: их периоды не совпадают, поэтому
    // одинаковый рисунок распада не повторяется.
    run *= 0.82 + 0.18 * sin(uTime * (0.21 + randomB * 0.37) + randomB * 6.2831);
    x += direction * run;

    // Ткань слабеет и по вертикали: ленты выходят из своих рядов и расходятся
    // веером — чем дальше от контейнера, тем шире разлёт.
    y += (randomA - 0.5) * 300.0 * t * t;
    // Второй, более медленный разброс с другой случайностью: разлёт перестаёт
    // быть симметричным и нити не ложатся ровными парами.
    y += (randomB - 0.5) * 180.0 * t;

    // Веер от середины карточки: нити из верхней половины уходят вверх, из
    // нижней — вниз, поэтому ткань распыляется, а не сползает пучком.
    y += (aUv.y - 0.5) * 250.0 * t * t;

    // Хвост нити сносит сильнее, чем её начало: лента разворачивается по ходу
    // движения и превращается в росчерк, а не в прямую полосу.
    y += (randomA - 0.5) * 240.0 * t * (aUv.x - 0.5) * 2.0;

    // Колыхание свободной нити, взятое вдоль её смещённой длины.
    y += sin(x * 0.02 + uTime * (1.6 + randomA * 2.2) + randomA * 6.2831)
         * (14.0 + 42.0 * randomA) * t * uWobble;

    vTear = tear;
    vEdge = abs(x) / uHalfCanvas;
    vEdgeY = abs(y) / (uViewport.y * 0.5);
    vSide = direction;
    gl_Position = vec4(x / uHalfCanvas, y / (uViewport.y * 0.5), 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform sampler2D uMap;
uniform float uTime;
uniform vec2  uCardSize;    // px
uniform float uRadius;      // px
uniform vec3  uPageColor;   // фон страницы — в него растворяются нити

varying vec2  vUv;
varying float vTear;
varying float vRim;
varying float vRandom;
varying float vEdge;
varying float vEdgeY;
varying float vSide;

float sdRoundBox(vec2 p, vec2 halfSize, float r) {
    vec2 q = abs(p) - halfSize + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
    float tear = vTear;
    float rim  = abs(vRim);   // 0 в середине ленты, 1 на её краю

    // Геометрия ленты по высоте не меняется — сужается видимая полоса внутри
    // неё. В фрагментной стадии края остаются сглаженными, а пока ткань цела,
    // полосы шире нужного и стыков между ними не видно.
    /* Толщина нити зависит от того, с какой стороны она живёт. Лента едет влево,
       значит справа карточка собирается, слева — распадается.

       Справа нить выходит почти невидимым волоском и быстро набирает толщину —
       показатель меньше единицы делает кривую крутой у края. Слева наоборот:
       нить сначала держит толщину (показатель больше единицы задерживает спад),
       на старте разрыва даже чуть набухает, и только потом истончается. */
    float assembling = step(0.0, vSide);                       // 1 справа, 0 слева
    float shape = pow(tear, mix(1.7, 0.55, assembling));
    float thinnest = mix(0.07, 0.022, assembling);             // слева толще, справа волосок

    float coreWidth = mix(0.8, thinnest + vRandom * 0.06, smoothstep(0.0, 0.9, shape));
    // лёгкое набухание в начале распада — только на стороне, где ткань рвётся
    float swell = smoothstep(0.0, 0.2, tear) * (1.0 - smoothstep(0.2, 0.55, tear));
    coreWidth *= 1.0 + 0.22 * swell * (1.0 - assembling);
    float threadAlpha = 1.0 - smoothstep(coreWidth - 0.10, coreWidth + 0.06, rim);
    // Растянутый заход: нить проступает из прозрачности, а не включается разом.
    threadAlpha = mix(1.0, threadAlpha, smoothstep(0.02, 0.60, tear));

    // Каждая нить дышит прозрачностью в своём ритме — то почти растворяется,
    // то проступает снова. Две волны с несовпадающими периодами, чтобы дыхание
    // не читалось ровным миганием. Пока карточка цела, оно выключено, иначе
    // мерцало бы всё полотно.
    float breathA = 0.5 + 0.5 * sin(uTime * (0.45 + vRandom * 0.9) + vRandom * 6.2831);
    float breathB = 0.5 + 0.5 * sin(uTime * (0.17 + vRandom * 0.31) + vRandom * 12.9898);
    float breath = breathA * 0.65 + breathB * 0.35;
    threadAlpha *= mix(1.0, 0.06 + 0.94 * breath, smoothstep(0.05, 0.5, tear));

    // Силуэт карточки считаем формулой, а не режем геометрией.
    vec2 p = (vUv - 0.5) * uCardSize;
    float sd = sdRoundBox(p, uCardSize * 0.5, uRadius);
    float cardAlpha = 1.0 - smoothstep(-1.5, 0.5, sd);

    // Каждая нить гаснет на своей глубине. Общий порог давал ровную линию, на
    // которой обрывались все нити разом — именно она читалась как срез.
    float tearCut = 0.72 + vRandom * 0.26;
    float fade  = 1.0 - smoothstep(tearCut, tearCut + 0.3, tear) * 0.4;

    // Растворение прижато к самой кромке: нити должны доживать до края экрана,
    // иначе по бокам остаётся пустая полоса. Точка исчезновения у каждой своя,
    // поэтому край ленты всё равно рассыпается неровно.
    // Растворение у кромок касается только оторвавшихся нитей: карточка занимает
    // почти всю высоту холста, и без этой привязки затухание срезало её низ.
    float torn = smoothstep(0.04, 0.3, tear);

    float edgeCut = 0.86 + vRandom * 0.12;
    fade *= mix(1.0, 1.0 - smoothstep(edgeCut, edgeCut + 0.07, vEdge), torn);

    // Тот же приём по вертикали: разлёт «спреем» уносит нити за верх и низ
    // холста, и без этого они обрывались там по прямой.
    float edgeCutY = 0.80 + vRandom * 0.14;
    fade *= mix(1.0, 1.0 - smoothstep(edgeCutY, edgeCutY + 0.1, vEdgeY), torn);
    float alpha = cardAlpha * threadAlpha * fade;
    if (alpha < 0.004) discard;

    vec3 color = texture2D(uMap, vUv).rgb;

    // Объём ленты: бока темнее, по сердцевине блик.
    color *= 1.0 - tear * 0.4 * rim * rim;
    color += tear * 0.16 * (1.0 - smoothstep(0.0, 0.45, rim));
    // У самого края нити уходят в цвет страницы, а не в белый: фон тёмный.
    color = mix(color, uPageColor, smoothstep(0.55, 1.0, tear) * 0.75);

    /* Рамка карточки живёт в шейдере, а не в текстуре: так она может проявляться
       по мере сборки. Пока ткань разорвана, рамки нет — обводить нечего; она
       набирает силу, когда карточка почти собралась. */
    float ring = smoothstep(-2.5, -1.0, sd) * (1.0 - smoothstep(-0.6, 0.4, sd));
    float borderIn = 1.0 - smoothstep(0.02, 0.22, tear);
    color = mix(color, vec3(1.0), ring * 0.13 * borderIn);

    gl_FragColor = vec4(color, alpha);
}
`;

/* Линза: второй проход поверх ленты. Сцена рисуется в текстуру, а на экран её
   выводит полноэкранный квад, который в середине холста ведёт себя как толстое
   стекло — тянет изображение к краю окоёма, разводит цвета по кромке и ведёт по
   ней живую волну. Под тёмную тему блики приглушены: вместо молочного свечения
   узкая холодная линия по ободку. */
const LENS_VERTEX_SHADER = `
attribute vec2 aCorner;
varying vec2 vUv;
void main() {
    vUv = aCorner * 0.5 + 0.5;
    gl_Position = vec4(aCorner, 0.0, 1.0);
}
`;

const LENS_FRAGMENT_SHADER = `
precision highp float;

uniform sampler2D uScene;
uniform vec2  uRes;        // размер холста, px
uniform float uLensHalf;   // половина ширины окоёма, px
uniform float uLensDepth;  // на какую глубину от кромки действует стекло, px
uniform float uLensPull;   // насколько оно уводит изображение вглубь, px
uniform float uTime;
uniform float uStrength;   // общий выключатель 0..1

varying vec2 vUv;

void main() {
    vec2 px = (vUv - 0.5) * uRes;

    /* Стекло цилиндрическое: кромка идёт по левому и правому краю холста, верх
       и низ не трогаются вовсе. Прямоугольный окоём здесь не годится — его
       вертикальная сторона подмешивалась даже в середине кадра, и стекло слабо
       мутило всю ленту вместо того, чтобы гнуть её по краям. */
    float fromEdge = uLensHalf - abs(px.x);
    // живая кромка: две волны разной частоты бегут по высоте
    fromEdge += (sin(px.y * 0.012 + uTime * 0.9) * 4.0 + sin(px.y * 0.027 - uTime * 0.6) * 2.0) * uStrength;

    float depth = clamp(fromEdge / uLensDepth, 0.0, 1.0);
    if (depth >= 1.0) {
        // середина кадра — чистое стекло, изображение проходит нетронутым
        gl_FragColor = texture2D(uScene, vUv);
        return;
    }

    float lip = pow(1.0 - depth, 2.0) * uStrength;
    // направление «внутрь кадра»: по оси X, поэтому в центре ничего не вырождается
    float side = px.x < 0.0 ? -1.0 : 1.0;

    /* Преломление. Подтяжка внутрь тем сильнее, чем дальше точка от средней
       линии по высоте: у верхнего и нижнего края карточка уходит глубже, чем по
       центру, — ровно это и читается как изгиб, а не как простое сжатие. */
    float vertical = (vUv.y - 0.5) * 2.0;
    float bow = lip * (0.12 + 0.88 * vertical * vertical);
    vec2 uv = vUv - vec2((side * bow * uLensPull) / uRes.x, 0.0);
    // по горизонтали стекло сжимает, по вертикали — растягивает: выпуклое стекло
    uv.x = mix(uv.x, 0.5 + (uv.x - 0.5) * 0.88, lip);
    uv.y = 0.5 + (uv.y - 0.5) * (1.0 - 0.24 * lip);

    /* Дисперсия: по кромке каналы расходятся. Шесть выборок вместо шестнадцати —
       на нашей ленте разницы не видно, а кадр дешевле. */
    float split = lip * 15.0 / uRes.x;
    vec4 color;
    color.r = texture2D(uScene, uv + vec2(side * split, 0.0)).r;
    color.g = texture2D(uScene, uv).g;
    color.b = texture2D(uScene, uv - vec2(side * split, 0.0)).b;
    color.a = texture2D(uScene, uv).a;
    color.r = mix(color.r, texture2D(uScene, uv + vec2(side * split * 1.8, 0.0)).r, 0.4);
    color.b = mix(color.b, texture2D(uScene, uv - vec2(side * split * 1.8, 0.0)).b, 0.4);

    // Тонкая холодная линия по ободку — на тёмном фоне она и читается как стекло.
    float rim = smoothstep(0.55, 1.0, lip / max(uStrength, 0.001));
    color.rgb += rim * 0.14;
    color.a = min(1.0, color.a + rim * 0.14);

    gl_FragColor = color;
}
`;

/* Кромка стекла совпадает с боками холста, а глубина и сила считаются от
   ширины карточки, а не окна: иначе на узком экране зона накрывает карточку
   целиком и стекло из акцента превращается в кашу. */
const LENS = { depthCards: 0.85, pullRatio: 0.3 };

/* На телефоне карточка занимает почти всю ширину, и зоны стекла с двух сторон
   сходились на ней самой: искривление накрывало текст. Разводим их к краям
   и делаем тише. */
const LENS_TOUCH = { depthCards: 0.24, pullRatio: 0.11 };

type Card = {
    name: string;
    meta: string;
    brand: string;
    texture: WebGLTexture;
    baseX: number;
    seed: number;
    lastX: number;
};

/** Тон и насыщенность цвета команды — на них строится шкала темы. */
function rgbToHsl(hex: string): [number, number] {
    const [r, g, b] = (hex.replace('#', '').match(/../g) || ['80', '80', '80']).map((part) => parseInt(part, 16) / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    if (max === min) return [0, 0];
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    let hue = 0;
    if (max === r) hue = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
    else if (max === g) hue = ((b - r) / delta + 2) / 6;
    else hue = ((r - g) / delta + 4) / 6;
    return [Math.round(hue * 360), saturation];
}

/** Заливка слоя свечения: у серых команд подмешиваем белый. */
function glowFill(brand: string) {
    const rgb = (brand.replace('#', '').match(/../g) || ['80', '80', '80']).map((part) => parseInt(part, 16));
    const max = Math.max(...rgb);
    const saturation = max ? (max - Math.min(...rgb)) / max : 0;
    return saturation < 0.28 ? `color-mix(in srgb, ${brand} 55%, #fff)` : brand;
}

/** Карточка рисуется обычным 2D-холстом и становится текстурой ленты.
    Разметка по макету DS-BUILDER / PLAYGROUND (node 6312:436): 331x427 —
    шапка с логотипом, шкала темы и сетка 2x2 из параметров темы.
    Рисуем в двойном размере, иначе текст плывёт на крупных карточках. */
function drawCardCanvas(name: string, meta: string, brand: string, logo?: HTMLImageElement | null) {
    const S = 2; // множитель разрешения относительно макета
    const canvas = document.createElement('canvas');
    canvas.width = CARD.width * S;
    canvas.height = CARD.height * S;
    const ctx = canvas.getContext('2d');
    ctx.scale(S, S);

    const surface = '#212327';
    const line = 'rgba(255,255,255,.06)';
    const textPrimary = '#f3f3f3';
    const textMuted = '#77777a';
    const font = (weight: number, size: number) => `${weight} ${size}px Inter, system-ui, sans-serif`;
    const demo = demoData(name);
    const [hue, saturation] = rgbToHsl(brand);
    // шкалу и образцы строим на одном тоне команды, меняя только светлоту
    const tone = (lightness: number) => `hsl(${hue} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%)`;

    /* Перерисовывает холст под фигурой, с клипом по её контуру: с размытием это
       backdrop-filter из макета, со снимком вместо источника — возврат фона
       карточки. Сигму домножаем на S — filter считает радиус в пикселях
       холста, а не в координатах макета. */
    const paintBackdrop = (clip: () => void, blur: number, source: CanvasImageSource = canvas) => {
        ctx.save();
        ctx.beginPath();
        clip();
        ctx.clip();
        const matrix = ctx.getTransform();
        ctx.setTransform(S, 0, 0, S, 0, 0);
        if (blur) ctx.filter = `blur(${blur * S}px)`;
        ctx.drawImage(source, 0, 0, CARD.width, CARD.height);
        ctx.filter = 'none';
        ctx.setTransform(matrix);
        ctx.restore();
    };

    /** Снимок холста: из него берётся фон под ободком кружка платформы. */
    const snapshot = () => {
        const copy = document.createElement('canvas');
        copy.width = canvas.width;
        copy.height = canvas.height;
        copy.getContext('2d').drawImage(canvas, 0, 0);
        return copy;
    };

    ctx.fillStyle = surface;
    ctx.fillRect(0, 0, CARD.width, CARD.height);
    ctx.textBaseline = 'top';

    /* Свечение команды — слой «Vector 49» из макета: ломаная фигура цвета
       команды, 429x372.94 при непрозрачности 0.15 и размытии слоя 120.
       Путь дан в системе SVG-экспорта (429x702 со сдвигом 121.9), поэтому
       приводим его к размеру из макета. Сигму домножаем на S: ctx.filter
       считает радиус в пикселях холста, а не в координатах отрисовки. */
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.filter = `blur(${60 * S}px)`;
    ctx.fillStyle = glowFill(brand);
    ctx.translate((CARD.width - GLOW.width) / 2, GLOW.top);
    ctx.scale(GLOW.width / 429, GLOW.height / 702);
    ctx.translate(-121.9, -121.9);
    ctx.fill(new Path2D(GLOW_PATH));
    ctx.restore();

    // --- шапка: логотип, название команды, её сектор -------------------------
    ctx.fillStyle = 'rgba(255,255,255,.09)';
    ctx.beginPath();
    ctx.roundRect(16, 16, 44, 44, 12);
    ctx.fill();
    if (logo) {
        ctx.save();
        ctx.clip();
        ctx.drawImage(logo, 16, 16, 44, 44);
        ctx.restore();
    }

    ctx.fillStyle = textPrimary;
    ctx.font = font(600, 17);
    ctx.fillText(name, 76, 18);

    ctx.fillStyle = textMuted;
    ctx.font = font(400, 13);
    ctx.fillText(meta, 76, 46);

    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 79.5);
    ctx.lineTo(CARD.width, 79.5);
    ctx.stroke();

    /* --- шкала темы ---------------------------------------------------------
       Рамка 297x50 с полосой 287x40 внутри: шесть ступеней светлоты одного
       тона. Скругления концентричные — рамка 12, полоса 8 при отступе 4. */
    ctx.strokeStyle = 'rgba(255,255,255,.12)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(17, 95, 297, 50, 12);
    ctx.stroke();

    const stripe = { x: 22, y: 100, width: 287, height: 40 };
    const step = stripe.width / SCALE_LIGHTNESS.length;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(stripe.x, stripe.y, stripe.width, stripe.height, 8);
    ctx.clip();
    SCALE_LIGHTNESS.forEach((lightness, index) => {
        ctx.fillStyle = tone(lightness);
        // ступени кладём внахлёст на пиксель, иначе между ними проступают швы
        ctx.fillRect(stripe.x + index * step, stripe.y, step + 1, stripe.height);
    });
    ctx.restore();

    /* --- сетка параметров темы ----------------------------------------------
       Четыре ячейки 144.5x120.5: цвет, типографика, скругления и платформы.
       Сверху образец, под ним значение и название параметра. */
    const cells: Array<{ x: number; y: number; title: string; caption: string; sample: () => void }> = [
        {
            x: 17,
            y: 161,
            title: 'Brand color',
            caption: 'Цвета',
            sample: () => {
                /* Группа «Ellipse 1..3» из макета: три круга r = 14.5 в поле
                   53x49, прижатом к низу образца. Снизу тёмный тон, сверху
                   основной, поверх — светлый полупрозрачный. По краю каждого
                   идёт белый блик: он виден в углах и гаснет к середине. */
                ctx.save();
                ctx.translate(0, 2.75);
                BRAND_CIRCLES.forEach(({ x, y, lightness, alpha, stroke, width, from, to, blur }) => {
                    if (blur) paintBackdrop(() => ctx.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2), blur);
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = tone(lightness);
                    ctx.beginPath();
                    ctx.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2);
                    ctx.fill();

                    const sheen = ctx.createLinearGradient(from[0], from[1], to[0], to[1]);
                    sheen.addColorStop(0, `rgba(255,255,255,${stroke})`);
                    sheen.addColorStop(0.5, 'rgba(255,255,255,0)');
                    sheen.addColorStop(1, `rgba(255,255,255,${stroke})`);
                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = sheen;
                    ctx.lineWidth = width;
                    ctx.beginPath();
                    ctx.arc(x, y, CIRCLE_RADIUS - width / 2, 0, Math.PI * 2);
                    ctx.stroke();
                });
                ctx.restore();
            },
        },
        {
            x: 169.5,
            y: 161,
            title: demo.font,
            caption: 'Типографика',
            sample: () => {
                /* По макету блок «Aa» — 32px высотой, прижат к левому краю и
                   отцентрован по вертикали в свободной части ячейки. Кегль
                   считаем от высоты прописной: у Inter она около 0.727em. */
                ctx.fillStyle = tone(0.58);
                ctx.font = font(demo.weight, 44);
                ctx.textBaseline = 'alphabetic';
                ctx.fillText('Aa', 0, 43.25);
                ctx.textBaseline = 'top';
            },
        },
        {
            x: 17,
            y: 289.5,
            title: `Radius ${demo.radius}px`,
            caption: 'Скругления',
            sample: () => {
                /* Вектор из макета (51x48): пунктирный обвод с дугой радиуса 16,
                   бледная подложка между дугой и углом квадрата и сам квадрат
                   34x34 — его левый верхний угол и есть скругление темы,
                   остальные углы фиксированы на 2. */
                ctx.save();
                ctx.translate(1, 3.25);

                /* Обвод строится от угла квадрата: тот же центр, радиус больше
                   на отступ 13 — поэтому дуги остаются концентричными при любом
                   значении темы. Числа макета получаются из этого правила при
                   скруглении 8. Половина стороны — предел: дальше угол съел бы
                   весь квадрат. */
                const radius = Math.min(demo.radius, 17);
                const cx = 17 + radius;
                const cy = 13.5 + radius;
                const outer = radius + 13;
                const bend = () => ctx.arc(cx, cy, outer, Math.PI, Math.PI * 1.5);

                ctx.globalAlpha = 0.2;
                ctx.fillStyle = tone(0.5);
                ctx.beginPath();
                ctx.moveTo(17, cy);
                ctx.lineTo(4, cy);
                bend();
                ctx.lineTo(cx, 13.5);
                if (radius) ctx.arc(cx, cy, radius, Math.PI * 1.5, Math.PI, true);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;

                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(4, 45.5);
                ctx.lineTo(4, cy);
                bend();
                ctx.lineTo(48, 0.5);
                ctx.stroke();
                ctx.setLineDash([]);

                // сплошные засечки отмечают, откуда отсчитывается скругление
                ctx.beginPath();
                ctx.moveTo(4, 48);
                ctx.lineTo(4, cy + 4);
                ctx.moveTo(51, 0.5);
                ctx.lineTo(cx + 3, 0.5);
                ctx.stroke();

                const corners = [radius, 2, 2, 2];
                const square = () => ctx.roundRect(17, 13.5, 34, 34, corners);
                paintBackdrop(square, 4);

                ctx.globalAlpha = 0.62;
                ctx.fillStyle = tone(0.46);
                ctx.beginPath();
                square();
                ctx.fill();
                ctx.globalAlpha = 1;

                const sheen = ctx.createLinearGradient(17, 13.5, 51, 47.5);
                sheen.addColorStop(0, 'rgba(255,255,255,.24)');
                sheen.addColorStop(0.5, 'rgba(255,255,255,0)');
                sheen.addColorStop(1, 'rgba(255,255,255,.24)');
                ctx.strokeStyle = sheen;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                square();
                ctx.stroke();
                ctx.restore();
            },
        },
        {
            x: 169.5,
            y: 289.5,
            title: demo.platforms.join(', '),
            caption: 'Платформа',
            sample: () => {
                /* Кружки 48x48 стоят с шагом 30 — то есть внахлёст на 18, как в
                   макете. Подложка кружка — почти обесцвеченный тон команды, а
                   ободок у второго не красится, а вырезается: под ним возвращаем
                   фон карточки, который у каждой команды свой из-за свечения.
                   Иконка цветная, 32x32 с отступом 8. */
                const plate = demo.platforms.length > 1 ? snapshot() : null;
                demo.platforms.forEach((platform, index) => {
                    const left = index * 30;
                    const icon = PLATFORM_ICONS[platform];
                    if (index > 0 && plate) {
                        paintBackdrop(() => ctx.arc(left + 24, 27.25, 24, 0, Math.PI * 2), 0, plate);
                    }
                    ctx.fillStyle = `hsl(${hue} ${Math.round(saturation * 14)}% 22%)`;
                    ctx.beginPath();
                    ctx.arc(left + 24, 27.25, index > 0 ? 22 : 24, 0, Math.PI * 2);
                    ctx.fill();
                    if (!icon) return;

                    ctx.save();
                    ctx.translate(left + 8, 11.25);
                    ctx.strokeStyle = tone(0.5);
                    ctx.fillStyle = tone(0.5);
                    ctx.lineWidth = 1.5;
                    if (icon.round) {
                        ctx.lineCap = 'round';
                        ctx.lineJoin = 'round';
                    }

                    const body = new Path2D(icon.body);
                    ctx.globalAlpha = 0.3;
                    ctx.fill(body);
                    ctx.globalAlpha = 1;
                    ctx.stroke(body);
                    if (icon.line) ctx.stroke(new Path2D(icon.line));
                    icon.dots.forEach(([dotX, dotY]) => {
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, 1, 0, Math.PI * 2);
                        ctx.fill();
                    });

                    ctx.lineCap = 'butt';
                    ctx.lineJoin = 'miter';
                    ctx.restore();
                });
            },
        },
    ];

    cells.forEach(({ x, y, title, caption, sample }) => {
        // ячейки прозрачные — в макете у них только рамка, фон даёт сама карточка
        ctx.strokeStyle = 'rgba(255,255,255,.12)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(x, y, 144.5, 120.5, 12);
        ctx.stroke();

        ctx.save();
        // образец живёт в своей системе координат: он начинается в (13, 11) ячейки
        ctx.translate(x + 13, y + 11);
        sample();
        ctx.restore();

        ctx.fillStyle = textPrimary;
        ctx.font = font(500, 14);
        ctx.fillText(title, x + 13, y + 75.5);

        ctx.fillStyle = 'rgba(255,255,255,.5)';
        ctx.font = font(400, 12);
        ctx.fillText(caption, x + 13, y + 94.5);
    });

    return canvas;
}

/* Демо-данные карточек: шрифт темы, скругление и набор платформ.
   Выбираются по имени команды, поэтому у каждой карточки свои значения, и при
   перезагрузке они не скачут. Заменяются на настоящие, когда появятся. */
const DEMO_FONTS = [
    'SB Sans',
    'Inter',
    'Golos Text',
    'Manrope',
    'Onest',
    'IBM Plex Sans',
    'Roboto Flex',
    'SF Pro Text',
];
const DEMO_WEIGHTS = [300, 400, 500, 600];
const DEMO_RADII = [0, 2, 6, 10, 14, 18, 22, 24]; // от прямых углов до максимально мягких
// не больше двух на карточку: в макете иконки идут парой внахлёст
const DEMO_PLATFORMS = [
    ['Web', 'Mobile'],
    ['Mobile'],
    ['Web', 'TV'],
    ['Web'],
    ['Mobile', 'TV'],
    ['TV'],
    ['Web', 'Mobile'],
    ['Mobile', 'Web'],
];

function hashName(name: string) {
    let hash = 0;
    // без побитовых операций: в проекте они запрещены линтером, а остаток по
    // простому числу даёт тот же разброс
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 2147483647;
    return hash;
}

function demoData(name: string) {
    const hash = hashName(name);
    // каждое поле берёт свой «разряд» хеша, иначе значения ходили бы парами
    const digit = (divisor: number) => Math.floor(hash / divisor);
    return {
        font: DEMO_FONTS[hash % DEMO_FONTS.length],
        weight: DEMO_WEIGHTS[digit(8) % DEMO_WEIGHTS.length],
        platforms: DEMO_PLATFORMS[digit(32) % DEMO_PLATFORMS.length],
        radius: DEMO_RADII[digit(2048) % DEMO_RADII.length],
    };
}

/** Логотипы команд: файл кладём в public/media/teams под именем команды.
    Пока из макета есть только один логотип, поэтому остальные команды временно
    берут его же — как заглушку до получения настоящих. */
const TEAM_LOGOS: Record<string, string> = {
    GigaChat: '/media/teams/gigachat.svg',
};
const FALLBACK_LOGO = '/media/teams/gigachat.svg';

/** Один и тот же файл нужен всем карточкам, поэтому грузим его однократно. */
const logoCache = new Map<string, Promise<HTMLImageElement>>();
function loadLogo(src: string) {
    let pending = logoCache.get(src);
    if (!pending) {
        pending = new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = src;
        });
        logoCache.set(src, pending);
    }
    return pending;
}

function uploadTexture(gl: WebGLRenderingContext, texture: WebGLTexture, canvas: HTMLCanvasElement) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

function createCardTexture(gl: WebGLRenderingContext, name: string, meta: string, brand: string) {
    const texture = gl.createTexture();
    uploadTexture(gl, texture, drawCardCanvas(name, meta, brand));

    // Логотип грузится сетью, поэтому карточка сперва рисуется без него, а когда
    // файл приедет — текстура перезаписывается той же картинкой с логотипом.
    loadLogo(TEAM_LOGOS[name] || FALLBACK_LOGO)
        .then((logo) => uploadTexture(gl, texture, drawCardCanvas(name, meta, brand, logo)))
        .catch(() => {}); // не приехал — остаётся плашка-заглушка
    return texture;
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || 'shader compile failed');
    }
    return shader;
}

/** Ленты карточки: у каждой свои вершины, общий буфер на все карточки. */

function buildRibbons(width: number, height: number, threads: number, segments: number) {
    const columns = segments + 1;
    const positions: number[] = [];
    const uvs: number[] = [];
    const rims: number[] = [];
    const threadIds: number[] = [];
    const indices: number[] = [];

    for (let t = 0; t < threads; t++) {
        const base = t * columns * 2;
        for (let row = 0; row < 2; row++) {
            const vy = (t + row) / threads; // 0 — низ карточки, 1 — верх
            for (let c = 0; c < columns; c++) {
                const ux = c / segments;
                positions.push((ux - 0.5) * width, (vy - 0.5) * height);
                uvs.push(ux, vy);
                rims.push(row === 0 ? -1 : 1);
                threadIds.push(t);
            }
        }
        for (let c = 0; c < segments; c++) {
            const a = base + c;
            const b = a + 1;
            const cc = base + columns + c;
            const d = cc + 1;
            indices.push(a, b, cc, b, d, cc);
        }
    }

    return {
        attributes: {
            aPosition: new Float32Array(positions),
            aUv: new Float32Array(uvs),
            aRim: new Float32Array(rims),
            aThread: new Float32Array(threadIds),
        },
        indices: new Uint16Array(indices),
        count: indices.length,
    };
}

export function initTeamsLoom() {
    const section = document.getElementById('teams');
    const grid = section?.querySelector('.teams-grid') as HTMLElement | null;
    if (!section || !grid) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const config = isTouch ? { ...CONFIG, ...TOUCH_CONFIG } : CONFIG;
    const lensConfig = isTouch ? { ...LENS, ...LENS_TOUCH } : LENS;

    const cells = Array.from(grid.querySelectorAll('.team-cell[data-brand]')) as HTMLElement[];
    if (cells.length < 2) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'teams-loom';
    const gl = (canvas.getContext('webgl', { antialias: true, alpha: true, premultipliedAlpha: false }) ||
        canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return; // без WebGL остаётся обычная сетка

    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pageColor = getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g) || ['14', '16', '21'];

    section.classList.add('has-loom');

    // Холст живёт в обёртке шириной во всё окно: карточки должны уходить за край
    // экрана, там и начинается расплетание.
    const stage = document.createElement('div');
    stage.className = 'teams-loom-stage';
    stage.append(canvas);
    grid.after(stage);

    let program: WebGLProgram;
    try {
        program = gl.createProgram();
        gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
        gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(program) || 'link failed');
        }
    } catch (error) {
        // шейдер не собрался: возвращаем сетку, но причину показываем в консоли
        console.warn('teams-loom:', error);
        section.classList.remove('has-loom');
        return;
    }
    gl.useProgram(program);

    const uniform = (name: string) => gl.getUniformLocation(program, name);

    /* Линза живёт отдельной программой: сцена сначала рисуется в текстуру, потом
       её выводит полноэкранный квад. */
    const lens = (() => {
        const lensProgram = gl.createProgram();
        gl.attachShader(lensProgram, compile(gl, gl.VERTEX_SHADER, LENS_VERTEX_SHADER));
        gl.attachShader(lensProgram, compile(gl, gl.FRAGMENT_SHADER, LENS_FRAGMENT_SHADER));
        gl.linkProgram(lensProgram);
        if (!gl.getProgramParameter(lensProgram, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(lensProgram) || 'lens link failed');
        }

        const quad = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quad);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        return {
            program: lensProgram,
            buffer: quad,
            corner: gl.getAttribLocation(lensProgram, 'aCorner'),
            texture,
            frame: gl.createFramebuffer(),
            uniforms: {
                scene: gl.getUniformLocation(lensProgram, 'uScene'),
                res: gl.getUniformLocation(lensProgram, 'uRes'),
                half: gl.getUniformLocation(lensProgram, 'uLensHalf'),
                depth: gl.getUniformLocation(lensProgram, 'uLensDepth'),
                pull: gl.getUniformLocation(lensProgram, 'uLensPull'),
                time: gl.getUniformLocation(lensProgram, 'uTime'),
                strength: gl.getUniformLocation(lensProgram, 'uStrength'),
            },
        };
    })();

    // буферы заводим по именам атрибутов: так привязка в цикле отрисовки — один проход
    const layout: Array<[string, number]> = [
        ['aPosition', 2],
        ['aUv', 2],
        ['aRim', 1],
        ['aThread', 1],
    ];
    const attributes = layout.map(([name, size]) => ({
        name,
        size,
        location: gl.getAttribLocation(program, name),
        buffer: gl.createBuffer(),
    }));
    const locations = {
        viewport: uniform('uViewport'),
        cardX: uniform('uCardX'),
        halfWidth: uniform('uHalfWidth'),
        halfCanvas: uniform('uHalfCanvas'),
        zone: uniform('uZone'),
        time: uniform('uTime'),
        strength: uniform('uStrength'),
        wobble: uniform('uWobble'),
        seed: uniform('uSeed'),
        map: uniform('uMap'),
        cardSize: uniform('uCardSize'),
        radius: uniform('uRadius'),
        pageColor: uniform('uPageColor'),
    };

    const cards: Card[] = cells.map((cell, index) => ({
        name: cell.querySelector('b')?.textContent || '',
        meta: cell.querySelector('span')?.textContent || '',
        brand: cell.dataset.brand || '#3b78ff',
        texture: createCardTexture(
            gl,
            cell.querySelector('b')?.textContent || '',
            cell.querySelector('span')?.textContent || '',
            cell.dataset.brand || '#3b78ff',
        ),
        baseX: 0,
        seed: index * 13.37,
        lastX: 0,
    }));

    const indexBuffer = gl.createBuffer();

    let cardWidth = 0;
    let cardHeight = 0;
    let contentWidth = 0;
    let tearField = 0;
    let stripSpan = 0;
    let indexCount = 0;
    let viewportWidth = 0;
    let viewportHeight = 0;

    function uploadGeometry() {
        const geometry = buildRibbons(cardWidth, cardHeight, config.threads, config.segments);
        indexCount = geometry.count;
        attributes.forEach(({ name, buffer }) => {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, geometry.attributes[name], gl.STATIC_DRAW);
        });
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geometry.indices, gl.STATIC_DRAW);
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, config.dpr);
        // Ткань рвётся по краям контейнера, но нити улетают дальше — холст шире,
        // иначе они срезаются его границей.
        // Холст — ровно по ширине окна: шире смысла нет (край экрана всё равно
        // обрежет), уже — и по бокам останутся пустые поля, куда нити не дойдут.
        viewportWidth = window.innerWidth;
        // Поле распада — то, что снаружи контейнера. Если колонка занимает почти
        // всё окно, поля нет: тогда отступаем внутрь, но не больше трети ширины,
        // иначе целыми останутся две карточки.
        const outside = (viewportWidth - stage.clientWidth) / 2;
        tearField = Math.min(Math.max(outside, config.minField), viewportWidth * config.tearRatio);
        contentWidth = viewportWidth - tearField * 2;
        // Запас над и под карточкой нужен вертикальному разлёту нитей, но лишний
        // превращается в пустое поле вокруг ленты.
        const contentHeight = Math.min(Math.round(window.innerHeight * config.heightRatio), config.heightMax);
        /* Стекло растягивает ленту по вертикали, и у краёв она упиралась в
           границу холста. Холст наращиваем сверху и снизу, а запас убираем
           отрицательными полями: в потоке блок остаётся прежней высоты, поэтому
           отступы до соседних секций не меняются. */
        const bleed = Math.round(contentHeight * 0.14);
        viewportHeight = contentHeight + bleed * 2;
        canvas.style.marginTop = `${-bleed}px`;
        canvas.style.marginBottom = `${-bleed}px`;
        canvas.style.width = `${viewportWidth}px`;
        // Центрируем холст по контейнеру, а не по расчётной зоне: когда поле
        // распада берётся внутрь (узкие экраны), они не совпадают, и лента
        // уезжала вбок — с одной стороны нити упирались в край, с другой
        // оставалась пустая полоса.
        canvas.style.marginLeft = `${(stage.clientWidth - viewportWidth) / 2}px`;
        canvas.width = Math.round(viewportWidth * dpr);
        canvas.height = Math.round(viewportHeight * dpr);
        canvas.style.height = `${viewportHeight}px`;
        gl.viewport(0, 0, canvas.width, canvas.height);

        // цель рендера всегда равна холсту в пикселях устройства
        gl.bindTexture(gl.TEXTURE_2D, lens.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, lens.frame);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, lens.texture, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        // Карточка ограничена и высотой холста, и шириной экрана: на узких окнах
        // без второго ограничения в кадр не помещалось даже двух карточек.
        cardHeight = Math.min(
            config.cardHeight,
            contentHeight - config.verticalPad,
            (viewportWidth * config.cardMaxWidthRatio) / config.cardAspect,
        );
        cardWidth = cardHeight * config.cardAspect;
        // Шаг между карточками: обычный, но если их не хватает на ширину холста,
        // разводим дальше — иначе в ленте появится разрыв.
        const step = Math.max(cardWidth * (1 + config.gapRatio), (viewportWidth + cardWidth * 2) / cards.length);
        stripSpan = step * cards.length;
        cards.forEach((card, index) => {
            card.baseX = index * step;
        });
        uploadGeometry();
    }

    const motion = { offset: 0, velocity: 0, strength: 0 };
    let dragging = false;
    let lastPointerX = 0;
    let dragVelocity = 0;
    let recoverUntil = 0;

    const onPointerDown = (event: PointerEvent) => {
        dragging = true;
        lastPointerX = event.clientX;
        dragVelocity = 0;
        canvas.setPointerCapture(event.pointerId);
        canvas.classList.add('is-dragging');
    };
    const onPointerMove = (event: PointerEvent) => {
        if (!dragging) return;
        const delta = event.clientX - lastPointerX;
        lastPointerX = event.clientX;
        motion.offset -= delta;
        dragVelocity = -delta * 60; // px/с, кадр считаем за 1/60
    };
    const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        canvas.classList.remove('is-dragging');
        motion.velocity = Math.max(-config.flingMax, Math.min(config.flingMax, dragVelocity));
        recoverUntil = performance.now() + 2200; // столько возвращаемся к обычной скорости
    };

    /* Прокрутка страницы подхватывает ленту: замер сглаживаем, прибавку набираем
       медленнее, чем она приходит (отсюда лаг), и отпускаем ещё медленнее —
       лента какое-то время едет по инерции после остановки прокрутки. */
    let pendingScroll = 0;
    let lastScrollY = window.scrollY;
    let scrollRate = 0; // сглаженная скорость прокрутки, px/с
    let boost = 0; // текущая прибавка к скорости ленты, px/с
    const onScroll = () => {
        pendingScroll += window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);
    canvas.addEventListener('lostpointercapture', endDrag);
    window.addEventListener('resize', resize);

    resize();

    gl.enable(gl.BLEND);
    /* При рисовании в текстуру цвет копится уже умноженным на прозрачность,
       иначе полупрозрачные нити темнеют на границах. На экран такую текстуру
       выводим соответствующим смешиванием. */
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    let frame = 0;
    let previous = performance.now();
    let elapsed = 0;
    let visible = true;

    // Пока секция за кадром, кадры не считаем: иначе холст жжёт батарею впустую.
    const observer = new IntersectionObserver(
        (entries) => {
            visible = entries[0].isIntersecting;
            if (visible) {
                previous = performance.now();
                frame = requestAnimationFrame(render);
            } else {
                cancelAnimationFrame(frame);
            }
        },
        { threshold: 0 },
    );
    observer.observe(section);

    function render(now: number) {
        const delta = Math.min((now - previous) / 1000, 0.05);
        previous = now;
        elapsed += delta;

        // Появление: сила разрыва и скорость набираются плавно.
        motion.strength = Math.min(1, motion.strength + delta / 1.6);

        // Скорость прокрутки за кадр, сглаженная: мгновенные значения скачут.
        const rawRate = pendingScroll / Math.max(delta, 0.001);
        pendingScroll = 0;
        scrollRate += (rawRate - scrollRate) * (1 - Math.exp(-delta / config.scrollSmooth));

        // Направление прокрутки не важно: лента всегда едет в свою сторону, просто
        // быстрее. Со знаком она разворачивалась назад и рвала ход.
        const boostTarget = Math.min(config.scrollBoostMax, Math.abs(scrollRate) * config.scrollGain);
        // Разные постоянные времени: разгоняемся с запаздыванием, гаснем дольше.
        const tau = Math.abs(boostTarget) > Math.abs(boost) ? config.scrollAttack : config.scrollDecay;
        boost += (boostTarget - boost) * (1 - Math.exp(-delta / tau));

        if (!dragging) {
            if (now < recoverUntil) {
                // после броска скорость сходится к базовой
                motion.velocity += (config.speed - motion.velocity) * Math.min(1, delta * 1.6);
            } else {
                motion.velocity = config.speed;
            }
            motion.offset += (motion.velocity + boost) * delta;
        }

        const halfWidth = contentWidth / 2; // граница ткани — край контейнера
        const halfCanvas = viewportWidth / 2; // граница отрисовки — край холста
        const zone = tearField;

        gl.bindFramebuffer(gl.FRAMEBUFFER, lens.frame);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);

        attributes.forEach(({ size, location, buffer }) => {
            if (location < 0) return;
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(location);
            gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
        });
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

        gl.uniform2f(locations.viewport, viewportWidth, viewportHeight);
        gl.uniform1f(locations.halfWidth, halfWidth);
        gl.uniform1f(locations.halfCanvas, halfCanvas);
        gl.uniform1f(locations.zone, zone);
        gl.uniform1f(locations.time, elapsed);
        gl.uniform1f(locations.strength, motion.strength);
        gl.uniform1f(locations.wobble, reduceMotion ? 0 : 1);
        gl.uniform2f(locations.cardSize, cardWidth, cardHeight);
        gl.uniform3f(locations.pageColor, +pageColor[0] / 255, +pageColor[1] / 255, +pageColor[2] / 255);
        gl.uniform1i(locations.map, 0);
        gl.activeTexture(gl.TEXTURE0);

        cards.forEach((card) => {
            // закольцовка: карточка, ушедшая за правый край, появляется слева
            const x = ((((card.baseX - motion.offset) % stripSpan) + stripSpan) % stripSpan) - halfCanvas - cardWidth;
            // Момент закольцовки: карточка перепрыгнула с одного края ленты на
            // другой. Даём ей новое зерно, чтобы следующий заход расплёлся иначе.
            if (Math.abs(x - card.lastX) > cardWidth) card.seed = Math.random() * 1000;
            card.lastX = x;
            if (x < -halfCanvas - cardWidth || x > halfCanvas + cardWidth) return;
            gl.uniform1f(locations.cardX, x);
            gl.uniform1f(locations.seed, card.seed);
            gl.uniform1f(locations.radius, (CARD.radius * cardWidth) / CARD.width);
            gl.bindTexture(gl.TEXTURE_2D, card.texture);
            gl.drawElements(gl.TRIANGLES, indexCount, gl.UNSIGNED_SHORT, 0);
        });

        // второй проход: сцену из текстуры выводим через стекло
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(lens.program);
        gl.bindBuffer(gl.ARRAY_BUFFER, lens.buffer);
        gl.enableVertexAttribArray(lens.corner);
        gl.vertexAttribPointer(lens.corner, 2, gl.FLOAT, false, 0, 0);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.bindTexture(gl.TEXTURE_2D, lens.texture);
        gl.uniform1i(lens.uniforms.scene, 0);
        gl.uniform2f(lens.uniforms.res, viewportWidth, viewportHeight);
        gl.uniform1f(lens.uniforms.half, viewportWidth / 2);
        gl.uniform1f(lens.uniforms.depth, cardWidth * lensConfig.depthCards);
        gl.uniform1f(lens.uniforms.pull, cardWidth * lensConfig.pullRatio);
        gl.uniform1f(lens.uniforms.time, elapsed);
        gl.uniform1f(lens.uniforms.strength, motion.strength);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        if (visible) frame = requestAnimationFrame(render);
    }

    frame = requestAnimationFrame(render);

    return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener('resize', resize);
        window.removeEventListener('scroll', onScroll);
        canvas.removeEventListener('pointerdown', onPointerDown);
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerup', endDrag);
        canvas.removeEventListener('pointercancel', endDrag);
        canvas.removeEventListener('lostpointercapture', endDrag);
        cards.forEach((card) => gl.deleteTexture(card.texture));
        attributes.forEach(({ buffer }) => gl.deleteBuffer(buffer));
        gl.deleteBuffer(indexBuffer);
        gl.deleteBuffer(lens.buffer);
        gl.deleteTexture(lens.texture);
        gl.deleteFramebuffer(lens.frame);
        gl.deleteProgram(lens.program);
        gl.deleteProgram(program);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        stage.remove();
        section.classList.remove('has-loom');
    };
}
