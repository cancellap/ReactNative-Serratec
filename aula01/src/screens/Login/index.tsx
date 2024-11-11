import { Alert, Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./style";
import papai from "../../assets/pablo.png";
import fundo from "../../assets/fundoXp.jpg";
import { ButtonComp } from "../../components/ButtonComp";
import { ButtonTypes } from "../../components/ButtonTypes";

export const Login = () => {
  const handleLogin = () => {
    Alert.alert("login");
  };

  const handleRegister = () => {
    Alert.alert("cadastrar");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={papai} alt="Barreira Vasco" />
      <Text style={styles.estiloTexto}>Login</Text>
      <View style={styles.boxForms}>
        {/* <ButtonComp
          handleFunction={handleLogin}
          title="Login"
          propsBackgroudColor="#095f84"
        />
        <ButtonComp handleFunction={handleRegister} title="Cadastrar" /> */}
        <ButtonTypes title={"Entrar"} handleFunction={handleLogin} propsBackgroundColor="red"/>
      </View>
    </View>
  );
};
