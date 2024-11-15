import * as fs from 'fs';
import * as path from 'path';
import { getReactNativeIconAsset, getReactNativeIconComponent } from './utils';

const rootPath = './src-rn-build';

const sourceDirectory16 = `${rootPath}/Icon.svg.16`;
const sourceDirectory36 = `${rootPath}/Icon.svg.36`;
const sourceDirectory = `${rootPath}/Icon.svg.24`;

const AssetDirectory16 = `${rootPath}/Icon.assets.16`;
const AssetDirectory24 = `${rootPath}/Icon.assets.24`;
const AssetDirectory36 = `${rootPath}/Icon.assets.36`;

const IconsDirectory = `${rootPath}/Icons`;

const IndexPath = `${rootPath}/index.ts`;
const IconRootPath = `${rootPath}/IconRoot.tsx`;

const destinations = [AssetDirectory16, AssetDirectory24, AssetDirectory36, IconsDirectory];

const files = fs.readdirSync(sourceDirectory);

// Создаем директории, если нет
destinations.forEach((destination) => {
    if (!fs.existsSync(destination)) {
        console.log('destination', destination);

        fs.mkdirSync(destination);
    }
});

const names: Array<string> = [];

const getPath = (dir: string, name: string) => {
    return path.join(dir, `${name}.tsx`);
};

files.forEach((file) => {
    const extension = path.extname(file);

    if (extension !== '.svg') {
        return;
    }

    const svg16 = fs.readFileSync(path.join(sourceDirectory16, file), 'utf8');
    const svg24 = fs.readFileSync(path.join(sourceDirectory, file), 'utf8');
    const svg36 = fs.readFileSync(path.join(sourceDirectory36, file), 'utf8');

    const componentName = path.parse(file).name;

    names.push(componentName);

    const assetContent16 = getReactNativeIconAsset(svg16, componentName);
    const assetContent24 = getReactNativeIconAsset(svg24, componentName);
    const assetContent36 = getReactNativeIconAsset(svg36, componentName);

    const componentContent = getReactNativeIconComponent(componentName);

    // генерируем файлы-assets
    fs.writeFileSync(getPath(AssetDirectory16, componentName), assetContent16, 'utf8');
    fs.writeFileSync(getPath(AssetDirectory24, componentName), assetContent24, 'utf8');
    fs.writeFileSync(getPath(AssetDirectory36, componentName), assetContent36, 'utf8');

    // генерируем компонент
    fs.writeFileSync(getPath(IconsDirectory, `Icon${componentName}`), componentContent, 'utf8');
});

// добавляем экспорты
const indexExport = names
    .map((name) => {
        return `export { Icon${name} } from '.${IconsDirectory.replace(rootPath, '')}/Icon${name}';`;
    })
    .join('\n');

fs.writeFileSync(IndexPath, `${indexExport}\n`, 'utf8');
