import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../screens/Login";
import { Profile } from "../screens/profile";
import { Settings } from "../screens/settings";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
