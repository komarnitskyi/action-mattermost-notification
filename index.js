const core = require('@actions/core');
const HttpClient = require('@actions/http-client').HttpClient;

async function run() {
    const http = new HttpClient();

    try {
        const webhookUri = core.getInput('webhook');
        // Throw an error in case of no json and no text were provided
        if (!webhookUri) {
            core.setFailed('You have to provide webhook input');
            return;
        }
        const json = core.getInput('json');

        // If json provided ignore other params and send request immediately
        if (json) {
            return await http.postJson(
                webhookUri,
                JSON.parse(json)
            );
        }

        const text = core.getInput('text');

        // Throw an error in case of no json and no text were provided
        if (!text) {
            core.setFailed('You have to provide text or json param');
            return;
        }

        const channel = core.getInput('channel');
        const username = core.getInput('username');
        const icon_url = core.getInput('icon_url');
        const icon_emoji = core.getInput('icon_emoji');

        const payload = { text };

        if (channel) payload.channel = channel;
        if (username) payload.username = username;
        if (icon_url) payload.icon_url = icon_url;
        if (icon_emoji) payload.icon_emoji = icon_emoji;

        await http.postJson(
            webhookUri,
            payload
        );
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
