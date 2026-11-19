import { success, warning, critical, buttonSuccess, buttonWarning, buttonCritical } from '../../utils/tokens';

export const fieldStatuses = {
    success,
    warning,
    error: critical,
};
export const fieldBackgroundStatuses = {
    success: buttonSuccess,
    warning: buttonWarning,
    error: buttonCritical,
};
