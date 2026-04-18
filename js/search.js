

let products = [

{ name: "iphone 15", page: "smartphones.html" },
{ name: "samsung galaxy s23", page: "smartphones.html" },
{ name: "oneplus 11", page: "smartphones.html" },

{ name: "boat rockerz 450", page: "headphones.html" },
{ name: "jbl tune 510bt", page: "headphones.html" },
{ name: "apple airpods max", page: "headphones.html" },

{ name: "nike air max", page: "shoes.html" },
{ name: "adidas ultraboost", page: "shoes.html" },
{ name: "puma runner", page: "shoes.html" },

{ name: "apple watch series 9", page: "smartwatches.html" },
{ name: "samsung galaxy watch", page: "smartwatches.html" },
{ name: "boat xtend smart watch", page: "smartwatches.html" },

{ name: "ps5", page: "ps5.html" },
{ name: "playstation 5", page: "ps5.html" },

{ name: "shirt", page: "clothes.html" },
{ name: "tshirt", page: "clothes.html" },
{ name: "jacket", page: "clothes.html" }

];




function showSuggestions(){

let input = document.getElementById("searchBox").value.toLowerCase();

let suggestionBox = document.getElementById("suggestions");

if(!suggestionBox) return;

suggestionBox.innerHTML = "";

if(input === ""){
suggestionBox.style.display = "none";
return;
}

products.forEach(product => {

if(product.name.includes(input)){

suggestionBox.innerHTML += `
<div style="padding:10px;cursor:pointer;border-bottom:1px solid #eee"
onclick="goToProduct('${product.page}')">

${product.name}

</div>
`;

}

});

suggestionBox.style.display = "block";

}


/* CLICK SUGGESTION */

function goToProduct(page){

window.location.href = page;

}


/* MAIN SEARCH FUNCTION */

function searchProduct(){

let search = document.getElementById("searchBox").value.toLowerCase().trim();

/* HEADPHONES */

if(
search.includes("headphone") ||
search.includes("headphones") ||
search.includes("boat") ||
search.includes("jbl") ||
search.includes("airpods")
){
window.location.href = "headphones.html";
}

/* SHOES */

else if(
search.includes("nike") ||
search.includes("air max") ||
search.includes("adidas") ||
search.includes("puma") ||
search.includes("shoes")
){
window.location.href = "shoes.html";
}

/* SMARTPHONES */

else if(
search.includes("iphone") ||
search.includes("samsung") ||
search.includes("oneplus") ||
search.includes("smartphone") ||
search === "phone"
){
window.location.href = "smartphones.html";
}

/* SMART WATCH */

else if(
search.includes("watch") ||
search.includes("smart watch") ||
search.includes("apple watch")
){
window.location.href = "smartwatches.html";
}



else if(
search.includes("shirt") ||
search.includes("tshirt") ||
search.includes("jacket") ||
search.includes("clothes")
){
window.location.href = "clothes.html";
}



else if(
search.includes("ps5") ||
search.includes("playstation")
){
window.location.href = "ps5.html";
}

else{
alert("Product not found");
}

}




document.addEventListener("DOMContentLoaded", function(){

let searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keydown", function(event){

if(event.key === "Enter"){
searchProduct();
}

});



searchBox.addEventListener("keyup", function(){
showSuggestions();
});

}

});