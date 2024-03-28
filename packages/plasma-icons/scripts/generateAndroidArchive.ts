import fs from 'fs';
import path from 'path';
import svg2vectordrawable from 'svg2vectordrawable';

const sourceDirectory = `./src/scalable/Icon.svg.24`;
const androidIconsDirectory = `./android-icons`;

const destinations = [androidIconsDirectory];

const files = fs.readdirSync(sourceDirectory);

// Создаем директории, если нет
destinations.forEach((destination) => {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    }
});

const names: Array<string> = [];

const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const options = {
    floatPrecision: 3,
    fillBlack: true, // заполняем черным
};

files.forEach((file) => {
    const sourceFilePath = path.join(sourceDirectory, file);
    const extension = path.extname(file);

    if (extension !== '.svg') {
        return;
    }

    const data = fs.readFileSync(sourceFilePath, 'utf8');

    const componentName = path.parse(file).name;
    names.push(componentName);

    const getPath = (dir: string, name: string) => {
        return path.join(dir, `ic${camelToSnakeCase(name)}_24.xml`); // по соглашению имя файла в camel_case
    };

    // генерируем xml файлы
    svg2vectordrawable(data, options).then((xmlCode: string) => {
        fs.writeFileSync(getPath(androidIconsDirectory, componentName), xmlCode, 'utf8');
    });
});
