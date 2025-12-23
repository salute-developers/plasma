import React from 'react';
import type { FC } from 'react';
import { Badge, Tooltip, BodyXS } from '@salutejs/sdds-finai';

export const DocsBadge: FC<{ title: string; description: string }> = ({
    title = 'only styled-components',
    description = 'Доступен только в сборке styled-components',
}) => (
    <div
        style={{
            marginTop: '-22px',
            marginBottom: '16px',
        }}
    >
        <Tooltip
            target={
                <Badge size="m" view="accent">
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
