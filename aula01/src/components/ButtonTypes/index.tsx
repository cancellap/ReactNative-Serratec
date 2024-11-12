import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string | number;
  propsBackgroundColor: string;
  handleFunction: () => void;
  //pick
  // PropsPick: Pick<Props1, "title">;
}

type Props1  = {
  title: string;
  title2: string;
};

type Props2 = {
  subTitle: string;
};

//intersection ou extends
type PropsAll = Props1 & Props2;
interface PropsAll2 extends Props1, Props2 {}

//pick: pegar uma propriedade de uma interface
type PropsPick = Pick<Props1, "title">;

//omit: retirar uma informacao de uma interface
type PropsOmit = Omit<Props1, "title2">;

//record: definindo todas propriedades de uma so vez
type PropsRecord = Record<"name" | "endereco", string>;

export const ButtonTypes = ({
  title,
  handleFunction,
  propsBackgroundColor,
}: PropsButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.styleButton,
        {
          backgroundColor: propsBackgroundColor
            ? propsBackgroundColor
            : "black",
        },
      ]}
      onPress={handleFunction}
    >
      <Text style={styles.estiloTexto}>{title}</Text>
    </TouchableOpacity>
  );
};
