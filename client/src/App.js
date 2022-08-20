/*
==========
| SERVER |
==================================================================================================================================

? @author:          William J. Horn
? @doc-name:        App.js
? @doc-created:     00/00/0000

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

npm installs:
-------------
npm i react-router-dom graphql @apollo/client styled-components


==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================

==================================================================================================================================
*/

/* ---------------- */
/* Import Internals */
/* ---------------- */
import Test from './components/Test';

// Import all page components
import { 
    HomePage
} from './pages'

/* ---------------- */
/* Import Externals */
/* ---------------- */

// React router
import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Navigate 
} from 'react-router-dom';

// Apollo client
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    // createHttpLink
} from "@apollo/client";

/* ---------------------------- */
/* Apollo Client Initialization */
/* ---------------------------- */
// const httpLink = createHttpLink({
//     uri: process.env.NODE_ENV === 'production' 
//         ? '/graphql'
//         : 'http://localhost:3001/graphql'
// });

const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    uri: process.env.NODE_ENV === 'production' 
        ? '/graphql'
        : 'http://localhost:3001/graphql',

    cache: new InMemoryCache(),
});
  

/* ------------------ */
/* Main App Component */
/* ------------------ */
function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
