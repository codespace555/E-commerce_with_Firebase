import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

const createUser = async ({ name, email, password }) => {
  try {
    if(await userExists({email})) return console.log
    const users = await createUserWithEmailAndPassword(auth, email, password);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const user = {
      name: name,
      uid: users.user?.uid || "",
      email: users.user.email,
      time: date+' '+time,
    };
    const userRef = collection(fireDB, "users");
    await addDoc(userRef, user);
    return user;
  } catch (error) {
    console.log("firebase server:: getuser:: error ", error);
  }
};

const createuserByEmail = async () =>{
    
}

export { createUser };
