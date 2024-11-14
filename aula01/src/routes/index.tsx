import { NavigationContainer } from "@react-navigation/native";
import { TabRouters } from "./BottonTabs";
import { StackRouters } from "./StackRouters";

export const Routers = () => {
  return (
    <NavigationContainer>
      {/* <TabRouters /> */}
      <StackRouters />
    </NavigationContainer>
  );
};
