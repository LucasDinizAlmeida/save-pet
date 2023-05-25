import { Center, Heading } from "native-base";

interface Props {
  title: string
}

export function ProfileHeader({ title }: Props) {

  return (
    <Center bg='red.500' pb={6} pt={16}>
      <Heading color='gray.100' fontSize='xl' fontFamily='heading'>
        {title}
      </Heading>
    </Center>
  )
}