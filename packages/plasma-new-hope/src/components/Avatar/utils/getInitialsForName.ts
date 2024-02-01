export const getInitialsForName = (name?: string) => {
    if (!name) return '';

    const [firstName, secondName] = name.split(' ');
    const firstLetter = firstName?.[0] || '';
    const secondLatter = secondName?.[0] || '';

    return `${firstLetter}${secondLatter}`.toUpperCase();
};
