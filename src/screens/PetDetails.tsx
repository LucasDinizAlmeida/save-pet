import { Heading, Text, VStack, Image, HStack, Box, ScrollView, Icon, Button } from "native-base";
import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import { PetCharacteristics } from "@components/PetCharacteristics";
import { WhatsAppButton } from "@components/WhatsAppButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import React from "react";

const exerciseImage = 'https://s.yimg.com/ny/api/res/1.2/YctIFmaSWGhqQQJOZEkAKg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTc0NDtoPTc0NA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/bed5b973d2ea4dc5627d6c77f6a5daca'


export function PetDetails() {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <Box
        position='relative'
        w='full'
        h='2/5'
      >
        <Button
          onPress={handleGoBack}
          zIndex={10}
          position='absolute'
          top={12}
          left={4}
          bg='transparent'
          _pressed={{
            bg: 'transparent'
          }}
        >
          <Icon
            as={FontAwesome}
            name="chevron-left"
            color='red.500'
            size={45}
          />
        </Button>

        <Image
          source={{ uri: exerciseImage }}
          alt="imagem do exercício"
          flex={1}
          resizeMode="cover"
        />
      </Box>




      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <VStack px={8} my={8}>
          <HStack>
            <Heading color='darkBlue.500' fontSize='3xl' fontFamily='heading' mb={5}>
              Alfredo
            </Heading>

            <Icon
              as={FontAwesome5}
              name="paw"
              color='darkBlue.500'
              size={38}
              ml={3}
            />
          </HStack>

          <Text color='darkBlue.500' fontSize='lg' fontFamily='body' mb={5}>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer companhia, uma bagunça mas também ama uma soneca.
          </Text>
        </VStack>

        <HStack px={8} w='full' alignItems='center' justifyContent='space-around'>
          <PetCharacteristics
            characteristics="Tipo"
            value="Cão"
          />
          <PetCharacteristics
            characteristics='Idade'
            value="Adulto"
            mx={2}
          />
          <PetCharacteristics
            characteristics="Porte"
            value="Pequeno"
          />
        </HStack>

        <Box px={8} flex={1} my={10} rounded='lg'>
          <WhatsAppButton title="Entrar em contato" />
        </Box>
      </ScrollView>
    </VStack>
  )
}