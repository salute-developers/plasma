import { Project } from 'ts-morph';

import { getProjects, getNewHopeComponentFilePath, getComponentFilePath } from './getMetaInfo.mjs';

const ObjectLiteralExpression = 210;

const getObject = (sourceFile, objectName) => {
    return sourceFile
        .getVariableDeclarationOrThrow(objectName)
        .getInitializerIfKindOrThrow(ObjectLiteralExpression);
};

const getObjectProp = (object, props) => {
    let currentProperty;

    for (let i = 0; i < props.length; i++) {
        let propName = props[i];

        if (i === 0) {
            currentProperty = object.getPropertyOrThrow(propName);
        } else {
            currentProperty = currentProperty
                .getInitializerIfKindOrThrow(ObjectLiteralExpression)
                .getPropertyOrThrow(propName);
        }
    }

    return currentProperty;
};

const updateConfigs = (files, paths) => {
        console.log('input: files: ', files, 'paths', paths);

        const projects = getProjects({ skipNewHope: true });

        const update = (fileName) => {
            const project = new Project({
                // tsConfigFilePath: './packages/plasma-new-hope/tsconfig.json',
                // manipulationSettings: {
                //     quoteKind: QuoteKind.Single,
                //     indentationText: IndentationText.FourSpace,
                // },
            });

            const b2cSource = project.addSourceFileAtPath(getNewHopeComponentFilePath(fileName, 'b2c'));
            const webSource = project.addSourceFileAtPath(getNewHopeComponentFilePath(fileName, 'web'));

            const projectsSources = projects.reduce((res, _project) => ({
                ...res,
                [_project]: project.addSourceFileAtPath(getComponentFilePath(_project, fileName)),
            }), {});

            paths.forEach(path => {
                const [objectName, ...properties] = path.split('.');

                const b2cObject = getObject(b2cSource, objectName);
                const webObject = getObject(webSource, objectName);

                const projectsObjectsMap = projects.reduce((res, project) => {
                    return {
                        ...res,
                        [project]: getObject(projectsSources[project], objectName),
                    };
                }, {});

                if (properties.length) {
                    const b2cProp = getObjectProp(b2cObject, properties);
                    const b2cPropText = b2cProp.getInitializer()
                        .getText(true);

                    getObjectProp(webObject, properties)
                        .getInitializer()
                        .replaceWithText(b2cPropText)
                        .formatText();

                    projects.forEach((project) => {
                        try {
                            const projectProp = getObjectProp(projectsObjectsMap[project], properties);
                            projectProp
                                .getInitializer()
                                .replaceWithText(b2cPropText)
                                .formatText();
                        } catch (e) {
                            console.error(`project: ${project}, path: ${path}`);
                        }

                    });
                } else {
                    const b2cText = b2cObject.getText();

                    webObject
                        .replaceWithText(b2cText)
                        .formatText();

                    projects.forEach((project) => projectsObjectsMap[project].replaceWithText(b2cText)
                        .formatText());
                }
            });

            project.save();
        };

        files.forEach((file) => {
            update(file);
        });

    }
;

const [files, paths = 'config.variations'] = process.argv.slice(2);

updateConfigs(files.split(','), paths.split(','));
