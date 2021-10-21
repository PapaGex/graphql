const { gql } = require('apollo-server-express');

module.exports = gql`
    
extend type Query {
    geckos: [Gecko!]
    gecko(id: ID!): Gecko
}    
type Gecko {
    id: ID!
    name: String!
    genus: String!
    species: String!
    origin: String!
    hatchDate: String!
    gender: String!
    description: String!
}
`;