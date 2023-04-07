module.exports = (exports, path, folderName) => {
    const source = path.get('source');
    const { value } = source.node;

    return {
        ...exports,
        [folderName]: { ...exports[folderName], [value]: '*' },
    };
};
