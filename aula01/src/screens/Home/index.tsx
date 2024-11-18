import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

export const Home = () => {
  const navigate = useNavigation();

  const handleLogin = () => {
    navigate.navigate("TabsProfile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela home</Text>
        <TouchableOpacity>
          <Text style={styles.textNavigate} onPress={handleLogin}>
            Navegar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
