// FUNCTION that calls Firebase
export const emailFirebase = {

  stateChanged: (user) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        document.getElementById('prueba').innerHTML = 'Puedes iniciar sesión';
      } else {
        document.getElementById('prueba').innerHTML = '';
        // User is signed out.
      }
    });
  },

  // FUNCTION that creates a new user with the email.
  toSignUp: (email, passwordEmail) => {
    const promiseSignUp = firebase.auth().createUserWithEmailAndPassword(email, passwordEmail);
    return promiseSignUp;
    // el return lo que regresa es la promesa
  },

  // FUNCTION that makes LOGIN once the user has already signup with the email.
  logIn: (email, password) => {
    const promiseLogIn = firebase.auth().signInWithEmailAndPassword(email, password);
    return promiseLogIn;
  },
};

/*  ESTA FUNCIÓN CIERRA SESIÓN DE LA APLICACIÓN
export function toSignOut() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }, (error) => {
    // An error happened.
  });
}
*/
