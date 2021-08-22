import docgenInfoUI from '@salutejs/plasma-ui/build-sb/docgenInfo.json';
import docgenInfoWeb from '@salutejs/plasma-web/build-sb/docgenInfo.json';

interface Prop {
    type: {
        name: string;
    };
    defaultValue?: any;
    description?: string;
    required?: boolean;
}
interface Info {
    props?: Record<string, Prop>;
    description?: string;
}
type DocGenInfo = Record<string, Info>;

export function useDocgenInfo(name: string): Info {
    return (docgenInfoUI as DocGenInfo)[name] || (docgenInfoWeb as DocGenInfo)[name] || {};
}
