import { Box, Text } from "native-base";

interface Props {
  characteristics: string
  value: string
  mx?: number
}

export function PetCharacteristics({ characteristics, value, mx }: Props) {

  return (
    <Box borderWidth={1} rounded='lg' p={2} flex={1} alignItems='center' mx={mx ?? mx} overflow='hidden'>
      <Text color='darkBlue.500' fontSize='lg' fontFamily='body'>
        {value}
      </Text>

      <Text color='darkBlue.500' fontSize='lg' fontFamily='heading'>
        {characteristics}
      </Text>
    </Box>
  )
}