const products = [
    { id: 1, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Smartphone", price: 699.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Headphones", price: 199.99, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Camera", price: 499.99, image: "https://via.placeholder.com/200" },
];

let cart = [];

// Render Products
const productContainer = document.getElementById('products');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update Cart
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        total += item.price;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}

// Cart Modal
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-btn');

cartIcon.onclick = () => cartModal.style.display = 'flex';
closeModal.onclick = () => cartModal.style.display = 'none';

window.onclick = (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
};

// Checkout
document.getElementById('checkout-btn').onclick = () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
};
