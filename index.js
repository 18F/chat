const channels = require('./channels');

const port = process.env.PORT || 3000;
const token = process.env.SLACK_API_TOKEN;
if (!token) {
  throw new Error("Please set SLACK_API_TOKEN.");
}

// https://github.com/rauchg/slackin#api
require('slackin').default({
  token: token,
  interval: 6000,
  org: '18f',
  coc: 'https://github.com/18F/code-of-conduct#readme',
  channels: channels.sort().join(',')
}).listen(port, function() {
  console.log(`Listening on port ${port}.`);
});
