# Local Business Directory Website

A simple frontend-only web app that displays a list of local businesses by category (Tech, Food, Clothing). Users can view, filter, and explore businesses.

## Project Structure

- `/backend/businesses.json` – JSON data for all businesses
- `business-detail.html` – Detail page for each business
- `/categories/`
  - `clothing.html` - clothing filtered html
  -  `food.html` - food filtered html
  -  `tech.html` - tech filtered html 
- `/scripts/`
  - `detail.js` – handles business detail implementation
  - `clothing.js` – Handles clothing filtering logic
  - `food.js` – Handles food filtering logic
  - `tech.js` – Handles tech filtering logic
  - `renderBusinesses.js` – Renders UI elements
  - `homepage.js` – Initializes the app
  - `businesses.js` - holds an array of each business's data as an object
- `/styles/` – CSS files for both pages
- `/images/` – All image assets
- `/tests/` – Jasmine test files
- `index.html` – Main page
- `README.md` – Project documentation

## Features

- Filter businesses by category
- View detailed business info
- Modular JS code
- Jasmine unit and integration testing

## How to Run

1. Download or clone the repository.
2. Open `index.html` directly in a web browser.
3. (Optional) Use a Live Server extension in VS Code for a better development experience.

## Built With

- HTML
- CSS
- JavaScript
- JSON

## Team

We all worked on different sections of the project, including design, data handling, filtering logic, and testing.

## License

This project is for educational use only.
