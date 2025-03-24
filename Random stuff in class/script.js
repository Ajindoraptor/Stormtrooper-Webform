document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value.trim();
    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim().toUpperCase();
    const zip = document.getElementById('zip').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const namePattern = /^[A-Za-z\s]+$/;           
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const zipPattern = /^\d{5}$/;                
    const cityPattern = /^[A-Za-z\s]+$/;         
    const streetPattern = /^\d{1,4}\s[A-Za-z\s]+$/; 
    
    const validStates = new Set([
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ]);

    if (!namePattern.test(name)) {
        alert("Name can only contain letters and spaces!");
        return;
    }
    if (isNaN(age) || age < 1 || age > 100) {
        alert("Age must be between 1 and 100!");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone format must be xxx-xxx-xxxx!");
        return;
    }
    if (!streetPattern.test(street)) {
        alert("Street must start with up to 4 numbers followed by the street name (e.g., '1234 Elm Street').");
        return;
    }
    if (!cityPattern.test(city)) {
        alert("City name can only contain letters and spaces (no numbers).");
        return;
    }
    if (!validStates.has(state)) {
        alert("Enter a valid 2-letter state abbreviation (e.g., CA, NY, TX)!");
        return;
    }
    if (!zipPattern.test(zip)) {
        alert("Zip Code must be exactly 5 digits!");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Enter a valid email!");
        return;
    }
    if (!message) {
        alert("Feedback Message cannot be empty!");
        return;
    }

    alert("Feedback submitted successfully!");
    document.getElementById('feedbackForm').reset(); 
});
