import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

import { extractDuotoneLayer, isDuotoneIcon } from './duotone.mjs';

const sizes = [16, 24, 36];
const scales = {
    '1x': {
        scale: 1,
        density: 72,
    },
    '2x': {
        scale: 2,
        density: 144,
    },
    '3x': {
        scale: 3,
        density: 216,
    },
};
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svgRoot = path.join(packageRoot, 'svg');
const iosRoot = path.join(packageRoot, 'native-build', 'ios');

const compareNames = (left, right) => {
    if (left < right) {
        return -1;
    }

    if (left > right) {
        return 1;
    }

    return 0;
};

const getSvgNames = async (size) => {
    const entries = await fs.readdir(path.join(svgRoot, String(size)), { withFileTypes: true });

    return entries
        .filter((entry) => entry.isFile() && path.extname(entry.name) === '.svg')
        .map((entry) => entry.name)
        .sort(compareNames);
};

const namesBySize = await Promise.all(sizes.map(getSvgNames));
const referenceNames = namesBySize[0];

if (referenceNames.length === 0) {
    throw new Error('No SVG icons found');
}

for (let index = 1; index < namesBySize.length; index += 1) {
    if (referenceNames.join('\n') !== namesBySize[index].join('\n')) {
        throw new Error(`Icon sets for sizes ${sizes[0]} and ${sizes[index]} are different`);
    }
}

await fs.rm(iosRoot, { recursive: true, force: true });
await fs.mkdir(iosRoot, { recursive: true });

let pngCount = 0;

const writeImageset = async ({ input, imageName, imagesetName, width, height }) => {
    const imagesetRoot = path.join(iosRoot, `${imagesetName}.imageset`);

    await fs.mkdir(imagesetRoot, { recursive: true });

    const images = [];

    for (const [scaleName, preset] of Object.entries(scales)) {
        const pngName = `${imageName}-${width}@${scaleName}.png`;

        await sharp(input, { density: preset.density })
            .resize({ width: width * preset.scale, height: height * preset.scale })
            .png()
            .toFile(path.join(imagesetRoot, pngName));

        images.push({
            scale: scaleName,
            idiom: 'universal',
            filename: pngName,
        });
        pngCount += 1;
    }

    const contents = {
        info: {
            version: 1,
            author: 'xcode',
        },
        images,
    };

    await fs.writeFile(path.join(imagesetRoot, 'Contents.json'), `${JSON.stringify(contents, null, 2)}\n`, 'utf8');
};

for (const [sizeIndex, size] of sizes.entries()) {
    for (const fileName of namesBySize[sizeIndex]) {
        const sourcePath = path.join(svgRoot, String(size), fileName);
        const iconName = path.basename(fileName, '.svg');
        const metadata = await sharp(sourcePath).metadata();

        if (!metadata.width || !metadata.height) {
            throw new Error(`Cannot determine SVG dimensions: ${sourcePath}`);
        }

        const { width, height } = metadata;

        await writeImageset({
            input: sourcePath,
            imageName: iconName,
            imagesetName: `${iconName}${size}`,
            width,
            height,
        });

        if (!isDuotoneIcon(iconName)) {
            continue;
        }

        const svg = await fs.readFile(sourcePath, 'utf8');

        for (const layer of ['primary', 'secondary']) {
            const layerName = layer === 'primary' ? 'Primary' : 'Secondary';

            await writeImageset({
                input: Buffer.from(extractDuotoneLayer(svg, layer, sourcePath)),
                imageName: `${iconName}${layerName}`,
                imagesetName: `${iconName}${size}${layerName}`,
                width,
                height,
            });
        }
    }
}

console.log(`Built ${pngCount} iOS PNG files in Xcode imagesets.`);
