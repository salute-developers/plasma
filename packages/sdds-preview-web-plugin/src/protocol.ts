/**
 * Preview Protocol v1 со стороны web-плагина. Форматы сообщений совпадают с тем, что отправляет и ждёт
 * `ComposePreviewSession` клиента DS Builder; код клиента плагин не импортирует.
 * Схема payload — контракт Preview Protocol DS Builder (`backend-kt/preview/contract` репозитория DS Builder):
 * у `WEB` тот же формат, что у `COMPOSE`. Совместимость с ним проверяется вручную: копии контракта здесь нет.
 */
export const PREVIEW_PROTOCOL_VERSION = 1;

export const PREVIEW_MESSAGE_TYPES = {
    ready: 'sdds.preview.ready',
    payload: 'sdds.preview.payload',
    result: 'sdds.preview.result',
    describe: 'sdds.preview.describe',
    description: 'sdds.preview.description',
} as const;

export type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

/** Источник значения свойства (`$defs/propertySource` схемы). */
export type PreviewPropertySource =
    | { type: 'literal'; value: JsonValue; alpha?: number }
    | { type: 'tokenRef'; tokenId: string; alpha?: number }
    | { type: 'styleRef'; styleId: string }
    | { type: 'assetRef'; assetId: string };

/** Значение свойства в состоянии: `when` — имена состояний (`hovered`, `pressed`, …). */
export interface PreviewStateEntry {
    when: string[];
    source: PreviewPropertySource;
}

/** Значение свойства по каноническому имени: базовое и упорядоченные состояния. */
export interface PreviewPropertyValue {
    base: PreviewPropertySource;
    states?: PreviewStateEntry[];
}

export interface PreviewShadowLayer {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: string;
}

export interface PreviewGradientLayer {
    kind: 'linear';
    angle: number;
    stops: Array<{ color: string; position: number }>;
}

export interface PreviewFontFace {
    assetId: string;
    weight: number;
    style?: 'NORMAL' | 'ITALIC';
}

/** Значение токена темы в единицах протокола (`$defs/tokenValue`): размеры в px, цвета `#RRGGBBAA`. */
export type PreviewTokenValue =
    | { type: 'color'; value: string }
    | { type: 'dimension'; value: number }
    | { type: 'shape'; cornerRadii: [number, number, number, number] }
    | { type: 'shadow'; layers: PreviewShadowLayer[] }
    | { type: 'fontFamily'; family?: string; faces: PreviewFontFace[]; allowFallback?: boolean }
    | {
          type: 'typography';
          fontFamilyTokenId: string;
          fontSize: number;
          lineHeight: number;
          letterSpacing: number;
          weight: number;
          fontStyle?: 'NORMAL' | 'ITALIC';
      }
    | { type: 'gradient'; layers: PreviewGradientLayer[] };

export type PreviewAssetType = 'TTF' | 'OTF' | 'WOFF' | 'WOFF2' | 'SVG' | 'PNG';

export interface PreviewAsset {
    id: string;
    type: PreviewAssetType;
    url: string;
    digest?: string;
}

/**
 * Запись `styles`. С `variation` и `name` — стиль вариации связанного компонента (`default: true` — стиль по
 * умолчанию вариации), с `invariant: true` — его инварианты; без этих полей — вложенный стиль для `styleRef`.
 */
export interface PreviewStyle {
    component: string;
    properties: Record<string, PreviewPropertyValue>;
    variation?: string;
    name?: string;
    default?: boolean;
    invariant?: boolean;
}

/**
 * Payload Preview Protocol v1 платформы `WEB` — тот же формат, что у `COMPOSE` (схема `preview-payload.schema.json`).
 */
export interface PreviewPayload {
    protocolVersion: 1;
    requestId: string;
    platform: 'WEB';
    assets: PreviewAsset[];
    theme: Record<string, PreviewTokenValue>;
    component: {
        id: string;
        variations: Record<string, string>;
        properties: Record<string, PreviewPropertyValue>;
    };
    example: { id: string; props: Record<string, JsonValue> };
    surface?: { width: number; height: number; background?: string };
    styles: Record<string, PreviewStyle>;
    defaults?: {
        text?: { style?: string; color?: string };
        styles?: Record<string, string>;
    };
}

