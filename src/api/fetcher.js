import { rootUrl } from "./index"

export async function fetcher(endpoint, { body, ...customConfig } = {}) {
    const headers = { "content-type": "application/json" };

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        }
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${rootUrl}${endpoint}`, config)
    const data = await response.json();
    return data;
}