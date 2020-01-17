const routes = require('next-routes')();

routes
  .add('/records/new', '/records/new')
  .add('/records/:address', '/records/details')

module.exports = routes;