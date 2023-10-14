document.addEventListener("DOMContentLoaded", () => {
    const wishlist = document.getElementById("wishlist");

    // Add a product to the wishlist
    function addToWishlist(productName) {
        const wishlistItem = document.createElement("li");
        wishlistItem.className = "wishlist-item";
        wishlistItem.innerHTML = `
            <img src="product-image.jpg" alt="${productName}">
            <div class="product-details">
                <p>${productName}</p>
            </div>
            <button class="remove-button">Remove</button>
        `;

        // Handle removal when the "Remove" button is clicked
        const removeButton = wishlistItem.querySelector(".remove-button");
        removeButton.addEventListener("click", () => {
            wishlist.removeChild(wishlistItem);
        });

        wishlist.appendChild(wishlistItem);
    }

    // Example: Add products to the wishlist
    addToWishlist("Product 1");
    addToWishlist("product 2");
});
