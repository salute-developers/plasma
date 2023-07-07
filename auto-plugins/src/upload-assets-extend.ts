/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RestEndpointMethodTypes } from '@octokit/rest';
import { Auto, IPlugin, getPrNumberFromEnv, validatePluginConfiguration } from '@auto-it/core';
import UploadAssetsPlugin from '@auto-it/upload-assets';
import endent from 'endent';
import * as t from 'io-ts';

type AssetResponse = RestEndpointMethodTypes['repos']['uploadReleaseAsset']['response']['data'];

const requiredPluginOptions = t.type({
    /** Paths to assets to upload */
    assets: t.array(t.string),
});

const optionalPluginOptions = t.partial({
    /** Max number of assets to keep in the canary release */
    maxCanaryAssets: t.number,
    /** Custom message for header in PR */
    headerMessage: t.string,
    /** Filter assets by regular expression */
    filter: t.string,
    /** Whether to comment on PRs made by bots */
    includeBotPrs: t.boolean,
    /** Group assets by regular expression */
    group: t.string,
    /** Compact view for PRs comment */
    compact: t.boolean,
});

const pluginOptions = t.intersection([requiredPluginOptions, optionalPluginOptions]);

export type IUploadAssetsPluginOptions = t.TypeOf<typeof pluginOptions>;

/** Convert shorthand options to noraml shape */
const normalizeOptions = (options: IUploadAssetsPluginOptions | string[]) =>
    Array.isArray(options) ? { assets: options } : options;

export default class UploadAssetsExtendPlugin extends UploadAssetsPlugin implements IPlugin {
    name = 'upload-assets-extend';

    /** The options of the plugin */
    options: Required<IUploadAssetsPluginOptions>;

    constructor(options: IUploadAssetsPluginOptions | string[]) {
        super(options);

        const normalizedOptions = normalizeOptions(options);
        this.options = {
            ...normalizedOptions,
            maxCanaryAssets: normalizedOptions.maxCanaryAssets || 300,
            headerMessage: normalizedOptions.headerMessage || ':baby_chick: Download canary assets:',
            filter: normalizedOptions.filter || '',
            includeBotPrs: normalizedOptions.includeBotPrs === undefined ? true : normalizedOptions.includeBotPrs,
            group: normalizedOptions.group || '',
            compact: normalizedOptions.compact || false,
        };
    }

    // @ts-ignore
    apply(auto: Auto) {
        const { headerMessage, filter, includeBotPrs, group, compact } = this.options;

        auto.hooks.validateConfig.tapPromise(this.name, async (name, options) => {
            if (name === this.name || name === `@auto-it/${this.name}`) {
                return validatePluginConfiguration(this.name, pluginOptions, normalizeOptions(options));
            }
        });

        auto.hooks.canary.tapPromise(this.name, async ({ canaryIdentifier, dryRun }) => {
            // @ts-ignore
            const canaryRelease = await this.getCanaryGitHubRelease(auto, true);

            auto.logger.log.info(endent`${dryRun ? 'Would update' : 'Updating'} Canary Release:

          ${canaryRelease.html_url}
        `);

            // @ts-ignore
            const assets = await this.uploadAssets(auto, { data: canaryRelease }, dryRun, canaryIdentifier);

            if (!assets.length) {
                return;
            }

            auto.logger.log.success(endent`
          Download canary assets:
          
          ${assets.map((asset: AssetResponse) => `${asset.name}: ${asset.browser_download_url}`).join('  \n')}
        `);

            const prNumber = getPrNumberFromEnv();

            if (!prNumber || !includeBotPrs) {
                return;
            }

            const assetList = this.getFilteredList(assets, filter);
            const groupList = this.getGroupedList(assets, group);

            const message = compact
                ? this.getCompactPullRequestMessage(headerMessage, assetList, groupList)
                : this.getPullRequestMessage(headerMessage, assetList, groupList);

            await auto.git?.addToPrBody(message, prNumber, 'canary-assets');
        });

        auto.hooks.afterRelease.tapPromise(this.name, async ({ response }) => {
            if (!response) {
                return;
            }

            // @ts-ignore
            await this.uploadAssets(auto, response);
            // @ts-ignore
            await this.cleanupCanaryAssets(auto);
        });
    }

    /** Get link list by type */
    private getLinkList(assets: AssetResponse[], type: 'html' | 'markdown'): string {
        /**  Get Markdown link  */
        const getMarkdownLink = (asset: AssetResponse) => `[${asset.name}](${asset.browser_download_url})`;

        /** Get HTML link */
        const getHTMLLink = (asset: AssetResponse) => `<a href='${asset.browser_download_url}'>${asset.name}</a><br>`;

        return assets.map(type === 'html' ? getHTMLLink : getMarkdownLink).join('\n');
    }

    /** Get asset list by filter */
    private getFilteredList(assets: AssetResponse[], filter: string): AssetResponse[] {
        if (!filter) {
            return assets;
        }

        const regexp = new RegExp(filter, 'mi');
        return assets.filter(({ name }) => regexp.test(name));
    }

    /** Get asset list by group */
    private getGroupedList(assets: AssetResponse[], group: string): Record<string, AssetResponse[]> | undefined {
        if (!group) {
            return;
        }

        const regexp = new RegExp(group, 'mi');

        return assets.reduce((groupList: Record<string, AssetResponse[]>, asset) => {
            const name = (regexp.exec(asset.name) || [])[1];

            if (groupList[name]) {
                groupList[name].push(asset);
            } else {
                groupList[name] = [asset];
            }

            return groupList;
        }, {});
    }

    /** Get pull request message */
    private getPullRequestMessage(
        message: string,
        assetList: AssetResponse[],
        groupList?: Record<string, AssetResponse[]>,
    ): string {
        /** Get grouped link list */
        const getGroupedLinkList = (groupList: Record<string, AssetResponse[]>) =>
            Object.entries(groupList)
                .map(
                    ([group, assets]) =>
                        endent`
                ### ${group}
                ${this.getLinkList(assets, 'markdown')}`,
                )
                .join('\n');

        return endent`
        ${message}
  
        ${groupList ? getGroupedLinkList(groupList) : this.getLinkList(assetList, 'markdown')}
      `;
    }

    /** Get compact pull request message */
    private getCompactPullRequestMessage(
        message: string,
        assetList: AssetResponse[],
        groupList?: Record<string, AssetResponse[]>,
    ): string {
        /** Get grouped link list */
        const getGroupedLinkList = (groupList: Record<string, AssetResponse[]>) =>
            Object.entries(groupList)
                .map(
                    ([group, assets]) => endent`
          <details>
            <summary>${group}</summary>
            <blockquote>
              ${this.getLinkList(assets, 'html')}
            </blockquote>
          </details>`,
                )
                .join('\n');

        return endent`
      <details>
        <summary>${message}</summary>
        <blockquote>
          ${groupList ? getGroupedLinkList(groupList) : this.getLinkList(assetList, 'html')}
        </blockquote>
      </details>
    `;
    }
}
