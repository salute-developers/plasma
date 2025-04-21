import React from 'react';

import {
    ChangelogComponentName,
    ChangelogContent,
    ChangelogDescription,
    ChangelogEntry,
    ChangelogH2,
    ChangelogItem,
    ChangelogList,
    ChangelogPullRequestLink,
} from './index';

export const ChangelogListContent = ({
    list = [],
    releaseDate,
    heading,
}: {
    list: any[];
    heading: string;
    releaseDate: string;
}) => {
    return (
        <>
            <ChangelogH2>{heading}</ChangelogH2>

            <ChangelogList key={heading}>
                {list.map(({ component, children }: any, index: number) => {
                    return (
                        <ChangelogItem key={`${releaseDate}_${component}_${index}`}>
                            <ChangelogEntry>
                                <ChangelogComponentName component={component} />
                                {children.map(({ text, link, id }: any) => {
                                    return (
                                        <>
                                            <ChangelogContent key={`${releaseDate}_${id}`}>
                                                <ChangelogDescription description={text} />
                                                {id && <ChangelogPullRequestLink id={id} href={link} />}
                                            </ChangelogContent>
                                        </>
                                    );
                                })}
                            </ChangelogEntry>
                        </ChangelogItem>
                    );
                })}
            </ChangelogList>
        </>
    );
};
