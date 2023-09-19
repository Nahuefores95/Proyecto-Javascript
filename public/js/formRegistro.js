'use strict'
document.addEventListener("DOMContentLoaded",function(){
    let signUp = document.querySelector('#signUp'); 
    let signIn = document.querySelector('#signIn');
    let formUsers = document.querySelector('.formUsers');

    console.log(signUp);
    console.log(signIn);
    console.log(formUsers);

    /*hasta aca funciona*/

    /* No esta entrando en las funciones */
    /* PORQUE NO ME FUNCIONA ??
    signUp.addEventListener("click",upChange);
    signIn.addEventListener("click",inChange);

    function upChange(){
        signUp.classList.add("divUsers1");
        signIn.classList.remove("divUsers1");
        console.log("entre1");
    }

    function inChange(){
        signIn.classList.add("divUsers1");
        signUp.classList.remove("divUsers1");
        console.log("entre2");
    }*/

     // Agregar un oyente de eventos al elemento padre
     document.body.addEventListener("click", function(event) {
        if (event.target.id === "signUp") {
            formUsers.innerHTML = "";
            formUsers.innerHTML += 
            `<br>
            <br>
            <br>
            <form class="formUsers" action=""> 
                <h1>Registrate</h1><br>
                <i class="fa fa-user-circle creaCuenta"></i>
                <input type="text" placeholder="Nombre:"><br>
                <i class="fa fa-user-circle creaCuenta"></i>
                <input type="text" placeholder="Apellido:"><br>
                <i class="fa fa-envelope"></i>
                <input type="email" placeholder="Email:"><br>
                <i class="fa fa-lock"></i>
                <input type="text" placeholder="Contraseña:"><br>
                <i class="fa fa-lock"></i>
                <input type="text" placeholder="Confirmar contraseña:"><br>
                <i class="fa fa-mobile"></i>
                <input type="tel" placeholder="Telefono"><br>
                <button type="submit" class="buttonForm">Crear cuenta</button><br>
                <button type="button" id="signUp" class="buttonActive">Registro</button>
                <button type="button" id="signIn" class="buttonDisactive">Login</button>
            </form>`;    
            

        } else if (event.target.id === "signIn") {
            // Lógica para el botón "signIn"
            formUsers.innerHTML = "";
            formUsers.innerHTML += 
            `<br>
            <br>
            <br>
            <form class="formUsers" action=""> 
            <h1>Bienvenido</h1><br>
            <i class="fa fa-user-circle creaCuenta"></i>
            <input type="email" placeholder="Email:"><br>
            <i class="fa fa-lock"></i>
            <input type="text" placeholder="Contraseña:"><br>
            <button type="submit" class="buttonForm">Ingresar</button><br>
            <button type="button" id="signUp" class="buttonDisactive">Registro</button>
            <button type="button" id="signIn" class="buttonActive">Login</button>
            </form>`;   
        }
      });

})

    
