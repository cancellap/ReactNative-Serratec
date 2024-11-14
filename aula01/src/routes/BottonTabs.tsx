import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Login } from "../screens/Login";
import { Profile } from "../screens/profile";
import { Settings } from "../screens/settings";
import { Home } from "../screens/Home";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, title: "" }}>
      <Tab.Screen
        name="TabsHome"
        component={Home}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>Home</Text>
              <Icon name="home" size={24} color="black" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TabsProfile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>Profile</Text>
              <Icon name="person" size={24} color="black" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TabsSettings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>Settings</Text>
              <Icon name="settings" size={24} color="black" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
