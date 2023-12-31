import { PetCard } from "@components/PetCard";
import { HomeHeader } from "@components/HomeHeader";
import { Loading } from "@components/Loading";
import { PetDTO } from "@dtos/PetDTO";
import { VStack, Text, HStack, Heading, FlatList, Center } from "native-base";
import { useState } from "react";
import { Filter } from "@components/Filter";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [pets, setPets] = useState<PetDTO[]>([
    {
      id: '1',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Chiquinha',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
    {
      id: '2',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Frajola',
      size: 'AVARAGE',
      type: 'CAT',
      userId: 'user01',
    },
    {
      id: '3',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Julim',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
    {
      id: '4',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Julim',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
    {
      id: '5',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Julim',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
    {
      id: '6',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Julim',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
    {
      id: '7',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Julim',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
    {
      id: '8',
      age: 'ADULT',
      city: 'Vitória',
      state: 'ES',
      description: 'Cãozinho muito enjoado',
      name: 'Julim',
      size: 'AVARAGE',
      type: 'DOG',
      userId: 'user01',
    },
  ])

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const router = useRoute()
  const params = router.params

  function handleOpenPetDetails() {
    navigation.navigate('petDetails', { exerciseId: '1' })
  }

  return (

    <VStack flex={1}>
      <HomeHeader />

      <Filter />

      {
        isLoading ?
          <Loading /> :
          <>

            <VStack px={8} bg='red.500'>
              <HStack justifyContent='space-between' mb={5}>
                <Heading color='white' fontSize='lg' fontFamily='heading'>
                  Pets
                </Heading>

                <Text color='white' fontSize='md'>
                  {pets.length}
                </Text>
              </HStack>
            </VStack>

            <FlatList
              data={pets}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <PetCard
                  onPress={handleOpenPetDetails}
                  data={item}
                />
              )}
              showsVerticalScrollIndicator={false}
              _contentContainerStyle={{ paddingBottom: 20, paddingTop: 10, marginBottom: 20, paddingX: 8, backgroundColor: 'white' }}
            />
          </>

      }
    </VStack>
  )
}