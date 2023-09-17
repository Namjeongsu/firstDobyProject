import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {AppRouter} from "./routes/AppRouter";

const App = () => {
    const client = new ApolloClient({
        uri: 'https://moviethree.synology.me/back/graphiql?path=/back/graphql', // GraphQL 서버 URL
        cache: new InMemoryCache() // fetching이 이루어진 query 캐싱 처리
    });
    return(
        <ApolloProvider client={client}>
        <AppRouter/>
        </ApolloProvider>
    );
};

export default App;
