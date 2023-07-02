import { ScrollView, VStack, Image, Center, Text, Heading, HStack, Icon } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import dogsImage from '@assets/dogs.png'
import { Button } from "@components/Button";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

interface FormData {
  email: string
  password: string
}

export function SignIn() {

  const [isLoading, setIsLoading] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  async function handleSignIn({ email, password }: FormData) {

  }


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16} bg='red.500'>

        <Center mt={24}>
          <HStack>
            <Icon
              as={FontAwesome5}
              name="paw"
              color='yellow.500'
              size={38}
            />
            <Heading color='white' fontFamily='heading' fontSize='3xl' ml={2} mb={5}>
              Save Pet
            </Heading>
          </HStack>

          <Text color='gray.100' fontSize='md'>
            Encontre o pet ideal para você
          </Text>

          <Image
            source={dogsImage}
            alt="dogs"
            resizeMode="contain"
            mt={16}
          />
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' fontFamily='heading' my={8}>
            Acesse a sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'E-mail obrigatório!'
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Senha obrigatória!'
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button
            title="Acessar"
            isLoading={isLoading}
            onPress={handleSubmit(handleSignIn)}
          />
        </Center>

        <Center mt={14}>
          <Text color='gray.100' fontSize='sm' fontFamily='body' mb={3}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant='outline'
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}