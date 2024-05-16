# Модуль работы с темой

Данный модуль предоставляет возможность взаимодействия с темой на уровне разработки.

## Содержание

-   [Тема](#тема)
    -   [Мета токены](#мета-токены)
    -   [Платформы](#платформы)
    -   [Значения токенов](#значения-токенов)
-   [Директория `themes`](#директория-themes)
    -   [Файл `theme`](#файл-theme)
    -   [Файл `builders`](#файл-builders)
    -   [Файл `createMetaTokens`](#файл-createmetatokens)
    -   [Файл `createVariationTokens`](#файл-createvariationtokens)
    -   [Файл `readTheme`](#файл-readtheme)
    -   [Файл `writeTheme`](#файл-writetheme)
-   [Директория `tokens`](#директория-tokens)
    -   [Файл `platformToken`](#файл-platformToken)
    -   [Файл `token`](#файл-token)
    -   [Директория `color`](#директория-color)
    -   [Директория `gradient`](#директория-gradient)
    -   [Директория `shadow`](#директория-shadow)
    -   [Директория `shape`](#директория-shape)
    -   [Директория `fontFamily`](#директория-fontFamily)
    -   [Директория `typography`](#директория-typography)
-   [Использование](#использование)
    -   [Создание базовой темы](#создание-базовой-темы)
    -   [Создание и изменение тестовой темы](#создание-и-изменение-тестовой-темы)
    -   [Чтение темы, билд экземпляра и запись zip-архива с темой](#чтение-темы-билд-экземпляра-и-запись-zip-архива-с-темой)

## Тема

Тема представляет собой набор файлов в формате `JSON`, которые упакованы в zip-архив и лежат в специальном [репозитории](https://github.com/salute-developers/theme-converter/tree/main/themes).

Структура темы:

```bash
.
└── theme/
    ├── web/
    │   ├── web_color.json
    │   ├── web_fontFamily.json
    │   ├── web_gradient.json
    │   ├── web_shadow.json
    │   ├── web_shape.json
    │   └── web_typography.json
    ├── ios/
    │   ├── ios_color.json
    │   ├── ios_fontFamily.json
    │   ├── ios_gradient.json
    │   ├── ios_shadow.json
    │   ├── ios_shape.json
    │   └── ios_typography.json
    ├── android/
    │   ├── android_color.json
    │   ├── android_fontFamily.json
    │   ├── android_gradient.json
    │   ├── android_shadow.json
    │   ├── android_shape.json
    │   └── android_typography.json
    └── meta.json
```

### Мета токены

В файле `meta.json` в поле `tokens` хранится мета информация о токенах и описывается типом `TokenType`, который имеет такие поля:

-   `type` - один из вариацией токенов: `'color'` | `'gradient'` | `'shadow'` | `'shape'` | `'fontFamily'` | `'typography'`.
-   `name` - имя токена в формате `'mode.category.subcategory.name?'`. Пример: `'dark.text.on-dark.primary'`.
-   `tags` - набор тегов в виде массива, как правило совпадающий с полем `name`, но разделенный по точке: `['mode', 'category', 'subcategory', 'name']`. Пример: `['dark', 'text', 'on-dark', 'primary']`.
-   `displayName` - имя токена в визуальном интерфейсе. Например: `'onDarkSurfaceTextPrimary'`.
-   `description` - описание предназначение токена. Например: `Вторичный цвет текста на светлом фоне`
-   `enabled` - логическое значение отвечающее за то, будет ли токен отображаться в итоговой теме. Пример: `false`.

### Платформы

Поддерживаются следующие типы платформ:

-   `web` - набор токенов для веб интерфейсов.
-   `ios` - набор токенов для приложений, работающих под операционными системами `iPadOS` и `iOS`.
-   `android` - набор токенов для приложений, работающих под операционной системой `android`.

В каждой директории платформы лежат `JSON` файлы со значениями для всех видов токенов:

-   `color` - токен [цвета](#директория-color). Используется для покраски визуальных элементов.
-   `gradient` - токен [градиента](#директория-gradient). Используется для покраски визуальных элементов.
-   `shadow` - токен [тени](#директория-shadow). Используется для добавления эффекта глубины.
-   `shape` - токен [формы](#директория-shape). Используется для задания форм / скруглений и т.д.
-   `fontFamily` - токен [семейства шрифтов](#директория-fontFamily). Используется для формирования правил использования шрифтов.
-   `typography` - токен [типографики](#директория-typography). Используется для создания типографической системы.

### Значения токенов

Для того, чтобы найти значение токена, необходимо сопоставить информацию из файла `meta.json`, а именно поля `name` и `type` в массиве `tokens`, с таким же именем в нужной платформе.

> [!IMPORTANT]  
> Гарантируется, что по имени (`name`) токена можно найти значение в каждой платформе.

Например, необходимо получить значение токена c именем `'dark.text.on-light.secondary'` и типом `'color'` дл платформы `web`:

```json
meta.json

{
    "name": "default",
    "version": "0.1.0",
    "tokens": [
        ...
        {
            "type": "color",
            "name": "dark.text.on-light.secondary",
            "tags": [
                "dark",
                "text",
                "on-light",
                "secondary"
            ],
            "displayName": "onLightTextSecondary",
            "description": "Вторичный цвет текста на светлом фоне",
            "enabled": true
        }
        ...
    ],
    ...
}
```

```json
web/web_color.json

{
    ...
    "dark.text.on-light.secondary": "#50B1F2FF",
    ...
}
```

## Директория `themes`

Содержит ряд классов и методов, которые позволяют загружать / редактировать и создавать темы.

### Файл `theme`

Класс `Theme`, который позволяет управлять объектом темы.

-   `getName` - возвращает название темы.
-   `setName` - устанавливает название темы.
-   `getVersion` - возвращает версию темы.
-   `setVersion` - устанавливает версию темы.
-   `getTokens` - возвращает все типы токенов / возвращает токены для конкретного типа если передан параметр.
-   `addToken` - добавляет токен.
-   `removeToken` - удаляет токен.
-   `getTokenValue` - возвращает значение токенов для всех платформ / возвращает значение токенов для конкретной платформы если передан параметр.
-   `setTokenValue` - устанавливает значение токенов для конкретной платформы / устанавливает значение токенов для всех платформ если не передан параметр.

### Файл `builders`

Содержит следующие методы:

-   `buildDefaultTheme` - отвечает за создание экземпляра базовой темы на основе выбранных пользователем параметров.
-   `buildTheme` - отвечает за создание экземпляра темы на основе загруженных из хранилища zip-файлов.
-   `buildMockTheme` - отвечает за создание экземпляра тестовой темы для демонстрации возможности взаимодействия посредством API.

### Файл `createMetaTokens`

Функция, которая создаёт объект с мета информацией на основе экземпляра темы:

```ts
type MetaVariations = Variations<ColorMeta, GradientMeta, ShadowMeta, ShapeMeta, TypographyMeta, FontFamilyMeta>;

interface TokenType {
    type: Variation;
    name: string;
    tags: Array<string>;
    displayName: string;
    description?: string;
    enabled: boolean;
}

interface ThemeMeta extends MetaVariations {
    name: string;
    version: string;
    tokens: Array<TokenType>;
}
```

Так же метод позволяет применять кастомные обработчики, которые могут добавлять дополнительные токены. Например, с помощью метода `getHoverAndActiveMetaTokens` добавляются токены для `active` и `hover` состояний.

### Файл `createVariationTokens`

Функция, которая создаёт объект с набором всех типов токенов для всех поддерживаемых платформ:

```ts
type PlatformsVariations = Variations<
    ColorPlatforms,
    GradientPlatforms,
    ShadowPlatforms,
    ShapePlatforms,
    TypographyPlatforms,
    FontFamilyPlatforms
>;
```

Так же метод позволяет применять кастомные обработчики, которые могут добавлять дополнительные токены. Например, с помощью метода `getHoverAndActiveColorThemeTokens` добавляются токены для `active` и `hover` состояний.

### Файл `readTheme`

Метод, который считывает тему в формате zip-архива из [репозитория](https://github.com/salute-developers/theme-converter/tree/main/themes) и возвращает объект с мета информацией (`ThemeMeta`), а так же объект с набором всех типов токенов для всех поддерживаемых платформ (`PlatformsVariations`).

### Файл `writeTheme`

Метод, который создаёт тему в формате zip-архива используя объект с мета информацией (`ThemeMeta`), а так же объект с набором всех типов токенов для всех поддерживаемых платформ (`PlatformsVariations`).

## Директория `tokens`

Содержит ряд классов для всех типов токенов и для всех платформ, экземпляры которых используются в классе `Theme`.

### Файл `token`

Абстрактный класс `Token`, позволяющий управлять содержимым токена для всех платформ.

-   `getType` - возвращает вид токена.
-   `getName` - возвращает имя токена.
-   `setName` - задает имя токена.
-   `getTags` - возвращает набор тегов.
-   `setTags` - задаёт набор тегов.
-   `getDisplayName` - возвращает имя токена, которое будет отображаться в интерфейсе.
-   `setDisplayName` - задаёт имя токена, которое будет отображаться в интерфейсе.
-   `getDescription` - возвращает описание токена.
-   `setDescription` - задаёт описание токена.
-   `getEnabled` - возвращает состояние токена.
-   `setEnabled` - задаёт состояние токена.
-   `getPlatforms` - возвращает экземпляры классов для всех платформ.
-   `getValue` - возвращает значение токена для конкретной платформы.
-   `setValue` - задаёт значение токена для конкретной платформы.
-   `getTokenData` - возвращает набор всех параметров токена.

### Файл `platformToken`

Абстрактный класс `PlatformToken`, отвечающий за хранения значения у конкретной платформы.

-   `getValue` - возвращает значение токена для конкретной платформы.
-   `setValue` - задаёт значение токена для конкретной платформы.

### Директория `color`

-   `default` - директория, которая содержит набор токенов вида 'цвет' для генерации базовой темы.
-   `color` - содержит класс типа токена `ColorToken`, а также классы платформ `WebColor`, `IOSColor`, `AndroidColor`.
-   `creators` - содержит методы для генерации токенов, которые возвращают экземпляр класса `ColorToken`.
-   `types` - содержит типы для всех платформ.

Типы токенов для всех платформ.

```ts
/* WEB */

interface WebColorToken {
    [k: string]: string;
}

/* IOS */

interface IOSColorToken {
    [k: string]: string;
}

/* ANDROID */

interface AndroidColorToken {
    [k: string]: string;
}
```

### Директория `gradient`

-   `default` - директория, которая содержит набор токенов вида 'градиент' для генерации базовой темы.
-   `gradient` - содержит класс типа токена `GradientToken`, а также классы платформ `WebGradient`, `IOSGradient`, `AndroidGradient`.
-   `creators` - содержит методы для генерации токенов, которые возвращают экземпляр класса `GradientToken`.
-   `types` - содержит типы для всех платформ.

Типы токенов для всех платформ.

```ts
/* WEB */

interface WebGradientToken {
    [k: string]: Array<string>;
}

/* IOS */

interface IOSLinearGradient {
    kind: 'linear';
    locations: Array<number>;
    colors: Array<string>;
    angle: number;
}

interface IOSRadialGradient {
    kind: 'radial';
    locations: Array<number>;
    colors: Array<string>;
    startPointX: number;
    startPointY: number;
    endPointX: number;
    endPointY: number;
}

interface IOSAngularGradient {
    kind: 'angular';
    locations: Array<number>;
    colors: Array<string>;
    startAngle: number;
    endAngle: number;
    centerX: number;
    centerY: number;
}

interface IOSColorGradient {
    kind: 'color';
    background: string;
}

interface IOSGradientToken {
    [k: string]: Array<IOSLinearGradient | IOSRadialGradient | IOSAngularGradient | IOSColorGradient>;
}

/* ANDROID */

interface AndroidLinearGradient {
    kind: 'linear';
    locations: Array<number>;
    colors: Array<string>;
    angle: number;
}

interface AndroidRadialGradient {
    kind: 'radial';
    locations: Array<number>;
    colors: Array<string>;
    centerX: number;
    centerY: number;
    radius: number;
}

interface AndroidAngularGradient {
    kind: 'angular';
    locations: Array<number>;
    colors: Array<string>;
    centerX: number;
    centerY: number;
}

interface AndroidColorGradient {
    kind: 'color';
    background: string;
}

interface AndroidGradientToken {
    [k: string]: Array<AndroidLinearGradient | AndroidRadialGradient | AndroidAngularGradient | AndroidColorGradient>;
}
```

### Директория `shadow`

-   `default` - директория, которая содержит набор токенов вида 'тень' для генерации базовой темы.
-   `shadow` - содержит класс типа токена `ShadowToken`, а также классы платформ `WebShadow`, `IOSShadow`, `AndroidShadow`.
-   `creators` - содержит методы для генерации токенов, которые возвращают экземпляр класса `ShadowToken`.
-   `types` - содержит типы для всех платформ.

Типы токенов для всех платформ.

```ts
/* WEB */

interface WebShadowToken {
    [k: string]: Array<string>;
}

/* IOS */

interface IOSShadowToken {
    [k: string]: {
        color: string;
        offset: {
            width: number;
            height: number;
        };
        opacity: number;
        radius: number;
    };
}

/* ANDROID */

interface AndroidShadowToken {
    [k: string]: {
        color: string;
        elevation: number;
    };
}
```

### Директория `shape`

-   `default` - директория, которая содержит набор токенов вида 'форма' для генерации базовой темы.
-   `shape` - содержит класс типа токена `ShapeToken`, а также классы платформ `WebShape`, `IOSShape`, `AndroidShape`.
-   `creators` - содержит методы для генерации токенов, которые возвращают экземпляр класса `ShapeToken`.
-   `types` - содержит типы для всех платформ.

Типы токенов для всех платформ.

```ts
/* WEB */

interface WebShapeToken {
    [k: string]: string;
}

/* IOS */

interface IOSShapeToken {
    [k: string]: {
        kind: 'round';
        cornerRadius: number;
    };
}

/* ANDROID */

interface AndroidShapeToken {
    [k: string]: {
        kind: 'round';
        cornerRadius: number;
    };
}
```

### Директория `fontFamily`

-   `default` - директория, которая содержит набор токенов вида 'семейства шрифтов' для генерации базовой темы.
-   `fontFamily` - содержит класс типа токена `FontFamilyToken`, а также классы платформ `WebFontFamily`, `IOSFontFamily`, `AndroidFontFamily`.
-   `creators` - содержит методы для генерации токенов, которые возвращают экземпляр класса `FontFamilyToken`.
-   `types` - содержит типы для всех платформ.

Типы токенов для всех платформ.

```ts
/* WEB */

type WebFontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type WebFontStyle = 'normal' | 'italic';

interface WebFont {
    src: Array<string>;
    fontWeight: WebFontWeight;
    fontStyle: WebFontStyle;
}

interface WebFontFamilyToken {
    [k: string]: {
        name: string;
        fonts: Array<WebFont>;
    };
}

/* IOS */

type IOSFontWeight = 'black' | 'bold' | 'heavy' | 'light' | 'medium' | 'regular' | 'semibold' | 'thin' | 'ultraLight';

type IOSFontStyle = 'normal' | 'italic';

interface IOSFont {
    link: string;
    weight: IOSFontWeight;
    style: IOSFontStyle;
}

interface IOSFontFamilyToken {
    [k: string]: {
        name: string;
        fonts: Array<IOSFont>;
    };
}

/* ANDROID */

type AndroidFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type AndroidFontStyle = 'normal' | 'italic';

interface AndroidFont {
    link: string;
    fontWeight: AndroidFontWeight;
    fontStyle: AndroidFontStyle;
}

interface AndroidFontFamilyToken {
    [k: string]: {
        name: string;
        fonts: Array<AndroidFont>;
    };
}
```

### Директория `typography`

-   `default` - директория, которая содержит набор токенов вида 'семейства шрифтов' для генерации базовой темы.
-   `typography` - содержит класс типа токена `TypographyToken`, а также классы платформ `WebTypography`, `IOSTypography`, `AndroidTypography`.
-   `creators` - содержит методы для генерации токенов, которые возвращают экземпляр класса `TypographyToken`.
-   `types` - содержит типы для всех платформ.

Типы токенов для всех платформ.

```ts
/* WEB */

interface WebTypographyToken {
    [k: string]: {
        fontFamilyRef: string;
        fontWeight: WebFontWeight;
        fontStyle: WebFontStyle;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
    };
}

/* IOS */

interface IOSTypographyToken {
    [k: string]: {
        fontFamilyRef: string;
        weight: IOSFontWeight;
        style: IOSFontStyle;
        size: number;
        lineHeight: number;
        kerning: number;
    };
}

/* ANDROID */

interface AndroidTypographyToken {
    [k: string]: {
        fontFamilyRef: string;
        fontWeight: AndroidFontWeight;
        fontStyle: AndroidFontStyle;
        textSize: number;
        lineHeight: number;
        letterSpacing: number;
    };
}
```

## Использование

Примеры основных сценариев использования модуля.

### Создание базовой темы

В файле `examples/buildDefaultThemeWithUserConfig.ts` реализован пример создания базовой темы на основе пользовательских выборов с использованием метода `buildDefaultTheme`.

### Создание и изменение тестовой темы

В файле `examples/buildAndModifyMockTheme.ts` реализован пример создания тестовой темы и различные способы модификации токенов с использованием метода `buildMockTheme`.

### Чтение темы, билд экземпляра и запись zip-архива с темой

В файле `examples/readThemeBuildInstanceAndWrite.ts` реализован пример чтения существующей темы с помощью метода `readTheme`, затем создание экземпляра темы с помощью `buildTheme`, и создание zip-архива с итоговой темой с помощью `writeTheme`.
