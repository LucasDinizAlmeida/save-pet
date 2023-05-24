import { Button as NativeBaseButton, IButtonProps, Text, Icon, HStack, Box } from "native-base"
import { AntDesign } from '@expo/vector-icons';

interface Props extends IButtonProps {
  title: string
  loginType?: 'google' | 'apple1'
  variant?: 'solid' | 'outline'
}

export function Button({ title, loginType = 'google', variant = 'solid', ...rest }: Props) {

  return (
    <NativeBaseButton
      w="full"
      maxH={14}
      flex={1}
      leftIcon={
        <Icon
          as={AntDesign}
          name={loginType}
          color={loginType === 'google' ? 'red.500' : 'yellow.500'}
          size={30}
        />
      }
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