import { canUseDOM } from '../../../utils';

interface CustomDocument extends Document {
    selection?: {
        empty: () => void;
    };
}

export const clearSelection = () => {
    if (!canUseDOM) {
        return;
    }

    const doc = document as CustomDocument;

    if (window.getSelection) {
        window.getSelection()?.removeAllRanges();
    } else if (doc.selection) {
        doc.selection.empty();
    }
};
