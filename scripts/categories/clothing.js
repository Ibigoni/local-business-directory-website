// scripts/categories/clothing.js
import { businesses } from "../main/data/businesses.js";
import { renderBusinesses } from "../utils/renderBusinesses.js";

// Filter the array of businesses to only include those in the "Clothe" category
const clothingBusinesses = businesses.filter(b => b.category === "Clothing");

// Select the DOM element where business cards will be inserted
const container = document.querySelector('.business-card-grid');

// Use the renderBusinesses utility function to display only tech-related businesses
renderBusinesses(clothingBusinesses, container);
