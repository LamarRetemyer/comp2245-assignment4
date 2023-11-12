document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded.');

    // Listen for the click event on the "Search" button
    document.getElementById('searchButton').addEventListener('click', function () {
        console.log('Search button clicked.');

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure it to make a GET request to superheroes.php
        xhr.open('GET', 'superheroes.php', true);

        // Set up the callback function to handle the response
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                // On success, display the HTML response in an alert
                alert(xhr.responseText);
            } else {
                // Handle errors
                console.error('Request failed with status:', xhr.status);
            }
        };

        // Set up the callback function to handle network errors
        xhr.onerror = function () {
            console.error('Network error occurred');
        };

        // Send the request
        xhr.send();
    });
});