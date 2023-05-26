import { HStack, Heading, Text, VStack, Checkbox, Box } from "native-base";
import { TouchableOpacity } from "react-native";

interface Props {
  title: string
}

export function ConfigNotifications({ title }: Props) {

  return (
    <VStack w='full' mt={10}>
      <Heading mb={4} fontFamily='heading' fontSize='xl' color='darkBlue.500'>
        {title}
      </Heading>

      <HStack w='full' alignItems='center' justifyContent='space-between'>
        <TouchableOpacity>
          <Box borderWidth={1} borderColor='red.500' bg='red.500' py={1} px={12} rounded='lg'>
            <Text fontFamily='heading' fontSize='xl' color='yellow.500'>
              ES
            </Text>
          </Box>
        </TouchableOpacity>

        <Checkbox
          value="test"
          size='lg'
          accessibilityLabel="This is a dummy checkbox"
          defaultIsChecked
          colorScheme="green"
        />
      </HStack>
    </VStack>
  )
}