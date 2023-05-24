import { Center, Spinner } from "native-base";

export function Loading() {

  return (
    <Center flex={1} bg='red.500'>
      <Spinner color='green' />
    </Center>
  )
}