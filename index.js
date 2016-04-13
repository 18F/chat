// https://github.com/rauchg/slackin#api

const port = process.env.PORT || 3000;
const token = process.env.SLACK_API_TOKEN;
if (!token) {
  throw new Error("Please set SLACK_API_TOKEN.");
}

require('slackin').default({
  token: token,
  interval: 6000,
  org: '18f',
  channels: [
    'cap-public',
    'devops-public',
    'federalist-public',
    'openopps-public',
    'open-data-maker-pub',
    'sf-public'
  ].join(',')
}).listen(port, function() {
  console.log(`Listening on port ${port}.`);
});
