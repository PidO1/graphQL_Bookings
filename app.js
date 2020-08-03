const express = require('express');
const bParser = require('body-parser');
const dotenv = require('dotenv');
const {graphqlHTTP}  = require('express-graphql')
const {buildSchema, } = require('graphql');

//Initialize needed configs for server
const app = express();
app.use(bParser.json());
app.use('/graphql', graphqlHTTP({

        schema: buildSchema(`
                type RootQuery{
                        events : [String!]!


                }
                type RootMutation {
                        createEvent(name: String!):String


                }
                schema{
                        query: RootQuery
                        mutation: RootMutation

                }
        `),
        rootValue:{
                events: ()=>{
                        return ['well', 'so','it']
                },
                createEvent: (args)=>{
                        let eventName = args.name;

                        return eventName;

                }
        
        
        },
        graphiql : true


})

);

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');


