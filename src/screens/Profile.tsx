import { TouchableOpacity } from "react-native";
import { Center, ScrollView, VStack, Text, Heading } from "native-base";




import { ProfileHeader } from "@components/ProfileHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { ConfigNotifications } from "@components/ConfigNotifications";

const PHOTO_SIZE = 33


export function Profile() {


  return (
    <VStack flex={1} backgroundColor='white'>
      <ProfileHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>

          <UserPhoto
            source={{ uri: 'https://avatars.githubusercontent.com/u/92605557?v=4' }}
            alt="Foto de perfil"
            size={33}
          />

          <ConfigNotifications title="Receber notificação por estado:" />
          <ConfigNotifications title="Receber notificação por cidade:" />

          {/* <TouchableOpacity >
            <Text color='green.500' fontWeight='bold' fontSize='md' mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>



          <Heading color='gray.200' fontSize='md' mb={2} mt={12} alignSelf='flex-start' fontFamily='heading'>
            Alterar senha
          </Heading>


          <Button
            title="Atualizar"
            mt={4}
          /> */}
        </Center>
      </ScrollView>
    </VStack>
  )
}