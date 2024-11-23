// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const complaintForm = document.getElementById("complaintForm");

    // Add a submit event listener to the form
    complaintForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;
        const description = document.getElementById("description").value;

        // Create the data object to send to the backend
        const complaintData = {
            name: name,
            email: email,
            phone: phone,
            location: location,
            description: description
        };

        // Send data to the backend server using fetch
        fetch("http://localhost:3000/api/complaints", { // Replace with your backend API endpoint
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(complaintData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to submit complaint");
            }
            return response.json();
        })
        .then(data => {
            // Display success message and clear the form
            document.getElementById("responseMessage").textContent = "Complaint submitted successfully!";
            complaintForm.reset(); // Clear the form
        })
        .catch(error => {
            // Display error message
            document.getElementById("responseMessage").textContent = "Failed to submit complaint. Please try again.";
            console.error("Error:", error);
        });
    });
});
