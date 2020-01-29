import Home from '../views/home.js';
import LogIn from '../views/logIn.js';
import SignUp from '../views/signUp.js';
import Different from '../views/page404.js';
import SignUp from '../views/signUp.js';

export const components = {
  home: Home,
  logIn: LogIn,
  different: Different,
  signUp: SignUp,
};

export const controlador = {
  /* El init de loggeoArguments es un método que creamos en index.js y que contiene la función 
  que recibe los argumentos de login y de signup respectivamente */
  // init: () => {
  //   loggeoArguments.init();
  //   signUpArguments.init();
  // },

  changeView: (hash) => {
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (hash) {
      case '#/':
      case '#':
      case '#/logIn':
        container.appendChild(components.logIn());
        break;
      case '#/home':
        container.appendChild(components.home());
        break;
      case '#/signUp':
        container.appendChild(components.signUp());
        break;
      default:
        container.appendChild(components.different());
    }
  },
};
