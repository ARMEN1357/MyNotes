// модальное окно
let modal = document.getElementById("modal");
let close = document.getElementById("button_close");

function Func1(){
    modal.style.display = "block";
}

function Func2(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// отображение имени
let name_user = document.getElementById("name");
let name_from_localstorage = localStorage.getItem("name_user");
name_user.textContent = name_from_localstorage;

function logout() {
    localStorage.removeItem("name_user");
    nameInput.textContent = ""; 
}

document.addEventListener("DOMContentLoaded", function () {

    if (!name_from_localstorage) {
        window.location.href = 'login.html';
    }
});
