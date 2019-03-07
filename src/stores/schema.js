const { gql } = require('apollo-server');

module.exports = gql`
    type Store {
        id: String
        name: String,
        address: String,
        postalCode: String,
        city: String
    }
    
    extend type Query {
        store(id: String): Store
    }
`;
