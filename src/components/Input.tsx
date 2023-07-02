import { Input as NativeBaseInput, IInputProps, FormControl, Text } from "native-base"

interface InputProps extends IInputProps {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {

  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb='4'>
      <NativeBaseInput
        bg='red.900'
        h={14}
        px={4}
        borderWidth={0}
        fontSize='md'
        color='white'
        fontFamily='body'
        placeholderTextColor='yellow.500'
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'green.500'
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        <Text color='yellow.500'>
          {errorMessage}
        </Text>
      </FormControl.ErrorMessage>
    </FormControl>
  )
}