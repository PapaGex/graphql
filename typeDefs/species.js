const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        species: [Species!]
        species(id: ID!): Species
    }
    type Species {
        id: ID!
        latinName: String!
        commonName: String!
        naturalHabitat: String!
        tempHigh: Int!
        tempLow: Int!
        humidity: Int!
        specialReqs: String!
    }
    `;