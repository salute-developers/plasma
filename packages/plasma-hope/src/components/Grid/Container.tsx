import { ContainerWeb } from './views/web/ContainerWeb';
import { ContainerB2C } from './views/b2c/ContainerB2C';
import { Design } from './types';

const componentMap = {
    web: ContainerWeb,
    b2c: ContainerB2C,
};

export const Container = ({ design }: Design) => componentMap[design];
