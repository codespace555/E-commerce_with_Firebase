import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";




const createUser = async({name,email,password}) =>{
    const users = await createUserWithEmailAndPassword(auth, email, password);

    const user = {
name:name,
uid:users.user?.uid || "" ,

    }


}