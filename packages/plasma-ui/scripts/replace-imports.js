const fs = require('fs');
const glob = require('glob');

const exclude = ['components/Badge'];

// Удаляем директорию src-linaria
fs.rmSync('./src-linaria-temp', { recursive: true, force: true });
// Копируем файлы из src в src-linaria
fs.cpSync('./src-linaria', './src-linaria-temp', { recursive: true });
// Меняем импорты со styled-components на { css } from @linaria/core и { styled } @linaria/react в src-linaria
fs.readFile('./src-linaria-temp/index.ts', { encoding: 'utf-8' }, function (err, data) {
    // if (err) throw error;
    //
    // let dataArray = data.split('\n'); // convert file data in an array
    // const searchKeyword = 'components/Badge'; // we are looking for a line, contains, key word 'user1' in the file
    // let lastIndex = -1; // let say, we have not found the keyword
    //
    // for (let index=0; index<dataArray.length; index++) {
    //     if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
    //         lastIndex = index; // found a line includes a 'user1' keyword
    //         break;
    //     }
    // }
    //
    // dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    //
    // // UPDATE FILE WITH NEW DATA
    // // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
    // // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
    // const updatedData = dataArray.join('\n');
    // fs.writeFile('./src-linaria/index.ts', updatedData, (err) => {
    //     if (err) throw err;
    //     console.log ('Successfully updated the file data');
    // });
});

glob('./src-linaria-temp/**/*.*', (err, files) => {
    try {
        files.forEach((item, index, array) => {
            // // Фильтруем компоненты/файлы, для которых не изменяем импорты
            // for (subStr of [...ignoredComponents, 'component-test']) {
            //     if (item.includes(subStr)) {
            //         return
            //     }
            // }

            fs.readFile(item, 'utf-8', (err, contents) => {
                if (err) {
                    return console.error(err);
                }

                // Replace string occurrences
                let updated = contents
                    .replace('@salutejs/plasma-new-hope/styled-components', '@salutejs/plasma-new-hope')
                    .replace("import styled from 'styled-components'", "import { styled } from '@linaria/react'");

                // Write back to file
                fs.writeFile(item, updated, 'utf-8', (err2) => {
                    if (err2) {
                        console.log(err2);
                    }
                });
            });
        });
    } catch (err) {
        console.error(err);
    }
});
