export const setInitialValue = (e: Event): React.SetStateAction<string | undefined> => {
    const item = e.target as HTMLTextAreaElement;
    const defaultValue = String(item.getAttribute('defaultValue'));

    return defaultValue;
};
