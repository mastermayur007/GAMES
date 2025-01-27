const URL = 'https://catfact.ninja/fact';
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFact = async () => {
    try {
        factpara.innerText = "Fetching a new cat fact... 🐱";
        btn.disabled = true; // Disable button while fetching
        btn.style.cursor = "not-allowed";

        let response = await fetch(URL);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        factpara.innerText = data.fact;

        btn.disabled = false; // Enable button after fetching
        btn.style.cursor = "pointer";
    } catch (error) {
        console.error("Error fetching data:", error);
        factpara.innerText = "Oops! Couldn't fetch a cat fact. Please try again.";
        btn.disabled = false; // Re-enable button after error
        btn.style.cursor = "pointer";
    }
};

btn.addEventListener("click", getFact);
