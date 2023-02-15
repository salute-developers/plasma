import { useCallback, useState } from 'react';

import { getUUID } from '../utils';
import { getEnv, getAuthToken } from '../../api';

const GITHUB_AUTH_API_URL = 'https://github.com/login/oauth/authorize';

const appendChainParam = (params: URLSearchParams) => ({
    append: (name: string, value: string) => {
        params.append(name, value);

        return appendChainParam(params);
    },
});

const getAuthURL = (pluginClientId: string) => {
    const { REACT_APP_AUTH_SERVER_URL, REACT_APP_APPLICATION_CLIENT_ID } = getEnv();

    const url = new URL(GITHUB_AUTH_API_URL);
    const params = new URLSearchParams(url.search);
    const currentURL = window.location.href;

    const redirectURI = `${REACT_APP_AUTH_SERVER_URL}/auth/${pluginClientId}?redirectUrl=${encodeURI(currentURL)}`;

    appendChainParam(params)
        .append('client_id', REACT_APP_APPLICATION_CLIENT_ID)
        .append('redirect_uri', redirectURI)
        .append('response_type', 'code')
        .append('scope', 'public_repo');

    url.search = params.toString();

    return url.href;
};

export const useGithubAuth = () => {
    const [token, setToken] = useState<string | undefined>();

    const pluginClientId = getUUID();

    const onGetToken = useCallback(async () => {
        const token = await getAuthToken(pluginClientId);

        setToken(token);
    }, [pluginClientId]);

    const onGetAuth = useCallback(() => {
        window.location.href = getAuthURL(pluginClientId);
    }, [pluginClientId]);

    return [token, onGetToken, onGetAuth] as const;
};
