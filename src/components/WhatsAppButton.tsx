import { Button as NativeBaseButton, IButtonProps, Text, Icon, HStack, Box } from "native-base"
import { FontAwesome } from '@expo/vector-icons';

interface Props extends IButtonProps {
  title: string
}

export function WhatsAppButton({ title, ...rest }: Props) {

  return (
    <NativeBaseButton
      w="full"
      maxH={14}
      flex={1}
      leftIcon={
        <Icon
          as={FontAwesome}
          name='whatsapp'
          color='white'
          size={30}
        />
      }
      rounded='lg'
      bg='green.500'
      borderWidth={1}
      borderColor='green.500'
      {...rest}
    >

      <Text
        color='white'
        fontFamily='heading'
        fontSize='xl'

      >
        {title}
      </Text>

    </NativeBaseButton >
  )
}