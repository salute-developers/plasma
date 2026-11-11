import svgoPlugin from '@svgr/plugin-svgo';

export const duotoneSuffix = 'Duotone';
export const secondaryColorVariable = '--sdds-icon-secondary-color';
export const secondaryOpacityVariable = '--sdds-icon-secondary-opacity';

const shapeElements = new Set(['path', 'circle', 'ellipse', 'line', 'polygon', 'polyline', 'rect']);

export const isDuotoneIcon = (iconName) => iconName.endsWith(duotoneSuffix);

const parseOpacity = (value) => {
    if (value === undefined) {
        return 1;
    }

    const opacity = Number.parseFloat(value);

    return value.trim().endsWith('%') ? opacity / 100 : opacity;
};

const formatOpacity = (value) => String(Number(value.toFixed(3)));

const multiplyOpacity = (attributes, name, factor) => {
    attributes[name] = formatOpacity(parseOpacity(attributes[name]) * factor);
};

export const createNormalizeOpacityPlugin = () => ({
    name: 'sddsNormalizeDuotoneOpacity',
    fn: () => ({
        element: {
            enter: (node) => {
                if (node.attributes.opacity === undefined) {
                    return;
                }

                const opacity = parseOpacity(node.attributes.opacity);
                delete node.attributes.opacity;

                if (shapeElements.has(node.name)) {
                    if (node.attributes.fill !== 'none') {
                        multiplyOpacity(node.attributes, 'fill-opacity', opacity);
                    }

                    if (node.attributes.stroke !== undefined && node.attributes.stroke !== 'none') {
                        multiplyOpacity(node.attributes, 'stroke-opacity', opacity);
                    }

                    return;
                }

                for (const child of node.children) {
                    if (child.type === 'element') {
                        multiplyOpacity(child.attributes, 'opacity', opacity);
                    }
                }
            },
        },
    }),
});

// SVGO runs plugins in several passes: already marked shapes must be counted as secondary again.
export const createMarkSecondaryLayerPlugin = (layers) => ({
    name: 'sddsMarkDuotoneSecondaryLayer',
    fn: () => ({
        root: {
            enter: () => {
                layers.primary = 0;
                layers.secondary = 0;
            },
        },
        element: {
            enter: (node, parentNode) => {
                if (!shapeElements.has(node.name) || parentNode.name === 'clipPath' || parentNode.name === 'mask') {
                    return;
                }

                if (node.attributes.style?.includes(secondaryColorVariable)) {
                    layers.secondary += 1;
                    return;
                }

                const fillOpacity = parseOpacity(node.attributes['fill-opacity']);

                if (fillOpacity < 1) {
                    delete node.attributes['fill-opacity'];
                    node.attributes.style = [
                        `fill:var(${secondaryColorVariable},currentColor)`,
                        `fill-opacity:var(${secondaryOpacityVariable},${formatOpacity(fillOpacity)})`,
                    ].join(';');
                    layers.secondary += 1;
                    return;
                }

                if (node.attributes.fill !== 'none') {
                    layers.primary += 1;
                }
            },
        },
    }),
});

export const createExtractLayerPlugin = (layer, layers) => ({
    name: 'sddsExtractDuotoneLayer',
    fn: () => ({
        element: {
            enter: (node, parentNode) => {
                if (!shapeElements.has(node.name) || parentNode.name === 'clipPath' || parentNode.name === 'mask') {
                    return;
                }

                const nodeLayer = parseOpacity(node.attributes['fill-opacity']) < 1 ? 'secondary' : 'primary';
                layers[nodeLayer] += 1;

                if (nodeLayer === layer) {
                    delete node.attributes['fill-opacity'];
                    return;
                }

                parentNode.children = parentNode.children.filter((child) => child !== node);
            },
        },
    }),
});

export const assertDuotoneLayers = (layers, filePath) => {
    if (layers.primary === 0 || layers.secondary === 0) {
        throw new Error(
            `Duotone icon must contain primary and secondary (fill-opacity < 1) shapes: ${filePath} ` +
                `(primary: ${layers.primary}, secondary: ${layers.secondary})`,
        );
    }
};

export const extractDuotoneLayer = (svg, layer, filePath) => {
    const layers = { primary: 0, secondary: 0 };
    const layerSvg = svgoPlugin(
        svg,
        {
            svgo: true,
            dimensions: true,
            svgoConfig: {
                plugins: [createNormalizeOpacityPlugin(), createExtractLayerPlugin(layer, layers)],
            },
        },
        { filePath },
    );

    assertDuotoneLayers(layers, filePath);

    return layerSvg;
};

const androidPathPattern = /<path\b[^>]*?\/?>/g;

const getAndroidAlpha = (pathElement) => {
    const fillColor = pathElement.match(/android:fillColor="#([\dA-Fa-f]{8})"/);
    const fillAlpha = pathElement.match(/android:fillAlpha="([^"]+)"/);
    const colorAlpha = fillColor ? Number.parseInt(fillColor[1].slice(0, 2), 16) / 255 : 1;

    return colorAlpha * (fillAlpha ? Number.parseFloat(fillAlpha[1]) : 1);
};

export const nameAndroidDuotoneLayers = (vectorDrawable, filePath) => {
    const layers = { primary: 0, secondary: 0 };
    const result = vectorDrawable.replace(androidPathPattern, (pathElement) => {
        const layer = getAndroidAlpha(pathElement) < 1 ? 'secondary' : 'primary';
        layers[layer] += 1;

        return pathElement.replace(/^<path\b/, `<path android:name="${layer}"`);
    });

    assertDuotoneLayers(layers, filePath);

    return result;
};
