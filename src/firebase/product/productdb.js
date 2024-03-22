import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
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
      const result = await addDoc(this.collection, {...productData , slug:productData.title.replace(/ /g,"-").toLowerCase()});
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
        // Add id to the returned object
        data.id = doc.id;
        return data;
    })
    // console.log(products.map((item) => item))
    return products; 
    
} catch (error) {
    console.error("Error getting products: ", error);
      throw error; 
}

  }

  async getProduct(productId) {
    try {
      const productQuery = query(this.collection, where("slug" ,"=="  ,productId));
      const productSnapshot = await getDocs(productQuery);

  
    
        const ProductDoc = productSnapshot.docs.map((doc) => {
            console.log(doc.id, " => ", doc.data());
            return doc.data();
        })
        
        return ProductDoc;
     
    } catch (error) {
      console.error("Error getting product by ID: ", error);
      throw error;
    }
  }

}



    

const products = new product();
export default products;
