import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCZ_QCV6Z7XufmwebdNaBdT0AaLFi4g1ZM",
    authDomain: "telempathy-778ef.firebaseapp.com",
    databaseURL: "https://telempathy-778ef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "telempathy-778ef",
    storageBucket: "telempathy-778ef.appspot.com",
    messagingSenderId: "1047132149998",
    appId: "1:1047132149998:web:5581315f8a45518ccebbff",
    measurementId: "G-GY1N5JX9JS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);