import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Settings = () => {
  const navigate = useNavigation();

  const toProfile = () => {
    navigate.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela Settings</Text>
        <TouchableOpacity>
          <Text style={styles.textNavigate} onPress={toProfile}>
            Navegar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
