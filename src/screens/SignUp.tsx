import { ScrollView, VStack, Image, Center, Text, Heading, HStack, Icon } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import dogsImage from '@assets/dogs.png'
import { Button } from "@components/Button";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

interface FormDataProps {
  name: string
  email: string
  password: string
  password_confirm: string

}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().required('E-mail obrigatório.').email('Email inválido.'),
  password: yup.string().required('Senha obrigatória.').min(6, 'A senha deve ter no mínimo 6 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'A senha de confirmação não confere.')
})

export function SignUp() {

  const [isLoading, setIsLoading] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(schema)
  })
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }


  async function handleSignUp({ email, password, name }: FormDataProps) {

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

          {/* <Image
            source={dogsImage}
            alt="dogs"
            resizeMode="contain"
            mt={16}
          /> */}
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' fontFamily='heading' my={8}>
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />



          <Controller
            control={control}
            name="email"
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

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />


          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
          />
        </Center>

        <Center mt={12}>
          <Button
            title="Voltar para o login"
            variant='outline'
            onPress={handleGoBack}
          />
        </Center>

      </VStack>
    </ScrollView>
  )
}