import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import conf from "./config";

const app = initializeApp(conf);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const analytics =  getAnalytics(app);
export {fireDB,auth,analytics } ;