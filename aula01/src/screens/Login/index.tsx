import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./style";
import serratec from "../../assets/serratec.png";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextInput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigation();

  const handleLogin = () => {
    // Alert.alert("login");
    // console.log(`infos cadastro ${email}, ${password}`);
    navigate.navigate("Home")
  };

  const handleEmail = (v: string) => setEmail(v);
  const handlepassword = (v: string) => setPassword(v);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.boxForms}>
          <Image style={styles.image} source={serratec} alt="Barreira Vasco" />
          <Text style={styles.estiloTexto}>Login</Text>

          <TextInputField
            placeHolder="Digite seu email"
            valueInput={email}
            hadleFunctionInput={handleEmail}
            typeIcon="person"
          />

          <TextInputField
            placeHolder="Digite sua senha"
            valueInput={password}
            hadleFunctionInput={handlepassword}
            typeInput={true}
            typeIcon="password"
          />
          <ButtonTypes
            title={"Entrar"}
            handleFunction={handleLogin}
            propsBackgroundColor="#7AB2D3"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
