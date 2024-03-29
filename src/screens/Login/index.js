import { useState, useContext } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  LoginContainer,
  TopContainer,
  SignUpButton,
  Title,
  Text,
} from "./styles";

import Logo from "../../components/Logo";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import DropAnimation from "../../components/DropAnimation";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";

import AuthContext from "../../contexts/auth";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigation = useNavigation();

  const height = Dimensions.get("window").height;

  const { signIn } = useContext(AuthContext);

  function handleSignIn() {
    signIn(emailInput, passwordInput);
  }

  return (
    <KeyboardAvoidingWrapper>
      <Container>
        <LoginContainer>
          <DropAnimation>
            <TopContainer>
              <Logo />
              <Title>Notes.io</Title>
            </TopContainer>
          </DropAnimation>
          <TextInput
            placeholder="Email..."
            onChangeText={(emailInput) => setEmailInput(emailInput)}
          />

          <TextInput
            placeholder="Password..."
            onChangeText={(passwordInput) => setPasswordInput(passwordInput)}
            password={true}
          />

          <Button onPress={handleSignIn} TextButton="Sign In" />
          <DropAnimation isDelay={{ delay: 200 }}>
            <SignUpButton activeOpacity={1}>
              <Text>Don't have an account? </Text>
              <SignUpButton
                onPress={() => {
                  navigation.replace("Register");
                }}
                activeOpacity={0.5}
              >
                <Text isButton>Sign Up</Text>
              </SignUpButton>
            </SignUpButton>
          </DropAnimation>
        </LoginContainer>
      </Container>
    </KeyboardAvoidingWrapper>
  );
};

export default Login;
