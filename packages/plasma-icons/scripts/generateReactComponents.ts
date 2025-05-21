import * as fs from 'fs';
import * as path from 'path';
import { getIconAsset, getIconComponent } from './utils';

const rootPath = './src-build/scalable';

const sourceDirectory16 = `${rootPath}/Icon.svg.16`;
const sourceDirectory36 = `${rootPath}/Icon.svg.36`;
const sourceDirectory = `${rootPath}/Icon.svg.24`;

const AssetDirectory16 = `${rootPath}/Icon.assets.16`;
const AssetDirectory24 = `${rootPath}/Icon.assets.24`;
const AssetDirectory36 = `${rootPath}/Icon.assets.36`;

const IconsDirectory = `${rootPath}/Icons`;

const IndexPath = `${rootPath}/index.ts`;
const IconPath = `${rootPath}/Icon.tsx`;

const destinations = [AssetDirectory16, AssetDirectory24, AssetDirectory36, IconsDirectory];

const files = fs.readdirSync(sourceDirectory);

// INFO: заглушка под другие размеры, использовать по необходимости
// const assetContentNull = `export const ${componentName} = null;\n`;
// @example
// fs.writeFileSync(getPath(AssetDirectory42, componentName), assetContentNull, 'utf8')

// Создаем директории, если нет
destinations.forEach((destination) => {
    if (!fs.existsSync(destination)) {
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

    let replacedName = path.parse(file).name;
    const hasKeyWord = /sber/i.test(componentName);

    // INFO: После того как устаревшие иконки будут удалены, часть дублирования уйдет.
    if (hasKeyWord) {
        // INFO: Заменяем ключевое слово и приводим к формату аля SbBoomCast, вместо SbboomCast
        replacedName = componentName
            .replace(/sber/i, 'Sb')
            .replace(/(Sb)(.)/, (_, sb, char) => sb + char.toUpperCase());

        const componentContent = getIconComponent(replacedName);

        names.push(replacedName);

        const assetContent16 = getIconAsset(svg16, replacedName);
        const assetContent24 = getIconAsset(svg24, replacedName);
        const assetContent36 = getIconAsset(svg36, replacedName);

        fs.writeFileSync(getPath(AssetDirectory16, replacedName), assetContent16, 'utf8');
        fs.writeFileSync(getPath(AssetDirectory24, replacedName), assetContent24, 'utf8');
        fs.writeFileSync(getPath(AssetDirectory36, replacedName), assetContent36, 'utf8');

        fs.writeFileSync(getPath(IconsDirectory, `Icon${replacedName}`), componentContent, 'utf8');
    }

    names.push(componentName);

    const assetContent16 = getIconAsset(svg16, componentName);
    const assetContent24 = getIconAsset(svg24, componentName);
    const assetContent36 = getIconAsset(svg36, componentName);

    const componentContent = getIconComponent(componentName, {
        deprecated: hasKeyWord,
        replacement: `Icon${replacedName}`,
    });

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

fs.appendFileSync(IndexPath, indexExport, 'utf8');

// добавляем mapping по категориям
let dataIconFile = fs.readFileSync(IconPath, 'utf8');

const iconImports = [];

names.forEach((name) => {
    const regex = new RegExp(`'${name}'`);
    const iconName = `Icon${name}`;

    // INFO: В файле Icon.tsx заменяем строку типа alarmAddFill: 'AlarmAddFill' -> alarmAddFill: IconAlarmAddFill
    dataIconFile = dataIconFile.replace(regex, iconName);

    iconImports.push(`import { ${iconName} } from './Icons/${iconName}';`);
});

const resultIconFile = iconImports.join('\n') + '\n\n' + dataIconFile;

fs.writeFileSync(IconPath, resultIconFile, 'utf8');
