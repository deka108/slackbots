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

### Credentials

See the required environment variables and credentials in `.env-template`

```.env
SLACK_BOT_ID=
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=
```