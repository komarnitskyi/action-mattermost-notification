## Mattermost Notification Action
This action allows you to send messages to your Mattermost.

### Parameters
Param                     | Description
---------------           |---------------
`webhook` (**required**)  | Webhook URI
`text` (**required**)     | Message body (Markdown allowed)
`channel`                 | Channel message will be posted in or username to send DM (Leave empty for hook-default)
`username`                | Sender name (leave empty to use hook-default)
`json`                    | For fully custom payload. **ALL** other params will be ignored (even `text`)
`icon_url`                | Sender icon url
`icon_emoji`              | Sender emoji

### Usage example
```yml
    ...
    steps:
      - uses: komarnitskyi/action-mattermost-notification@v0.1.2-beta
        with:
          webhook: ${{secrets.MATTERMOST_WEBHOOK}}
          text: "Application successfully deployed"
          username: 'appbot'
```

Check the [Mattermost documentation](https://docs.mattermost.com/developer/webhooks-incoming.html) for more information regarding hooks