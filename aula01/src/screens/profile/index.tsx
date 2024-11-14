
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const Profile = () => {

  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela Profile</Text>
        <TouchableOpacity>
          <Text style={styles.textNavigate}>Navegar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}