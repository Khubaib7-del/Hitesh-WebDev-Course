document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 29.99
        },
        {
            id: 2,
            name: "Product 2",
            price: 39.99
        },
        {
            id: 3,
            name: "Product 3",
            price: 19.99
        }
    ];


    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}" aria-label="Remove ${item.name}" title="Remove item">🗑️</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    cartItems.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = parseInt(e.target.getAttribute("data-index"), 10);
            removeFromCart(index);
        }
    });

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        renderCart();
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalPriceDisplay.textContent = total.toFixed(2);
        emptyCartMessage.classList.toggle("hidden", cart.length > 0);
    }

    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert(`Thank you for your purchase! Total: $${totalPriceDisplay.textContent}`);
            cart.length = 0; // Clear the cart
            updateCart();
        }
});
});