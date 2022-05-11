// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCtHyfstg7sFfZwwxEBJPccelX8YcQ-87c',
    authDomain: 'test-app-aa475.firebaseapp.com',
    databaseURL: 'https://test-app-aa475-default-rtdb.firebaseio.com',
    projectId: 'test-app-aa475',
    storageBucket: 'test-app-aa475.appspot.com',
    messagingSenderId: '321456372748',
    appId: '1:321456372748:web:70d51977c7a26fff47c229',
    measurementId: 'G-7SVZNSDEM5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
