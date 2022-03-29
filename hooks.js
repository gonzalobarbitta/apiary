const hooks = require('hooks');

hooks.before('/api/v1/files > List Files > 200 > application/json', (transaction) => {
  delete transaction.expected.headers['Content-Type'];
});