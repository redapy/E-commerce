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
- Set up redux and create a `rootReducer` that will hold the app's different reducers
- Created a `currencyReducer`, which holds the selected currency symbol. 
- Defined a `GET_CURRENCIES` that will grab all the available currencies in GraphQL endpoint.
- Created a CurrencySwitcher component, wrap it in the `graphql HOC` to get access to the data (currencies we get back from the GraphQL endpoint) in the compoenent props.
- Map the redux state to props, and map a `selectCurrecny` function, which dispatches an action to change the selected currency, to props as well.
- Output the currencies in a dropdown menu and add an onClick event that will call the `selectCurrecny` function, thus changing the selected currency in the redux store.
- Implemented functionality to close/open the dropdown menu, and close it when clicked outside of it.
### Add Category Page
- Created a CategorPage component, and wrap it with the `withRouter HOC` to get access to the route parameters in the component's props.
- Grab the name of the category from the route params, and pass it as props to the `<ProductsList />` component.
#### `ProductsList`
- Defined a `GET_CATEGORY_PRODUCTS` query that accepts an `input` variable, then use that variable to filter the products by category name
- Created a  `<ProductsList />` component and wrap it with the Apollo `graphql HOC`.
- Aas a second argument for the HOC pass an object that defines an options key. The option's value is an arrow function that takes the component's props and returns an object.
- Inside that object define the query variables, and give the `input` variable the `categoryName` that was passed as props.
- Iterate through the `products`, which are filtered from the backend depending on the categoryName, I get back from the GraphQL endpoint.
- Pass the prices (prices that correspond to different currencies) for a single product to the `<ProductPrice />` component, that will output a single price.
#### `ProductPrice`
- Created a `<ProductPrice />` and map the redux state to the component's props, to know which currency is selected.
- Created the `getAmount` helper function that takes the prices of a product and the currency symbol. it uses the `.filter` array method to get the price that matches the current currency selected and return it.
### Add Product Description Page
- It follows the same pattern as the `<ProducList /> component`, the only difference is it grabs a product `id` from the route params instead of a category name and it use that `id` to get the specific product from the GraphQL endpoint.
- It passes gallery as a prop to the `<Gallery />` components, which output a gallery view. A main picture(the big one) and the rest are thumbnails.
- When you click one of the thumbnails it changes the main picture to that thumbnail.
- It passes the product attributes, and the `getAttributes` function to the `<ProductAttributes />` component.
#### `<ProductAttributes />`
- Created `<ProductAttributes />` that output the differentt groups of controlled radio buttons (Size, Color..), Each radio button represents an attribute.
- Added an onChange eventListener that fires the `handleSelect` function.
- `handleSelect` will call the `getAttributes` functions, which will update the parent component (`<ProductDescription />`) state to be in the following format `{GroupName: attribute}` (example: {Size: 'M'}).
- Styled the selected attribute differently depending on the checked attribute.
- If a an attribute has a swatch attribute are iutpteded as colored squares.
#### InMemoryCash
