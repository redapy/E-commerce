import React from "react";
import ReactDOM from "react-dom";
//components
import App from "./App";
//Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
//Redux
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
//styles
import { GlobalStyle } from "./GlobalStyles";

const store = createStore(rootReducer);

//connect react with with the GrapghQL endpoint
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    // Configure the generated cachedID that Appolo provide to avoid having the same cachedID for different products,
    // which results having the same attriubtes for different product
    //example for "AttributeSet": default generated cachedID is AttributeSet:id. Because the id's for each AttributeSet in the GraphQL
    //schema are not unique, it will results in same cashedID generated. That's why I'm using items as a unique identifier.
    typePolicies: {
      AttributeSet: {
        keyFields: ["id", "items"],
      },
      Attribute: {
        keyFields: ["id", "value"],
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
