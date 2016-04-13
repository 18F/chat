# chat.18f.gov

This is a small wrapper around [slackin](https://github.com/rauchg/slackin) to allow the public to join 18F's Slack channels.

## Setup

### Local

1. Clone this repository.
1. Get your Slack token—see [the slackin README](https://github.com/rauchg/slackin#custom) for instructions.
1. Run

    ```bash
    SLACK_API_TOKEN=... node index.js
    ```

### Production

**18F staff:** To deploy changes to [cloud.gov](https://cloud.gov/), run:

```bash
cf target -o 18F -s chat
cf push
```
