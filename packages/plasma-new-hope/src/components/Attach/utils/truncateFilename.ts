export const truncateFilename = ({
    filename,
    startNameTruncationIndex,
    separator = '...',
    minNameLength = 5,
}: {
    filename: string;
    startNameTruncationIndex: number;
    separator?: string;
    minNameLength?: number;
}) => {
    const strings = filename.split('.');
    const extension = strings.length > 1 ? strings[strings.length - 1] : null;
    const name = strings.length > 1 ? strings.slice(0, -1).join('.') : strings[0];

    if (name.length <= minNameLength || startNameTruncationIndex >= name.length - 1) {
        return filename;
    }

    const lastNameLetter = name[name.length - 1];
    const truncatedName = `${name.substring(0, startNameTruncationIndex)}${separator}${lastNameLetter}`;

    return extension ? `${truncatedName}.${extension}` : truncatedName;
};
