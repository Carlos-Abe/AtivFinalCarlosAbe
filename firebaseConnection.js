import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDs4zVycbOY0Yoat-vqNKahWEzSFt73noc",
  authDomain: "atvfinalcarlosabe.firebaseapp.com",
  projectId: "atvfinalcarlosabe",
  storageBucket: "atvfinalcarlosabe.firebasestorage.app",
  messagingSenderId: "1087840896747",
  appId: "1:1087840896747:web:1d73a496887217a8d9a0ae"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app,analytics }; 
import { getFirestore } from 'firebase/firestore';
export const db = getFirestore(app);
