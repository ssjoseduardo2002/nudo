import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * ADN de Conexión NUDO
 * Estos tokens son las llaves de acceso a nuestro búnker de datos.
 */
const firebaseConfig = {
  apiKey: "AIzaSyAa3IMbT_heAMJrBHj9GnT-U1A969tRqvA",
  authDomain: "nudo-contratos.firebaseapp.com",
  projectId: "nudo-contratos",
  storageBucket: "nudo-contratos.firebasestorage.app",
  messagingSenderId: "1055302143890",
  appId: "1:1055302143890:web:5c204354ccbf96b5917b4b"
};

// 1. Inicializamos la chispa del motor
export const app = initializeApp(firebaseConfig);

// 2. Exportamos el servicio de Autenticación (Llaves de los socios)
export const auth = getAuth(app);

// 3. Exportamos la Base de Datos (El archivo de contratos)
export const db = getFirestore(app);

// 4. Exportamos el Almacenamiento (La bóveda de archivos blindados)
export const storage = getStorage(app);