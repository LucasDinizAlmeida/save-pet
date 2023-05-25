import { PetCard } from "@components/PetCard";
import { Loading } from "@components/Loading";
import { PetDTO } from "@dtos/PetDTO";
import { VStack, Text, HStack, Heading, FlatList, Center, Icon } from "native-base";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export function MyPets() {

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

  return (
    <VStack flex={1}>

      <HStack px={8} mt={75} alignItems='center' justifyContent='space-between'>
        <Heading color='white' fontFamily='heading' fontSize='2xl'>
          Meus Pets:
        </Heading>

        <TouchableOpacity>
          <Icon
            as={AntDesign}
            name="plus"
            size={35}
            color='white'

          />
        </TouchableOpacity>
      </HStack>

      {
        isLoading ?
          <Loading /> :
          <>

            <VStack px={8} mt={10}>
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
                  onPress={() => { }}
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