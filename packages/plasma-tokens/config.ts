import StyleDictionaryPackage, { Format, Transform, Config } from 'style-dictionary';
import glob from 'fast-glob';
import path from 'path';
import {
    colorIosSwiftCustomFormatter,
    colorKotlinCustomFormatter,
    colorReactNativeCustomFormatter,
    typoReactNativeCustomFormatter,
    typoKotlinCustomFormatter,
    typoIosSwiftCustomFormatter,
    gradientSwiftTransformer,
    gradientKotlinTransformer,
    gradientReactNativeTransformer,
    shadowReactNativeCustomFormatter,
} from './lib/generator';

import { upperFirstLetter } from './lib/themeBuilder/utils';

const platforms = ['ios-swift', 'react-native', 'kotlin'] as const;

const tokensColorPath = `properties/color/brands`;
const tokensTypoPath = `properties/typo/`;
const tokensShadowPath = `properties/shadow/`;

const colorFileNames = glob.sync(path.join(tokensColorPath, '*')).map((filePath) => path.parse(filePath).name);
const typoFileNames = glob.sync(path.join(tokensTypoPath, '*')).map((filePath) => path.parse(filePath).name);
const shadowFileNames = glob.sync(path.join(tokensShadowPath, '*')).map((filePath) => path.parse(filePath).name);

const getStyleDictionaryColorConfig = (brand: string): Config => ({
    source: [path.join(tokensColorPath, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/composeColor', 'color/gradientKotlin'],
            buildPath: `build/`,
            files: [
                {
                    format: 'kotlin/custom/color',
                    destination: `color/color_${brand}_kotlin.kt`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/hex8', 'color/gradientReactNative'],
            buildPath: `build/`,
            files: [
                {
                    format: 'react-native/custom/color',
                    destination: `color/color_${brand}_react-native.ts`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        'ios-swift': {
            transforms: [
                'attribute/cti',
                'name/ti/camel',
                'color/UIColorSwift',
                'content/swift/literal',
                'asset/swift/literal',
                'size/swift/remToCGFloat',
                'font/swift/literal',
                'color/gradientSwift',
            ],
            buildPath: `build/`,
            files: [
                {
                    format: 'ios-swift/custom/color',
                    destination: `color/color_${brand}_ios-swift.swift`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
    },
});

const getStyleDictionaryTypoConfig = (brand: string): Config => ({
    source: [path.join(tokensTypoPath, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: `build/`,
            files: [
                {
                    format: 'kotlin/custom/typo',
                    destination: `typo/typo_${brand}_kotlin.kt`,
                },
            ],
        },
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: `build/`,
            files: [
                {
                    format: 'react-native/custom/typo',
                    destination: `typo/typo_${brand}_react-native.ts`,
                },
            ],
        },
        'ios-swift': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: `build/`,
            files: [
                {
                    format: 'ios-swift/custom/typo',
                    destination: `typo/typo_${brand}_ios-swift.swift`,
                },
            ],
        },
    },
});

const getStyleDictionaryShadowConfig = (brand: string): Config => ({
    source: [path.join(tokensShadowPath, `${brand}.json`)],
    platforms: {
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: `build/`,
            files: [
                {
                    format: 'react-native/custom/shadow',
                    destination: `shadow/shadow_${brand}_react-native.ts`,
                },
            ],
        },
    },
});

interface MapFormatter {
    color: Array<Format & { name: string }>;
    typo: Array<Format & { name: string }>;
    shadow: Array<Format & { name: string }>;
}

const mapFormatter: MapFormatter = {
    color: [
        {
            name: 'kotlin/custom/color',
            formatter: colorKotlinCustomFormatter,
        },
        {
            name: 'react-native/custom/color',
            formatter: colorReactNativeCustomFormatter,
        },
        {
            name: 'ios-swift/custom/color',
            formatter: colorIosSwiftCustomFormatter,
        },
    ],
    typo: [
        {
            name: 'kotlin/custom/typo',
            formatter: typoKotlinCustomFormatter,
        },
        {
            name: 'react-native/custom/typo',
            formatter: typoReactNativeCustomFormatter,
        },
        {
            name: 'ios-swift/custom/typo',
            formatter: typoIosSwiftCustomFormatter,
        },
    ],
    shadow: [
        {
            name: 'react-native/custom/shadow',
            formatter: shadowReactNativeCustomFormatter,
        },
    ],
};
interface MapTransformer {
    color: Array<Transform & { name: string }>;
}

const mapTransformer: MapTransformer = {
    color: [
        {
            name: 'color/gradientSwift',
            type: 'value',
            transformer: gradientSwiftTransformer,
        },
        {
            name: 'color/gradientReactNative',
            type: 'value',
            transformer: gradientReactNativeTransformer,
        },
        {
            name: 'color/gradientKotlin',
            type: 'value',
            transformer: gradientKotlinTransformer,
        },
    ],
};

colorFileNames.forEach((brand) =>
    platforms.forEach((platform) => {
        const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryColorConfig(brand));

        mapFormatter.color.forEach((formatter) => styleDictionary.registerFormat(formatter));
        mapTransformer.color.forEach((transformer) => styleDictionary.registerTransform(transformer));

        styleDictionary.buildPlatform(platform);
    }),
);

typoFileNames.forEach((brand) =>
    platforms.forEach((platform) => {
        const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryTypoConfig(brand));

        mapFormatter.typo.forEach((formatter) => styleDictionary.registerFormat(formatter));

        styleDictionary.buildPlatform(platform);
    }),
);

shadowFileNames.forEach((brand) => {
    const reactNativePlatform = platforms[1];

    const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryShadowConfig(brand));

    mapFormatter.shadow.forEach((formatter) => styleDictionary.registerFormat(formatter));

    styleDictionary.buildPlatform(reactNativePlatform);
});

const styleDictionaryLegacy = StyleDictionaryPackage.extend('./config.json');
styleDictionaryLegacy.buildAllPlatforms();
