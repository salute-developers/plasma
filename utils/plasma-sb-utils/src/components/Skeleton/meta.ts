import { InSpacingDecorator } from '../../index';

type CreateMetaProps = {
    title?: string;
};

export const createMeta = ({ title = 'Data Display/Skeleton' }: CreateMetaProps = {}) => {
    return {
        title,
        decorators: [InSpacingDecorator],
    };
};
