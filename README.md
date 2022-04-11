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
#### InMemoryCache configuration
- After I get back the data from the GraphQL, the Apollo Client stores that data as a flat object in a local, normalized, in-memory cache. So, the next time you ask for the same data it will grab it from the cached data.
- However, I had a **problem** due to how Apollo generates cache ID to identify each object and because the attributesSets in the QraphQL schema have the same id, even for different products ( AttributeSet Size for example has the id `Size` for all products).
> By default, an object's cache ID is the concatenation of the object's __typename and id (or _id) fields, separated by a colon (:).
- The problem is the attributes will be messed up and all the products will have the  same attributes for each group.
- As a **solution** for this, I needed to customize the generated cache ID to use the array of items `[items]` to be the unique identifies instead of the attributeSet id.
### Implement functionality to add products to the cart
- Create a `cartReducer` and add it to the `rootReducer` as `cartItems`.
- Define the action creator `addProduct` that takes an object (the product added) as an argument and returns an action with that `product` as a payload.
#### Add product from the Product Description Page
- Map the `dispatch` function to the `ProductDescription` component's props.
- Define a `handleAddToCart` function that takes a `product object` as an argument and dispatch the `addProduct` action creator with that `product`.
- When you click on the *add to cart* button, the `onSubmit` EventListener catches that and calls the `handleAddToCart` with the correspondent details for that product as an object.
- The `id` for each object is generated with the `generateID` helper function that takes the product id and its selected attributes and returns the concatenation of those two.
- The reason why I produce a unique `id` like this, is to avoid having the same id if a user added the same product with different attributes.
- You can't add a product if the attributes are not selected
#### Add product from the Category Page
- It follows a similar pattern as from adding the description page
- The only difference is instead of having `onSubmit` EventListener, it has an `onCLick` EventListener that fires whenever you click the cart icon.
- Because a user can't add a product to the cart without selecting attributes, I created the `getFirstAttrs` function that selects the first attributes as a default.
#### Handle `ADD_PRODUCT` in the `cartReducer`
- Create `addProductOrIncreaseQauntity` that takes the items already existing inside the cart and the `id` of the product added coming as payload, and it returns a new array.
- If the same product is found it increases its quantity, if not it will add a new product to the state.
- Because of the way the `id` is generated (original id + attributes), if a product is added with different attributes it will count as a new product.
