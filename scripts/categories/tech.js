import { businesses } from "../main/data/businesses.js";
import { renderBusinesses } from "../utils/renderBusinesses.js";

//Filter the array of businesses to only include those in the "Tech" category
const techBusinesses = businesses.filter(b => b.category === "Tech");
//Select the DOM element where business cards will be inserted
const container = document.querySelector('.business-card-grid');

// Using the renderBusinesses utility function to display only tech-related businesses
renderBusinesses(techBusinesses, container);
