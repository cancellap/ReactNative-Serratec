import { NavigationContainer } from "@react-navigation/native";
import { TabRouters } from "./BottonTabs";
import { StackRouters } from "./StackRouters";
import { AuthProvider } from "../hooks/useAuth";

export const Routers = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <TabRouters /> */}
        <StackRouters />
      </AuthProvider>
    </NavigationContainer>
  );
};
