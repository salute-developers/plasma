import React, { useState, useEffect } from 'react';

import { PACKAGES_INFO } from '../utils';
import { createChangelogLink } from '../utils/constants';
import type { ChangelogItem } from '../utils/constants';

const nativePlatformsMetaUrl =
    'https://raw.githubusercontent.com/salute-developers/plasma-android/main/tokens/summary.json';

const verticals: Record<
    string,
    {
        title: string;
        package: string;
        version: string;
        links: Record<string, Record<'href', string>>;
    }
> = {
    plasmaSDService: {
        title: 'React',
        package: '@salutejs/plasma-b2c',
        version: PACKAGES_INFO['@salutejs/plasma-b2c'][0],
        links: {
            storybook: {
                href: '/b2c-storybook/',
            },
            documentation: {
                href: '/b2c/',
            },
        },
    },
    plasmaSDMid: {
        title: 'React',
        package: '@salutejs/plasma-web',
        version: PACKAGES_INFO['@salutejs/plasma-web'][0],
        links: {
            storybook: {
                href: '/web-storybook/',
            },
            documentation: {
                href: '/web/',
            },
        },
    },
    plasmaGigaApp: {
        title: 'React',
        package: '@salutejs/plasma-giga',
        version: PACKAGES_INFO['@salutejs/plasma-giga'][0],
        links: {
            storybook: {
                href: '/giga-storybook/',
            },
            documentation: {
                href: '/giga/',
            },
        },
    },
    SDDSService: {
        title: 'React',
        package: '@salutejs/sdds-serv',
        version: PACKAGES_INFO['@salutejs/sdds-serv'][0],
        links: {
            storybook: {
                href: '/sdds-serv-storybook/',
            },
            documentation: {
                href: '/sdds-serv/',
            },
        },
    },
    SDDSFinAI: {
        title: 'React',
        package: '@salutejs/sdds-finai',
        version: PACKAGES_INFO['@salutejs/sdds-finai'][0],
        links: {
            storybook: {
                href: '/sdds-finai-storybook/',
            },
            documentation: {
                href: '/sdds-finai/',
            },
        },
    },
    SDDSPlatformAI: {
        title: 'React',
        package: '@salutejs/sdds-platform-ai',
        version: PACKAGES_INFO['@salutejs/sdds-platform-ai'][0],
        links: {
            storybook: {
                href: '/sdds-platform-ai-storybook/',
            },
            documentation: {
                href: '/sdds-platform-ai/',
            },
        },
    },
    SDDSDFA: {
        title: 'React',
        package: '@salutejs/sdds-dfa',
        version: PACKAGES_INFO['@salutejs/sdds-dfa'][0],
        links: {
            storybook: {
                href: '/sdds-dfa-storybook/',
            },
            documentation: {
                href: '/sdds-dfa/',
            },
        },
    },
    SDDSCS: {
        title: 'React',
        package: '@salutejs/sdds-cs',
        version: PACKAGES_INFO['@salutejs/sdds-cs'][0],
        links: {
            storybook: {
                href: '/sdds-cs-storybook/',
            },
            documentation: {
                href: '/sdds-cs/',
            },
        },
    },
    SDDSCRM: {
        title: 'React',
        package: '@salutejs/sdds-crm',
        version: PACKAGES_INFO['@salutejs/sdds-crm'][0],
        links: {
            storybook: {
                href: '/sdds-crm-storybook/',
            },
            documentation: {
                href: '/sdds-crm/',
            },
        },
    },
    SDDSScan: {
        title: 'React',
        package: '@salutejs/sdds-scan',
        version: PACKAGES_INFO['@salutejs/sdds-scan'][0],
        links: {
            storybook: {
                href: '/sdds-scan-storybook/',
            },
            documentation: {
                href: '/sdds-scan/',
            },
        },
    },
    SDDSBizcom: {
        title: 'React',
        package: '@salutejs/sdds-bizcom',
        version: PACKAGES_INFO['@salutejs/sdds-bizcom'][0],
        links: {
            storybook: {
                href: '/sdds-bizcom-storybook/',
            },
            documentation: {
                href: '/sdds-bizcom/',
            },
        },
    },
    SDDSNetology: {
        title: 'React',
        package: '@salutejs/sdds-netology',
        version: PACKAGES_INFO['@salutejs/sdds-netology'][0],
        links: {
            storybook: {
                href: '/sdds-netology-storybook/',
            },
            documentation: {
                href: '/sdds-netology/',
            },
        },
    },
    SDDSInsol: {
        title: 'React',
        package: '@salutejs/sdds-insol',
        version: PACKAGES_INFO['@salutejs/sdds-insol'][0],
        links: {
            storybook: {
                href: '/sdds-insol-storybook/',
            },
            documentation: {
                href: '/sdds-insol/',
            },
        },
    },
};

export type VerticalKey = keyof typeof verticals;
export type Platforms = 'web' | 'viewSystem' | 'composeUi';

export type AllPlatformsData = Record<VerticalKey, Record<'web' | 'viewSystem' | 'composeUi', ChangelogItem>>;

// INFO: Хук объединяет данные о вертикалях и пакетах как нативной платформы так и web
export const useMergedAllPlatformsData = (skipFetch = false) => {
    const [data, setData] = useState<AllPlatformsData>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (skipFetch) {
            setLoading(false);

            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(nativePlatformsMetaUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const fetchNativePlatformsData = await response.json();

                const verticalsIncludeWebPlatform = Object.keys(verticals);
                const verticalsAll = verticalsIncludeWebPlatform.concat(Object.keys(fetchNativePlatformsData));

                const result: AllPlatformsData = Array.from(new Set(verticalsAll)).reduce((acc, key) => {
                    if (!verticalsIncludeWebPlatform.includes(key)) {
                        return {
                            ...acc,
                            [key]: fetchNativePlatformsData[key],
                        };
                    }

                    return {
                        ...acc,
                        [key]: { React: verticals[key], ...fetchNativePlatformsData[key] },
                    };
                }, {});

                setData(result);

                const storage = Object.entries(result).reduce((acc, [vertical, platforms]) => {
                    return {
                        ...acc,
                        [vertical]: Object.entries(platforms).reduce(
                            (data, [platform, { title = 'React', version, links }]) => {
                                return {
                                    ...data,
                                    [platform]: {
                                        route: createChangelogLink({ version, vertical, platform }),
                                        changelogURL: links?.changelogData?.href || '',
                                        title,
                                    },
                                };
                            },
                            {},
                        ),
                    };
                }, {});

                localStorage.setItem('CHANGELOG_DATA', JSON.stringify(storage));
            } catch (e) {
                // @ts-ignore
                setError(e?.message || '');

                console.error('Error fetching GitHub data:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [skipFetch]);

    return { data, loading, error };
};
