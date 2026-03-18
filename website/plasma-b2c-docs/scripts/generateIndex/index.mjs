import generateIndexFiles from './generateIndexFiles.mjs';

(async () => {
    try {
        await generateIndexFiles();
    } catch (err) {
        console.log(err);

        process.exit(1);
    }
})();
