import { Button as NativeBaseButton, IButtonProps, Text, Icon, HStack, Box } from "native-base"
import { AntDesign } from '@expo/vector-icons';

interface Props extends IButtonProps {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: Props) {

  return (
    <NativeBaseButton
      w="full"
      maxH={14}
      flex={1}
      rounded='sm'
      bg={variant === 'outline' ? 'transparent' : 'yellow.500'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor='yellow.500'
      _pressed={{
        bg: variant === 'outline' ? 'red.700' : 'yellow.600'
      }}
      {...rest}
    >

      <Text
        color={variant === 'outline' ? 'yellow.500' : 'red.500'}
        fontFamily='heading'
        fontSize='xl'

      >
        {title}
      </Text>

    </NativeBaseButton >
  )
}