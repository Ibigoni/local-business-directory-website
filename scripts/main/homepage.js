import { businesses } from "./data/businesses.js";
import { LoadBusinessesData } from "./data/loadData.js";

// Select all rendered business cards for event handling
export const businessCard = document.querySelectorAll('.js-business-detail');
// Render homepage business cards
async function renderHomepage() {
  await LoadBusinessesData();
    
  // Attach click event to each card to store business ID and redirect to detail page
  businessCard.forEach((card, index) => {
    card.addEventListener('click', () => {
      const businessId = businesses[index].id; // Retrieve business ID
      localStorage.setItem("selectedBusinessId", businessId); // Store selected ID
      window.location.href = "business-detail.html"; // Navigate to detail page
    });
  });
  
  // -------------------------- Search Functionality -------------------------
  
  const searchInput = document.querySelector('.input'); // Reference to search input field
  const searchButton = document.querySelector('.search-button'); // Reference to search button
  
  // Function to render business cards from a filtered list
  function renderBusinesses(filteredBusinesses) {
    let businessHTML = '';
  
    filteredBusinesses.forEach((business) => {
      businessHTML += `
        <div class="business-card js-business-detail">
          <img src="${business.image.logo}" alt="${business.name} Logo" class="card-img">
          <div class="business-info">
            <div class="business-name-rating">
              <h3>${business.name}</h3>
              <span class="rating">⭐ ${business.rating.toFixed(1)}</span>
            </div>
            <p>${business.description.brief}</p>
          </div>
        </div>
      `;
    });
  
    // Update the DOM with the new filtered list
    document.querySelector('.js-business-card-grid').innerHTML = businessHTML;
  
    // Reattach click events to the newly rendered cards
    document.querySelectorAll('.js-business-detail').forEach((card, index) => {
      card.addEventListener('click', () => {
        const selectedBusiness = filteredBusinesses[index];
        localStorage.setItem("selectedBusinessId", selectedBusiness.id);
        window.location.href = "business-detail.html";
      });
    });
  }
  
  // Initial render of all businesses
  renderBusinesses(businesses);
  
  // Handle search on button click
  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase(); // Get user input
  
    // Filter businesses by name, category, or brief description
    const filtered = businesses.filter(business =>
      business.name.toLowerCase().includes(query) ||
      business.category.toLowerCase().includes(query) ||
      business.description.brief.toLowerCase().includes(query)
    );
  
    renderBusinesses(filtered); // Display filtered results
  }
  
  searchButton.addEventListener('click', handleSearch); // Search on button click
  
  // Additional functionality trigger search on Enter key
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
}

renderHomepage();