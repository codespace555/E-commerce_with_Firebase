import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, fireDB, provider } from "../firebaseconfig";

class product {
  collection;

  constructor() {
    this.collection = collection(fireDB, "products");
  }

  async addProduct(productData) {
    try {
      if (auth.currentUser == null) {
        await auth.signInWithPopup(provider);
      }
      const result = await addDoc(this.collection, productData);
      console.log(result.id);
      return result.id;
    } catch (error) {
      console.error("Error adding product: ", error);
      throw error;
    }
  }

  async getProducts() {
try {
    const querySnapshot = await getDocs(this.collection);

    const products = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        return data
    })
    console.log(products.map((item) => item.title))
    return products; 
    
} catch (error) {
    console.error("Error getting products: ", error);
      throw error; 
}

  }
    
}
const products = new product();
export default products;
