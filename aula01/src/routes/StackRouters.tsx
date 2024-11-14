import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { HomeV1 } from "../screens/HomeV1";
import { Profile } from "../screens/profile";
import { Settings } from "../screens/settings";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export const StackRouters = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
