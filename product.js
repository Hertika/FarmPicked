

        // Function to add a product to the cart
        function addToCart(productName, price) {
            // In a real application, you would typically store the cart in a more structured way (e.g., an array of objects).
            // For this basic example, we're using an alert to display the added product.
            alert(`Added to Cart:\nProduct: ${productName}\nPrice: $${price}`);
        }

        {/* // Example: Add an event listener for the "Add to Cart" button of each product */}
        const addButtons = document.querySelectorAll('.btn.btn-primary');
        addButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const productCard = this.closest('.top-product-card');
                const productName = productCard.querySelector('.card-title a').innerText;
                const price = productCard.querySelector('.price').getAttribute('value');
                addToCart(productName, price);
            });
        });

