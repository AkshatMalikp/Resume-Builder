import * as firebase from "firebase";

export const Login = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
