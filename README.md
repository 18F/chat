# chat.18f.gov

This is a small wrapper around [slackin](https://github.com/rauchg/slackin) to allow the public to join 18F's Slack channels. Currently, this tool is down for some internal IT reasons, but should be back up soon.

*It only makes sense to use this repository directly if you are 18F staff, but the implementation may be useful to fork for others.*

## Adding new public channels

1. [Create the channel in Slack](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel). The channel name should end in `-public`, so that it's explicit that non-staff are present.
1. Send a pull request [adding the new channel](https://github.com/18F/chat/edit/master/channels.js), including the following information:
    * The reasoning for creating the channel
    * Who will be the moderators
1. Drop the link to the pull request into #wg-opensource.

Once merged and [deployed](#production), you can link to `https://chat.18f.gov/?channel=<name>` from your project/repository/etc.

## Setup

### Local

1. Clone this repository.
1. Get your Slack token—see [the slackin README](https://github.com/rauchg/slackin#custom) for instructions.
1. Run

    ```bash
    npm install
    SLACK_API_TOKEN=... node index.js
    ```

### Production

To deploy changes to [cloud.gov](https://cloud.gov/), run:

```bash
cf target -o 18F -s chat
cf push
```
