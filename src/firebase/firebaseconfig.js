import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import conf from "./config";

const app = initializeApp(conf);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;