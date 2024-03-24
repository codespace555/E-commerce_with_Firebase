import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, fireDB, provider } from "../firebaseconfig";

class order {
  user;
  order;
  constructor() {
    this.user = collection(fireDB, "users");
    this.order = collection(fireDB, "orders");
  }


async orderlists(data){
    try {
        const orderQuery = query(this.order, where("uid", "==", data));
        const orderitem  = []
        const orderSnapshot = await getDocs(orderQuery);
  
       orderSnapshot.docs.map((doc) => (
         orderitem.push({...doc.data(), id: doc.id})
    ))
            
        

        return orderitem;
      } catch (error) {
        console.error("Error getting product by ID: ", error);
        throw error;
      }
    }




}

const orderlist = new order();

export default orderlist;
