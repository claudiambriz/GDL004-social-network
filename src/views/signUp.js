import { signUpArguments } from './index.js';

export default () => {
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'divElement');
  divElement.setAttribute('class', 'color');

  // REGISTRARSE O SIGNUP CON CORREO
  const formSignUp = document.createElement('form');
  formSignUp.setAttribute('id', 'formSignUp');
  divElement.appendChild(formSignUp);
  // Creando el input donde se REGISTRA el correo electrónico
  const inputText1 = document.createElement('input');
  formSignUp.appendChild(inputText1);
  inputText1.setAttribute('type', 'text');
  inputText1.setAttribute('placeholder', 'Escribre tu correo');
  inputText1.setAttribute('id', 'inputEmail1');
  inputText1.setAttribute('name', 'inputEmail1');
  // Creando input para REGISTRAR password
  const inputPassword1 = document.createElement('input');
  formSignUp.appendChild(inputPassword1);
  inputPassword1.setAttribute('type', 'password');
  inputPassword1.setAttribute('id', 'inputPassword1');
  inputPassword1.setAttribute('name', 'inputPassword1');
  inputPassword1.setAttribute('placeholder', 'Escribe tu contraseña');
  // Creando el botón que hará en registro del correo con la función de firebase
  const button1 = document.createElement('button');

  // button1.setAttribute('type', 'submit');
  button1.innerHTML = 'Regístrate';
  button1.setAttribute('value', 'Regístrate');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    signUpArguments.init();
    // window.location.hash = '#/login';
  });
  formSignUp.appendChild(button1);

  return divElement;
};
