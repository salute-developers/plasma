import { getEnv } from './getEnv';

export const getAuthToken = async (pluginClientId: string): Promise<string> => {
    const token = window.localStorage.getItem('token');

    if (token) {
        return token;
    }

    let tokenResult = '';

    try {
        const response = await fetch(`${`${getEnv().REACT_APP_AUTH_SERVER_URL}/token`}/${pluginClientId}`);
        const result = await response.json();

        tokenResult = result.token;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }

    window.localStorage.setItem('token', tokenResult);

    return tokenResult;
};
