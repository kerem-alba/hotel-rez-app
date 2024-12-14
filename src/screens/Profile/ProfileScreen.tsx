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
import { loginWithEmail } from "../../services/firebaseAuthenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "firebase/auth";
import { header } from "../../utils/constants";
import { useUserStore } from "../../stores/userStore";

type NavigationProps = StackNavigationProp<RootStackParamList, "Profile">;

interface UserWithToken extends User {
  stsTokenManager: {
    accessToken: string;
    expirationTime: string;
    refreshToken: string;
  };
}

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await loginWithEmail(email, password);
      console.log("User logged in:", user);

      await handleTokens(user);
      await setUserId(user);

      navigation.navigate("Main", { screen: "Hotels" });
    } catch (error) {
      console.error("Email ya da şifre yanlış");
    }
  };

  const handleTokens = async (user: User) => {
    const { stsTokenManager } = user as UserWithToken;
    await AsyncStorage.setItem("accessToken", stsTokenManager.accessToken);
    header.accessToken = stsTokenManager.accessToken;
  };

  const setUserId = async (user: User) => {
    await AsyncStorage.setItem("userId", user.uid);
    useUserStore.getState().setUserId(user.uid);
  };

  return (
    <LinearGradient style={styles.container} colors={[PRIMARY_COLOR, "transparent"]} end={[0.5, 1]}>
      <View style={styles.formContainer}>
        <CompanyName />
        <Formik
          initialValues={{ email: "admin@admin.com", password: "password" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values.email, values.password)}
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
