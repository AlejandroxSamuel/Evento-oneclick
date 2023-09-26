
function alerta(elemento, mensaje){
    console.log(elemento);
    console.log(mensaje);
    alert("Ninja was like");
}

function logout() {
    var loginButton = document.getElementById("loginButton");
    
    if (loginButton.innerText === "Login") {
        loginButton.innerText = "Logout";
    } else {
        loginButton.innerText = "Login";
    }
}

function removeAddDefinitionButton() {
    var addButton = document.querySelector(".btn4");
    if (addButton) {
        addButton.parentNode.removeChild(addButton);
    }
}

var addDefinitionButton = document.querySelector(".btn4");
if (addDefinitionButton) {
    addDefinitionButton.addEventListener("click", removeAddDefinitionButton);
}
