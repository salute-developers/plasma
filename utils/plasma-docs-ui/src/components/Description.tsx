import React, { FC, HTMLAttributes } from 'react';

import { renderMarkdown } from '../utils/markdown';

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    description: string;
}

export const Description: FC<DescriptionProps> = ({ description }) => {
    const HTMLDescription = renderMarkdown(description);
    return <div dangerouslySetInnerHTML={{ __html: HTMLDescription }} />;
};
