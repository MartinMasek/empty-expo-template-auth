import * as routesConst from './constants'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from '../screen/Main';
import Detail from '../screen/Detail';

const mainRoutes = {
    // We don't use routes constant for this because we don't want
    // any code to call to this helper game navigation
    [routesConst.HOME]: Main,
    [routesConst.DETAIL]: Detail
}

const mainRoutesOptions = {
    initialRouteName: routesConst.HOME,
    // defaultNavigationOptions: ({ navigation }) => {
    //     return {
    //         header: null,
    //         gesturesEnabled: false // We don't want swipe back to the store from the game,
    //     }
    // }
}

export default createAppContainer(createStackNavigator(mainRoutes, mainRoutesOptions))