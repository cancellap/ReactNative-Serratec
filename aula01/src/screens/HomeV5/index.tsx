import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { dataAPI } from "../../Mock/Data";
import { styles } from "./style";

export const HomeV5 = () => {
  return <CardApi lista={dataAPI} name="Identificação" />;
};

interface PropsApi {
  id: number;
  name: string;
  age: number;
  image: ImageSourcePropType;
}

interface PropsArray {
  lista: PropsApi[];
}

interface NameProps {
  name: string;
}

type AllProps = PropsArray & NameProps;

const CardApi = ({ name, lista }: AllProps) => {
  return (
    <FlatList
      // horizontal={true} Deixa os cards na horizontal
      data={lista}
      keyExtractor={(dados) => dados.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.boxCard}>
            <Text>Cartão de: {name}</Text>
            <View style={styles.boxInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.age}>{item.age}</Text>
            </View>
            <Image
              style={styles.avatar}
              source={item.image}
              alt="Avatar de perfil"
            />
          </View>
        </View>
      )}
    />
  );
};
