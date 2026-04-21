// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase (según lo que te dio Google)
const firebaseConfig = {
  apiKey: "AIzaSyAa3IMbT_heAMJrBHj9GnT-U1A969tRqvA",
  authDomain: "nudo-contratos.firebaseapp.com",
  projectId: "nudo-contratos",
  storageBucket: "nudo-contratos.firebasestorage.app",
  messagingSenderId: "1055302143890",
  appId: "1:1055302143890:web:5c204354ccbf96b5917b4b"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);

// Inicializa el servicio de autenticación y lo exporta para usarlo en otros componentes
export const auth = getAuth(app);