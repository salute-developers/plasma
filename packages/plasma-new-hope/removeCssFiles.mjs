import fs from 'fs';
import path from 'path';

const remove = (dir) => {
    fs.readdir(dir, (error, files) => {
        if (error) throw new Error('Could not read directory');

        files.forEach((file) => {
            const file_path = path.join(dir, file);

            fs.stat(file_path, (error, stat) => {
                if (error) throw new Error('File do not exist');

                if (stat.isDirectory()) {
                    remove(file_path);
                } else if (file.endsWith('.linaria.css')) {
                    fs.unlink(file_path, (error) => {
                        if (error) throw new Error('Could not delete file');
                    });
                }
            });
        });
    });
};

remove('./src');
