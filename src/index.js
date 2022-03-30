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
  cache: new InMemoryCache(),
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
