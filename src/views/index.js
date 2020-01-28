import { emailFirebase } from '../model/registroEmail.js';
import { controlador } from '../controler/router.js';

// RESGISTRO
const signUpArguments = {
  init: () => {
    const form = document.getElementById('formSignUp');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.inputEmail1.value;
      const password = form.inputPassword1.value;
      form.reset();
      // Creando una constante a la que se le asigna el return quie viene de registroEmail.js que está en signUP y que es la promesa.
      const promisesSigUp = emailFirebase.toSignUp(email, password);
      // Construyendo el then (caso exitoso)
      promisesSigUp.then(() => {
        alert('registro exitoso');
        controlador.changeView('#/logIn');
      });
      promisesSigUp.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Upss contraseña incorrecta');
        } else if (errorCode === 'auth/invalid-email') {
          alert('correo inválido');
        } else {
          alert(errorMessage);
        }
      });
    });
  },
};
// // INICIAR SESION
// const loggeoArguments = {
//   init: () => {
//     const form = document.getElementById('formLogIn');
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const emailValues = {
//         email: form.inputEmail.value,
//         password: form.inputPassword.value,
//       };
//       form.reset();
//       emailFirebase.logIn(emailValues.email, emailValues.password);
//     });
//   },
// };

export { loggeoArguments, signUpArguments };
