module.exports = () => ({
    visitor: {
        ImportDeclaration(path, state) {
            const { alias } = state.opts;

            if (!alias) {
                return;
            }

            const aliases = Object.entries(alias);

            aliases.forEach(([key, value]) => {
                if (path.node.source.value === key) {
                    path.node.source.value = value;
                }
            });
        },
    },
});
