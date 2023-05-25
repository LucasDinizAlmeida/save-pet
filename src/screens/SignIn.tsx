import { ScrollView, VStack, Image, Center, Text, Heading, HStack, Icon } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import BackgroundImage from '@assets/background.png'
import dogsImage from '@assets/dogs.png'
import { Button } from "@components/Button";
import { useState } from "react";
import { Platform } from "react-native";

export function SignIn() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>

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
            mt={20}
          />
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' fontFamily='heading' my={8}>
            Entre com uma conta Google
          </Heading>

          <Button
            title="Acessar"
            isLoading={isLoading}
          />
          {
            Platform.OS === 'ios' &&
            <>
              <Heading color='gray.100' fontSize='xl' fontFamily='heading' my={8}>
                Entre com uma conta Apple
              </Heading>

              <Button
                title="Acessar"
                loginType="apple1"
                variant="outline"
                isLoading={isLoading}
              />
            </>
          }
        </Center>
      </VStack>
    </ScrollView>
  )
}