import { access, mkdir, writeFile, readFile } from 'node:fs/promises';
import fg from 'fast-glob';
import path from 'path';
import sharp from 'sharp';

// INFO: Collection all svg files
// @example ['./src/scalable/Icon.svg.16/Accessibility.svg', './src/scalable/Icon.svg.24/Accessibility.svg']
const listSVG = await fg(['./src/scalable/Icon.svg.*/*.svg']);

const iosIconsDirectory = `./icons-ios`;

const iconsPreset = {
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

/**
 * Convert svg file to png
 * Output:
 * [IconName].imageset
 *   [IconName]@1x.png
 *   [IconName]@2x.png
 *   [IconName]@3x.png
 *   Contents.json
 */
try {
    const svgCount = listSVG.length * 3;
    let pngCount = 0;
    
    for (const sourceDirectory of listSVG) {
        const [fullSvgName, dir] = sourceDirectory.split('/').reverse();
      
        // @example input Icon.svg.24
        // @example ouput 24
        const [size] = dir.split('.').reverse();
        
        // @example Accessibility.svg
        const [svgNameRaw] = fullSvgName.split('.');
        
        // INFO: Заменяем имя по ключевому слову и приводим к формату аля SbBoom, вместо Sbboom
        const svgName = /sber/i.test(svgNameRaw)
            ? svgNameRaw
                .replace(/sber/i, 'Sb')
                .replace(/(Sb)(.)/, (_, sb, char) => sb + char.toUpperCase())
            : svgNameRaw;
        
        // @example ./icons-ios/ScenarioSyncAuto45Fill24.imageset
        const pngDirectory = `${iosIconsDirectory}/${svgName}${size}.imageset`;
        
        try {
            await access(pngDirectory);
        } catch (e) {
            await mkdir(pngDirectory, { recursive: true });
        }
        
        const images = [];
        
        const { width, height } = await sharp(sourceDirectory).metadata();
        
        for (const [key, { scale, density}] of Object.entries(iconsPreset)) {
            const fileName = `${svgName}-${width}@${key}.png`;
            
            // INFO: density === DPI
            await sharp(sourceDirectory, { density })
                .resize({ width: width * scale, height: height * scale })
                .png()
                .toFile(path.join(pngDirectory, fileName));
            
            // INFO: idiom - the Apple device family: iphone, ipad, etc
            // INFO: universal - The image works on any device and platform.
            images.push({
                scale: key,
                idiom: 'universal',
                filename: fileName,
            });
            
            pngCount++;
        }
        
        // INFO: Contents.json - macOS/iOS required entity
        // INFO: files encode the attributes for elements represented by folders in the hierarchy.
        // INFO: Each folder can contain one Contents.json file that encodes the attributes for the asset or group it contains.
        const contentsJson = {
            info: {
                version: 1,
                author: 'xcode',
            },
            images,
        };
        
        const pngContentsJsonPath = path.join(pngDirectory, 'Contents.json');
        
        await writeFile(pngContentsJsonPath, JSON.stringify(contentsJson, null, 2), 'utf8');
    }
    
    if (svgCount !== pngCount) {
        console.warn(`Difference in file count. SVG: ${svgCount} vs PNG: ${pngCount}`);
    } else {
        console.log('SVG count: ', svgCount, 'PNG count: ', pngCount);
    }
} catch (error) {
    console.log(error);
}
