import { TextInput } from "react-native";
import { styles } from "./style";

interface Propsinput {
  placeHolder: string;
  typeInput?: boolean;
  valueinput: string;
  handleFunctionInput: (value: string) => void;
}

export const TextInputField = ({
  placeHolder,
  typeInput,
  valueinput,
  handleFunctionInput,
}: Propsinput) => {
  return (
    <TextInput
      onChangeText={handleFunctionInput}
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#000000"
      secureTextEntry={typeInput}
    />
  );
};
