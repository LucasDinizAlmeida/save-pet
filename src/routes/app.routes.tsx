import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { Home } from "@screens/Home"
import { Profile } from "@screens/Profile"
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'

// import HomeSvg from '@assets/home.svg'
// import HistorySvg from '@assets/history.svg'
// import ProfileSvg from '@assets/profile.svg'
import { Icon, useTheme } from "native-base"
import { Platform } from "react-native"
import { MyPets } from "@screens/MyPets"
import { PetDetails } from "@screens/PetDetails"

type AppRoutes = {
  home: undefined
  petDetails: { exerciseId: string }
  myPets: undefined
  profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.red[900],
      tabBarInactiveTintColor: colors.gray[100],
      tabBarStyle: {
        backgroundColor: colors.red[500],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialIcons}
              name="home"
              color={color}
              size={30}
            />
          )
        }}
      />
      <Screen
        name="myPets"
        component={MyPets}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialIcons}
              name="pets"
              color={color}
              size={30}
            />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={FontAwesome}
              name="user"
              color={color}
              size={30}
            />
          )
        }}
      />
      <Screen
        name="petDetails"
        component={PetDetails}
        options={{
          tabBarButton: () => null
        }}
      />
    </Navigator>
  )
}