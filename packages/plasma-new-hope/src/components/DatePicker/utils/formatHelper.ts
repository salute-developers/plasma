type DateSymbols = 'Y' | 'M' | 'Q' | 'D';
export type DateTypes = 'year' | 'month' | 'quarter' | 'day';

export type DateInfo = {
    symbols: string;
    length: number;
    type: DateTypes;
    isNumeric?: boolean;
};

export type FormatStructure = {
    [key: number]: DateInfo;
};

type DateSymbolsMap = {
    [key in DateSymbols]: DateTypes;
};

export const dateSymbolsMap: DateSymbolsMap = {
    Y: 'year',
    M: 'month',
    Q: 'quarter',
    D: 'day',
};

const monthNonNumericLength = 3;

export const parseFormatToStructure = (format?: string, delimiter?: string) => {
    if (!format || !delimiter) {
        return { formatStructure: null, formatStructureIndexes: null };
    }

    const formatParts = format.split(delimiter);

    const formatStructure = formatParts.reduce((acc, curr: string, index) => {
        const dateStructureSymbol = curr.charAt(0) as DateSymbols;
        const dateStructureType = dateSymbolsMap[dateStructureSymbol];

        if (!acc[index]) {
            acc[index] = {} as DateInfo;
        }

        acc[index].symbols = curr;
        acc[index].length = curr.length;
        acc[index].type = dateStructureType;

        if (dateSymbolsMap.M === dateStructureType) {
            acc[index].isNumeric = curr.length < monthNonNumericLength;
        }

        return acc;
    }, {} as FormatStructure);

    return formatStructure;
};
