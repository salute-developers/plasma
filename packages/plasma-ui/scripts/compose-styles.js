const fs = require('fs');
const glob = require('glob');

// Собираем все стили в один style.css
glob('./css/es/components/**/*.*.css', (err, files) => {
    try {
        const newCssFile = fs.openSync('./css/style.css', 'w');

        files.forEach((item, index, array) => {
            console.log(item, index);

            const data = fs.readFileSync(item, 'utf-8');

            fs.appendFileSync(newCssFile, data);
        });
    } catch (err) {
        console.error(err);
    }
});

const removeLines = (data, lines = []) => {
    return data
        .split('\n')
        .filter((val, idx) => lines.indexOf(idx) === -1)
        .join('\n');
};

// Удаляем импорты css в /es
glob('./css/es/components/**/*.config.js', (err, files) => {
    try {
        files.forEach((item, index, array) => {
            fs.readFile(item, 'utf8', (err, data) => {
                fs.writeFile(item, removeLines(data, [0]), 'utf8', function (err) {
                    if (err) throw err;
                    console.log('the lines have been removed.');
                });
            });
        });
    } catch (err) {
        console.error(err);
    }
});

// Удаляем импорты css в /cjs
glob('./css/cjs/components/**/*.config.js', (err, files) => {
    try {
        files.forEach((item, index, array) => {
            fs.readFile(item, 'utf8', (err, data) => {
                fs.writeFile(item, removeLines(data, [0]), 'utf8', function (err) {
                    if (err) throw err;
                    console.log('the lines have been removed.');
                });
            });
        });
    } catch (err) {
        console.error(err);
    }
});
