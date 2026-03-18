import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
    IconDoubleDisclosureLeft,
    IconDisclosureLeftOutline,
    IconDisclosureRightOutline,
    IconDoubleDisclosureRight,
} from '@salutejs/plasma-icons';

export const createDefaultStory = (Pagination: any, IconButton: any) => (args: any) => {
    const [pageValue, setPageValue] = useState<number>(args.initialValue);
    const [perPageValue, setPerPageValue] = useState<number>(args.perPage);

    const lastPage = Math.ceil(args.count / perPageValue);
    const iconSize = args.size === 'xs' ? 'xs' : 's';

    const handleChangePage = (page: number, perPage: number) => {
        setPageValue(page);
        setPerPageValue(perPage);
        action('onChange')(page, perPage);
    };

    const leftContent = args.enableLeftSlot ? (
        <>
            <IconButton view="clear" size={args.size} onClick={() => setPageValue(1)}>
                <IconDoubleDisclosureLeft color="inherit" size={iconSize} />
            </IconButton>
            <IconButton
                view="clear"
                size={args.size}
                onClick={() => setPageValue((prevValue: number) => prevValue - 1)}
            >
                <IconDisclosureLeftOutline color="inherit" size={iconSize} />
            </IconButton>
        </>
    ) : undefined;

    const rightContent = args.enableRightSlot ? (
        <>
            <IconButton
                view="clear"
                size={args.size}
                onClick={() => setPageValue((prevValue: number) => prevValue + 1)}
            >
                <IconDisclosureRightOutline color="inherit" size={iconSize} />
            </IconButton>
            <IconButton view="clear" size={args.size} onClick={() => setPageValue(lastPage)}>
                <IconDoubleDisclosureRight color="inherit" size={iconSize} />
            </IconButton>
        </>
    ) : undefined;

    return (
        <Pagination
            {...args}
            value={pageValue}
            perPage={perPageValue}
            leftContent={leftContent}
            rightContent={rightContent}
            onChange={handleChangePage}
        />
    );
};
