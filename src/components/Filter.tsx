import { HStack, Heading, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons'

export function Filter() {

  return (
    <HStack mt={10} px={8} alignItems='center'>
      <Heading color='white' fontFamily='heading' fontSize='lg'>
        DOG
      </Heading>
      <Icon
        as={Entypo}
        name="chevron-thin-right"
        color='white'
        mx={3}
      />

      <Heading color='white' fontFamily='heading' fontSize='lg'>
        ES
      </Heading>
      <Icon
        as={Entypo}
        name="chevron-thin-right"
        color='white'
        mx={3}
      />

      <Heading color='white' fontFamily='heading' fontSize='lg'>
        Vitória
      </Heading>
      <Icon
        as={Entypo}
        name="chevron-thin-right"
        color='white'
        mx={3}
      />
    </HStack>
  )
}