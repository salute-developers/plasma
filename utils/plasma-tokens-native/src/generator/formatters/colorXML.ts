import type { Dictionary, File, TransformedToken } from 'style-dictionary';
import { lowerFirstLetter } from '@salutejs/plasma-tokens-utils';

import type { GradientType, Point } from '../../types';

const snakelize = (str: string) => str.replace(/([A-Z])/g, '_$1').toLowerCase();

const getXMLTemplate = (themeContent: string) => {
    const header = '<?xml version="1.0" encoding="UTF-8"?>';

    const resources = `<resources>
  ${themeContent}
</resources>`;

    return [header, resources].join('\n');
};

const getLinearGradient = (name: string, base: string, layerNumber: string) => (startPoint: Point, endPoint: Point) => {
    const items = `<item name="${name}${layerNumber}_start_point_x" format="float" type="dimen">${startPoint.x}</item>
  <item name="${name}${layerNumber}_start_point_y" format="float" type="dimen">${startPoint.y}</item>
  <item name="${name}${layerNumber}_end_point_x" format="float" type="dimen">${endPoint.x}</item> 
  <item name="${name}${layerNumber}_end_point_y" format="float" type="dimen">${endPoint.y}</item>`;

    return [base, items].join('\n  ');
};

const getRadialGradient = (name: string, base: string, layerNumber: string) => (center: Point, radius: Point) => {
    const items = `<item name="${name}${layerNumber}_center_x" format="float" type="dimen">${center.x}</item>
  <item name="${name}${layerNumber}_center_y" format="float" type="dimen">${center.y}</item>
  <item name="${name}${layerNumber}_start_radius" format="float" type="dimen">${radius.x}</item> 
  <item name="${name}${layerNumber}_end_radius" format="float" type="dimen">${radius.y}</item>`;

    return [base, items].join('\n  ');
};

interface GradientToken {
    name: string;
    type: GradientType;
    layerNumber: string;
    comment?: string;
    colors: [string, string];
    locations: [number, number];
}

const getColors = (color: string, name: string, layerNumber: string, index: number) =>
    `<color name="${name}${layerNumber}_color_${index}">${color}</color>`;

const getLocations = (location: number, name: string, layerNumber: string, index: number) =>
    `<item name="${name}${layerNumber}_position_${index}" format="float" type="dimen">${location}</item>`;

const getGradient = ({ name, type, layerNumber, comment, colors, locations }: GradientToken) => {
    const base = `<!-- ${comment} -->
  ${colors.map((color, index) => getColors(color, name, layerNumber, index)).join('\n  ')}
  ${locations.map((location, index) => getLocations(location, name, layerNumber, index)).join('\n  ')}`;

    if (type === '.linear') {
        return getLinearGradient(name, base, layerNumber);
    }

    if (type === '.radial') {
        return getRadialGradient(name, base, layerNumber);
    }
};

const getGradientToken = (name: string, gradient: any, comment?: string, layer?: number) => {
    const { colors, locations, type } = gradient;
    const layerNumber = layer !== undefined ? `_z${layer}` : '';

    if (!type) {
        return `<color name="${name}${layerNumber}_background_color">${gradient.backgroundColor}</color>`;
    }

    const getGradientTokenFunc = getGradient({
        name,
        type,
        comment,
        colors,
        locations,
        layerNumber,
    });

    if (!getGradientTokenFunc) {
        return;
    }

    if (type === '.linear') {
        return getGradientTokenFunc(gradient.startPoint, gradient.endPoint);
    }

    if (type === '.radial') {
        return getGradientTokenFunc(gradient.center, gradient.radius);
    }
};

const getTokenValue = (token: TransformedToken, themeName: string) => {
    const hardcodePrefix = themeName.includes('styles_salute') ? 'sdkit_' : ''; // INFO: Условие специально для темы saluteStyles

    const name = token.name.replace(`color_${themeName}_`, hardcodePrefix);
    const { comment } = token;
    const { value } = token.original;

    if (Array.isArray(value)) {
        const { gradient: gradients } = token.value;
        const layersCount = gradients.length;

        return gradients
            .map((gradient: any, index: number) => getGradientToken(name, gradient, comment, layersCount - index - 1))
            .join('\n  ');
    }

    if (value.xml) {
        const { gradient } = token.value;
        return getGradientToken(name, gradient, comment);
    }

    return `<color name="${name}">${token.value}</color><!-- ${comment} -->`;
};

const hasXMLInGradient = (value: any, gradients: any) =>
    !(Array.isArray(value) && gradients.some((item: any) => item === undefined));

const getTheme = (tokenItems: TransformedToken[], themeName: string) =>
    tokenItems
        .filter(({ original, value }) => hasXMLInGradient(original.value, value.gradient))
        .map((item) => getTokenValue(item, themeName))
        .join('\n  ');

export const colorXMLCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = snakelize(lowerFirstLetter(file.className || ''));
    const theme = getTheme(dictionary.allTokens, themeName);

    return getXMLTemplate(theme);
};
