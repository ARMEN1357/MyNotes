let name_user = document.getElementById("name");
let login_button = document.getElementById("login");

document.addEventListener("DOMContentLoaded", function () {
    login_button.addEventListener("click", function(event) {
        event.preventDefault(); 
        let inputValue = name_user.value;
        if (!inputValue) {
            return;
        } else {
            localStorage.setItem("name_user", inputValue);
            window.location.href = "profile.html";
        }
    })

    document.addEventListener("click", login)
});
