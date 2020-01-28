// Agrego un addEventListener cuando se carga la página y después cuando cambia el #
import { controlador as router } from './controler/router.js';
import { loggeoArguments, signUpArguments } from './views/index.js';

const init = () => {
  router.changeView(window.location.hash);
   // El init de loggeoArguments es un método que creamos en index.js y que contiene la función que recibe los argumentos de login y de signup
  loggeoArguments.init();
  signUpArguments.init();
  window.addEventListener('hashchange', () => router.changeView(window.location.hash));
};

window.addEventListener('load', init);
