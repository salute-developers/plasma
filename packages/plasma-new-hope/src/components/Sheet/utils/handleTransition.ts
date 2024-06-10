import { CommonProps } from '../Sheet.types';

type HandleTransitionProps = Omit<CommonProps, 'opened'>;

export const handleTransition = (transition: string) => (props: HandleTransitionProps): string => {
    const { withTransition } = props;

    return !withTransition ? 'unset' : transition;
};
