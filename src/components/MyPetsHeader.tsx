import { TouchableOpacity } from "react-native";
import { HStack, Heading, Icon, VStack, Text, Box } from "native-base";
import { AntDesign } from '@expo/vector-icons';

interface Props {
  petsCount: number
}


export function MyPetsHeader({ petsCount }: Props) {

  return (
    <Box>
      <HStack px={8} pt={75} pb={10} alignItems='center' justifyContent='space-between' bg='red.500'>
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

      <VStack px={8} bg='red.500'>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='white' fontSize='lg' fontFamily='heading'>
            Pets
          </Heading>

          <Text color='white' fontSize='md'>
            {petsCount}
          </Text>
        </HStack>
      </VStack>
    </Box >
  )
}