# respondToBot Slackbot

Triggers the slackbot to sned a random message when detecting another bot user's message sending activities.

## Prerequisites

### Required Permissions

| Scope | Permission |
| --- | --- |
| `channels:history` | Access user’s public channels |
| `chat:write:bot` | Send messages as imeltobat |
| `groups:history` | Access content in user’s private channels |
| `im:history` | Access content in user’s direct messages |
| `mpim:history` | Access user’s group messages |

### Event Subscriptions

| Event Name | Secription |
| --- | --- |
| `message.channels` | A message was posted to a channel |
| `message.groups` | A message was posted to a private channel |
| `message.im` | A message was posted in a direct message channel |
| `message.mpim` | A message was posted in a multiparty direct message channel |

### Configurations and Credentials

We're using `dotenv`. To make this dotenv working, you need to copy `.env-template` to `.env` and fill-in all the required parameters with their actual values.

```.env
SLACK_BOT_ID=
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=
```

If you're successful, you'll able to access the above environment varibables from your node.js application using `process.env.[ENVIRONMENT_VARIABLE_NAME]`
