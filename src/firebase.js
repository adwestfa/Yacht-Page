// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseConfig = {
    apiKey: "AIzaSyBTZQQbogVThakx4aP44QDjvCw_BLFFz6E",
    authDomain: "yacht-page.firebaseapp.com",
    projectId: "yacht-page",
    storageBucket: "yacht-page.appspot.com",
    messagingSenderId: "826662020691",
    appId: "1:826662020691:web:49d86f673e49c932e948a6",
    measurementId: "G-N7VRVYT14H",
    databaseURL: "https://yacht-page-default-rtdb.europe-west1.firebasedatabase.app",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



