const isLoggedIn = localStorage.getItem("isLoggedIn");
const userName = localStorage.getItem("userName");

const userText = document.getElementById("userText");
const signinBox = document.getElementById("signinBox");

if (userText && signinBox) {

if (isLoggedIn === "true" && userName) {

userText.innerText = "Hello, " + userName;

signinBox.onclick = function () {

if (confirm("Do you want to logout?")) {
localStorage.removeItem("isLoggedIn");
localStorage.removeItem("userName");
location.reload();
}

};

} else {

signinBox.onclick = function () {
window.location.href = "signin.html";
};

}

}