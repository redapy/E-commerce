# Entry-React-test
- E-commerce website built with React class components, react-router, and styled-components.
- It fetches data from a GraphQL endpoint with Apollo Client
## Project structure
Before start explaining the process and the code, I find it useful to understand the project structure first. There are five folders,  assets,  pages, components, store, and utils.
- assets: it has all the icons the project needs
- pages: 
  - It has the three required pages, category page, product page, and cart page.
  - Every page has its own folder that contains the page component, its children components that  are not used anywhere else, and their styles files.
- components:
  - It has all the components that are used in more than one place(in two components for example), or they are simply not a page.
  - Every component has its own folder that contains the component itself, its style file.
- store: it has all folders related to redux-store, e.g actions, and reducers.
- utils: contains the helper functions and the  grapghQL queries file. 
## Process
### Initialize ApolloClient and setup routes
- Inside `index.js` wrapped the `<App />` component with `<ApolloProvider client={client}/>` and provide it with the ApolloClient instance.
- Created the different pages needed (with dummy content that indicates the page ), and the `Navbar`.
- Inside app.js setup routes with react-router and define each page path.
- I used `react-router` v5 because v6 is moving away from claas components and focus heavly on using hooks.
### Add the currency switcher
- 
