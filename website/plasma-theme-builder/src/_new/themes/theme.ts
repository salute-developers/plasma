import { Platforms, PlatformsByVariationsMap, PlatformsVariations, TokenVariations, VariationsClasses } from '../types';

export class Theme {
    private name: string;
    private version: string;
    private tokens: VariationsClasses;

    constructor(name: string, version: string, tokens: VariationsClasses) {
        this.name = name;
        this.version = version;
        this.tokens = tokens;
    }

    public getName() {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getVersion() {
        return this.version;
    }

    public setVersion(value: string) {
        this.version = value;
    }

    public getTokens(): VariationsClasses;
    public getTokens<U extends keyof VariationsClasses>(type: U): VariationsClasses[U];
    public getTokens<U extends keyof VariationsClasses>(type?: U): VariationsClasses | VariationsClasses[U] {
        if (type) {
            return this.tokens[type];
        }

        return this.tokens;
    }

    public addToken<U extends keyof VariationsClasses, K extends VariationsClasses[U][number]>(
        type: U,
        token: K,
    ): void {
        (this.tokens[type] as Array<K>).push(token);
    }

    public removeToken<U extends keyof PlatformsVariations, K extends VariationsClasses[U]>(name: string, type: U) {
        this.tokens[type] = this.tokens[type].filter((item) => item.getName() !== name) as K;
    }

    public getToken<U extends keyof PlatformsVariations>(name: string, type: U): TokenVariations[U] | undefined {
        const token = this.tokens[type].find((item) => item.getName() === name);

        if (!token) {
            return;
        }

        return token;
    }

    public getTokenValue<U extends keyof PlatformsVariations>(
        name: string,
        type: U,
    ): PlatformsVariations[U] | undefined;
    public getTokenValue<U extends keyof PlatformsVariations, T extends keyof Platforms<PlatformsVariations[U]>>(
        name: string,
        type: U,
        platform: T,
    ): PlatformsVariations[U][T][string] | undefined;
    public getTokenValue<U extends keyof PlatformsVariations, T extends keyof Platforms<PlatformsVariations[U]>>(
        name: string,
        type: U,
        platform?: T,
    ): PlatformsVariations[U] | PlatformsVariations[U][T][string] | undefined {
        const token = this.getToken(name, type);

        if (!token) {
            return;
        }

        if (platform) {
            return token.getValue(platform);
        }

        const platforms = token.getPlatforms();

        return Object.keys(platforms).reduce(
            (acc, platform) => ({
                ...acc,
                [platform]: token.getValue(platform),
            }),
            {} as PlatformsVariations[U],
        );
    }

    public setTokenValue<U extends keyof PlatformsVariations, T extends keyof Platforms<PlatformsVariations[U]>>(
        name: string,
        type: U,
        platform: PlatformsByVariationsMap<U, T>,
    ): void;
    public setTokenValue<U extends keyof PlatformsVariations, T extends keyof Platforms<PlatformsVariations[U]>>(
        name: string,
        type: U,
        platform: T,
        value: PlatformsVariations[U][T][string],
    ): void;
    public setTokenValue<U extends keyof PlatformsVariations, T extends keyof Platforms<PlatformsVariations[U]>>(
        name: string,
        type: U,
        platform: PlatformsByVariationsMap<U, T> | T,
        value?: PlatformsVariations[U][T][string],
    ): void {
        const token = this.getToken(name, type);

        if (!token) {
            return;
        }

        if (typeof platform === 'string' && value) {
            token.setValue<T, PlatformsVariations[U]>(platform, value);
            return;
        }

        if (typeof platform !== 'string') {
            Object.entries(platform).forEach(([key, value]) => {
                token.setValue<T, PlatformsVariations[U]>(key, value);
            });
        }
    }
}
