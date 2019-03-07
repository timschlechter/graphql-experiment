const storeResolvers = require('./stores/resolvers');

module.exports = {
  Query: {
    ...storeResolvers,
  },
};
