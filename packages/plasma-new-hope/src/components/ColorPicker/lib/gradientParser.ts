import tinycolor from 'tinycolor2';

import { GRADIENT_TOKENS } from './const';
import { high, low } from './colorStopFormatters';
import { isUpperCase } from './utils';

export type MatchType =
    | 'hex'
    | 'literal'
    | 'px'
    | 'em'
    | '%'
    | 'angular'
    | 'directional'
    | 'extent-keyword'
    | 'position-keyword'
    | 'position'
    | 'shape';

export interface MatchResult {
    type: MatchType;
    value: string;
}

export interface ColorStop {
    value: string; // всегда rgba(...) или RGBA(...)
    left: number; // всегда %, parseInt отсюда
}

export interface DirectionalOrientation extends MatchResult {
    type: 'directional';
}

export interface AngularOrientation extends MatchResult {
    type: 'angular';
}

export interface PositionValue {
    x: MatchResult | undefined;
    y: MatchResult | undefined;
}

export interface PositionNode {
    type: 'position';
    value: PositionValue;
}

export interface ShapeNode {
    type: 'shape';
    value: string;
    style: MatchResult | undefined;
    at?: PositionNode;
}

export interface ExtentKeywordNode {
    type: 'extent-keyword';
    value: string;
    at?: PositionNode;
}

export interface DefaultRadialNode {
    type: 'default-radial';
    at: PositionNode;
}

// Линейный — один объект, радиальный — массив
export type LinearOrientation = DirectionalOrientation | AngularOrientation;
export type RadialOrientation = ShapeNode | ExtentKeywordNode | DefaultRadialNode | PositionNode;

export type GradientType =
    | 'linear-gradient'
    | 'repeating-linear-gradient'
    | 'radial-gradient'
    | 'repeating-radial-gradient';

export interface GradientNode {
    type: GradientType;
    orientation: LinearOrientation | RadialOrientation[] | undefined;
    colorStops: ColorStop[];
}

/**
 * Цвет считается "выбранным" если его значение записано в верхнем регистре (например RGBA вместо rgba).
 * Это соглашение используется, для того чтобы отличить пользовательски выбранные цвета
 * от цветов которым ещё не назначено форматирование.
 */
const isColorStopSelected = (colorStop: ColorStop): boolean => isUpperCase(colorStop.value);

const hasSelectedColorStop = (colorStops: ColorStop[]): boolean => colorStops.some(isColorStopSelected);

const applyDefaultFormatting = (colorStops: ColorStop[]): ColorStop[] =>
    colorStops.map((c, i) => ({
        ...c,
        value: i === 0 ? high(c) : low(c),
    }));

