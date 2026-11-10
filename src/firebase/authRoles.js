import { doc, getDoc } from "firebase/firestore";
import { db } from "./config"; 

// verifica si un usuario es administrador
export const verificarRolAdmin = async (uid) => {
  try {
    const docRef = doc(db, "usuarios", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
   
      return data.rol === 'admin';
    } else {
     
      return false;
    }
  } catch (error) {
    console.error("Error al verificar el rol:", error);
    return false;
  }
};