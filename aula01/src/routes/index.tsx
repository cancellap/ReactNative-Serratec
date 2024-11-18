import { NavigationContainer } from "@react-navigation/native";
import { TabRouters } from "./BottonTabs";
import { StackRouters } from "./StackRouters";
import { AuthProvidaer } from "../hooks/useAuth";

export const Routers = () => {
  return (
    <NavigationContainer>
      <AuthProvidaer>
        {/* <TabRouters /> */}
        <StackRouters />
      </AuthProvidaer>
    </NavigationContainer>
  );
};
