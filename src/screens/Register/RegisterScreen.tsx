import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { PRIMARY_COLOR } from "../../utils/colors";
import { Formik } from "formik";
import CompanyName from "../../components/CompanyName/CompanyName";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput";
import { RegisterSchema } from "../../utils/RegisterSchema";
import Button from "../../components/Button/Button";
import { registerWithEmail } from "../../services/firebaseAuthenticationService";
import BackAndTitleHeader from "../../components/Headers/BackAndTitleHeader";

type NavigationProps = StackNavigationProp<RootStackParamList, "Profile">;

export default function RegisterScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleRegister = async (email: string, password: string) => {
    try {
      const user = await registerWithEmail(email, password);
      console.log("User registered:", user);
      navigation.navigate("Main", { screen: "Hotels" });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <LinearGradient style={styles.container} colors={[PRIMARY_COLOR, "transparent"]} end={[0.5, 1]}>
      <BackAndTitleHeader title="Kayıt ol" />

      <View style={styles.formContainer}>
        <CompanyName />
        <Formik
          initialValues={{ email: "", password: "", passwordConfirmation: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => handleRegister(values.email, values.password)}
        >
          {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
            <>
              <Input
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                errorText={touched.email && errors.email ? errors.email : ""}
              />
              <PasswordInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                errorText={touched.password && errors.password ? errors.password : ""}
              />
              <PasswordInput
                placeholder="Password Confirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange("passwordConfirmation")}
                onBlur={handleBlur("passwordConfirmation")}
                errorText={touched.passwordConfirmation && errors.passwordConfirmation ? errors.passwordConfirmation : ""}
              />

              <Button onPress={handleSubmit} text="Kayıt Ol" disabled={false} />
            </>
          )}
        </Formik>
      </View>
    </LinearGradient>
  );
}
