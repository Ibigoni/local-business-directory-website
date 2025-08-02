import { businesses } from "../main/data/businesses.js";
import { renderBusinesses } from "../utils/renderBusinesses.js";

// Filter the array of businesses to only include those in the "Food" category
const foodBusinesses = businesses.filter(b => b.category === "Food");

// Select the DOM element where business cards will be inserted
const container = document.querySelector('.business-card-grid');
// Use the renderBusinesses utility function to display only food-related businesses
renderBusinesses(foodBusinesses, container);
