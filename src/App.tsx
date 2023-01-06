import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR-7nYiKbzuHeITL89ogHv0cZuZw_5_Xs",
  authDomain: "jelly-calc.firebaseapp.com",
  projectId: "jelly-calc",
  storageBucket: "jelly-calc.appspot.com",
  messagingSenderId: "341806017064",
  appId: "1:341806017064:web:87f6fcb30c0f6440df231d",
  measurementId: "G-QGPS8CDRC6",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
