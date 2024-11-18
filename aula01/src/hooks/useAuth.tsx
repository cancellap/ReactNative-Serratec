import { useContext, createContext, useState } from "react";

type PropsContext = {
  email: string;
  setEmail: (value: string) => void;
};

const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
});
export const AuthProvidaer = ({ children }: any) => {
  const [email, setEmail] = useState<string>("");

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
