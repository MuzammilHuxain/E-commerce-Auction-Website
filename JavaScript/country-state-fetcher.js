document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch cities for a given country
    function fetchCities(country) {
        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "country": country
            })
        })
        .then(response => response.json())
        .then(data => {
            const citySelect = document.getElementById('seller-city');
            citySelect.innerHTML = ''; // Clear city options
            data.data.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching cities:', error));
    }

    // Fetch countries from the API
    fetch("https://countriesnow.space/api/v0.1/countries")
        .then(response => response.json())
        .then(data => {
            const countrySelect = document.getElementById('seller-country');
            data.data.forEach(countryData => {
                const option = document.createElement('option');
                option.value = countryData.country;
                option.textContent = countryData.country;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));

    // Event listener for country select change
    document.getElementById('seller-country').addEventListener('change', function() {
        const selectedCountry = this.value;
        const citySelect = document.getElementById('seller-city');
        citySelect.innerHTML = ''; // Clear city options

        // Fetch cities for the selected country
        fetchCities(selectedCountry);
    });
});