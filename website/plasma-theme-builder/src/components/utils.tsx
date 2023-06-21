import React, { createContext } from 'react';
import { nanoid } from 'nanoid';
import { GeneralColor, TokenContextHandlers } from './types';
import { PreviewRect } from './PreviewRect/PreviewRect';
import { PlasmaSaturation, general as generalColors } from '@salutejs/plasma-colors';

const rgbaToHexA = (rgbaOrigin: string) => {
    const separator = rgbaOrigin.includes(',') ? ',' : ' ';
    const rgba = rgbaOrigin.substring(5).replace(')', '');
    const rgbaArray = rgba.split(separator);

    let [r, g, b, a] = [
        Number(rgbaArray[0]).toString(16),
        Number(rgbaArray[1]).toString(16),
        Number(rgbaArray[2]).toString(16),
        Math.round(Number(rgbaArray[3]) * 255).toString(16),
    ];

    const color = [r, g, b, a].reduce((result, code) => result + (code.length === 1 ? `0${code}` : code), '');

    return `#${color}`.toUpperCase();
};

const hexAToRGBA = (hex: string) => ({
    r: Number(`0x${hex[1]}${hex[2]}`),
    g: Number(`0x${hex[3]}${hex[4]}`),
    b: Number(`0x${hex[5]}${hex[6]}`),
    a: hex[7] && hex[8] ? Number(`0x${hex[7]}${hex[8]}`) : 255,
});

const getNormalizeValue = (value: number) => Number((value / 255).toFixed(3));

export const getHEXA = (value: string) => {
    if (value.startsWith('#')) {
        return value.length < 8 ? `${value}FF` : value;
    }

    return rgbaToHexA(value);
};

export const getRGBA = (color: string) => {
    const hex = getHEXA(color);
    const colors = hexAToRGBA(hex);
    const [red, green, blue, alpha] = Object.values(colors).map(getNormalizeValue);

    return `${red}, ${green}, ${blue}, ${alpha}`;
};

export const getUUID = () => {
    const value = window.localStorage.getItem('uuid');

    if (value) {
        return value;
    }

    const pluginClientId = nanoid();
    window.localStorage.setItem('uuid', pluginClientId);

    return pluginClientId;
};

export const getURLParams = (params: string[]) => {
    const paramsFromURL = new URL(window.location.toString()).searchParams;

    return params.reduce((acc: (string | undefined)[], param) => {
        acc.push(paramsFromURL.get(param) || undefined);
        return acc;
    }, []);
};

export const clearURLParam = () => (window.location.href = '/');

export const downloadFile = (fileContent: string, fileName: string, fileType: string) => {
    const blob = new Blob([fileContent], {
        type: fileType,
    });
    const link = document.createElement('a');
    document.body.appendChild(link);

    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    link.remove();
};

export const emptyInputData = {
    section: {
        value: '',
        status: undefined,
    },
    subsection: {
        value: '',
        status: undefined,
    },
    name: {
        value: '',
        status: undefined,
    },
    value: {
        value: '',
        status: undefined,
    },
    comment: undefined,
};

export const TokenContext = createContext<TokenContextHandlers>({
    onOpenTokenForm: () => {},
    onTokenDelete: () => {},
    onTokenEnabled: () => {},
    onTokensSubsectionEnabled: () => {},
    onTokensSectionEnabled: () => {},
});

export const getFilesPath = (name?: string) => ({
    theme: `packages/plasma-tokens/data/themes/${name}.json`,
});

export const getFilesTree = (themeContent: string, name: string) => ({
    [getFilesPath(name).theme]: themeContent,
});

export const getSaturations = (accentColors: GeneralColor = 'red') =>
    Object.keys(generalColors.amber).map((name: any) => ({
        value: name,
        label: name,
        contentLeft: <PreviewRect background={generalColors[accentColors][name as PlasmaSaturation]} />,
    }));

export const getAccentColors = () =>
    Object.entries(generalColors).map(([name, item]) => ({
        value: name as GeneralColor,
        label: name,
        contentLeft: <PreviewRect background={item['500']} />,
    }));
