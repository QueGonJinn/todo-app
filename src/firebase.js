// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDTfv7rxsUEDvO9ZcB40VONq9ClI2kk6lU',
	authDomain: 'todo-app-8ec60.firebaseapp.com',
	projectId: 'todo-app-8ec60',
	storageBucket: 'todo-app-8ec60.appspot.com',
	messagingSenderId: '930235298448',
	appId: '1:930235298448:web:75496ff0116bdab0ac9e15',
	measurementId: 'G-46SE9FKCN4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
