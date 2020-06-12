import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '../screens/welcomeScreen';

const AppNavigation = createStackNavigator(
  {
      WelcomeScreen: WelcomeScreen
  },
  {
    initialRouteName: 'WelcomeScreen',
    defaultNavigationOptions: {
      headerShown: null,
    },
  },
);

export default createAppContainer(AppNavigation);
