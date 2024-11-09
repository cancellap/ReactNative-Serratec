import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { PropsButton } from "./type";

export const ButtonComp = ({
  title,
  propsBackgroudColor,
  handleFunction,
}: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.5}
      style={[
        styles.styleButton,
        {
          //cor default caso o props nao seja passada
          backgroundColor: propsBackgroudColor ? propsBackgroudColor : "#8697",
        },
      ]}
    >
      <Text style={styles.estiloTexto}>{title}</Text>
    </TouchableOpacity>
  );
};
