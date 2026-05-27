import React from 'react';
import { isEmpty } from 'src/utils';

import { StyledEmptyState } from '../../Combobox.styles';
import { classes } from '../../Combobox.tokens';
import { VirtualList } from '../VirtualList/VirtualList';

import { Props } from './TreeList.types';
import { Item } from './ui/Item/Item';
import { ListWrapper, ScrollContainer } from './TreeList.styles';

export const TreeList: React.FC<Props> = ({
    items,
    listMaxHeight,
    onScroll,
    virtual,
    beforeList,
    afterList,
    emptyStateDescription,
}) => {
    if (virtual) {
        return (
            <VirtualTreeList
                items={items}
                listMaxHeight={listMaxHeight}
                onScroll={onScroll}
                beforeList={beforeList}
                afterList={afterList}
                emptyStateDescription={emptyStateDescription}
            />
        );
    }

    return (
        <ListWrapper>
            <ScrollContainer listMaxHeight={listMaxHeight} onScroll={onScroll}>
                {beforeList}

                {isEmpty(items) ? (
                    <StyledEmptyState
                        className={classes.emptyStateWrapper}
                        description={emptyStateDescription || 'Ничего не найдено'}
                    />
                ) : (
                    <>
                        {items?.map((item, index) => {
                            return <Item key={index} item={item} pathToItem={[index]} />;
                        })}
                    </>
                )}

                {afterList}
            </ScrollContainer>
        </ListWrapper>
    );
};

const VirtualTreeList: React.FC<Props> = ({
    items = [],
    listMaxHeight,
    onScroll,
    beforeList,
    afterList,
    emptyStateDescription,
}) => {
    return (
        <ListWrapper>
            {beforeList}

            {isEmpty(items) ? (
                <StyledEmptyState
                    className={classes.emptyStateWrapper}
                    description={emptyStateDescription || 'Ничего не найдено'}
                />
            ) : (
                <VirtualList
                    items={items}
                    listMaxHeight={listMaxHeight}
                    onScroll={onScroll}
                    renderItem={(item, index) => <Item item={item} pathToItem={[index]} />}
                />
            )}

            {afterList}
        </ListWrapper>
    );
};
