/**
 * Для сокрытия ненужных пропсов, которые авто-генерируются
 * Addon Controls
 */
export const disableProps = (props: string[]) => {
    const disabled: Record<string, { table: { disable: true } }> = {};

    props.forEach((prop) => {
        disabled[prop] = { table: { disable: true } };
    });

    return disabled;
};
