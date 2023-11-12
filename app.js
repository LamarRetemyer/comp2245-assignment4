document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded.');

    document.getElementById('searchButton').addEventListener('click', function () {
        console.log('Search button clicked.');

        var searchInput = sanitizeInput(document.getElementById('searchInput').value);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'superheroes.php?query=' + encodeURIComponent(searchInput), true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                document.getElementById('result').innerHTML = xhr.responseText;
            } else {
                console.error('Request failed with status:', xhr.status);
            }
        };

        xhr.onerror = function () {
            console.error('Network error occurred');
        };

        xhr.send();
    });
});

function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
