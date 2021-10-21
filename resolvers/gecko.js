const { geckos, species } = require('../index');

module.exports = {
    Query: {
        geckos: () => geckos,
        gecko: (_, { id }) => geckos.find(gecko => gecko.id === id)
    },
    Mutation: {
    },
    Gecko: {
        species: ({ species }) => species.filter(species => species.species === species )
    }
}