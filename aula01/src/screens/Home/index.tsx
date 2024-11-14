import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const navigate = useNavigation();

  const toSettings = () => {
    navigate.navigate("Settings");
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela Home</Text>
        <TouchableOpacity>
          <Text style={styles.textNavigate} onPress={toSettings}>
            Navegar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
