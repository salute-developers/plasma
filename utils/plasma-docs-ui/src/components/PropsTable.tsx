import React, { FC, HTMLAttributes, useMemo } from 'react';
import marked from 'marked';

import type { ComponentProps, ComponentProp } from '../types';

export interface PropsTableProps extends HTMLAttributes<HTMLTableElement> {
    props: ComponentProps;
    exclude?: string[];
    include?: string[];
}

const defaultExclude = ['forwardedAs', 'as', 'theme', 'ref'];

/**
 * Компонент для вывода таблицы пропсов.
 */
export const PropsTable: FC<PropsTableProps> = ({ props, exclude: propsExclude = [], include }) => {
    const filteredPropsList = useMemo(() => {
        if (!props) {
            return null;
        }
        const exclude = propsExclude.concat(defaultExclude);
        return Object.entries(props)
            .map((item) => {
                return {
                    key: item[0], // Ключ параметра
                    prop: item[1], // Информация о параметре
                };
            })
            .filter((type) => !type?.prop?.parent?.fileName?.includes('@types/react') || include?.includes(type.key)) // Обрезаются стандартные типы из react, если они указаны в include, то они не обрезаются
            .filter((type) => !exclude.includes(type.key)); // Обрезаются типы, которые указаны в exclude
    }, [props, propsExclude]);

    if (!filteredPropsList?.length) {
        return null;
    }

    const getType = (type?: ComponentProp['type']) => {
        if (!type) {
            return '';
        }

        if (type.raw && type.value) {
            return type.raw;
        }

        return type.name;
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {filteredPropsList.map(({ key, prop }) => {
                    return (
                        <tr key={key}>
                            <td>
                                <code>
                                    {key}
                                    {prop.required && '*'}
                                </code>
                            </td>
                            <td>
                                <code>{getType(prop.type)}</code>
                            </td>
                            <td>{prop.defaultValue && <code>{prop.defaultValue.value}</code>}</td>
                            <td dangerouslySetInnerHTML={{ __html: marked(prop.description || '') }} />
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
