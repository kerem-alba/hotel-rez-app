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
import { LoginSchema } from "../../utils/LoginSchema";
import Button from "../../components/Button/Button";

type NavigationProps = StackNavigationProp<RootStackParamList, "Profile">;

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleLogin = (email: string, password: string) => {
    console.log("login", email);
  };

  return (
    <LinearGradient style={styles.container} colors={[PRIMARY_COLOR, "transparent"]} end={[0.5, 1]}>
      <View style={styles.formContainer}>
        <CompanyName />
        <Formik initialValues={{ email: "", password: "" }} validationSchema={LoginSchema} onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
            <>
              <Input
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                errorText={touched.email && errors.email ? errors.email : ""}
              />
              <Input
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                errorText={touched.password && errors.password ? errors.password : ""}
              />
              <Button onPress={handleSubmit} text="Giriş Yap" disabled={false} />
              <View style={styles.dividerContainer}>
                <View style={styles.horizontalDivider} />
                <Text style={styles.text}> YA DA </Text>
                <View style={styles.horizontalDivider} />
              </View>
              <TouchableOpacity style={styles.googleSignIn}>
                <Image source={require("../../../assets/google-icon.png")} style={styles.icon} />
                <Text style={styles.text}> Google ile devam et</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.text}>Hesabın yok mu? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>Kayıt Ol</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
