import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { dataAPI } from "../../Mock/Data";
import { string } from "yup";

export const HomeV1 = () => {
  return (
    <FlatList
      data={dataAPI}
      keyExtractor={(dados) => dados.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.boxCard}>
            <View style={styles.boxInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.age}>{item.age}</Text>
            </View>
            <Image
              style={styles.avatar}
              source={
                typeof item.image === "string"
                  ? { uri: item.image }
                  : item.image
              }
              alt="Avatar de perfil"
            />
          </View>
        </View>
      )}
    />
  );
};
