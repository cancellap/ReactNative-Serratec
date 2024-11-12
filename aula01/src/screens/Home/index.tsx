import { FlatList, Text, View } from "react-native";
import { styles } from "./style";

export const Home = () => {
  const dataAPI = [
    {
      id: 1,
      name: "João",
      age: 25,
    },
    {
      id: 2,
      name: "Maria",
      age: 30,
    },
    {
      id: 3,
      name: "Pedro",
      age: 28,
    },
    {
      id: 4,
      name: "Pedro",
      age: 28,
    },
    {
      id: 5,
      name: "Pedro",
      age: 28,
    },
    {
      id: 6,
      name: "Pedro",
      age: 28,
    },
    {
      id: 7,
      name: "Pedro",
      age: 28,
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Text style={styles.estiloTexto}>
        Home
      </Text> */}

      <FlatList
        horizontal={true}
        data={dataAPI}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.estiloTexto}>{item.name}</Text>
            <Text style={styles.estiloTexto}>{item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};
