import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, fireDB, provider } from "../firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

class fireauth {
  auth;
  fireDB;
  provider;
  collection;
  constructor() {
    this.auth = auth;
    this.fireDB = fireDB;
    this.provider = provider;
    this.collection = collection(this.fireDB, "users");
  }

  date() {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return `${time}, ${date}`;
  }

  displayError(err) {
    return alert(`${err.code}: ${err.message}`);
  }

  async createUser(name, email, password) {
    try {
      const users = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (users) {
        const user = {
          name: name,
          uid: users.user?.uid || "",
          email: users.user?.email,
          time: this.date(),
        };

        await addDoc(this.collection, user);
        if (user) {
          return this.login({ email, password });
        }
      }
    } catch (error) {
      console.log("firebase create user error ", error);
      this.displayError(error.code);
    }
  }
  async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.log("Error on Login", error);
      this.displayError(error, code);
    }
  }

  async createuserBygoogle() {
    try {
      let result = await signInWithPopup(this.auth, this.provider);
      console.log("result", result);
    } catch (err) {
      console.log("Firebase google provider error", err);
      this.displayError(err.code);
    }
    return result;
  }

  async getCurrentUser(callback) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        return user;
      } else {
        this.logout();
        console.log("user is logout")
      }
    });
  }

  async logout() {
    await signOut(this.auth)
      .then(() => {
        localStorage.removeItem("token");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Log out Error", error);
        this.displayError(error);
      });
  }
}


const auth = new fireauth()

export default auth