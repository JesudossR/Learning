document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const placeSelect = document.getElementById('place');
    const countries = ["--Select Country--",
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
        "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
        "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
        "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
        "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria",
        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
        "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    const stateOptions = {
        India: ['Maharashtra', 'Karnataka', 'TamilNadu']
    };

    const placeOptions = {
        Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
        Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
        TamilNadu: ['Chennai', 'Coimbatore', 'Madurai']
    };

    // countries.forEach(country => {
    //     const option = document.createElement('option');
    //     option.value = country;
    //     option.textContent = country;
    //     countrySelect.appendChild(option);
    // });

    function populateSelect(selectElement, options) {
        selectElement.innerHTML = '';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            selectElement.appendChild(opt);
        });
    }
    function populateStates() {
        const selectedCountry = countrySelect.value;
        if (selectedCountry && stateOptions[selectedCountry]) {
            populateSelect(stateSelect, ['State', ...stateOptions[selectedCountry]]);
            placeSelect.innerHTML = '<option value="">Place</option>'; // Clear place options
        } else {
            stateSelect.innerHTML = '<option value="">State</option>';
            placeSelect.innerHTML = '<option value="">Place</option>';
        }
    }

    function populatePlaces() {
        const selectedState = stateSelect.value;
        if (selectedState && placeOptions[selectedState]) {
            populateSelect(placeSelect, ['Place', ...placeOptions[selectedState]]);
        } else {
            placeSelect.innerHTML = '<option value="">Place</option>';
        }
    }

    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');

    function calculateAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
    
        // If birth month hasn't occurred yet this year or it's the birth month but the birth date hasn't occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    dobInput.addEventListener('change', function () {
        const dob = dobInput.value;
        if (dob) {
            const age = calculateAge(dob);
            ageInput.value = age;
        } else {
            ageInput.value = '';
        }
    });
    // Initial population of country select
    populateSelect(countrySelect, countries);

    // Event listeners


    countrySelect.addEventListener('change', populateStates);
    stateSelect.addEventListener('change', populatePlaces);
        

});
document.addEventListener("DOMContentLoaded", function() {
    // Add default header
    document.getElementById('header').innerHTML = `
        <nav class="navbar">
            <div class="logo">
            <a href="#"><img class="logo" src="Images/Learnera.png" alt="learnEra"></a>
            </div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="login.html">Login </a></li>
                </ul>
            </nav>
        </div>
    `;

    document.getElementById('footer').innerHTML = `
        <p>&copy; 2024 Learnera. All rights reserved.</p>
    `;
});


