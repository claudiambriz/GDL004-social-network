import Home from '../views/home.js';
import LogIn from '../views/logIn.js';
import Different from '../views/page404.js';
import SignUp from '../views/signUp.js';

const components = {
  home: Home,
  logIn: LogIn,
  different: Different,
  signUp: SignUp,
};

export const controlador = {

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
