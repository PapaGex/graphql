const userResolver = require('./user');
const taskResolver = require('./task');
const geckoResolver = require('./gecko');
const speciesResolver = require('./species');

module.exports = [
  userResolver,
  taskResolver,
  geckoResolver,
  speciesResolver
];