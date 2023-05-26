import { HStack, Heading, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

export function Filter() {

  return (
    <HStack py={10} px={8} alignItems='center' bg='red.500'>
      <Heading color='yellow.500' fontFamily='heading' fontSize='lg'>
        DOG
      </Heading>
      <Icon
        as={Entypo}
        name="chevron-thin-right"
        color='yellow.500'
        mx={3}
      />

      <Heading color='yellow.500' fontFamily='heading' fontSize='lg'>
        ES
      </Heading>
      <Icon
        as={Entypo}
        name="chevron-thin-right"
        color='yellow.500'
        mx={3}
      />

      <Heading color='yellow.500' fontFamily='heading' fontSize='lg'>
        Vitória
      </Heading>
      <Icon
        as={Entypo}
        name="chevron-thin-right"
        color='yellow.500'
        mx={3}
      />
    </HStack>
  )
}