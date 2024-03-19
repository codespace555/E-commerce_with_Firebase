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
    return err;
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
        console.log("user create  success!");
        return this.login(email, password).then((data) => data);
      }
    } catch (error) {
      console.log("firebase create user error ", error);
      this.displayError(error);
    }
  }
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      localStorage.setItem("token", JSON.stringify(user.token));
      return user;
    } catch (error) {
      console.log("Error on Login", error);
      this.displayError(error);
    }
  }

  async createuserBygoogle() {
    let data = null;
    try {
      await signInWithPopup(this.auth, this.provider).then((userCredential) => {
        // Signed in successfully
        const users = userCredential.user;
        if (users) {
          const user = {
            name: users.displayName,
            uid: users.uid || "",
            email: users.email,
            time: this.date(),
          };
          //   if (user) {
          //     addDoc(this.collection, user);
          //     console.log("User signed in with Google:", user);
          //   }
          console.log("user allready exist", user);
          data = user;
        }
      });
      return data;
    } catch (err) {
      console.log("Firebase google provider error", err);
      this.displayError(err.Firebase);
    }
  }

  async getCurrentUser() {
    const user = await this.auth.currentUser;
    if (user) {
      return user;
    } else {
      this.logout();
      console.log("user is logout");
    }
  }

  async logout() {
    try {
        await signOut(this.auth)
      
        localStorage.removeItem("token");
        window.location.reload(); 
    }catch(error) {
        console.log("Log out Error", error);
        this.displayError(error);
    
  }
}
}

const authfirebase = new fireauth();

export default authfirebase;
