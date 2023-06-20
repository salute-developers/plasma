import StyleDictionaryPackage, { Format, Transform, Config } from 'style-dictionary';
import glob from 'fast-glob';
import path from 'path';
import { upperFirstLetter } from '@salutejs/plasma-tokens-utils';

import {
    colorIosSwiftCustomFormatter,
    colorKotlinCustomFormatter,
    colorReactNativeCustomFormatter,
    colorXMLCustomFormatter,
    typoReactNativeCustomFormatter,
    typoKotlinCustomFormatter,
    typoIosSwiftCustomFormatter,
    gradientSwiftTransformer,
    gradientKotlinTransformer,
    gradientReactNativeTransformer,
    gradientXMLTransformer,
    shadowReactNativeCustomFormatter,
} from './src/generator';

const styles = {
    color: {
        path: 'properties/color/',
        platforms: ['ios-swift', 'react-native', 'kotlin', 'xml'],
    },
    typo: {
        path: 'properties/typo/',
        platforms: ['ios-swift', 'react-native', 'kotlin'],
    },
    shadow: {
        path: 'properties/shadow/',
        platforms: ['react-native'],
    },
};

const colorFileNames = glob.sync(path.join(styles.color.path, '*')).map((filePath) => path.parse(filePath).name);
const typoFileNames = glob.sync(path.join(styles.typo.path, '*')).map((filePath) => path.parse(filePath).name);
const shadowFileNames = glob.sync(path.join(styles.shadow.path, '*')).map((filePath) => path.parse(filePath).name);

const getStyleDictionaryColorConfig = (brand: string): Config => ({
    source: [path.join(styles.color.path, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/composeColor', 'color/gradientKotlin'],
            buildPath: 'build/',
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
            buildPath: 'build/',
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
            buildPath: 'build/',
            files: [
                {
                    format: 'ios-swift/custom/color',
                    destination: `color/color_${brand}_ios-swift.swift`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        xml: {
            transforms: ['attribute/cti', 'name/cti/snake', 'color/hex8android', 'color/gradientXML'],
            buildPath: 'build/',
            files: [
                {
                    format: 'xml/custom/color',
                    destination: `color/color_${brand}_xml.xml`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
    },
});

const getStyleDictionaryTypoConfig = (brand: string): Config => ({
    source: [path.join(styles.typo.path, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'kotlin/custom/typo',
                    destination: `typo/typo_${brand}_kotlin.kt`,
                },
            ],
        },
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'react-native/custom/typo',
                    destination: `typo/typo_${brand}_react-native.ts`,
                },
            ],
        },
        'ios-swift': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
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
    source: [path.join(styles.shadow.path, `${brand}.json`)],
    platforms: {
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
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
        {
            name: 'xml/custom/color',
            formatter: colorXMLCustomFormatter,
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
        {
            name: 'color/gradientXML',
            type: 'value',
            transformer: gradientXMLTransformer,
        },
    ],
};

colorFileNames.forEach((brand) =>
    styles.color.platforms.forEach((platform) => {
        const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryColorConfig(brand));

        mapFormatter.color.forEach((formatter) => styleDictionary.registerFormat(formatter));
        mapTransformer.color.forEach((transformer) => styleDictionary.registerTransform(transformer));

        styleDictionary.buildPlatform(platform);
    }),
);

typoFileNames.forEach((brand) =>
    styles.typo.platforms.forEach((platform) => {
        const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryTypoConfig(brand));

        mapFormatter.typo.forEach((formatter) => styleDictionary.registerFormat(formatter));

        styleDictionary.buildPlatform(platform);
    }),
);

shadowFileNames.forEach((brand) =>
    styles.shadow.platforms.forEach((platform) => {
        const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryShadowConfig(brand));

        mapFormatter.shadow.forEach((formatter) => styleDictionary.registerFormat(formatter));

        styleDictionary.buildPlatform(platform);
    }),
);
