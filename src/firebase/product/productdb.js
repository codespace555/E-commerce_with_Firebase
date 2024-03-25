import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, fireDB, provider } from "../firebaseconfig";

class product {
  collection;

  constructor() {
    this.collection = collection(fireDB, "products");
  }

  async addProduct(productData) {
    try {
      
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
          
            return {...doc.data(), id : doc.id};
        })
        
        return ProductDoc;
     
    } catch (error) {
      console.error("Error getting product by ID: ", error);
      throw error;
    }
  }

 editProduct =  async (product,id) =>{
    try {
      
      await setDoc(doc(this.collection,id), product);
    
    } catch (error) {
      console.log("error on edit product" ,error)
    }

  }

  deleteProduct = async(id)=>{
    try {
      const productRef=doc(this.collection,id);
      await deleteDoc(productRef);
      return 'deleted';
    } catch (error) {
      console.log('Erro ao deletar o produto',error);
    }
  }

}




    

const products = new product();
export default products;
