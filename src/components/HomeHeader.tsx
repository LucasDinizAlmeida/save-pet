import { HStack, VStack, Text, Heading, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'

export function HomeHeader() {


  return (
    <HStack bg='red.500' pt={16} px={8} alignItems='center'>
      <UserPhoto
        source={{ uri: 'https://avatars.githubusercontent.com/u/92605557?v=4' }}
        size={16}
        alt="foto de perfil"
      />
      <VStack flex={1} ml={3}>
        <Text color='gray.100' fontSize='md'>
          Olá,
        </Text>

        <Heading color='white' fontSize='md' fontFamily='heading'>
          Lucas Diniz
        </Heading>
      </VStack>

      <TouchableOpacity
      // onPress={signOut}
      >
        <Icon
          as={MaterialIcons}
          name="logout"
          color='gray.100'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}