import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { PageHome } from './assets/components/Pages/PageHome';
import { NavigationContainer } from "@react-navigation/native";

const Navigator = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator.Navigator screenOptions={{headerShown: false}}>
        <Navigator.Screen name='Home' component={PageHome} />
      </Navigator.Navigator>
    </NavigationContainer>
  )
}