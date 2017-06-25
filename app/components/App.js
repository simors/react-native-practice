/**
 * Created by yangyang on 2017/6/23.
 */
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from './Home'
import Mine from './Mine'

const TabContainer = TabNavigator({
  Main: {screen: Home},
  Mine: {screen: Mine}
}, {
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#3e9ce9',
    inactiveTintColor: '#999999',
    showIcon: true,
    style: {
      backgroundColor: '#fff'
    },
    indicatorStyle: {
      opacity: 0
    },
    tabStyle: {
      padding: 0
    }
  }
})

const App = StackNavigator({
  Home: {
    screen: TabContainer,
    navigationOptions: {
      headerLeft: null
    }
  },
}, {
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#3e9ce9'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20
    },
    headerTintColor: '#fff'
  }
})

export default App