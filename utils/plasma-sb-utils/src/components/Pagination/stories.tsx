import React, { useState } from 'react';
import { action } from 'storybook/actions';
import {
    IconDoubleDisclosureLeft,
    IconDisclosureLeftOutline,
    IconDisclosureRightOutline,
    IconDoubleDisclosureRight,
} from '@salutejs/plasma-icons';

export const createDefaultStory = (Pagination: any, IconButton: any) => (args: any) => {
    const [pageValue, setPageValue] = useState<number>(args.initialValue);
    const [perPageValue, setPerPageValue] = useState<number>(args.perPage);

    const lastPage = args.hasPerPage ? Math.ceil(args.count / perPageValue) : args.count;
    const iconSize = args.size === 'xs' ? 'xs' : 's';

    const handleChangePage = (page: number, perPage?: number) => {
        setPageValue(page);
        if (perPage !== undefined) {
            setPerPageValue(perPage);
        }
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
            key={String(args.hasPerPage)}
            value={pageValue}
            perPage={args.hasPerPage ? perPageValue : undefined}
            leftContent={leftContent}
            rightContent={rightContent}
            onChange={handleChangePage}
        />
    );
};
