# Paradise Nursery — Online Plant Shop

A responsive single-page shopping cart application for an online houseplant store, built with **React**, **Vite**, **Redux Toolkit**, and **React Router**.

## Features
- Welcome landing page, company About Us section, and Home / Plants / Cart navigation.
- 18 distinct houseplants across three categories: Air Purifying, Low Maintenance, and Flowering Plants (six plants each).
- Product thumbnails, descriptions, and prices; Add to Cart buttons become disabled once that plant is in the cart.
- Dynamic cart badge showing total item quantity, including quantity changes.
- Shopping cart supports increasing/decreasing quantity, deleting items, line totals, and a grand total.
- Checkout presents a “Coming Soon” message; Continue Shopping returns to the catalog.
- Responsive layout, accessible form controls, and semantic HTML.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown in your terminal (usually http://localhost:5173).

## Create a production build
```bash
npm run build
npm run preview
```

## Project files
- `src/App.jsx`: landing page, routes, navigation, home and about content.
- `src/AboutUs.jsx`: company information.
- `src/App.css`: responsive styling and botanical hero background image.
- `src/CartSlice.jsx`: Redux shopping cart state and actions.
- `src/ProductList.jsx`: product listing, categories, Add to Cart behavior.
- `src/CartItem.jsx`: cart details, subtotal/total, and quantity controls.
- `src/plants.js`: catalog data.

## Notes
Plant imagery uses remote Unsplash photo URLs; an internet connection is needed for the photos. There is no payment backend; checkout is intentionally a demo.
