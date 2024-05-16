import { MetaVariations, TokenType, Platform, Platforms } from '../types';
import { PlatformToken } from './platformToken';

export type PlatformClasses<U extends Platforms = Platforms> = {
    [key in Platform]: PlatformToken<U[key]>;
};

export abstract class Token<T extends Platforms = Platforms> {
    private readonly type: keyof MetaVariations;
    private name: string;

    private tags: string[];
    private displayName: string;
    private description?: string | undefined;
    private enabled: boolean;

    private readonly platforms: PlatformClasses<T>;

    constructor(data: TokenType, platforms: PlatformClasses<T>) {
        const { name, type, tags, displayName, description, enabled } = data;

        this.type = type;
        this.name = name;
        this.tags = tags;
        this.displayName = displayName;
        this.description = description;
        this.enabled = enabled;

        this.platforms = platforms;
    }

    getType() {
        return this.type;
    }

    getName() {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getTags() {
        return this.tags;
    }

    setTags(value: string[]) {
        this.tags = value;
    }

    getDisplayName() {
        return this.displayName;
    }

    setDisplayName(value: string) {
        this.displayName = value;
    }

    getDescription() {
        return this.description;
    }

    setDescription(value?: string) {
        this.description = value;
    }

    getEnabled() {
        return this.enabled;
    }

    setEnabled(value: boolean) {
        this.enabled = value;
    }

    getPlatforms() {
        return this.platforms;
    }

    getValue<U extends Platform, K extends Platforms = T>(platform: U): K[U][string] {
        return this.platforms[platform].getValue();
    }

    setValue<U extends Platform, K extends Platforms = T>(platform: U, value: K[U][string]): void {
        this.platforms[platform].setValue(value);
    }

    getTokenData(): TokenType {
        return {
            type: this.type,
            name: this.name,
            tags: this.tags,
            displayName: this.displayName,
            description: this.description,
            enabled: this.enabled,
        };
    }
}
