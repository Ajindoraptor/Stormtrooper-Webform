document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value.trim();
    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name) {
        alert("Name cannot be empty!");
        return;
    }
    if (isNaN(age) || age < 18) {
        alert("You must be at least 18 years old!");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone format must be xxx-xxx-xxxx!");
        return;
    }
    if (!street) {
        alert("Street cannot be empty!");
        return;
    }
    if (!city) {
        alert("City cannot be empty!");
        return;
    }
    if (!state || state.length !== 2) {
        alert("State must be exactly 2 letters!");
        return;
    }
    if (!/^\d{5}$/.test(zip)) {
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
});
