import fs from 'fs';
import path from 'path';
import svg2vectordrawable from 'svg2vectordrawable';

const sourceDirectorySVG16 = `./src/scalable/Icon.svg.16`;
const sourceDirectorySVG24 = `./src/scalable/Icon.svg.24`;
const sourceDirectorySVG36 = `./src/scalable/Icon.svg.36`;

const androidIconsDirectory = `./android-icons`;

const destinations = [androidIconsDirectory];

const files = fs.readdirSync(sourceDirectorySVG24);

// Создаем директории, если нет
destinations.forEach((destination) => {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    }
});

const camelToSnakeCase = (str: string) => {
    // INFO: Заменяем ключевое слово
    const data = /sber/i.test(str) ? str.replace(/sber/i, 'Sb') : str;

    return data.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

const options = {
    floatPrecision: 3,
    fillBlack: true, // заполняем черным
};

const getPath = (dir: string, name: string, size: string) => {
    // INFO: по соглашению имя файла в camel_case
    return path.join(dir, `ic${camelToSnakeCase(name)}_${size}.xml`);
};

files.forEach((file) => {
    const extension = path.extname(file);

    if (extension !== '.svg') {
        return;
    }

    const data = {
        16: fs.readFileSync(path.join(sourceDirectorySVG16, file), 'utf8'),
        24: fs.readFileSync(path.join(sourceDirectorySVG24, file), 'utf8'),
        36: fs.readFileSync(path.join(sourceDirectorySVG36, file), 'utf8'),
    };

    const componentName = path.parse(file).name;

    Object.entries(data).forEach(([size, data]) => {
        // INFO: генерируем xml файлы
        svg2vectordrawable(data, options).then((xmlCode: string) => {
            fs.writeFileSync(getPath(androidIconsDirectory, componentName, size), xmlCode, 'utf8');
        });
    });
});
