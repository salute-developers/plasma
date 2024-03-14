import * as fs from 'fs';
import * as path from 'path';
import { getIconAsset, getIconComponent } from './utils';

const rootPath = './src-build/scalable';
const sourceDirectory = `${rootPath}/Icon.svg.24`;
const AssetDirectory16 = `${rootPath}/Icon.assets.16`;
const AssetDirectory24 = `${rootPath}/Icon.assets.24`;
const AssetDirectory36 = `${rootPath}/Icon.assets.36`;

const IconsDirectory = `${rootPath}/Icons`;

const IndexPath = `${rootPath}/index.ts`;
const IconPath = `${rootPath}/Icon.tsx`;

const destinations = [AssetDirectory16, AssetDirectory24, AssetDirectory36, IconsDirectory];

const files = fs.readdirSync(sourceDirectory);

// Создаем директории, если нет
destinations.forEach((destination) => {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
    }
});

const names: Array<string> = [];

files.forEach((file) => {
    const sourceFilePath = path.join(sourceDirectory, file);
    const extension = path.extname(file);

    if (extension !== '.svg') {
        return;
    }

    const data = fs.readFileSync(sourceFilePath, 'utf8');

    const componentName = path.parse(file).name;
    names.push(componentName);
    const assetContent24 = getIconAsset(data, componentName);
    // заглушка под другие размеры
    const assetContentNull = `export const ${componentName} = null;\n`;
    const componentContent = getIconComponent(componentName);

    const getPath = (dir: string, name: string) => {
        return path.join(dir, `${name}.tsx`);
    };

    // генерируем файлы-ассеты
    fs.writeFileSync(getPath(AssetDirectory16, componentName), assetContentNull, 'utf8');
    fs.writeFileSync(getPath(AssetDirectory24, componentName), assetContent24, 'utf8');
    fs.writeFileSync(getPath(AssetDirectory36, componentName), assetContentNull, 'utf8');
    // генерируем компоненты
    fs.writeFileSync(getPath(IconsDirectory, `Icon${componentName}`), componentContent, 'utf8');
});

// добавляем экспорты
const indexExport = names
    .map((name) => {
        return `export { Icon${name} } from '.${IconsDirectory.replace(rootPath, '')}/Icon${name}';`;
    })
    .join('\n');

fs.appendFileSync(IndexPath, indexExport, 'utf8');

// добавляем к маппингу по категориям
const dataIconFile = fs.readFileSync(IconPath, 'utf8');
const iconImport = names
    .map((name) => {
        return `import { ${name} } from '.${AssetDirectory24.replace(rootPath, '')}/${name}';`;
    })
    .join('\n');
const resultIconFile = iconImport + '\n' + dataIconFile.replace(/\'/g, '');

fs.writeFileSync(IconPath, resultIconFile, 'utf8');
