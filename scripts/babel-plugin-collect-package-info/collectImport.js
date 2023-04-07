module.exports = (template, entityName) => {
    const code = `
        import { collectPackageInfo } from '../../collectPackageInfo';
        collectPackageInfo('${entityName}');
    `;

    return template(code, { sourceType: 'module' });
};
