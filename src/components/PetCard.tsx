import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons'
import { PetDTO } from "@dtos/PetDTO";


const exerciseImage = 'https://s.yimg.com/ny/api/res/1.2/YctIFmaSWGhqQQJOZEkAKg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTc0NDtoPTc0NA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/bed5b973d2ea4dc5627d6c77f6a5daca'

interface Props extends TouchableOpacityProps {
  data: PetDTO
}

export function PetCard({ data: { name, description }, ...rest }: Props) {

  return (
    <TouchableOpacity
      {...rest}
    >
      <HStack bg='red.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
        <Image
          source={{ uri: exerciseImage }}
          alt="imagem do exercício"
          w={16}
          h={16}
          rounded='md'
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize='lg' color='yellow.500' fontFamily='heading'>
            Chiquinha
          </Heading>

          <Text fontSize='sm' color='gray.100' mt={1} numberOfLines={2}>
            {description}
          </Text>
        </VStack>


        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color='white'
        />
      </HStack>
    </TouchableOpacity>
  )
}