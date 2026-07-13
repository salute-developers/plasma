import React from 'react';
import type { FC } from 'react';
import { Badge, Tooltip, BodyXS } from '@salutejs/sdds-cs';

export const DocsBadge: FC<{ title: string; description: string }> = ({
    title = 'only emotion',
    description = 'Доступен только в beta-сборке',
}) => (
    <div
        style={{
            marginTop: '-22px',
            marginBottom: '16px',
        }}
    >
        <Tooltip
            target={
                <Badge size="s" view="accent">
                    <BodyXS bold>{title}</BodyXS>
                </Badge>
            }
            text={description}
            placement="right-start"
            trigger="hover"
            hoverTimeout={500}
            maxWidth="400px"
            hasArrow={false}
            style={{
                verticalAlign: 'middle',
            }}
        />
    </div>
);
