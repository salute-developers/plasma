/**
 * Маркер, которым шаг `index` заменяет `<PropsTable />`, а шаг `mcp-data` по нему находит JSON с props.
 * Искать по слову `props` нельзя: оно встречается в коде примеров, например `(props) =>`.
 */
export function formatPropsMarker(componentName: string): string {
    return `Props (свойства) для компонента ${componentName}:`;
}

export const PROPS_MARKER_REGEX = /Props \(свойства\) для компонента [^:]*:/;
