import { MutableRefObject, createContext } from 'react';

export class TabItemRefs {
    public items: MutableRefObject<HTMLElement | null>[] = [];

    public selectedItem: HTMLElement | null = null;

    public current = 0;

    constructor(value?: number) {
        this.current = value || 0;
    }

    public register(ref: MutableRefObject<HTMLElement | null>): number {
        this.items.push(ref);
        return this.items.length - 1;
    }

    public unregister(ref: MutableRefObject<HTMLElement | null>) {
        this.items.splice(this.items.indexOf(ref), 1);
    }

    public setCurrent(value: number) {
        this.current = value;
    }

    public setSelectedItem(item: HTMLElement | null) {
        this.selectedItem = item;
    }

    public unsetSelectedItem(item: HTMLElement | null) {
        if (this.selectedItem === item) {
            this.selectedItem = null;
        }
    }
}

export const TabsContext = createContext<TabItemRefs | null>(null);