/**
 * Конфиг связанного компонента для story в CSS-переменных ядра: стиль по умолчанию каждой вариации,
 * CSS-переменные по стилям каждой вариации и инварианты. Из него `themeConfig.ts` собирает конфиг темы.
 */
export interface ResolvedRelatedComponent {
    /** Вариация → имя стиля по умолчанию. */
    defaults: Record<string, string>;
    /** Вариация → стиль → CSS-переменная ядра → значение. */
    variations: Record<string, Record<string, Record<string, string>>>;
    /** CSS-переменная ядра → значение. */
    invariants: Record<string, string>;
}

/** Результат `resolvePayload`: всё, что нужно отрисовке, без DOM и React. */
export interface ResolvedPreview {
    /**
     * CSS-переменные области превью в порядке перекрытия прежнего React-превью клиента:
     * связанные компоненты `compose`, поверх — компонент, поверх — цвета темы.
     */
    variables: Record<string, string>;
    /** CSS-переменные ядра выбранного компонента. */
    componentVariables: Record<string, string>;
    /** CSS-переменные ядра связанных компонентов `compose` (бывший `relatedProperties`). */
    relatedVariables: Record<string, string>;
    /** CSS-переменные цветов темы (`--text-primary` и т. п.). */
    themeVariables: Record<string, string>;
    /** Конфиги связанных компонентов из `styles` по имени компонента. */
    relatedComponents: Record<string, ResolvedRelatedComponent>;
    /** Правила `@font-face` по ресурсам шрифтов. */
    fontFaces: string;
    /** Начертания из `fontFaces`, которых плагин дожидается перед ответом. */
    fontLoads: ResolvedFontLoad[];
    /** `font-family` области превью: шрифт тела. */
    fontFamily?: string;
    /** CSS-значение фона области превью. */
    background?: string;
    warnings: PreviewWarning[];
}

/** Начертание токена `fontFamily`, подключённое правилом `@font-face`. */
export interface ResolvedFontLoad {
    tokenId: string;
    family: string;
    weight: number;
    style: 'normal' | 'italic';
    allowFallback: boolean;
}

/** Payload `WEB` после проверки и разрешения. */
export interface WebPreviewRequest {
    requestId: string;
    componentId: string;
    variations: Record<string, string>;
    example: { id: string; props: Record<string, JsonValue> };
    payload: PreviewPayload;
    resolved: ResolvedPreview;
    warnings: PreviewWarning[];
}

export type PreviewExamplePropertyDescription =
    | { type: 'string'; name: string; defaultValue: string }
    | { type: 'boolean'; name: string; defaultValue: boolean }
    | { type: 'int'; name: string; defaultValue: number }
    | { type: 'float'; name: string; defaultValue: number }
    | { type: 'singleChoice'; name: string; defaultValue: string; variants: string[] };

export interface PreviewStoryDescription {
    /** Совпадает с `name`. */
    id: string;
    name: string;
}

export interface PreviewComponentDescription {
    protocolVersion: 1;
    componentId: string;
    /** Описываемая story. */
    storyId: string;
    /** Все story компонента; первая — по умолчанию. */
    stories: PreviewStoryDescription[];
    properties: PreviewExamplePropertyDescription[];
}

export interface PreviewWarning {
    code: string;
    message: string;
    path?: string;
}

export interface PreviewFailureDetails {
    stack?: string;
    consoleError?: string;
}

export interface PreviewResultSuccess {
    type: 'success';
    requestId: string;
    warnings?: PreviewWarning[];
}

export interface PreviewResultFailure {
    type: 'failure';
    requestId: string;
    code: string;
    message: string;
    path?: string;
    details?: PreviewFailureDetails;
}

export type PreviewResult = PreviewResultSuccess | PreviewResultFailure;

export type PreviewComponentDescriptionResult =
    | { type: 'success'; requestId: string; description: PreviewComponentDescription }
    | PreviewResultFailure;

export interface PreviewReadyEnvelope {
    type: typeof PREVIEW_MESSAGE_TYPES.ready;
    protocolVersion: number;
}

export interface PreviewResultEnvelope {
    type: typeof PREVIEW_MESSAGE_TYPES.result;
    protocolVersion: number;
    requestId: string;
    result: PreviewResult;
}

export interface PreviewDescriptionEnvelope {
    type: typeof PREVIEW_MESSAGE_TYPES.description;
    protocolVersion: number;
    requestId: string;
    result: PreviewComponentDescriptionResult;
}
