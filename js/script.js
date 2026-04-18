let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = localStorage.getItem("user") || "";

document.getElementById("cart-count").innerText = cart.length;
if(user){
    document.getElementById("user-greet").innerText = "Hello, " + user;
}

const products = ["Smart Phone","Headphones","Shoes","Cosmetics","Watch","Laptop"];

function showSection(section){
    let d = document.getElementById("dynamic-content");

    if(section==="home"){
        d.innerHTML="<h2>Welcome to Kshopify</h2>";
    }
    if(section==="about"){
        d.innerHTML="<h2>About Us</h2><p>This is a capstone e-commerce project.</p>";
    }
    if(section==="service"){
        d.innerHTML="<h2>Customer Service</h2><p>Email: support@kshopify.com</p>";
    }
    if(section==="categories"){
        d.innerHTML="<h2>Categories</h2><p>Electronics, Fashion, Beauty</p>";
    }
    if(section==="contact"){
        d.innerHTML="<h2>Contact Us</h2><p>Phone: +91 9999999999</p>";
    }
}

function searchItem(value){
    let result = products.filter(p=>p.toLowerCase().includes(value.toLowerCase()));
    document.getElementById("dynamic-content").innerHTML =
        "<h3>Search Results</h3><ul>"+result.map(r=>"<li>"+r+"</li>").join("")+"</ul>";
}

function showProducts(category){
    document.getElementById("dynamic-content").innerHTML = `
        <h2>${category}</h2>

        <div class="product">
            <p>${category} Item 1</p>
            <button onclick="addToCart('${category} Item 1')">Add to Cart</button>
            <button>Buy Now</button>
        </div>

        <div class="product">
            <p>${category} Item 2</p>
            <button onclick="addToCart('${category} Item 2')">Add to Cart</button>
            <button>Buy Now</button>
        </div>
    `;
}

function addToCart(item){
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
    document.getElementById("cart-count").innerText = cart.length;
    alert(item+" added to cart");
}

function showCart(){
    let items = cart.map(i=>"<li>"+i+"</li>").join("");
    document.getElementById("dynamic-content").innerHTML =
        "<h2>Your Cart</h2><ul>"+items+"</ul>";
}

function showLogin(){
    document.getElementById("dynamic-content").innerHTML = `
        <h2>Sign In</h2>
        <input id="username" placeholder="Enter name">
        <button onclick="login()">Sign In</button>
    `;
}

function login(){
    let name = document.getElementById("username").value;
    localStorage.setItem("user",name);
    document.getElementById("user-greet").innerText="Hello, "+name;
    alert("Welcome "+name);
}
