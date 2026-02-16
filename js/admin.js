document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adminForm");
    const adminCards = document.getElementById("adminCards");

    // Load data from JSON (dummy here, can't write JSON from frontend)
    let destinations = [
        {title: "Hawaii", description: "Luxury stay", price: 4500},
        {title: "Paris", description: "Romantic trip", price: 3200}
    ];

    // Function to render destinations in admin page
    function renderAdmin() {
        adminCards.innerHTML = "";
        destinations.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> ${item.price} TND</p>
                <button onclick="deleteDestination(${index})">Supprimer</button>
            `;
            adminCards.appendChild(card);
        });
    }

    renderAdmin();

    // Handle form submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;

        destinations.push({title, description, price});
        renderAdmin();
        form.reset();
    });

    // Delete function
    window.deleteDestination = function(index) {
        destinations.splice(index, 1);
        renderAdmin();
    }
});
