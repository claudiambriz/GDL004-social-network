// Agrego un addEventListener cuando se carga la página y después cuando cambia el #
import { controlador as router } from './controler/router.js';


const init = () => {
  /* El init de loggeoArguments es un método que creamos en index.js
   y que contiene la función que recibe los argumentos de login y de signup */
  router.changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    router.changeView(window.location.hash);
    if (window.location.hash === '#/logIn') {
      loggeoArguments.init();
    } else if (window.location.hash === '#/signUp') {
      console.log(1);
    }
  });
};

window.addEventListener('load', init);
