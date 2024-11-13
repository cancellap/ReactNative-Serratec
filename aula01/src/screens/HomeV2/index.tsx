import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";
import { dataAPI } from "../../Mock/Data";

export const HomeV2 = () => {
  return (
    <FlatList
      data={dataAPI}
      keyExtractor={(dados) => dados.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <CardApi data={item} />
        </View>
      )}
    />
  );
};

//no mesmo arquivo para fins educacionais

interface PropsApi {
  data: {
    name: string;
    age: number;
    image: ImageSourcePropType;
  };
}

const CardApi = ({ data }: PropsApi) => {
  return (
    <View style={styles.boxCard}>
      <View style={styles.boxInfo}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.age}>{data.age}</Text>
      </View>
      <Image style={styles.avatar} source={data.image} alt="Avatar de perfil" />
    </View>
  );
};
