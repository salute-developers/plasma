import { MutableRefObject, createContext } from 'react';

export class TabItemRefs {
    public items: MutableRefObject<HTMLElement | null>[] = [];

    public register(ref: MutableRefObject<HTMLElement | null>): number {
        this.items.push(ref);
        return this.items.length - 1;
    }

    public unregister(ref: MutableRefObject<HTMLElement | null>) {
        this.items.splice(this.items.indexOf(ref), 1);
    }
}

export const TabsContext = createContext<TabItemRefs | null>(null);
