import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {

  const { colors } = useTheme()


  const theme = DefaultTheme
  theme.colors.background = colors.red[500]



  return (
    <Box flex={1} bg='red.500'>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}