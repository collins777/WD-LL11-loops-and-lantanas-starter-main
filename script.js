// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // Use map to go through each station and add it to the page
  stations.map(function (station) {
    addStationElement(station);
  });
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  const searchInput = query.trim().toLowerCase(); // Ensure input is trimmed and lowercase
  const stationList = document.querySelectorAll("#station-list .station"); // Get all station elements
  const feedbackSection = document.querySelector("#search-feedback"); // Get the feedback section

  let found = false; // Track if any station matches the query

  // Loop through stations to check for matches
  for (let i = 0; i < stationList.length; i++) {
    const stationName = stationList[i].textContent.trim().toLowerCase();
    if (stationName.includes(searchInput)) {
      stationList[i].style.display = "block"; // Show matching station
      found = true;
    } else {
      stationList[i].style.display = "none"; // Hide non-matching station
    }
  }

  // Display feedback message if no matches are found
  if (!found) {
    feedbackSection.innerHTML = `<p>No stations found matching "${searchInput}".</p>`;
  } else {
    feedbackSection.innerHTML = ""; // Clear feedback message
  }
}

// Example usage: Attach event listener to search button
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", function () {
  const query = document.querySelector("#station-search").value;
  searchStations(query);
});

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each location
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
