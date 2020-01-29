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

  const link = document.createElement('div');
  link.setAttribute('id', 'link');
  const aLink = document.createElement('a');
  link.appendChild(aLink);
  aLink.setAttribute('href', '#/signUp');
  const template2 = `<span> ${'¿Aun no tienes cuenta en chocolat? REGÍSTRATE'} </span>`;
  aLink.innerHTML = template2;
  divElement.appendChild(link);


  return divElement;
};

