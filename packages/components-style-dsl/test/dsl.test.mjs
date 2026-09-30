import assert from 'node:assert/strict';
import test from 'node:test';

import {
    collectRegisteredStyleApiMeta,
    color,
    componentStyle,
    defineStyleTokenApi,
    dimension,
    resetStyleTokenApiRegistry,
    typography,
} from '../dist/esm/index.js';

test.beforeEach(() => resetStyleTokenApiRegistry());

test('collects token keys and applies mappings without changing token declarations', () => {
    defineStyleTokenApi({
        commonInfo: {
            componentName: 'Example',
            source: { packageName: '@example/components' },
        },
        tokens: [{ background: '--example-background', gap: '--example-gap' }],
        mapping: {
            surface: color('background'),
        },
    });

    assert.deepEqual(collectRegisteredStyleApiMeta(), [
        {
            componentName: 'Example',
            source: { packageName: '@example/components' },
            params: [
                {
                    paramName: 'background',
                    type: 'color',
                    id: 'surface',
                },
                {
                    paramName: 'gap',
                },
            ],
        },
    ]);
});

test('provides mapping helpers for supported property types', () => {
    const mapping = dimension('gap');
    assert.equal(mapping.type, 'dimension');
    assert.equal(mapping.target, 'gap');
    assert.deepEqual(mapping.states, []);
});

test('maps compound typography and component_style properties in the same way', () => {
    defineStyleTokenApi({
        commonInfo: { componentName: 'Compound', source: { packageName: '@example/components' } },
        tokens: [
            {
                fontFamily: '--font-family',
                fontSize: '--font-size',
                nestedBackground: '--nested-background',
                nestedRadius: '--nested-radius',
            },
        ],
        mapping: {
            labelStyle: typography({ fontFamily: 'fontFamily', fontSize: 'fontSize' }),
            contentStyle: componentStyle({
                backgroundColor: 'nestedBackground',
                radius: 'nestedRadius',
            }),
        },
    });

    assert.deepEqual(collectRegisteredStyleApiMeta()[0].params, [
        { paramName: 'fontFamily', type: 'typography', id: 'labelStyle', part: 'fontFamily' },
        { paramName: 'fontSize', type: 'typography', id: 'labelStyle', part: 'fontSize' },
        {
            paramName: 'nestedBackground',
            type: 'component_style',
            id: 'contentStyle',
            part: 'backgroundColor',
        },
        { paramName: 'nestedRadius', type: 'component_style', id: 'contentStyle', part: 'radius' },
    ]);
});

test('maps state tokens for scalar and compound properties', () => {
    defineStyleTokenApi({
        commonInfo: { componentName: 'Stateful', source: { packageName: '@example/components' } },
        tokens: [
            {
                background: '--background',
                backgroundHover: '--background-hover',
                fontWeight: '--font-weight',
                fontWeightHover: '--font-weight-hover',
            },
        ],
        mapping: {
            backgroundColor: color('background').state('hovered', 'backgroundHover'),
            labelStyle: typography({ fontWeight: 'fontWeight' }).state('hovered', {
                fontWeight: 'fontWeightHover',
            }),
        },
    });

    assert.deepEqual(collectRegisteredStyleApiMeta()[0].params, [
        { paramName: 'background', type: 'color', id: 'backgroundColor' },
        { paramName: 'backgroundHover', type: 'color', id: 'backgroundColor', state: 'hovered' },
        { paramName: 'fontWeight', type: 'typography', id: 'labelStyle', part: 'fontWeight' },
        {
            paramName: 'fontWeightHover',
            type: 'typography',
            id: 'labelStyle',
            part: 'fontWeight',
            state: 'hovered',
        },
    ]);
});

test('sorts components and params deterministically', () => {
    defineStyleTokenApi({
        commonInfo: { componentName: 'Second', source: { packageName: '@example/components' } },
        tokens: [{ zIndex: '--z', color: '--color' }],
        mapping: {},
    });
    defineStyleTokenApi({
        commonInfo: { componentName: 'First', source: { packageName: '@example/components' } },
        tokens: [{ width: '--width' }],
        mapping: {},
    });

    const metadata = collectRegisteredStyleApiMeta();

    assert.deepEqual(
        metadata.map(({ componentName }) => componentName),
        ['First', 'Second'],
    );
    assert.deepEqual(
        metadata[1].params.map(({ paramName }) => paramName),
        ['color', 'zIndex'],
    );
});

test('rejects invalid declarations and mappings', () => {
    assert.throws(
        () =>
            defineStyleTokenApi({
                commonInfo: { componentName: 'MissingSource', source: { packageName: '' } },
                tokens: [{}],
                mapping: {},
            }),
        /source\.packageName must be a non-empty string/,
    );

    assert.throws(
        () =>
            defineStyleTokenApi({
                commonInfo: { componentName: 'UnknownToken', source: { packageName: '@example/components' } },
                tokens: [{ color: '--color' }],
                mapping: { surface: color('missing') },
            }),
        /maps unknown token key "missing"/,
    );

    assert.throws(
        () =>
            defineStyleTokenApi({
                commonInfo: { componentName: 'MissingTarget', source: { packageName: '@example/components' } },
                tokens: [{ color: '--color' }],
                mapping: { surface: color({}) },
            }),
        /must map at least one part/,
    );

    defineStyleTokenApi({
        commonInfo: { componentName: 'Duplicate', source: { packageName: '@example/components' } },
        tokens: [{}],
        mapping: {},
    });

    assert.throws(
        () =>
            defineStyleTokenApi({
                commonInfo: { componentName: 'Duplicate', source: { packageName: '@example/components' } },
                tokens: [{}],
                mapping: {},
            }),
        /duplicate declaration/,
    );
});
