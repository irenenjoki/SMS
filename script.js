// JavaScript code to get the current date and year
var currentDate = new Date();
var year = currentDate.getFullYear();


// Function to update the date and year
function updateDate() {
  document.getElementById('current-year').textContent = "© MAKINI SCHOOL. All right Reserved " + year;
}

// Update the date and year initially
updateDate();

// Update the date and year every second
setInterval(updateDate, 1000);

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

$(window).on("load", function () {
  $('body').addClass('loaded');
});



const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Get the search input element
  var searchInput = document.getElementById('searchInput');

  // Add an event listener for the 'Enter' key press
  searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          // Call a function to handle the search
          performSearch(searchInput.value);
      }
  });
});

// Function to handle the search
function performSearch(query) {
  // You can replace this with your actual search logic
  alert('Search query: ' + query);
  // Perform actions like fetching search results, updating the UI, etc.
}


const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/search', (req, res) => {
    const query = req.body.query;
    // Replace this with your actual search logic and return results
    const results = performBackendSearch(query);
    res.json({ results: results });
});

// Function to handle the backend search logic
function performBackendSearch(query) {
    // Replace this with your actual backend search logic
    // Query your database, files, or any data source
    // Return relevant search results
    return ['Result 1', 'Result 2', 'Result 3'];
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
