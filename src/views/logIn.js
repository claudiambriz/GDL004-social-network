export default () => {
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'divElement');
  divElement.setAttribute('class', 'color');

  // Creando div para la imagen del logo
  const logo = document.createElement('div');
  logo.setAttribute('class', 'logo');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', './views/img/logochocolate.png');
  divElement.appendChild(logo);
  logo.appendChild(imgLogo);

  // Creando div para los botones de Google, Facebook
  const bodyLogIn = document.createElement('div');
  bodyLogIn.setAttribute('class', 'bodyLogIn');
  const template = `<span> ${'Regístrate en Chocolat'} </span>`;
  bodyLogIn.innerHTML = template;
  const buttonGoogle = document.createElement('div');
  const buttonG = document.createElement('img');
  buttonG.setAttribute('src', './views/img/signInGoogle.png');
  divElement.appendChild(bodyLogIn);
  bodyLogIn.appendChild(buttonGoogle);
  buttonGoogle.appendChild(buttonG);

  // // REGISTRARSE O SIGNUP CON CORREO
  // const formSignUp = document.createElement('form');
  // formSignUp.setAttribute('id', 'formSignUp');
  // divElement.appendChild(formSignUp);
  // // Creando el input donde se REGISTRA el correo electrónico
  // const inputText1 = document.createElement('input');
  // formSignUp.appendChild(inputText1);
  // inputText1.setAttribute('type', 'text');
  // inputText1.setAttribute('placeholder', 'Escribre tu correo');
  // inputText1.setAttribute('id', 'inputEmail1');
  // inputText1.setAttribute('name', 'inputEmail1');
  // // Creando input para REGISTRAR password
  // const inputPassword1 = document.createElement('input');
  // formSignUp.appendChild(inputPassword1);
  // inputPassword1.setAttribute('type', 'password');
  // inputPassword1.setAttribute('id', 'inputPassword1');
  // inputPassword1.setAttribute('name', 'inputPassword1');
  // inputPassword1.setAttribute('placeholder', 'Escribe tu contraseña');
  // // Creando el botón que hará en registro del correo con la función de firebase
  // const button1 = document.createElement('input');
  // button1.setAttribute('type', 'submit');
  // button1.setAttribute('value', 'Nuevo Registro');
  // formSignUp.appendChild(button1);

  // INICIAR SESIÓN CON CORREO
  const formLogIn = document.createElement('form');
  formLogIn.setAttribute('id', 'formLogIn');
  divElement.appendChild(formLogIn);
  // Creando el input donde se coloca el correo electrónico
  const inputText = document.createElement('input');
  formLogIn.appendChild(inputText);
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Escribre tu correo');
  inputText.setAttribute('name', 'inputEmail');
  inputText.setAttribute('id', 'inputEmail');
  // Creando input para password
  const inputPassword = document.createElement('input');
  formLogIn.appendChild(inputPassword);
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('name', 'inputPassword');
  inputPassword.setAttribute('id', 'inputPassword');
  inputPassword.setAttribute('placeholder', 'Escribe tu contraseña');
  // Creando el botón que hará el inición se sesión con la función de firebase
  const button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'Iniciar sesión');
  formLogIn.appendChild(button);

  return divElement;
};

/*
<!--LOGIN-->
  <div id="Login">
    <h1>Acceso</h1>
    <!---Boton de FB-->
    <div id="FB"><img src="img/loginFacebook.png"></div>
    <!---Botón de Gmail-->
    <div id="Gmail"><img src="img/loginGoogle.png"></div>
    <!---Área de acceso o login con email-->

      <div id="loginEmail">
        <div id = "prueba"></div>
        <input type="email" id="emailL" placeholder="email">
        <input type="password" id="passwordL" placeholder="paswword">
        <button id="submitL">Log In</button>
        <button id="singOut">Cerrar sesion</button>
      </div>

  </div>

<!---Registro con correo si no tienes cuenta-->
  <div id="signUp">
    <p>¿No tienes cuenta?</p>
      <div id="openModal"><button>Regístrate</button></div> <!--Open the modal-->
  </div>

<!--MODAL-->
<div id="mymodal" class="modal">

  <!-- CONTENIDO DEL MODAL DE REGISTRO O SIGNUP-->

  <div id="contSigUpEmail" class="modal-content">
    <h1>Área de registro</h1>
      <input type="email" id="email" placeholder="Coloca tu email">
      <input type="password" id="passwordEmail" placeholder="Coloca tu Password">
      <button id="submitSIE" class="close">Registro</button> <!--O signUp-->
      <h1 id="login"></h1>
  </div>

</div>
*/
