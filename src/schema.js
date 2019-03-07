const { gql } = require('apollo-server');

const storeSchema = require('./stores/schema');
// The GraphQL schema
const Query = gql`
    type Query { _empty: String }
`;

module.exports = [Query, storeSchema];