export const gradientParser = (input = ''): GradientNode => {
    const state = { input };

    function consume(size: number): void {
        state.input = state.input.slice(size);
    }

    function error(msg: string): never {
        throw new Error(`${state.input}: ${msg}`);
    }

    function scan(regexp: RegExp): RegExpExecArray | null {
        const blankCaptures = /^[\n\r\t\s]+/.exec(state.input);
        if (blankCaptures) consume(blankCaptures[0].length);

        const captures = regexp.exec(state.input);
        if (captures) consume(captures[0].length);

        return captures;
    }

    function match(type: MatchType, pattern: RegExp, captureIndex: number): MatchResult | undefined {
        const captures = scan(pattern);
        return captures ? { type, value: captures[captureIndex] } : undefined;
    }

    function matchListing<T>(matcher: () => T | undefined): T[] {
        let captures = matcher();
        const result: T[] = [];

        if (captures) {
            result.push(captures);
            while (scan(GRADIENT_TOKENS.comma)) {
                captures = matcher();
                if (captures) {
                    result.push(captures);
                } else {
                    error('One extra comma');
                }
            }
        }

        return result;
    }

    function matchCall<T>(pattern: RegExp, callback: (captures: RegExpExecArray) => T): T | undefined {
        const captures = scan(pattern);
        if (!captures) return undefined;

        if (!scan(GRADIENT_TOKENS.startCall)) error('Missing (');
        const result = callback(captures);
        if (!scan(GRADIENT_TOKENS.endCall)) error('Missing )');

        return result;
    }

    function matchNumber(): string | undefined {
        return scan(GRADIENT_TOKENS.number)?.[1];
    }

    function matchHexColor(): Pick<ColorStop, 'value'> | undefined {
        const hexObj = match('hex', GRADIENT_TOKENS.hexColor, 1);
        if (!hexObj?.value) return undefined;

        const { r, g, b, a } = tinycolor(hexObj.value).toRgb();
        return { value: `rgba(${r}, ${g}, ${b}, ${a})` };
    }

    function matchLiteralColor(): Pick<ColorStop, 'value'> | undefined {
        const litObj = match('literal', GRADIENT_TOKENS.literalColor, 0);
        if (!litObj?.value) return undefined;

        const { r, g, b, a } = tinycolor(litObj.value).toRgb();
        return { value: `rgba(${r}, ${g}, ${b}, ${a})` };
    }

    const convertHsl = (captures: RegExpExecArray): Pick<ColorStop, 'value'> => {
        const capIt = isUpperCase(captures[0]);
        const hsl = matchListing(matchNumber);
        const { r, g, b, a } = tinycolor({
            h: Number(hsl[0]),
            s: Number(hsl[1]),
            l: Number(hsl[2]),
            a: Number(hsl[3]) || 1,
        }).toRgb();
        return { value: `${capIt ? 'RGBA' : 'rgba'}(${r}, ${g}, ${b}, ${a})` };
    };

    const convertHsv = (captures: RegExpExecArray): Pick<ColorStop, 'value'> => {
        const capIt = isUpperCase(captures[0]);
        const hsv = matchListing(matchNumber);
        const { r, g, b, a } = tinycolor({
            h: Number(hsv[0]),
            s: Number(hsv[1]),
            v: Number(hsv[2]),
            a: Number(hsv[3]) || 1,
        }).toRgb();
        return { value: `${capIt ? 'RGBA' : 'rgba'}(${r}, ${g}, ${b}, ${a})` };
    };

    const convertRgb = (captures: RegExpExecArray): Pick<ColorStop, 'value'> => {
        const capIt = isUpperCase(captures[0]);
        const spaced = scan(GRADIENT_TOKENS.spacedRgbColor);
        const [, r, g, b, a = '1'] = spaced ?? [null, ...matchListing(matchNumber)];
        return { value: `${capIt ? 'RGBA' : 'rgba'}(${r}, ${g}, ${b}, ${a})` };
    };

    const checkCaps = (captures: RegExpExecArray): Pick<ColorStop, 'value'> => {
        const capIt = isUpperCase(captures[0]);
        return { value: `${capIt ? 'RGBA' : 'rgba'}(${matchListing(matchNumber)})` };
    };

    function matchHSLColor() {
        return matchCall(GRADIENT_TOKENS.hslColor, convertHsl);
    }

    function matchHSVColor() {
        return matchCall(GRADIENT_TOKENS.hsvColor, convertHsv);
    }

    function matchRGBColor() {
        return matchCall(GRADIENT_TOKENS.rgbColor, convertRgb);
    }

    function matchRGBAColor() {
        return matchCall(GRADIENT_TOKENS.rgbaColor, checkCaps);
    }

    function matchColor(): Pick<ColorStop, 'value'> | undefined {
        return (
            matchHexColor() ||
            matchHSLColor() ||
            matchRGBAColor() ||
            matchRGBColor() ||
            matchLiteralColor() ||
            matchHSVColor()
        );
    }

    function matchLength(): MatchResult | undefined {
        return match('px', GRADIENT_TOKENS.pixelValue, 1) || match('em', GRADIENT_TOKENS.emValue, 1);
    }

    function matchDistance(): MatchResult | undefined {
        return match('%', GRADIENT_TOKENS.percentageValue, 1) || matchPositionKeyword() || matchLength();
    }

    function matchPositionKeyword(): MatchResult | undefined {
        return match('position-keyword', GRADIENT_TOKENS.positionKeywords, 1);
    }

    function matchColorStop(): ColorStop {
        const color = matchColor();
        if (!color) error('Expected color definition');

        return {
            ...color,
            left: parseInt(matchDistance()?.value ?? '0', 10),
        };
    }

    function matchSideOrCorner(): DirectionalOrientation | undefined {
        return match('directional', GRADIENT_TOKENS.sideOrCorner, 1) as DirectionalOrientation | undefined;
    }

    function matchAngle(): AngularOrientation | undefined {
        return match('angular', GRADIENT_TOKENS.angleValue, 1) as AngularOrientation | undefined;
    }

    function matchLinearOrientation(): LinearOrientation | undefined {
        return matchSideOrCorner() || matchAngle();
    }

    function matchExtentKeyword(): ExtentKeywordNode | undefined {
        return match('extent-keyword', GRADIENT_TOKENS.extentKeywords, 1) as ExtentKeywordNode | undefined;
    }

    function matchCoordinates(): PositionValue {
        return {
            x: matchDistance(),
            y: matchDistance(),
        };
    }

    function matchPositioning(): PositionNode | undefined {
        const location = matchCoordinates();
        if (!location.x && !location.y) return undefined;

        return {
            type: 'position',
            value: location,
        };
    }

    function matchAtPosition(): PositionNode | undefined {
        if (!match('position', /^at/, 0)) return undefined;

        const positioning = matchPositioning();
        if (!positioning) error('Missing positioning value');

        return positioning;
    }

    function matchCircle(): ShapeNode | undefined {
        const circle = match('shape', /^(circle)/i, 0);
        if (!circle) return undefined;

        return {
            type: 'shape',
            value: circle.value,
            style: matchLength() || matchExtentKeyword(),
            at: matchAtPosition(),
        };
    }

    function matchEllipse(): ShapeNode | undefined {
        const ellipse = match('shape', /^(ellipse)/i, 0);
        if (!ellipse) return undefined;

        return {
            type: 'shape',
            value: ellipse.value,
            style: matchDistance() || matchExtentKeyword(),
            at: matchAtPosition(),
        };
    }

    function matchRadialOrientation(): RadialOrientation | undefined {
        const shape = matchCircle() || matchEllipse();
        if (shape) return shape;

        const extent = matchExtentKeyword();
        if (extent) return { ...extent, at: matchAtPosition() };

        const defaultPosition = matchPositioning();
        if (defaultPosition) {
            return {
                type: 'default-radial',
                at: defaultPosition,
            };
        }

        return undefined;
    }

    function matchListRadialOrientations(): RadialOrientation[] | undefined {
        const radialOrientation = matchRadialOrientation();
        if (!radialOrientation) return undefined;

        const radialOrientations: RadialOrientation[] = [radialOrientation];
        const lookaheadCache = state.input;

        if (scan(GRADIENT_TOKENS.comma)) {
            const next = matchRadialOrientation();
            if (next) {
                radialOrientations.push(next);
            } else {
                state.input = lookaheadCache;
            }
        }

        return radialOrientations;
    }

    function matchGradient(
        gradientType: GradientType,
        pattern: RegExp,
        orientationMatcher: () => LinearOrientation | RadialOrientation[] | undefined,
    ): GradientNode | undefined {
        return matchCall(pattern, () => {
            const orientation = orientationMatcher();
            if (orientation) {
                if (!scan(GRADIENT_TOKENS.comma)) error('Missing comma before color stops');
            }

            return {
                type: gradientType,
                orientation,
                colorStops: matchListing(matchColorStop),
            };
        });
    }

    function matchDefinition(): GradientNode | undefined {
        return (
            matchGradient('linear-gradient', GRADIENT_TOKENS.linearGradient, matchLinearOrientation) ||
            matchGradient(
                'repeating-linear-gradient',
                GRADIENT_TOKENS.repeatingLinearGradient,
                matchLinearOrientation,
            ) ||
            matchGradient('radial-gradient', GRADIENT_TOKENS.radialGradient, matchListRadialOrientations) ||
            matchGradient(
                'repeating-radial-gradient',
                GRADIENT_TOKENS.repeatingRadialGradient,
                matchListRadialOrientations,
            )
        );
    }

    function matchListDefinitions(): GradientNode[] {
        return matchListing(matchDefinition);
    }

    function getAST(): GradientNode {
        const ast = matchListDefinitions();

        if (state.input.length > 0) {
            error('Invalid input not EOF');
        }

        const ast0 = ast[0];

        if (hasSelectedColorStop(ast0.colorStops)) {
            return ast0;
        }

        return {
            ...ast0,
            colorStops: applyDefaultFormatting(ast0.colorStops),
        };
    }

    return getAST();
};
