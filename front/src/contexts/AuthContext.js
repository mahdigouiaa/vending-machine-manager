import { createContext, useState } from "react"; // ✅ on importe les outils React

// ✅ On crée le contexte (la boîte vide partagée dans l'app)
export const AuthContext = createContext();

// ✅ On crée un composant Provider (le truc qui va "entourer" toute l'app)
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // l'état partagé

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children} {/* ✅ tout ce que tu entoures pourra accéder à isLoggedIn */}
    </AuthContext.Provider>
  );
}
