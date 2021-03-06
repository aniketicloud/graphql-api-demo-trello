const { ApolloServer } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => {
  return {
    sessionAPI: new SessionAPI(),
  };
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`GrapgQL is running at ${url}`);
});
