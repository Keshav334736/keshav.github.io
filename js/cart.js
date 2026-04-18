let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCartCount(){

let count = document.getElementById("cartCount");

if(count){

let totalItems = 0;

cart.forEach(item=>{
totalItems += item.quantity;
});

count.innerText = totalItems;

}

}

updateCartCount();




function addToCart(name, price, image){

let existing = cart.find(item => item.name === name);

if(existing){

existing.quantity += 1;

}else{

cart.push({
name:name,
price:Number(price),
image:image,
quantity:1
});

}

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");

}




function buyNow(name, price, image){

let product = [{
name:name,
price:Number(price),
image:image,
quantity:1
}];

localStorage.setItem("cart", JSON.stringify(product));

window.location.href="checkout.html";

}




function openCart(){

window.location.href="cart.html";

}




function showCartPreview(){

let preview = document.getElementById("cartPreview");

if(!preview) return;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

preview.innerHTML = "";

let subtotal = 0;

if(cart.length === 0){

preview.innerHTML = "<p style='padding:10px'>Cart is empty</p>";

return;

}

cart.forEach(item=>{

subtotal += item.price * item.quantity;

preview.innerHTML += `
<div style="display:flex;gap:10px;padding:8px;border-bottom:1px solid #eee">
<img src="images/${item.image}" width="40">
<div>
<p style="margin:0">${item.name}</p>
<p style="margin:0">₹${item.price} × ${item.quantity}</p>
</div>
</div>
`;

});

preview.innerHTML += `
<div style="padding:10px">
<b>Subtotal: ₹${subtotal}</b>
<br><br>
<button onclick="openCart()" style="width:100%;padding:8px;background:#ff9900;border:none;cursor:pointer">
View Cart
</button>
</div>
`;

preview.style.display="block";

}

function hideCartPreview(){

let preview = document.getElementById("cartPreview");

if(preview){
preview.style.display="none";
}

}