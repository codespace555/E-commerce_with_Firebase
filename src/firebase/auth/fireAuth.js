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

      const user = {
        name: name,
        uid: users.user?.uid || "",
        email: users.user?.email,
        time: this.date(),
      };

      await addDoc(this.collection, user);
      console.log("user create  success!");
      this.login(email, password);
      return user;
    } catch (error) {
      console.error("Error creating user: ", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error) {
      console.error("Error logging in: ", error);
      throw error;
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
          if (user) {
            addDoc(this.collection, user);
            console.log("User signed in with Google:", user);
          }
          console.log("user allready exist", user);
          data = user;
        }
      });
      return data;
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      throw error;
    }
  }

  async loginBygoogle() {
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

          console.log("user allready exist", user);
          data = user;
        }
      });
      return data;
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.auth.currentUser;
      if (user) {
        console.log(user);
        localStorage.setItem("token", JSON.stringify(user.accessToken));

        return user;
      } else {
        this.logout();
        console.log("user is logout");
      }
    } catch (error) {
      console.error("Error getting current user: ", error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);

      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.log("Log out Error", error);
      throw error;
    }
  }

  async getUsers() {
    try {
      const querySnapshot = await getDocs(this.collection);

      const users = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        // Add id to the returned object
        data.id = doc.id;
        return data;
      });
      console.log(users.map((item) => item));
      return users;
    } catch (error) {
      console.error("Error getting products: ", error);
      throw error;
    }
  }
}

const authfirebase = new fireauth();

export default authfirebase;
